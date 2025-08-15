import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

const MemoryPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const memories = [
    { id: 1, emoji: "🌟", title: "First Meeting", description: "When our paths crossed and the universe smiled", image: "✨" },
    { id: 2, emoji: "🎈", title: "Fun Adventures", description: "Endless laughter and spontaneous journeys together", image: "🎊" },
    { id: 3, emoji: "☀️", title: "Sunny Days", description: "The brightness and warmth you bring to every moment", image: "🌞" },
    { id: 4, emoji: "🌈", title: "Colorful Moments", description: "Life's beautiful spectrum painted with your presence", image: "🎨" },
    { id: 5, emoji: "🎭", title: "Shared Stories", description: "Our favorite memories woven into the fabric of friendship", image: "📖" },
    { id: 6, emoji: "🎪", title: "Joyful Times", description: "A circus of happiness wherever you go", image: "🎠" },
    { id: 7, emoji: "🌙", title: "Peaceful Evenings", description: "Calm conversations under the starlit sky", image: "⭐" },
    { id: 8, emoji: "🎨", title: "Creative Soul", description: "Your artistic spirit that inspires everyone around", image: "🖌️" },
    { id: 9, emoji: "💫", title: "Special Moments", description: "Memories that shine brighter than any star", image: "🌟" }
  ];

  return (
    <div className="min-h-screen bg-background py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--secondary)) 1px, transparent 1px), radial-gradient(circle at 75% 75%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Our Cherished Memories 📸
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Each moment captured here tells a story of joy, laughter, and the beautiful bond we share
          </p>
        </div>

        {/* Memory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-celebration aspect-square memory-card">
                {/* Memory Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/90 backdrop-blur-sm transition-all duration-500 group-hover:bg-card/70 p-6">
                  {/* Main Image/Emoji */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
                    {memory.emoji}
                  </div>
                  
                  {/* Background Decoration */}
                  <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    {memory.image}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-secondary transition-colors duration-300 text-center">
                    {memory.title}
                  </h3>
                  
                  {/* Description appears on hover */}
                  <p className="text-sm text-muted-foreground group-hover:text-card-foreground transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 text-center leading-relaxed">
                    {memory.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-3 border-transparent group-hover:border-secondary rounded-3xl transition-all duration-500"></div>
                
                {/* Corner Sparkles */}
                <div className="absolute top-3 right-3 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  boxShadow: 'inset 0 0 50px rgba(255, 255, 255, 0.1)'
                }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Message */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-card/95 backdrop-blur-lg rounded-3xl p-8 magic-glow border border-border/20 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-card-foreground leading-relaxed italic">
              "Every photograph tells a story, but the memories we've created together 
              are the most beautiful stories of all. Each smile, each laugh, 
              each moment of pure joy - they're all treasures in the gallery of our friendship." ✨
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation 
        prevRoute="/cake" 
        prevLabel="Back to Cake"
        nextRoute="/letter" 
        nextLabel="Read the Letter"
      />
    </div>
  );
};

export default MemoryPage;