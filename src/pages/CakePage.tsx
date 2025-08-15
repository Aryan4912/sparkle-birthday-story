import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

const CakePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [candlesLit, setCandlesLit] = useState([true, true, true]);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [canProceed, setCanProceed] = useState(false);

  const fullMessage = "Today is special because it's the day we celebrate YOU! 🎉";

  useEffect(() => {
    setIsVisible(true);
    
    // Auto blow candles after 3 seconds
    const autoBlowTimer = setTimeout(() => {
      blowCandles();
    }, 3000);

    return () => clearTimeout(autoBlowTimer);
  }, []);

  const blowCandles = () => {
    candlesLit.forEach((_, index) => {
      setTimeout(() => {
        setCandlesLit(prev => {
          const newState = [...prev];
          newState[index] = false;
          return newState;
        });
        
        // Show message after all candles are blown
        if (index === candlesLit.length - 1) {
          setTimeout(() => {
            setShowMessage(true);
            typeMessage();
          }, 1000);
        }
      }, index * 1000);
    });
  };

  const typeMessage = () => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullMessage.length) {
        setMessageText(fullMessage.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCanProceed(true);
        }, 1000);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-sunset flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-16 gradient-text">
            Light the Celebration! 🕯️
          </h1>

          {/* Interactive Birthday Cake */}
          <div className="relative mx-auto mb-16" style={{ width: 'fit-content' }}>
            {/* Cake Base */}
            <div className="relative">
              <div className="w-80 h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-2xl border-4 border-amber-300 mx-auto">
                {/* Cake Layers */}
                <div className="absolute inset-4 border-2 border-pink-200 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-4xl">🎂</div>
                
                {/* Frosting */}
                <div className="absolute -top-3 left-4 right-4 h-6 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 rounded-full shadow-lg"></div>
                <div className="absolute -top-1 left-8 right-8 h-3 bg-gradient-to-r from-white to-pink-100 rounded-full"></div>
              </div>

              {/* Candles */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex space-x-12">
                {candlesLit.map((isLit, index) => (
                  <div key={index} className="relative cursor-pointer" onClick={blowCandles}>
                    {/* Candle */}
                    <div className="w-4 h-20 bg-gradient-to-b from-yellow-200 to-yellow-500 rounded-full shadow-lg border border-yellow-300"></div>
                    
                    {/* Flame */}
                    {isLit && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-3 h-4 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-pulse shadow-lg flickering-flame">
                          <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-orange-400 rounded-full opacity-70 animate-bounce"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Smoke after blown out */}
                    {!isLit && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-8 bg-gradient-to-t from-gray-400 via-gray-300 to-transparent rounded-full opacity-60 animate-pulse"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Birthday Message */}
            {showMessage && (
              <div className="mt-12 animate-fade-in">
                <div className="bg-card/95 backdrop-blur-lg rounded-3xl p-8 magic-glow border border-border/20 max-w-2xl mx-auto">
                  <p className="text-2xl md:text-3xl font-light text-card-foreground leading-relaxed">
                    {messageText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className={`text-lg text-foreground/80 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p>Click the candles or wait for the magic to happen! ✨</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {canProceed && (
        <Navigation 
          nextRoute="/memories" 
          nextLabel="Go to Memories"
        />
      )}
    </div>
  );
};

export default CakePage;