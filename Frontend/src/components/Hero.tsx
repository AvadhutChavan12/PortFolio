import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img src="lovable-uploads/avd.png" alt="Avadhut Chavan" className="w-48 h-48 rounded-full mx-auto shadow-glow object-cover animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Hi, I'm{' '}
            <span className="text-primary">Avadhut Chavan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Aspiring Software Engineer | Cloud & AI Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Final-year Computer Engineering student passionate about building scalable solutions 
            and exploring the endless possibilities of technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            
            
            
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a href="https://linkedin.com/in/avadhut-chavan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/avadhut-chavan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:avadhut.chavan23@pccoepune.org" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;