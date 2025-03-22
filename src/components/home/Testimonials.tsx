
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "Business Owner, Kathmandu",
    content: "NepInsure helped me find the perfect health insurance for my family. The comparison tool made it easy to see what each plan offered, and the support team answered all my questions. I saved almost 15% compared to my previous plan!",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Sunita Gurung",
    position: "Teacher, Pokhara",
    content: "After getting quotes from multiple insurance companies through NepInsure, I found a policy that fit my budget and offered better coverage. The process was so smooth compared to my previous experiences with insurance agents.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Bikram Thapa",
    position: "IT Professional, Lalitpur",
    content: "I've been using NepInsure for both my vehicle and health insurance needs. Their platform is intuitive, and their customer service is exceptional. I appreciate how transparent they are about policy details and pricing.",
    rating: 4,
    image: "/placeholder.svg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="bg-nebula-100 text-nebula-700 rounded-full inline-flex items-center px-3 py-1 text-sm font-medium mb-4">
            <Quote className="w-4 h-4 mr-1" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-lg">
            Don't just take our word for it. See what Nepalis from across the country are saying about us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-medium border border-slate-100"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 md:mt-2">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-slate-700 italic mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-slate-500 text-sm">
                      {testimonials[currentIndex].position}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2">
                <div className="flex gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'bg-nebula-600 scale-100' 
                          : 'bg-slate-300 scale-75 hover:scale-90 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-between mt-10">
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full h-10 w-10 border-slate-300"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full h-10 w-10 border-slate-300"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
