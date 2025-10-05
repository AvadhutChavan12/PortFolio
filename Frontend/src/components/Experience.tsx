import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Virtual Internship',
      company: 'Google through Eduskills',
      location: 'Remote',
      period: '2024',
      type: 'Virtual Internship',
      description: 'Completed comprehensive AI/ML labs in Google Cloud Console, focusing on machine learning concepts and practical implementations.',
      achievements: [
        'Hands-on experience with Google Cloud ML services',
        'Implemented various ML algorithms and models',
        'Worked on real-world AI/ML use cases',
        'Gained expertise in cloud-based ML workflows'
      ],
      technologies: ['Google Cloud Platform', 'TensorFlow', 'Python', 'Machine Learning', 'AI']
    },
    {
      title: 'AWS Academy Internship',
      company: 'Amazon Web Services Academy',
      location: 'Remote',
      period: '2023-2024',
      type: 'Certification Program',
      description: 'Comprehensive AWS training program covering cloud services, architecture, and implementation of cloud-based projects.',
      achievements: [
        'Learned core AWS services and architecture patterns',
        'Implemented small-scale cloud projects',
        'Gained hands-on experience with EC2, S3, Lambda, and more',
        'Understanding of cloud security and best practices'
      ],
      technologies: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Lambda', 'CloudFormation']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Internships
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </CardTitle>
                      <p className="text-primary font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;