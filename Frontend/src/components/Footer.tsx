import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <Code2 className="h-4 w-4" />
            <span className="text-sm">
              Built with React, TypeScript & Tailwind CSS
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span className="text-sm">Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span className="text-sm">by Avadhut Chavan</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Avadhut Chavan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;