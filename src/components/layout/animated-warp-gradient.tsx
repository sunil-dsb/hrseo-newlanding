"use client";

import { useEffect, useRef } from "react";

interface AnimatedWarpGradientProps {
  children?: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
  blur?: number;
}

export const AnimatedWarpGradient = ({
  children,
  className = "",
  colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f7b731", "#5f27cd", "#00d2d3"],
  speed = 0.0005,
  blur = 60,
}: AnimatedWarpGradientProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation parameters
    let time = 0;
    const gradients: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      phase: number;
    }> = [];

    // Initialize gradient blobs
    colors.forEach((color, i) => {
      gradients.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 400 + 200,
        color: color,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        phase: (Math.PI * 2 * i) / colors.length,
      });
    });

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      time += speed;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each gradient blob with warp effect
      gradients.forEach((grad, index) => {
        // Apply warp/distortion using sine waves
        const warpX =
          Math.sin(time * 2 + grad.phase) * 100 +
          Math.cos(time * 1.5 + grad.phase * 2) * 80;
        const warpY =
          Math.cos(time * 2 + grad.phase) * 100 +
          Math.sin(time * 1.5 + grad.phase * 2) * 80;

        // Update position with warping
        grad.x += grad.speedX + Math.sin(time + grad.phase) * 0.5;
        grad.y += grad.speedY + Math.cos(time + grad.phase) * 0.5;

        // Bounce off edges
        if (grad.x < -grad.radius || grad.x > canvas.width + grad.radius) {
          grad.speedX *= -1;
        }
        if (grad.y < -grad.radius || grad.y > canvas.height + grad.radius) {
          grad.speedY *= -1;
        }

        // Create radial gradient with warp offset
        const gradient = ctx.createRadialGradient(
          grad.x + warpX,
          grad.y + warpY,
          0,
          grad.x + warpX,
          grad.y + warpY,
          grad.radius,
        );

        // Add color stops
        gradient.addColorStop(0, grad.color);
        gradient.addColorStop(0.5, grad.color + "80"); // 50% opacity
        gradient.addColorStop(1, grad.color + "00"); // transparent

        // Draw the gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors, speed]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          filter: `blur(${blur}px)`,
          transform: "scale(1.1)",
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};
