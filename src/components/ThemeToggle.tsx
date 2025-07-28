import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-glass bg-glass hover:bg-primary/10 hover:border-primary/20 hover:text-primary dark:hover:bg-secondary/50 dark:hover:border-glass dark:hover:text-foreground transition-all duration-300 relative overflow-hidden"
    >
      <div className="relative w-[1.2rem] h-[1.2rem]">
        {/* Sun Icon */}
        <Sun 
          className={`absolute inset-0 h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-in-out ${
            theme === "dark" 
              ? isHovered 
                ? "opacity-100 scale-100 rotate-0" 
                : "opacity-0 scale-75 rotate-90"
              : isHovered
                ? "opacity-0 scale-75 -rotate-90"
                : "opacity-100 scale-100 rotate-0"
          }`}
        />
        
        {/* Moon Icon */}
        <Moon 
          className={`absolute inset-0 h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-in-out ${
            theme === "dark"
              ? isHovered
                ? "opacity-0 scale-75 rotate-90"
                : "opacity-100 scale-100 rotate-0"
              : isHovered
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 -rotate-90"
          }`}
        />
      </div>
      
      {/* Animated background glow */}
      <div 
        className={`absolute inset-0 rounded-md transition-all duration-300 ${
          isHovered 
            ? "bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-pulse" 
            : "bg-transparent"
        }`}
      />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}