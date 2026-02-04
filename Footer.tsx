
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#007bff]">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-white/90">
        <p>&copy; {new Date().getFullYear()} Flying Hoppers Hockey Club. All rights reserved.</p>
        <p className="text-sm mt-2 opacity-80">A modern web experience for a timeless club.</p>
      </div>
    </footer>
  );
};

export default Footer;
