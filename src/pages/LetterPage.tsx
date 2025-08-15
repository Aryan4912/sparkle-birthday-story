import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

const LetterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [envelopeClicked, setEnvelopeClicked] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [canProceed, setCanProceed] = useState(false);

  const fullMessage = `Dear Amazing Soul,

I still remember the first time we met... Your smile lit up the entire room, and I knew instantly that you were someone truly special.

Throughout all these moments we've shared, you've shown me what genuine friendship means. Your kindness radiates from within, your laughter is contagious, and your beautiful soul has made my life infinitely brighter.

You have this incredible gift of making everyone around you feel valued and loved. Your presence alone can turn an ordinary day into something magical.

On this special day, I want you to know how profoundly grateful I am to have you in my life. You deserve all the happiness, all the love, and all the wonderful surprises this world has to offer.

May this new year of your life be filled with adventures that take your breath away, moments that make your heart sing, and dreams that become beautiful realities.

Happy Birthday, beautiful soul! 

With all my love and warmest wishes,
Aryan 💖`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEnvelopeClick = () => {
    if (!envelopeClicked) {
      setEnvelopeClicked(true);
      
      setTimeout(() => {
        setEnvelopeOpened(true);
      }, 500);
      
      setTimeout(() => {
        setLetterVisible(true);
      }, 1500);
      
      setTimeout(() => {
        setMessageVisible(true);
        typeMessage();
      }, 2500);
    }
  };

  const typeMessage = () => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullMessage.length) {
        setTypedMessage(fullMessage.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCanProceed(true);
        }, 2000);
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-gradient-magic flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-celebration rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-16 gradient-text">
            A Letter Just for You 💌
          </h1>

          <div className="max-w-4xl mx-auto">
            {/* Envelope */}
            <div className="relative mb-12 flex justify-center">
              <div 
                className={`relative cursor-pointer transition-all duration-1000 ${
                  envelopeClicked ? 'transform scale-110' : 'hover:scale-105'
                } ${!envelopeClicked ? 'animate-pulse' : ''}`}
                onClick={handleEnvelopeClick}
              >
                {/* Envelope Base */}
                <div className="w-96 h-64 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-2xl border-4 border-amber-300 relative overflow-hidden">
                  {/* Envelope Pattern */}
                  <div className="absolute inset-6 border-2 border-amber-400/50 rounded-xl"></div>
                  
                  {/* Address Lines */}
                  <div className="absolute bottom-12 left-8 right-8 space-y-2">
                    <div className="h-1 bg-amber-400/30 rounded w-3/4"></div>
                    <div className="h-1 bg-amber-400/30 rounded w-1/2"></div>
                    <div className="h-1 bg-amber-400/30 rounded w-2/3"></div>
                  </div>

                  {/* Envelope Flap */}
                  <div 
                    className={`absolute -top-2 left-0 w-full h-36 bg-gradient-to-br from-amber-200 to-amber-300 transition-all duration-1000 origin-bottom border-4 border-amber-300 ${
                      envelopeOpened ? 'transform -rotate-12 -translate-y-8' : ''
                    }`}
                    style={{ 
                      clipPath: 'polygon(0 0, 50% 70%, 100% 0)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Flap Pattern */}
                    <div className="absolute inset-4 border border-amber-400/50" style={{ clipPath: 'polygon(0 0, 50% 70%, 100% 0)' }}></div>
                  </div>

                  {/* Wax Seal */}
                  <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center z-10 transition-all duration-1000 ${
                    envelopeOpened ? 'opacity-50 scale-75' : ''
                  }`}>
                    <span className="text-white text-lg font-bold">💖</span>
                  </div>
                </div>

                {/* Click instruction */}
                {!envelopeClicked && (
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-foreground/70 animate-bounce">
                    <p className="text-lg">Click to open the envelope ✨</p>
                  </div>
                )}
              </div>
            </div>

            {/* Letter */}
            <div className={`transition-all duration-1500 ${
              letterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-2xl border border-amber-200 p-8 md:p-12 relative transform -rotate-1 max-w-3xl mx-auto">
                {/* Paper Texture */}
                <div className="absolute inset-0 opacity-10 rounded-2xl" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 24px, hsl(var(--muted)) 25px)`
                }}></div>
                
                {/* Letter Content */}
                <div className={`relative transition-all duration-1000 ${
                  messageVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <pre className="font-serif text-base md:text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
                    {typedMessage}
                    {messageVisible && typedMessage.length < fullMessage.length && (
                      <span className="animate-pulse border-r-2 border-gray-800 ml-1"></span>
                    )}
                  </pre>
                </div>

                {/* Paper Fold */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-amber-100 transform rotate-45 border border-amber-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {canProceed && (
        <Navigation 
          prevRoute="/memories" 
          prevLabel="Back to Memories"
          nextRoute="/thankyou" 
          nextLabel="Final Message"
        />
      )}
    </div>
  );
};

export default LetterPage;