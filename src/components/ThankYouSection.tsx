import { useEffect, useState } from "react";

const ThankYouSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fireworks, setFireworks] = useState<Array<{ id: number; x: number; y: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Generate fireworks
          const newFireworks = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 4,
            color: ['hsl(var(--secondary))', 'hsl(var(--celebration))', 'hsl(var(--accent))', 'hsl(var(--magic))'][Math.floor(Math.random() * 4)]
          }));
          setFireworks(newFireworks);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('thank-you-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="thank-you-section" className="min-h-screen flex items-center justify-center py-20 bg-gradient-celebration relative overflow-hidden">
      {/* Fireworks */}
      <div className="absolute inset-0 pointer-events-none">
        {fireworks.map((firework) => (
          <div
            key={firework.id}
            className="firework absolute w-4 h-4 rounded-full"
            style={{
              left: `${firework.x}%`,
              top: `${firework.y}%`,
              backgroundColor: firework.color,
              animationDelay: `${firework.delay}s`
            }}
          />
        ))}
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center reveal ${isVisible ? 'visible' : ''}`}>
          {/* Main Thank You Message */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Thank You! 🎉
            </h2>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
              Hope this magical journey made you smile as much as you make us smile every day! ✨
            </p>
          </div>

          {/* Celebration Icons */}
          <div className="flex justify-center space-x-8 mb-16">
            {['🎊', '🎈', '🌟', '💖', '🎂'].map((icon, index) => (
              <div
                key={index}
                className={`text-6xl animate-bounce transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Made with Love */}
          <div className={`bg-card/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 magic-glow border border-border/20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-2xl md:text-3xl font-light mb-4 text-card-foreground">
              Made with 💖 by
            </p>
            <p className="text-3xl md:text-4xl font-bold gradient-text">
              Aryan
            </p>
            
            {/* Final Message */}
            <div className="mt-8 pt-8 border-t border-border/30">
              <p className="text-lg md:text-xl text-muted-foreground italic">
                "The best birthdays are filled with love, laughter, and wonderful memories. 
                Here's to creating many more together! 🥳"
              </p>
            </div>
          </div>

          {/* Floating Hearts */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`absolute text-2xl transition-all duration-2000 ${
                  isVisible ? 'opacity-70 animate-bounce' : 'opacity-0'
                }`}
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  transitionDelay: `${1500 + i * 100}ms`
                }}
              >
                💖
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default ThankYouSection;