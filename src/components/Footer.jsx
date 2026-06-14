import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 bg-background pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Ectama</span>
            </div>
            <p className="text-secondary max-w-sm">
              Building Digital Products for the Future. We create technology that helps people work smarter and grow faster.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-secondary hover:text-white transition-colors">About</a></li>
              <li><a href="#vision" className="text-secondary hover:text-white transition-colors">Vision</a></li>
              <li><a href="#careers" className="text-secondary hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-secondary hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-white transition-colors">Avoiga</a></li>
              <li><a href="#" className="text-secondary hover:text-white transition-colors">Ectama Tools</a></li>
              <li><a href="#" className="text-secondary hover:text-white transition-colors">Project Nexus</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-secondary">
          <p>© {currentYear} Ectama. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
