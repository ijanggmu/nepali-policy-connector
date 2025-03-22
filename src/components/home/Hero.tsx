
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-32 md:pb-20 overflow-hidden relative bg-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Top section with hero content */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight text-balance">
              Find the <span className="text-primary">Perfect Insurance</span> for Your Needs in Nepal
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 max-w-3xl mx-auto text-balance">
              Compare the best insurance policies from Nepal's top insurers. Get personalized quotes in minutes.
            </p>
          </motion.div>
          
          {/* Insurance type selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white shadow-sm rounded-xl p-6 max-w-3xl mx-auto border border-slate-100 mb-10"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Health', icon: '🏥', path: '/insurance/health', color: 'bg-blue-50 text-blue-600' },
                { name: 'Life', icon: '👪', path: '/insurance/life', color: 'bg-indigo-50 text-indigo-600' },
                { name: 'Vehicle', icon: '🚗', path: '/insurance/vehicle', color: 'bg-teal-50 text-teal-600' },
                { name: 'Travel', icon: '✈️', path: '/insurance/travel', color: 'bg-purple-50 text-purple-600' }
              ].map((item, index) => (
                <Link key={index} to={item.path} className="flex flex-col items-center p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-xl mb-3`}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-md px-8 bg-primary hover:bg-primary/90 transition-colors shadow-sm group">
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-md px-8 border-slate-200 hover:bg-slate-50">
              <span>Learn More</span>
            </Button>
          </motion.div>
        </div>

        {/* Trusted numbers section */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '75+', text: 'Insurance Partners' },
            { number: '15K+', text: 'Happy Customers' },
            { number: '300+', text: 'Insurance Plans' },
            { number: '98%', text: 'Customer Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-xl p-6 shadow-sm text-center border border-slate-100 hover:border-primary/10 transition-all hover:shadow group"
            >
              <div className="font-bold text-3xl md:text-4xl text-primary mb-2 group-hover:scale-105 transition-transform">
                {stat.number}
              </div>
              <div className="text-slate-600 text-sm">{stat.text}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration - more subtle */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50/70 to-white/0 -z-10"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default Hero;
