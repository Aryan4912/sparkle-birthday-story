import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

const ThankYouPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<Array<{ id: number; x: number; delay: number; color: string }>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Start confetti after a short delay
    setTimeout(() => {
      setShowConfetti(true);
      generateConfetti();
    }, 1000);
  }, []);

  const generateConfetti = () => {
    const colors = ['hsl(var(--secondary))', 'hsl(var(--celebration))', 'hsl(var(--accent))', 'hsl(var(--magic))'];
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfettiPieces(pieces);

    // Keep generating confetti
    const confettiInterval = setInterval(() => {
      const newPieces = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setConfettiPieces(prev => [...prev.slice(-30), ...newPieces]);
    }, 2000);

    return () => clearInterval(confettiInterval);
  };

  const handleReplay = () => {
    window.location.href = '/cake';
  };

  return (
    <div className="min-h-screen bg-gradient-celebration flex items-center justify-center py-20 relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className="absolute w-3 h-6 rounded-sm animate-bounce"
              style={{
                left: `${piece.x}%`,
                top: '-20px',
                backgroundColor: piece.color,
                animationDelay: `${piece.delay}s`,
                animationDuration: '3s',
                animationName: 'confettiFall',
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      )}

      {/* Background Stars and Effects */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Fireworks */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="firework absolute w-6 h-6 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              backgroundColor: ['hsl(var(--secondary))', 'hsl(var(--celebration))', 'hsl(var(--accent))', 'hsl(var(--magic))'][i % 4],
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main Thank You Message */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 gradient-text animate-bounce">
              Thank You! 🎉
            </h1>
            
            <div className="space-y-6 text-xl md:text-3xl text-foreground/90 leading-relaxed">
              <p className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                Thank you for being a part of this 
                <span className="gradient-text font-bold"> magical journey!</span>
              </p>
              
              <p className={`transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                Hope this celebration made you smile as much as 
                <span className="gradient-text font-bold"> you make us smile</span> every day! ✨
              </p>
            </div>
          </div>

          {/* Celebration Icons */}
          <div className="flex justify-center space-x-6 md:space-x-12 mb-20">
            {['🎊', '🎈', '🌟', '💖', '🎂', '🎁', '🦄', '🌈'].map((icon, index) => (
              <div
                key={index}
                className={`text-4xl md:text-6xl transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
                }`}
                style={{ 
                  transitionDelay: `${1500 + index * 200}ms`,
                  animation: 'bounce 2s infinite',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Thank You Card */}
          <div className={`transition-all duration-1000 delay-2000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="bg-card/95 backdrop-blur-lg rounded-3xl p-8 md:p-16 magic-glow border border-border/20 relative overflow-hidden">
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, hsl(var(--secondary)) 2px, transparent 2px), radial-gradient(circle at 70% 70%, hsl(var(--accent)) 2px, transparent 2px)`,
                backgroundSize: '50px 50px'
              }}></div>
              
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-light mb-6 text-card-foreground">
                  Made with 💖 by
                </p>
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                  Aryan
                </p>
                
                {/* Quote */}
                <div className="border-t border-border/30 pt-8">
                  <blockquote className="text-lg md:text-2xl text-muted-foreground italic leading-relaxed">
                    "The best birthdays are filled with love, laughter, and wonderful memories. 
                    Here's to creating many more magical moments together! May your special day 
                    be just the beginning of a year filled with happiness, adventures, and dreams come true! 🥳"
                  </blockquote>
                </div>

                {/* Action Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleReplay}
                    className="bg-gradient-magic text-magic-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-all duration-300 magic-glow"
                  >
                    🔄 Experience Again
                  </button>
                  
                  <button
                    onClick={() => window.open('mailto:?subject=Birthday Celebration&body=I created something special for you!')}
                    className="bg-gradient-golden text-secondary-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-all duration-300 magic-glow"
                  >
                    💌 Share the Love
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Hearts */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute text-3xl transition-all duration-2000 ${
                  isVisible ? 'opacity-60' : 'opacity-0'
                }`}
                style={{
                  left: `${5 + Math.random() * 90}%`,
                  top: `${5 + Math.random() * 90}%`,
                  animation: 'float 4s ease-in-out infinite',
                  animationDelay: `${Math.random() * 4}s`,
                  transitionDelay: `${3000 + i * 100}ms`
                }}
              >
                💖
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
