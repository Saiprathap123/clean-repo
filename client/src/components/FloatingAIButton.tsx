import { useState } from "react";
import { Brain, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function FloatingAIButton() {
  const [location] = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // If we're on the home page, scroll to the AI recommendations section
    if (location === "/") {
      const aiSection = document.getElementById("ai-recommendations");
      if (aiSection) {
        aiSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // If section doesn't exist on home page, go to AI recommendations page
        window.location.href = "/ai-recommendations";
      }
    } else {
      // If we're on any other page, navigate to AI recommendations page
      window.location.href = "/ai-recommendations";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          bg-[#5b91e1] hover:bg-[#4a7bc8] text-white 
          w-14 h-14 rounded-full shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          hover:scale-110 
          ${isHovered ? 'animate-pulse' : ''}
        `}
        aria-label="AI Service Recommendations"
        title="Get AI-Powered Service Recommendations"
      >
        <Brain className="h-6 w-6" />
      </Button>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-16 right-0 bg-[#161616] text-white px-3 py-2 rounded-lg shadow-lg border border-[#222222] whitespace-nowrap text-sm">
          AI Service Recommendations
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#161616]"></div>
        </div>
      )}
    </div>
  );
}