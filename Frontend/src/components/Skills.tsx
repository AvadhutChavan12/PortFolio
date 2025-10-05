import { Card, CardContent } from '@/components/ui/card';
import { 
  Cloud, 
  Code2, 
  Database, 
  Brain, 
  Users, 
  Clock, 
  Lightbulb,
  Server,
  Smartphone,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        { name: 'AWS & Cloud Computing', icon: Cloud, level: 90 },
        { name: 'Python', icon: Code2, level: 85 },
        { name: 'Java', icon: Code2, level: 80 },
        { name: 'Web Development', icon: Globe, level: 88 },
        { name: 'AI/ML', icon: Brain, level: 75 },
        { name: 'Database Management', icon: Database, level: 82 },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', icon: Lightbulb, level: 95 },
        { name: 'Teamwork', icon: Users, level: 90 },
        { name: 'Time Management', icon: Clock, level: 88 },
        { name: 'Leadership', icon: Users, level: 85 },
      ]
    }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 
    'PostgreSQL', 'Docker', 'Git', 'AWS EC2', 'AWS S3', 'AWS Lambda',
    'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'HTML5', 'CSS3'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="h-5 w-5 text-primary" />
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-soft">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-skill-gradient rounded-full text-sm font-medium text-primary border border-primary/20 hover:shadow-soft transition-all duration-200 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;