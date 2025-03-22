
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const features = [
    "Compare quotes from 75+ insurers",
    "Save up to 30% on premiums",
    "Transparent policy comparisons",
    "Free expert advice",
    "Fast claims support",
    "Digital policy management"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/90 to-primary text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg')] bg-repeat-x opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-bl-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-tr-[100px] -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight relative">
                <span className="absolute -left-8 top-0 text-6xl text-white/20">॥</span>
                Ready to Secure Your Future with Confidence?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl">
                Join thousands of satisfied customers who've found the perfect insurance coverage through NepInsure. Our platform makes it easy to compare, choose, and manage your policies.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="rounded-full bg-white/20 p-1 mr-3">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 transition-colors rounded-full px-8 border-none"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-white/30 hover:bg-white/10 text-white transition-colors rounded-full px-8 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Get a Quick Quote</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/90">
                    Insurance Type
                  </label>
                  <select className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all">
                    <option value="" disabled selected>Select insurance type</option>
                    <option value="health">Health Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="vehicle">Vehicle Insurance</option>
                    <option value="travel">Travel Insurance</option>
                    <option value="property">Property Insurance</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/90">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all placeholder-white/50"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/90">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all placeholder-white/50"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/90">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all placeholder-white/50"
                    placeholder="Enter your email"
                  />
                </div>
                
                <Button className="w-full bg-white text-primary hover:bg-white/90 transition-colors mt-2">
                  Get Quote
                </Button>
                
                <p className="text-xs text-white/70 text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
