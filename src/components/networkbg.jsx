import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId;
    const nodes = [];

    const COUNT = 60;
    const MAX_DIST = 160;
    const SPEED = 0.4;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        radius: Math.random() < 0.1 ? 3 : 1.5,
        glow: Math.random() < 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > canvas.offsetWidth) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.offsetHeight) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;

          const distSq = dx * dx + dy * dy;

          if (distSq < MAX_DIST * MAX_DIST) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / MAX_DIST) * 0.25;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 200, 160, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        if (n.glow) {
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 12);
          grad.addColorStop(0, "rgba(0, 230, 180, 0.8)");
          grad.addColorStop(1, "rgba(0, 230, 180, 0)");

          ctx.beginPath();
          ctx.fillStyle = grad;
          ctx.arc(n.x, n.y, 12, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = n.glow
          ? "rgba(0, 230, 180, 1)"
          : "rgba(0, 180, 140, 0.7)";
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}