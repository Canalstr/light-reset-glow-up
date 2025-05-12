
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm py-4 fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-sun-gradient rounded-full animate-pulse-light mr-2"></div>
            <span className="font-bold text-xl">The Light Reset</span>
          </div>
        </div>
        <Button className="bg-bright-orange hover:bg-orange-600" size="sm">
          Take the Quiz
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
