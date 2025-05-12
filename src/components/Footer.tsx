
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-sun-gradient rounded-full animate-pulse-light mr-2"></div>
              <span className="font-bold text-xl">The Light Reset</span>
            </div>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-bright-orange transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-bright-orange transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-bright-orange transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {currentYear} The Light Reset. All rights reserved.</p>
          <p className="mt-2">
            Results may vary. This program is not intended to diagnose, treat, cure or prevent any disease. 
            Always consult with your physician before starting any new health program.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
