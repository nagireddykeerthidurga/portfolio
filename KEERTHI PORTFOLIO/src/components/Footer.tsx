import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/50">
      <div className="container">
        <div className="text-center space-y-6">
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/keerthidurga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover-lift hover-glow transition-smooth"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a 
              href="https://linkedin.com/in/keerthi-nagireddy-60aa21348" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover-lift hover-glow transition-smooth"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            
            <a 
              href="mailto:keerthiinagireddy1127306@gmail.com"
              className="p-3 rounded-full bg-card shadow-card hover-lift hover-glow transition-smooth"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>© {currentYear} Keerthi Durga Nagireddy. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Quote */}
          <div className="text-sm text-muted-foreground italic max-w-md mx-auto">
            "Building the future, one line of code at a time."
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;