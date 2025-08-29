import { useState, useEffect } from "react";
import { Brain, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function FloatingAIButton() {
  const [location] = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  // Check for first-time visitor and show welcome popup
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('ai-assistant-welcome-seen');
    if (!hasSeenWelcome) {
      // Show welcome popup after a short delay
      const timer = setTimeout(() => {
        setShowWelcomePopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Trigger wave animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);

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

  const dismissWelcomePopup = () => {
    setShowWelcomePopup(false);
    localStorage.setItem('ai-assistant-welcome-seen', 'true');
  };

  return (
    <>
      {/* Welcome Popup for First-Time Visitors */}
      {showWelcomePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-[#161616] border border-[#222222] rounded-xl p-6 max-w-sm mx-4 relative animate-in fade-in duration-300">
            <button
              onClick={dismissWelcomePopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              aria-label="Close welcome popup"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#5b91e1] rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Welcome!</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Hi! Click the blue AI Assistant button to get personalized service recommendations.
            </p>
            <Button 
              onClick={dismissWelcomePopup}
              className="w-full bg-[#5b91e1] hover:bg-[#4a7bc8] text-white"
            >
              Got it!
            </Button>
          </div>
        </div>
      )}

      {/* Enhanced Floating AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Text Label */}
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#161616] border border-[#222222] rounded-lg px-3 py-2 shadow-lg">
            <span className="text-white text-sm font-medium">AI Assistant</span>
          </div>
        </div>
        
        {/* Enhanced FAB with Glow Animation */}
        <div className="relative">
          {/* Pulsing Glow Effect */}
          <div className="absolute inset-0 bg-[#5b91e1] rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 bg-[#5b91e1] rounded-full animate-pulse opacity-30"></div>
          
          <Button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              relative bg-[#5b91e1] hover:bg-[#4a7bc8] text-white 
              w-16 h-16 rounded-full shadow-lg hover:shadow-xl
              flex items-center justify-center
              transition-all duration-300 ease-in-out
              hover:scale-110 
              border-2 border-[#4a7bc8]
              ${isHovered ? 'shadow-[0_0_20px_rgba(91,145,225,0.6)]' : 'shadow-[0_0_10px_rgba(91,145,225,0.3)]'}
            `}
            aria-label="AI Service Recommendations"
            title="Get AI-Powered Service Recommendations"
          >
            <MessageCircle 
              className={`h-7 w-7 transition-transform duration-300 ${isWaving ? 'animate-bounce' : ''}`} 
            />
          </Button>
        </div>
        
        {/* Enhanced Tooltip */}
        {isHovered && (
          <div className="absolute bottom-20 right-0 bg-[#161616] text-white px-4 py-3 rounded-lg shadow-xl border border-[#222222] whitespace-nowrap text-sm min-w-max">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-[#5b91e1]" />
              <span className="font-medium">Get AI-Powered Recommendations</span>
            </div>
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#161616]"></div>
          </div>
        )}
      </div>
    </>
  );
}