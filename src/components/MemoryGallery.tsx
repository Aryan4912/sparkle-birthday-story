import { useEffect, useState } from "react";

const MemoryGallery = () => {
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

    const section = document.getElementById('memory-gallery');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const memories = [
    { id: 1, emoji: "🌟", title: "First Meeting", description: "When our paths crossed" },
    { id: 2, emoji: "🎈", title: "Fun Adventures", description: "Endless laughter together" },
    { id: 3, emoji: "☀️", title: "Sunny Days", description: "Brightness you bring" },
    { id: 4, emoji: "🌈", title: "Colorful Moments", description: "Life's beautiful spectrum" },
    { id: 5, emoji: "🎭", title: "Shared Stories", description: "Our favorite memories" },
    { id: 6, emoji: "🎪", title: "Joyful Times", description: "Circus of happiness" },
    { id: 7, emoji: "🎨", title: "Creative Soul", description: "Your artistic spirit" },
    { id: 8, emoji: "🌙", title: "Peaceful Evenings", description: "Calm conversations" },
    { id: 9, emoji: "⭐", title: "Special Moments", description: "Memories that shine" }
  ];

  return (
    <section id="memory-gallery" className="min-h-screen py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 gradient-text reveal ${
          isVisible ? 'visible' : ''
        }`}>
          Cherished Memories 📸
        </h2>

        {/* Memory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`reveal ${isVisible ? 'visible' : ''} transition-all duration-1000`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-celebration magic-glow aspect-square">
                  {/* Memory Content */}
                  <div className="absolute inset-0 flex items-center justify-center bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:bg-card/60">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {memory.emoji}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-secondary transition-colors">
                        {memory.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-card-foreground transition-colors">
                        {memory.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary rounded-2xl transition-all duration-300"></div>
                  
                  {/* Corner Sparkles */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Message */}
        <div className={`mt-16 text-center reveal ${isVisible ? 'visible' : ''} transition-all duration-1000 delay-1000`}>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Every moment with you becomes a treasured memory, 
            painted with joy and sprinkled with laughter ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;