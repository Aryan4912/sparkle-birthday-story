import { useEffect, useState } from "react";

const LetterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start envelope animation after a delay
          setTimeout(() => {
            setEnvelopeOpened(true);
            // Show letter after envelope opens
            setTimeout(() => {
              setShowLetter(true);
            }, 1000);
          }, 1000);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('letter-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const letterLines = [
    "I still remember the first time we met...",
    "Your smile lit up the entire room,",
    "and I knew instantly that you were someone special.",
    "",
    "Throughout the years, you've shown me",
    "what true friendship means.",
    "Your kindness, your laughter, your beautiful soul -",
    "they've made my life infinitely brighter.",
    "",
    "On this special day, I want you to know",
    "how grateful I am to have you in my life.",
    "You deserve all the happiness in the world,",
    "and so much more.",
    "",
    "Happy Birthday, beautiful soul! 💖"
  ];

  return (
    <section id="letter-section" className="min-h-screen flex items-center justify-center py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--secondary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 gradient-text reveal ${
          isVisible ? 'visible' : ''
        }`}>
          A Letter Just for You 💌
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          {/* Envelope */}
          <div className={`relative inline-block mb-12 reveal ${isVisible ? 'visible' : ''} transition-all duration-1000 delay-500`}>
            <div className="relative perspective-1000">
              {/* Envelope Base */}
              <div className="w-80 h-48 bg-gradient-golden rounded-lg magic-glow relative overflow-hidden">
                {/* Envelope Pattern */}
                <div className="absolute inset-4 border-2 border-secondary/30 rounded"></div>
                
                {/* Envelope Flap */}
                <div 
                  className={`absolute -top-1 left-0 w-full h-32 bg-gradient-celebration rounded-t-lg transition-all duration-1000 origin-bottom ${
                    envelopeOpened ? 'envelope-open' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-4 border-2 border-secondary/30 rounded-t"></div>
                </div>

                {/* Seal */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center z-10">
                  <span className="text-xs">💖</span>
                </div>
              </div>
            </div>
          </div>

          {/* Letter Content */}
          <div className={`transition-all duration-1500 ${
            showLetter ? 'letter-rise opacity-100' : 'opacity-0 translate-y-20'
          }`}>
            <div className="bg-card/95 backdrop-blur-lg rounded-2xl p-8 md:p-12 magic-glow border border-border/20 text-left">
              {/* Letter Header */}
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-semibold gradient-text mb-2">Dear Amazing Soul,</h3>
                <div className="w-24 h-0.5 bg-gradient-golden mx-auto"></div>
              </div>

              {/* Letter Body */}
              <div className="space-y-4 text-card-foreground leading-relaxed">
                {letterLines.map((line, index) => (
                  <p 
                    key={index}
                    className={`transition-all duration-500 ${
                      showLetter ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {line || <br />}
                  </p>
                ))}
              </div>

              {/* Letter Signature */}
              <div className={`mt-12 text-right transition-all duration-500 ${
                showLetter ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`} style={{ transitionDelay: '3000ms' }}>
                <p className="text-lg font-semibold gradient-text">With love,</p>
                <p className="text-xl font-bold gradient-text mt-2">Aryan 💖</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;