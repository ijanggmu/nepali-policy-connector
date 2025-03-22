
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, ShieldCheck, X } from 'lucide-react';
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
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full py-3 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-semibold text-nebula-800 transition-all hover:text-nebula-700"
        >
          <ShieldCheck className="w-8 h-8 text-nebula-700" />
          <span className="tracking-tight">NepInsure</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.title} className="relative group">
              <Link 
                to={link.path}
                className="px-4 py-2 text-slate-700 rounded-md transition-all hover:text-nebula-700 focus-ring"
              >
                <span className="flex items-center gap-1">
                  {link.title}
                  {link.hasChildren && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </span>
              </Link>
              
              {link.hasChildren && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-md shadow-medium p-2 min-w-48 animate-fade-in">
                    <Link to="/insurance/health" className="block px-3 py-2 text-sm text-slate-700 rounded-md hover:bg-nebula-50 transition-colors">Health Insurance</Link>
                    <Link to="/insurance/life" className="block px-3 py-2 text-sm text-slate-700 rounded-md hover:bg-nebula-50 transition-colors">Life Insurance</Link>
                    <Link to="/insurance/vehicle" className="block px-3 py-2 text-sm text-slate-700 rounded-md hover:bg-nebula-50 transition-colors">Vehicle Insurance</Link>
                    <Link to="/insurance/travel" className="block px-3 py-2 text-sm text-slate-700 rounded-md hover:bg-nebula-50 transition-colors">Travel Insurance</Link>
                    <Link to="/insurance/property" className="block px-3 py-2 text-sm text-slate-700 rounded-md hover:bg-nebula-50 transition-colors">Property Insurance</Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="rounded-full focus-ring">Log in</Button>
          <Button className="rounded-full bg-nebula-600 hover:bg-nebula-700 transition-colors focus-ring">Get Started</Button>
        </div>
        
        <button 
          className="md:hidden text-slate-700 hover:text-nebula-700 transition-colors focus-ring rounded-full p-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>
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
              className="flex items-center gap-2 text-2xl font-semibold text-nebula-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShieldCheck className="w-8 h-8 text-nebula-700" />
              <span>NepInsure</span>
            </Link>
            
            <button 
              onClick={toggleMobileMenu}
              className="text-slate-700 hover:text-nebula-700 transition-colors focus-ring rounded-full p-1"
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
          </nav>
          
          <div className="mt-8 flex flex-col gap-3">
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full bg-nebula-600 hover:bg-nebula-700">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
