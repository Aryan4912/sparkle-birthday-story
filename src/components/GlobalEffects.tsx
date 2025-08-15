import { useEffect } from "react";

const GlobalEffects = () => {
  useEffect(() => {
    // Create sparkles effect
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: hsl(var(--secondary));
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: sparkleFloat 3s linear forwards;
        left: ${Math.random() * 100}vw;
        top: 100vh;
      `;
      document.body.appendChild(sparkle);

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 3000);
    };

    // Create balloons
    const createBalloon = () => {
      const balloon = document.createElement('div');
      const colors = ['hsl(var(--secondary))', 'hsl(var(--celebration))', 'hsl(var(--accent))', 'hsl(var(--magic))'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      balloon.className = 'floating-balloon';
      balloon.innerHTML = '🎈';
      balloon.style.cssText = `
        position: fixed;
        font-size: ${20 + Math.random() * 20}px;
        color: ${color};
        pointer-events: none;
        z-index: 1000;
        animation: balloonFloat ${8 + Math.random() * 4}s linear forwards;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        filter: drop-shadow(0 0 10px ${color});
      `;
      document.body.appendChild(balloon);

      setTimeout(() => {
        if (balloon.parentNode) {
          balloon.parentNode.removeChild(balloon);
        }
      }, 12000);
    };

    // Start effects
    const sparkleInterval = setInterval(createSparkle, 500);
    const balloonInterval = setInterval(createBalloon, 3000);

    return () => {
      clearInterval(sparkleInterval);
      clearInterval(balloonInterval);
    };
  }, []);

  return null;
};

export default GlobalEffects;