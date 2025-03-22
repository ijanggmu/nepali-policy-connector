
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

// We'll use placeholder logos here - in a real app you'd import actual partner logos
const partners = [
  { name: "Nepal Life Insurance", category: "Life Insurance" },
  { name: "Shikhar Insurance", category: "General Insurance" },
  { name: "Prudential Insurance", category: "Health Insurance" },
  { name: "Surya Life Insurance", category: "Life Insurance" },
  { name: "Sagarmatha Insurance", category: "General Insurance" },
  { name: "Prabhu Insurance", category: "General Insurance" },
  { name: "National Life Insurance", category: "Life Insurance" },
  { name: "Premier Insurance", category: "Health Insurance" },
];

const Partners = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="bg-nebula-100 text-nebula-700 rounded-full inline-flex items-center px-3 py-1 text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4 mr-1" />
            Trusted Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Nepal's Leading Insurance Providers
          </h2>
          <p className="text-slate-600 text-lg">
            We partner with the most trusted insurance companies in Nepal to bring you the best coverage options.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-soft border border-slate-100 hover:shadow-medium transition-all hover:border-nebula-200"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-100 mx-auto mb-4 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-nebula-600" />
              </div>
              <h3 className="font-medium text-lg text-slate-900 mb-1">{partner.name}</h3>
              <p className="text-sm text-slate-500">{partner.category}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button variant="outline" className="rounded-full px-6 border-slate-300 hover:bg-slate-50 group">
            <span>View All Partners</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
