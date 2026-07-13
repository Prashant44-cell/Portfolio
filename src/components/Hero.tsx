import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    const bg = bgRef.current;
    if (!wrapper || !video || !bg) return;

    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;

    // Configuration
    const maxTilt = 8; // degrees
    const maxTranslate = 20; // px for video Z translation offset
    const blobTranslate = 8; // px for background blobs
    const ease = 0.08;

    const onMove = (clientX: number, clientY: number) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width; // 0..1
      const y = (clientY - rect.top) / rect.height; // 0..1
      // normalize to -1 .. 1
      mouseX = (x - 0.5) * 2;
      mouseY = (y - 0.5) * 2;
    };

    const handleMouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const handleTouch = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const loop = () => {
      // interpolate
      lastX += (mouseX - lastX) * ease;
      lastY += (mouseY - lastY) * ease;

      const tiltY = lastX * maxTilt; // rotateY
      const tiltX = -lastY * maxTilt; // rotateX (invert so moving up tilts down)
      const translateZ = -120 + lastY * maxTranslate; // base -120 from css

      // apply to video
      video.style.transform = `translateZ(${translateZ}px) rotateX(${6 + tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;

      // subtle parallax for background blobs container
      const blobX = -lastX * blobTranslate;
      const blobY = -lastY * blobTranslate;
      bg.style.transform = `translate3d(${blobX}px, ${blobY}px, 0)`;

      rafId = requestAnimationFrame(loop);
    };

    // add listeners
    wrapper.addEventListener('mousemove', handleMouse);
    wrapper.addEventListener('touchstart', handleTouch, { passive: true });
    wrapper.addEventListener('touchmove', handleTouch, { passive: true });

    rafId = requestAnimationFrame(loop);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouse);
      wrapper.removeEventListener('touchstart', handleTouch as any);
      wrapper.removeEventListener('touchmove', handleTouch as any);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={wrapperRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video background (homepage only) */}
      <div className="absolute inset-0 -z-20 hero-video-3d-wrapper">
        <video
          ref={videoRef}
          className="hero-video-3d"
          src="/video/bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-video-overlay" aria-hidden />
      </div>

      {/* Background elements (kept above the video) */}
      <div ref={bgRef} className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground mb-6">
              Computer Science Student & Developer
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up stagger-1">
            Hi, I'm{' '}
            <span className="gradient-text">Prashant Gupta</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up stagger-2 text-balance">
            A 18-year-old tech enthusiast specializing in drones and passionate about AI/ML.
            Currently pursuing Computer Science and Engineering at Chennai Institute of Technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up stagger-3">
            <a href="#projects">
              <Button variant="gradient" size="lg">
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="glass" size="lg">
                Get in Touch
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 animate-fade-up stagger-4">
            <a
              href="https://github.com/Prashant44-cell"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-secondary/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vyahut/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-secondary/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:prashantvyahut.work@gmail.com"
              className="p-3 rounded-full glass-card hover:bg-secondary/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
