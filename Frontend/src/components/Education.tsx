import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Bachelor of Engineering in Computer Engineering
                    </CardTitle>
                    <p className="text-primary font-semibold mt-1">
                      Bharati Vidyapeeth's College of Engineering for Women
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">2019 - 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Pune, Maharashtra</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Final Year</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Coursework</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Data Structures & Algorithms, Database Management Systems, Operating Systems, 
                    Computer Networks, Software Engineering, Machine Learning, Cloud Computing, 
                    Web Development, Mobile Application Development
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Academic Highlights</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Strong focus on emerging technologies like AI/ML and Cloud Computing</li>
                    <li>Active participation in technical workshops and seminars</li>
                    <li>Hands-on experience with real-world projects and internships</li>
                    <li>Member of various technical societies and student organizations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;