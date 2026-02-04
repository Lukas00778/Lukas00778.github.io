
import React from 'react';

const SiteBanner: React.FC = () => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          {/* 
            =========================================================================================
                                        HOW TO CHANGE THE LOGO
            =========================================================================================
            
            OPTION 1 (EASIEST - KEEP THIS): Text-based Logo
            This is the current setup. It displays the club name as text.

            OPTION 2: Using an SVG or Image File (e.g., PNG, JPG)
            1. Create a folder named 'assets' in your project's root directory.
            2. Inside 'assets', create another folder named 'images'.
            3. Place your logo file (e.g., 'club-logo.png') inside 'assets/images/'.
            4. Comment out the current text-based logo below (the <div> with an h1 and p).
            5. Uncomment the <img ... /> tag below and make sure the `src` path is correct.

            =========================================================================================
          */}
          
          {/* --- CURRENT: Text-based Logo (Comment this out for Option 2) --- */}
          <div>
            <h1 className="text-4xl font-bold text-[#007bff]">The Flying Hoppers</h1>
            <p className="mt-1 text-lg text-gray-700">Pain is temporary - Pride is forever</p>
          </div>

          {/* --- OPTION 2: Image-based Logo (Uncomment this to use your own image file) --- */}
          {/*
          <img 
            src="/assets/images/your-logo-file.png" 
            alt="The Flying Hoppers Logo"
            className="h-16 w-auto" // Adjust height (h-16) as needed
          />
          */}

        </div>
      </div>
    </div>
  );
};

export default SiteBanner;
