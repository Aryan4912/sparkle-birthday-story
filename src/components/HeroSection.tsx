import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; size: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-sunset overflow-hidden">
      {/* Particles Background */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          className={`text-4xl md:text-7xl font-bold mb-8 gradient-text transition-all duration-1000 ${
            isVisible ? 'typewriter' : 'opacity-0'
          }`}
        >
          Happiest Birthday to the Most Amazing Soul
        </h1>
        
        <div className={`mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            Today we celebrate the wonderful person you are ✨
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
    </section>
  );
};

export default HeroSection;