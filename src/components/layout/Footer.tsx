
import { Link } from 'react-router-dom';
import { ChevronRight, Facebook, Instagram, Linkedin, ShieldCheck, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-semibold text-nebula-800 mb-4">
              <ShieldCheck className="w-8 h-8 text-nebula-700" />
              <span>NepInsure</span>
            </Link>
            <p className="text-slate-600 mb-6 max-w-md">
              Helping Nepalis find the perfect insurance coverage with transparent comparisons and expert guidance.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="rounded-full h-10 w-10" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-slate-600" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full h-10 w-10" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-slate-600" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full h-10 w-10" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-slate-600" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full h-10 w-10" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-slate-600" />
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-medium text-lg mb-4 text-slate-900">Insurance</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/insurance/health" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Health
                </Link>
              </li>
              <li>
                <Link to="/insurance/life" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Life
                </Link>
              </li>
              <li>
                <Link to="/insurance/vehicle" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Vehicle
                </Link>
              </li>
              <li>
                <Link to="/insurance/travel" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Travel
                </Link>
              </li>
              <li>
                <Link to="/insurance/property" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Property
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-medium text-lg mb-4 text-slate-900">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Press
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-medium text-lg mb-4 text-slate-900">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Glossary
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-medium text-lg mb-4 text-slate-900">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-slate-600 hover:text-nebula-700 transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} NepInsure. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-slate-500 text-sm hover:text-nebula-700 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-500 text-sm hover:text-nebula-700 transition-colors">
                Terms of Use
              </Link>
              <Link to="/contact" className="text-slate-500 text-sm hover:text-nebula-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
