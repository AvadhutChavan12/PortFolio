import { Card, CardContent } from '@/components/ui/card';
import { Code2, Cloud, Brain, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Passionate about creating end-to-end solutions'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'AWS certified with hands-on cloud experience'
    },
    {
      icon: Brain,
      title: 'AI/ML Enthusiast',
      description: 'Exploring the frontiers of artificial intelligence'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Strong collaboration and leadership skills'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Passionate Problem Solver & Technology Enthusiast
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a final-year Computer Engineering student at Pimpri Chinchwad College of Engineering, 
              Pune, with a strong passion for technology and innovation. My journey in computer 
              engineering has been driven by curiosity and a desire to create meaningful solutions.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With expertise in Cloud Computing, AI/ML, and Full Stack Development, I'm constantly 
              learning and exploring new technologies. I believe in the power of technology to solve 
              real-world problems and make a positive impact on society.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As an enthusiastic learner and problem solver, I'm always ready to take on new challenges 
              and contribute to innovative projects that push the boundaries of what's possible.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;