import { useEffect, useState } from "react";

const InteractiveCake = () => {
  const [candlesLit, setCandlesLit] = useState([true, true, true]); // 3 candles, all lit initially
  const [showMessage, setShowMessage] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Start the animation after a short delay
    const startTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 2000);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!animationStarted) return;

    // Blow out candles one by one with 1-second intervals
    const blowOutCandles = () => {
      candlesLit.forEach((_, index) => {
        setTimeout(() => {
          setCandlesLit(prev => {
            const newState = [...prev];
            newState[index] = false;
            return newState;
          });
          
          // Show birthday message after all candles are blown
          if (index === candlesLit.length - 1) {
            setTimeout(() => {
              setShowMessage(true);
            }, 500);
          }
        }, index * 1000);
      });
    };

    blowOutCandles();
  }, [animationStarted]);

  return (
    <div className="relative z-5">
      {/* Birthday Cake */}
      <div className="relative">
        {/* Cake Base */}
        <div className="w-64 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-lg border-4 border-amber-300">
          {/* Cake Decorations */}
          <div className="absolute inset-2 border-2 border-pink-200 rounded-md"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl">🎂</div>
          
          {/* Frosting */}
          <div className="absolute -top-2 left-2 right-2 h-4 bg-gradient-to-r from-pink-200 to-pink-300 rounded-full"></div>
        </div>

        {/* Candles */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex space-x-8">
          {candlesLit.map((isLit, index) => (
            <div key={index} className="relative">
              {/* Candle */}
              <div className="w-3 h-16 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-full shadow-sm"></div>
              
              {/* Flame */}
              {isLit && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full animate-pulse shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-red-400 to-orange-300 rounded-full animate-bounce"></div>
                </div>
              )}
              
              {/* Smoke after blown out */}
              {!isLit && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-6 bg-gradient-to-t from-gray-400 to-transparent rounded-full opacity-50 animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Birthday Message */}
        {showMessage && (
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="bg-gradient-celebration text-white px-6 py-3 rounded-full shadow-lg border-2 border-secondary text-center">
              <p className="text-lg font-bold">🎉 Happy Birthday! 🎉</p>
              <p className="text-sm">Make a wish! ✨</p>
            </div>
            
            {/* Confetti effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-secondary rounded-full animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 1}s`
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CakeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('cake-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cake-section" className="min-h-screen py-20 bg-gradient-magic relative overflow-hidden">
      {/* Interactive Birthday Cake */}
      <div className="absolute inset-0 flex items-center justify-center">
        <InteractiveCake />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 gradient-text reveal ${
          isVisible ? 'visible' : ''
        }`}>
          Sweet Celebrations 🎂
        </h2>

        {/* Floating Cakes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Cake 1 */}
          <div className={`reveal ${isVisible ? 'visible' : ''} transition-all duration-1000 delay-200`}>
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 mx-auto bg-gradient-celebration rounded-2xl magic-glow float relative overflow-hidden">
                <div className="absolute inset-4 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-4xl">🎂</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
              </div>
              <p className="text-center mt-4 text-sm text-foreground/80">Birthday Bliss</p>
            </div>
          </div>

          {/* Cake 2 */}
          <div className={`reveal ${isVisible ? 'visible' : ''} transition-all duration-1000 delay-400`}>
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 mx-auto bg-gradient-golden rounded-2xl magic-glow float relative overflow-hidden">
                <div className="absolute inset-4 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-4xl">🧁</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-magic rounded-full animate-pulse"></div>
              </div>
              <p className="text-center mt-4 text-sm text-foreground/80">Cupcake Dreams</p>
            </div>
          </div>

          {/* Cake 3 */}
          <div className={`reveal ${isVisible ? 'visible' : ''} transition-all duration-1000 delay-600`}>
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 mx-auto bg-gradient-celebration rounded-2xl magic-glow float relative overflow-hidden">
                <div className="absolute inset-4 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-4xl">🍰</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
              </div>
              <p className="text-center mt-4 text-sm text-foreground/80">Sweet Slice</p>
            </div>
          </div>

          {/* Cake 4 */}
          <div className={`reveal ${isVisible ? 'visible' : ''} transition-all duration-1000 delay-800`}>
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 mx-auto bg-gradient-magic rounded-2xl magic-glow float relative overflow-hidden">
                <div className="absolute inset-4 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-4xl">🎂</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-celebration rounded-full animate-pulse"></div>
              </div>
              <p className="text-center mt-4 text-sm text-foreground/80">Magical Moments</p>
            </div>
          </div>
        </div>

        {/* Floating Candles */}
        <div className="mt-20 flex justify-center space-x-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`reveal ${isVisible ? 'visible' : ''} transition-all duration-1000`} style={{ transitionDelay: `${1000 + i * 200}ms` }}>
              <div className="w-4 h-16 bg-gradient-golden rounded-full relative float">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeSection;