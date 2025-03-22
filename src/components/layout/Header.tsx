
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  ChevronDown, 
  Heart, 
  Menu, 
  Phone, 
  Search, 
  ShieldCheck, 
  User, 
  X,
  Car,
  Home as HomeIcon,
  Globe,
  LifeBuoy,
  HelpCircle,
  Clock,
  FileText,
  CreditCard,
  Building,
  Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigationMenuTriggerStyle = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  
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

  const handleQuickCalculate = () => {
    window.location.href = '/premium-calculator';
  };

  const handleLanguageChange = () => {
    toast({
      title: "Language",
      description: "Switching to Nepali",
    });
  };

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full py-2 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white"
      )}
      initial="initial"
      animate="animate"
      variants={headerVariants}
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
              <span>Customer Support: +977 1234567890</span>
            </div>
            <div className="flex items-center text-slate-600">
              <LifeBuoy className="w-4 h-4 mr-2" />
              <Link to="/claims" className="hover:text-primary transition-colors">Claims Assistance</Link>
            </div>
            <div className="flex items-center text-slate-600">
              <HelpCircle className="w-4 h-4 mr-2" />
              <Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center text-slate-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>Mon-Sat: 9AM-6PM</span>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="sm" onClick={handleLanguageChange} className="flex items-center gap-2 text-slate-600 hover:text-primary">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" alt="Nepal Flag" className="w-5 h-5" />
                <span>नेपाली</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main navigation - Policybazar style */}
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-semibold text-slate-900 transition-all hover:text-primary"
          >
            <ShieldCheck className="w-8 h-8 text-primary" />
            <span className="tracking-tight">NepInsure</span>
          </Link>
          
          {/* Desktop and Tablet Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link to="/" className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">Home</Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-800 bg-transparent hover:bg-accent">Insurance</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-primary mb-2">Personal Insurance</h4>
                          <div className="space-y-2">
                            <Link 
                              to="/insurance/health" 
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                            >
                              <Heart className="w-4 h-4 text-primary" />
                              <span>Health Insurance</span>
                            </Link>
                            <Link 
                              to="/insurance/life" 
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                            >
                              <User className="w-4 h-4 text-blue-500" />
                              <span>Life Insurance</span>
                            </Link>
                            <Link 
                              to="/insurance/term" 
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                            >
                              <CreditCard className="w-4 h-4 text-green-500" />
                              <span>Term Life</span>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-primary mb-2">Vehicle Insurance</h4>
                          <div className="space-y-2">
                            <Link 
                              to="/insurance/car" 
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                            >
                              <Car className="w-4 h-4 text-purple-500" />
                              <span>Car Insurance</span>
                            </Link>
                            <Link 
                              to="/insurance/bike" 
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                            >
                              <Car className="w-4 h-4 text-orange-500" />
                              <span>Two-Wheeler Insurance</span>
                            </Link>
                            <Link 
                              to="/insurance/travel" 
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                            >
                              <Globe className="w-4 h-4 text-blue-500" />
                              <span>Travel Insurance</span>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-primary mb-2">Other Insurance</h4>
                          <div className="space-y-2">
                            <Link 
                              to="/insurance/property" 
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                            >
                              <HomeIcon className="w-4 h-4 text-indigo-500" />
                              <span>Property Insurance</span>
                            </Link>
                            <Link 
                              to="/insurance/business" 
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                            >
                              <Building className="w-4 h-4 text-teal-500" />
                              <span>Business Insurance</span>
                            </Link>
                            <Link 
                              to="/insurance/investment" 
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                            >
                              <Briefcase className="w-4 h-4 text-yellow-500" />
                              <span>Investment Plans</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/premium-calculator" className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                    <Calculator className="w-4 h-4 mr-2" />
                    <span>Premium Calculator</span>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-800 bg-transparent hover:bg-accent">Compare</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 space-y-2">
                      <Link 
                        to="/compare/health" 
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                      >
                        <Heart className="w-4 h-4 text-primary" />
                        <span>Compare Health Insurance</span>
                      </Link>
                      <Link 
                        to="/compare/life" 
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                      >
                        <User className="w-4 h-4 text-blue-500" />
                        <span>Compare Life Insurance</span>
                      </Link>
                      <Link 
                        to="/compare/vehicle" 
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                      >
                        <Car className="w-4 h-4 text-green-500" />
                        <span>Compare Vehicle Insurance</span>
                      </Link>
                      <Link 
                        to="/compare/all" 
                        className="mt-2 block p-2 text-center text-sm text-primary font-medium border border-primary/20 rounded-md hover:bg-primary/5"
                      >
                        View All Comparison Tools
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/claims" className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">Claims</Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-800 bg-transparent hover:bg-accent">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[240px] p-4 space-y-2">
                      <Link 
                        to="/blogs" 
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                      >
                        Insurance Blogs
                      </Link>
                      <Link 
                        to="/guides" 
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                      >
                        Insurance Guides
                      </Link>
                      <Link 
                        to="/faq" 
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                      >
                        FAQs
                      </Link>
                      <Link 
                        to="/about" 
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-sm text-slate-700"
                      >
                        About NepInsure
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Desktop and tablet account buttons */}
          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/login" className="flex items-center w-full">Log in</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/signup" className="flex items-center w-full">Sign up</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/policy-management" className="flex items-center w-full">My Policies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/account/claims" className="flex items-center w-full">My Claims</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="rounded-full bg-primary hover:bg-primary/90 transition-colors focus-ring btn-scale">
              <Link to="/get-quote" className="flex items-center gap-2">Get a Quote</Link>
            </Button>
          </div>
          
          {/* Mobile navigation trigger */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={handleQuickCalculate}
            >
              <Calculator className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="w-5 h-5" />
            </Button>
            <button 
              className="text-slate-700 hover:text-primary transition-colors focus-ring rounded-full p-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
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
          
          <div className="mb-4 p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2 text-slate-600 mb-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Customer Support: +977 1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="w-full" onClick={handleLanguageChange}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" alt="Nepal Flag" className="w-4 h-4 mr-2" />
                <span>Switch to नेपाली</span>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border-b border-slate-100 pb-2">
              <div className="font-medium text-lg text-slate-900 mb-2">Insurance Products</div>
              <div className="space-y-2 ml-2">
                <Link 
                  to="/insurance/health" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Health Insurance
                </Link>
                <Link 
                  to="/insurance/life" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="w-4 h-4 mr-2" />
                  Life Insurance
                </Link>
                <Link 
                  to="/insurance/vehicle" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Car className="w-4 h-4 mr-2" />
                  Vehicle Insurance
                </Link>
                <Link 
                  to="/insurance/property" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Property Insurance
                </Link>
                <Link 
                  to="/insurance/travel" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Travel Insurance
                </Link>
                <Link 
                  to="/insurance/investment" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Investment Plans
                </Link>
              </div>
            </div>
            
            <div className="border-b border-slate-100 pb-2">
              <div className="font-medium text-lg text-slate-900 mb-2">Tools & Resources</div>
              <div className="space-y-2 ml-2">
                <Link 
                  to="/premium-calculator" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Premium Calculator
                </Link>
                <Link 
                  to="/compare" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Compare Insurance
                </Link>
                <Link 
                  to="/claims" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Claims Process
                </Link>
                <Link 
                  to="/blogs" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Insurance Blogs
                </Link>
              </div>
            </div>
            
            <div className="border-b border-slate-100 pb-2">
              <div className="font-medium text-lg text-slate-900 mb-2">Company</div>
              <div className="space-y-2 ml-2">
                <Link 
                  to="/about" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/contact" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link 
                  to="/faq" 
                  className="flex items-center text-slate-600 hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col gap-3">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <User className="w-4 h-4" />
              <span>Log in</span>
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90">Get a Quote</Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
