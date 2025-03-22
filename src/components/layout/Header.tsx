
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, Phone, ShieldCheck, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Insurance', path: '/insurance', hasChildren: true },
    { title: 'Compare', path: '/compare' },
    { title: 'Claims', path: '/claims' },
    { title: 'About Us', path: '/about' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full py-3 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto">
        {/* Top bar with contact info */}
        <div className={cn(
          "hidden md:flex items-center justify-between text-sm pb-2 mb-2 transition-all duration-300",
          isScrolled ? "border-b border-slate-100" : "border-b border-transparent"
        )}>
          <div className="flex items-center gap-6">
            <div className="flex items-center text-slate-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>Call us: +977 1234567890</span>
            </div>
            <Link to="/claims" className="text-slate-600 hover:text-primary transition-colors">Claims Assistance</Link>
            <Link to="/faq" className="text-slate-600 hover:text-primary transition-colors">FAQs</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/find-agent" className="text-slate-600 hover:text-primary transition-colors">Find an Agent</Link>
            <Link to="/contact" className="text-slate-600 hover:text-primary transition-colors">Contact Us</Link>
            <div className="flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" alt="Nepal Flag" className="w-5 h-5" />
              <span>नेपाली</span>
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-semibold text-slate-900 transition-all hover:text-primary"
          >
            <ShieldCheck className="w-8 h-8 text-primary" />
            <span className="tracking-tight">NepInsure</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                <Link 
                  to={link.path}
                  className="px-4 py-2 text-slate-700 rounded-md transition-all hover:text-primary focus-ring"
                >
                  <span className="flex items-center gap-1">
                    {link.title}
                    {link.hasChildren && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                  </span>
                </Link>
                
                {link.hasChildren && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-md shadow-lg p-2 min-w-48 animate-fade-in">
                      <Link to="/insurance/health" className="block px-3 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-50 transition-colors">Health Insurance</Link>
                      <Link to="/insurance/life" className="block px-3 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-50 transition-colors">Life Insurance</Link>
                      <Link to="/insurance/vehicle" className="block px-3 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-50 transition-colors">Vehicle Insurance</Link>
                      <Link to="/insurance/travel" className="block px-3 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-50 transition-colors">Travel Insurance</Link>
                      <Link to="/insurance/property" className="block px-3 py-2 text-sm text-slate-700 rounded-md hover:bg-slate-50 transition-colors">Property Insurance</Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="rounded-full focus-ring">Log in</Button>
            <Button className="rounded-full bg-primary hover:bg-primary/90 transition-colors focus-ring">Get Started</Button>
          </div>
          
          <button 
            className="md:hidden text-slate-700 hover:text-primary transition-colors focus-ring rounded-full p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-50 transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-2xl font-semibold text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span>NepInsure</span>
            </Link>
            
            <button 
              onClick={toggleMobileMenu}
              className="text-slate-700 hover:text-primary transition-colors focus-ring rounded-full p-1"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.title}
                to={link.path}
                className="px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            
            <div className="mt-4 border-t border-slate-100 pt-4">
              <Link 
                to="/claims"
                className="px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-md transition-colors block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Claims Assistance
              </Link>
              <Link 
                to="/find-agent"
                className="px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-md transition-colors block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find an Agent
              </Link>
              <Link 
                to="/contact"
                className="px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-md transition-colors block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
          
          <div className="mt-8 flex flex-col gap-3">
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
