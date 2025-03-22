
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight text-balance">
              Find the <span className="text-nebula-700">Perfect Insurance</span> for Your Needs in Nepal
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto text-balance">
              Compare the best insurance policies from Nepal's top insurers. Get personalized quotes in minutes and find the perfect coverage at the best price.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 bg-nebula-600 hover:bg-nebula-700 transition-colors shadow-nebula">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-slate-300 hover:bg-slate-50 group">
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-soft text-center border border-slate-100 hover:border-nebula-200 transition-all hover:shadow-medium group"
            >
              <div className="font-bold text-3xl md:text-4xl text-nebula-700 mb-2 group-hover:scale-105 transition-transform">
                {stat.number}
              </div>
              <div className="text-slate-600">{stat.text}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-br from-nebula-50 to-white/0 -z-10"></div>
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-nebula-100 rounded-full blur-3xl opacity-40 -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-nebula-100 rounded-full blur-3xl opacity-40 -z-10 animate-pulse-slow animation-delay-200"></div>
    </section>
  );
};

export default Hero;
