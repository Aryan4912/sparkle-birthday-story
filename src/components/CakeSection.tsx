import { useEffect, useState } from "react";

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary rounded-full blur-xl"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-celebration rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/2 w-40 h-40 bg-accent rounded-full blur-xl"></div>
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