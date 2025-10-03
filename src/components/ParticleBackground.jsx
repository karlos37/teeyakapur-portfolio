import React, {useEffect, useRef} from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
          this.size = Math.random() * 2 + 1.5; // Slightly smaller but still visible
          this.opacity = Math.random() * 0.2 + 0.9; // Much brighter
        this.pulse = Math.random() * Math.PI * 2;
          this.clickBoost = 0; // For click brightness effect
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

          // Decay click boost over time
          if (this.clickBoost > 0) {
              this.clickBoost -= 0.02;
          }

          // Pulsing opacity with click boost
          this.opacity = 0.7 + Math.sin(this.pulse) * 0.2 + this.clickBoost; // Maximum brightness
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;

          // Create bright, visible particles
        ctx.fillStyle = '#4a9eff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

          // Add bright white center for visibility
          ctx.fillStyle = '#ffffff';
          ctx.globalAlpha = this.opacity * 0.8;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        
        ctx.restore();
      }
    }

    // Create particles
    const particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse interaction
    let mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

      // Click interaction
      const handleClick = (e) => {
          const clickX = e.clientX;
          const clickY = e.clientY;

          // Find particles near click and make them bounce
          particles.forEach(particle => {
              const dx = particle.x - clickX;
              const dy = particle.y - clickY;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 100) {
                  // Calculate bounce direction
                  const force = (100 - distance) / 100 * 6; // Much stronger force
                  const angle = Math.atan2(dy, dx);

                  // Apply bounce force
                  particle.vx += Math.cos(angle) * force;
                  particle.vy += Math.sin(angle) * force;

                  // Add temporary brightness boost
                  particle.clickBoost = 0.5;
              }
          });
      };

    window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
            ctx.save();
                ctx.globalAlpha = (120 - distance) / 120 * 0.25; // More visible
                ctx.strokeStyle = '#4a9eff';
                ctx.lineWidth = 0.8; // Thicker lines
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }

        // Mouse interaction
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
          ctx.save();
              ctx.globalAlpha = (200 - distance) / 200 * 0.4; // Less visible
              ctx.strokeStyle = '#7b68ee';
              ctx.lineWidth = 1.2; // Thinner lines
              ctx.shadowColor = '#7b68ee';
              ctx.shadowBlur = 2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.restore();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;
