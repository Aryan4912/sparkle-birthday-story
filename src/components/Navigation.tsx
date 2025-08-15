import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface NavigationProps {
  nextRoute?: string;
  nextLabel?: string;
  prevRoute?: string;
  prevLabel?: string;
  onNext?: () => void;
}

const Navigation = ({ nextRoute, nextLabel = "Next", prevRoute, prevLabel = "Back", onNext }: NavigationProps) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = async () => {
    if (onNext) {
      await onNext();
    }
    
    if (nextRoute) {
      setIsTransitioning(true);
      setTimeout(() => {
        navigate(nextRoute);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (prevRoute) {
      setIsTransitioning(true);
      setTimeout(() => {
        navigate(prevRoute);
      }, 300);
    }
  };

  return (
    <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300 ${
      isTransitioning ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="flex gap-4">
        {prevRoute && (
          <Button
            onClick={handlePrev}
            variant="secondary"
            size="lg"
            className="bg-card/90 backdrop-blur-lg border border-border/20 hover:bg-card/80 transition-all duration-300 magic-glow"
          >
            ← {prevLabel}
          </Button>
        )}
        
        {nextRoute && (
          <Button
            onClick={handleNext}
            size="lg"
            className="bg-gradient-celebration text-celebration-foreground hover:opacity-90 transition-all duration-300 magic-glow font-semibold"
          >
            {nextLabel} →
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navigation;