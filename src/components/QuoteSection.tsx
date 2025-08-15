import { useEffect, useState } from "react";

const QuoteSection = () => {
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

    const section = document.getElementById('quote-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="quote-section" className="min-h-screen flex items-center justify-center py-20 bg-gradient-sunset relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center reveal ${isVisible ? 'visible' : ''}`}>
          {/* Quote Card */}
          <div className="bg-card/90 backdrop-blur-lg rounded-3xl p-12 md:p-16 magic-glow border border-border/20">
            {/* Quote Mark */}
            <div className="text-6xl md:text-8xl text-secondary mb-8 font-serif leading-none">"</div>
            
            {/* Main Quote */}
            <blockquote className="text-2xl md:text-4xl font-light leading-relaxed mb-8 text-card-foreground">
              You are the <span className="gradient-text font-semibold">sunshine</span> that brightens our lives,
              the <span className="gradient-text font-semibold">laughter</span> that fills our hearts,
              and the <span className="gradient-text font-semibold">joy</span> that makes every day beautiful.
            </blockquote>

            {/* Decorative Elements */}
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-celebration rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Sub Message */}
            <p className="text-lg md:text-xl text-muted-foreground italic">
              Today, we celebrate not just your birthday, but the incredible person you are 🌟
            </p>

            {/* Closing Quote Mark */}
            <div className="text-6xl md:text-8xl text-secondary mt-8 font-serif leading-none float-right">"</div>
          </div>

          {/* Floating Hearts */}
          <div className="absolute -top-10 -left-10 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>💖</div>
          <div className="absolute -top-5 -right-5 text-2xl animate-bounce" style={{ animationDelay: '2s' }}>✨</div>
          <div className="absolute -bottom-5 -left-5 text-3xl animate-bounce" style={{ animationDelay: '3s' }}>🌟</div>
          <div className="absolute -bottom-10 -right-10 text-2xl animate-bounce" style={{ animationDelay: '4s' }}>💫</div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;