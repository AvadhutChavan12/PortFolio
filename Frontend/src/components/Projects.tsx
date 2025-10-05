import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Monitor, Brain, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-OS User Activity Tracker',
      description: 'A comprehensive desktop application that tracks user activities across different operating systems with detailed reporting and analytics capabilities.',
      longDescription: 'This project involved developing a cross-platform application capable of monitoring user activities, application usage, and system performance metrics. The solution provides detailed reports and insights to help users understand their productivity patterns.',
      icon: Monitor,
      technologies: ['Python', 'Electron', 'SQLite', 'Chart.js', 'Cross-platform'],
      features: [
        'Cross-platform compatibility (Windows, macOS, Linux)',
        'Real-time activity monitoring',
        'Detailed usage analytics and reports',
        'Privacy-focused local data storage',
        'Intuitive dashboard with visualizations'
      ],
      status: 'Completed',
      category: 'Desktop Application'
    },
    {
      title: 'Cloud-Based ML Pipeline',
      description: 'Implemented machine learning workflows using Google Cloud Platform during AI/ML internship with automated data processing and model deployment.',
      longDescription: 'During my Google AI/ML internship, I developed an end-to-end machine learning pipeline leveraging Google Cloud services for data preprocessing, model training, and deployment.',
      icon: Brain,
      technologies: ['Google Cloud Platform', 'TensorFlow', 'Python', 'Cloud ML Engine', 'BigQuery'],
      features: [
        'Automated data preprocessing pipeline',
        'Model training with hyperparameter tuning',
        'Real-time prediction API endpoints',
        'Monitoring and logging integration',
        'Scalable cloud infrastructure'
      ],
      status: 'Completed',
      category: 'Machine Learning'
    },
    {
      title: 'AWS Infrastructure Automation',
      description: 'Developed Infrastructure as Code solutions using AWS services including EC2, S3, Lambda, and CloudFormation for automated deployment.',
      longDescription: 'Created comprehensive AWS infrastructure automation scripts and templates for deploying scalable web applications with proper security, monitoring, and backup strategies.',
      icon: Code2,
      technologies: ['AWS', 'CloudFormation', 'Lambda', 'EC2', 'S3', 'Python'],
      features: [
        'Infrastructure as Code with CloudFormation',
        'Serverless functions with AWS Lambda',
        'Automated backup and recovery systems',
        'Security group and IAM role management',
        'Cost optimization strategies'
      ],
      status: 'Completed',
      category: 'Cloud Infrastructure'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects & Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in 
            full-stack development, cloud computing, and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 flex-grow flex flex-col">
                <div className="mb-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.longDescription}
                  </p>
                  
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Key Features:</h4>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
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

export default Projects;