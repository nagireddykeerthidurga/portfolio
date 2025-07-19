import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      {/* Interactive floating elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-accent-purple/10 rounded-full blur-3xl animate-float transition-transform duration-1000" 
        style={{ 
          animationDelay: '1s',
          transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`
        }}
      ></div>
      <div 
        className="absolute top-1/2 right-1/3 w-32 h-32 md:w-48 md:h-48 bg-accent-pink/10 rounded-full blur-2xl animate-float transition-transform duration-1000" 
        style={{ 
          animationDelay: '2s',
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
        }}
      ></div>
      
      <div className="container relative z-10 text-center animate-fade-in px-4">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h1 className="pt-40 text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text block md:inline">
                Keerthi Durga
              </span>
            </h1>
            
            <div className="relative">
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Full-Stack Developer crafting{' '}
                <span className="text-primary font-semibold">scalable web applications</span> with modern technologies
              </p>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about JavaScript, MERN Stack, and building secure payment platforms. 
            1+ years of experience delivering production-grade applications.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a
              href="#contact"
              className="gradient-primary hover-lift group text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border rounded-lg flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Get In Touch
            </a>
            
            <a
              href="https://drive.google.com/file/d/1vZ3y-rhuRrUqy9F_8-8CMNPT6Q3hGBNN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border rounded-lg flex items-center justify-center"
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Download Resume
            </a>
          </div>
          
          {/* Enhanced social links */}
          <div className="flex justify-center gap-4 md:gap-6 pt-8">
            <a 
              href="https://github.com/keerthidurga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 md:p-4 rounded-full bg-card/50 backdrop-blur-sm shadow-card hover-lift hover-glow transition-all duration-300"
            >
              <Github className="h-6 w-6 md:h-7 md:w-7 transition-transform group-hover:scale-110" />
            </a>
            
            <a 
              href="https://linkedin.com/in/keerthi-nagireddy-60aa21348" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 md:p-4 rounded-full bg-card/50 backdrop-blur-sm shadow-card hover-lift hover-glow transition-all duration-300"
            >
              <Linkedin className="h-6 w-6 md:h-7 md:w-7 transition-transform group-hover:scale-110" />
            </a>
            
            <a 
              href="mailto:keerthiinagireddy1127306@gmail.com"
              className="group p-3 md:p-4 rounded-full bg-card/50 backdrop-blur-sm shadow-card hover-lift hover-glow transition-all duration-300"
            >
              <Mail className="h-6 w-6 md:h-7 md:w-7 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 md:pt-16">
            <button 
              onClick={scrollToAbout}
              className="group animate-bounce hover:animate-none transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <span className="text-sm font-medium">Scroll to explore</span>
                <ArrowDown className="h-6 w-6 transition-transform group-hover:scale-110" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;