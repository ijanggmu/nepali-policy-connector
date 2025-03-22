
import { 
  Car, Heart, Home, Map, ShieldCheck, 
  TrendingUp, Umbrella, User, Users 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Medical coverage for individuals & families',
    path: '/insurance/health',
    color: 'bg-blue-50 text-blue-500 border-blue-100',
  },
  {
    icon: Users,
    title: 'Life Insurance',
    description: 'Financial protection for your loved ones',
    path: '/insurance/life',
    color: 'bg-indigo-50 text-indigo-500 border-indigo-100',
  },
  {
    icon: Car,
    title: 'Vehicle Insurance',
    description: 'Coverage for cars, bikes & commercial vehicles',
    path: '/insurance/vehicle',
    color: 'bg-teal-50 text-teal-500 border-teal-100',
  },
  {
    icon: Home,
    title: 'Property Insurance',
    description: 'Protection for homes & commercial properties',
    path: '/insurance/property',
    color: 'bg-emerald-50 text-emerald-500 border-emerald-100',
  },
  {
    icon: Map,
    title: 'Travel Insurance',
    description: 'Security for domestic & international travel',
    path: '/insurance/travel',
    color: 'bg-purple-50 text-purple-500 border-purple-100',
  },
  {
    icon: TrendingUp,
    title: 'Investment Plans',
    description: 'Grow your wealth with insurance-backed investments',
    path: '/insurance/investment',
    color: 'bg-amber-50 text-amber-500 border-amber-100',
  },
  {
    icon: Umbrella,
    title: 'Liability Insurance',
    description: 'Protection against third-party claims',
    path: '/insurance/liability',
    color: 'bg-sky-50 text-sky-500 border-sky-100',
  },
  {
    icon: User,
    title: 'Personal Accident',
    description: 'Coverage for unforeseen accidents',
    path: '/insurance/personal-accident',
    color: 'bg-orange-50 text-orange-500 border-orange-100',
  },
];

const InsuranceCategories = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="bg-blue-50 text-blue-600 rounded-full inline-flex items-center px-3 py-1 text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4 mr-1" />
            Insurance Categories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            Browse through our diverse range of insurance products designed for Nepali citizens and businesses.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Link 
                to={category.path} 
                className="group block h-full bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow transition-all hover:translate-y-[-2px]"
              >
                <div className={`rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${category.color} transition-colors group-hover:bg-opacity-90`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {category.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceCategories;
