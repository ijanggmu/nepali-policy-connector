
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Car, Heart, Home as HomeIcon, Map, ShieldCheck, User, Umbrella, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const InsuranceCategory = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API call to fetch category data
    setTimeout(() => {
      const data = getCategoryData(category || '');
      setCategoryData(data);
      setLoading(false);
    }, 300);
  }, [category]);

  const getCategoryData = (categorySlug: string) => {
    const categories = {
      'health': {
        title: 'Health Insurance',
        icon: Heart,
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        description: 'Comprehensive healthcare coverage for individuals and families. Protect yourself against unexpected medical expenses.',
        features: [
          'Cashless treatment at over 5,000+ network hospitals',
          'Coverage for pre and post hospitalization',
          'No claim bonus for claim-free years',
          'Day care procedures covered without hospitalization',
          'Pre-existing diseases covered after waiting period'
        ],
        plans: [
          { name: 'Basic Health', coverage: '3 Lakhs', premium: '5,000/year', benefits: ['Hospitalization', 'Pre & Post Hospital Care', 'Day Care Procedures'] },
          { name: 'Family Floater', coverage: '5 Lakhs', premium: '12,000/year', benefits: ['Coverage for entire family', 'Maternity Benefits', 'Free Health Check-up'] },
          { name: 'Critical Illness', coverage: '10 Lakhs', premium: '8,000/year', benefits: ['Covers major illnesses', 'Lump sum payout', 'Tax Benefits'] }
        ]
      },
      'life': {
        title: 'Life Insurance',
        icon: User,
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-50',
        description: 'Secure your family\'s financial future with comprehensive life insurance coverage.',
        features: [
          'Financial protection for your loved ones',
          'Tax benefits under Section 80C',
          'Loan facility against policy',
          'Choice of riders for added protection',
          'Flexible premium payment options'
        ],
        plans: [
          { name: 'Term Plan', coverage: '50 Lakhs', premium: '8,000/year', benefits: ['Pure protection', 'Affordable premiums', 'High coverage'] },
          { name: 'Endowment', coverage: '20 Lakhs', premium: '30,000/year', benefits: ['Protection + Savings', 'Maturity Benefits', 'Loan Facility'] },
          { name: 'ULIP', coverage: '15 Lakhs', premium: '50,000/year', benefits: ['Market-linked returns', 'Investment flexibility', 'Tax Benefits'] }
        ]
      },
      'vehicle': {
        title: 'Vehicle Insurance',
        icon: Car,
        color: 'text-teal-500',
        bgColor: 'bg-teal-50',
        description: 'Comprehensive protection for your vehicles against damages, accidents, theft and third-party liabilities.',
        features: [
          'Third-party liability coverage',
          'Own damage protection',
          'Personal accident cover',
          'Cashless claims at network garages',
          'No Claim Bonus for claim-free years'
        ],
        plans: [
          { name: 'Third Party', coverage: 'As per law', premium: '2,500/year', benefits: ['Legal liability coverage', 'Mandatory by law', 'Affordable'] },
          { name: 'Comprehensive', coverage: 'Vehicle Value', premium: '8,000/year', benefits: ['Own damage coverage', 'Third-party liability', 'Personal accident'] },
          { name: 'Premium', coverage: 'Vehicle Value+', premium: '12,000/year', benefits: ['Zero Depreciation', 'Engine Protection', 'Roadside Assistance'] }
        ]
      },
      'property': {
        title: 'Property Insurance',
        icon: HomeIcon,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-50',
        description: 'Protect your home and property against natural calamities, fire, theft and other unforeseen events.',
        features: [
          'Coverage against fire, lightning and explosions',
          'Protection against natural disasters',
          'Burglary and theft coverage',
          'Rent for alternative accommodation',
          'Public liability coverage'
        ],
        plans: [
          { name: 'Home Shield', coverage: '50 Lakhs', premium: '5,000/year', benefits: ['Building coverage', 'Contents coverage', 'Liability protection'] },
          { name: 'Tenant Cover', coverage: '10 Lakhs', premium: '3,000/year', benefits: ['Contents only', 'Tenant liability', 'Low premium'] },
          { name: 'Complete Home', coverage: '1 Crore', premium: '10,000/year', benefits: ['Comprehensive coverage', 'Valuables protection', 'Higher limits'] }
        ]
      },
      'travel': {
        title: 'Travel Insurance',
        icon: Map,
        color: 'text-purple-500',
        bgColor: 'bg-purple-50',
        description: 'Travel worry-free with comprehensive coverage for medical emergencies, trip cancellations, and lost baggage.',
        features: [
          'Medical expenses & emergency evacuation',
          'Trip cancellation & interruption coverage',
          'Lost passport & baggage protection',
          'Personal liability coverage',
          'Flight delay compensation'
        ],
        plans: [
          { name: 'Domestic Travel', coverage: '5 Lakhs', premium: '500/trip', benefits: ['Accident coverage', 'Baggage loss', 'Trip cancellation'] },
          { name: 'International Basic', coverage: '25 Lakhs', premium: '2,000/trip', benefits: ['Medical coverage', 'Travel assistance', 'Basic benefits'] },
          { name: 'Global Premium', coverage: '50 Lakhs', premium: '5,000/trip', benefits: ['Comprehensive coverage', 'Higher limits', 'Premium services'] }
        ]
      },
      'investment': {
        title: 'Investment Plans',
        icon: TrendingUp,
        color: 'text-amber-500',
        bgColor: 'bg-amber-50',
        description: 'Grow your wealth with insurance-backed investment plans offering financial protection along with returns.',
        features: [
          'Dual benefit of insurance and investment',
          'Tax benefits under Income Tax Act',
          'Systematic wealth creation',
          'Goal-based investment options',
          'Flexibility to choose fund allocation'
        ],
        plans: [
          { name: 'Child Plan', coverage: '15 Lakhs', premium: '50,000/year', benefits: ['Education funding', 'Marriage expenses', 'Premium waiver'] },
          { name: 'Retirement Plan', coverage: '20 Lakhs', premium: '100,000/year', benefits: ['Regular pension', 'Wealth accumulation', 'Tax benefits'] },
          { name: 'Wealth Builder', coverage: '10 Lakhs', premium: '200,000/year', benefits: ['Market-linked returns', 'Portfolio management', 'High growth potential'] }
        ]
      },
      'liability': {
        title: 'Liability Insurance',
        icon: Umbrella,
        color: 'text-sky-500',
        bgColor: 'bg-sky-50',
        description: 'Protect yourself and your business against third-party claims for damages or injuries.',
        features: [
          'Protection against third-party claims',
          'Legal defense cost coverage',
          'Coverage for damages and settlements',
          'Protection for professionals and businesses',
          'Customizable coverage limits'
        ],
        plans: [
          { name: 'Professional Indemnity', coverage: '50 Lakhs', premium: '15,000/year', benefits: ['Professional errors coverage', 'Legal costs', 'Reputation protection'] },
          { name: 'Directors & Officers', coverage: '1 Crore', premium: '100,000/year', benefits: ['Management liability', 'Personal asset protection', 'Legal defense'] },
          { name: 'Public Liability', coverage: '25 Lakhs', premium: '8,000/year', benefits: ['Third-party injuries', 'Property damage', 'Legal costs'] }
        ]
      },
      'personal-accident': {
        title: 'Personal Accident',
        icon: User,
        color: 'text-orange-500',
        bgColor: 'bg-orange-50',
        description: 'Financial protection against accidental injuries, disabilities or death with customizable coverage options.',
        features: [
          'Coverage for accidental death',
          'Permanent total disability benefit',
          'Temporary total disability weekly benefit',
          'Medical expenses reimbursement',
          'Education fund for children'
        ],
        plans: [
          { name: 'Individual Cover', coverage: '25 Lakhs', premium: '3,000/year', benefits: ['Accidental death', 'Disability cover', 'Medical expenses'] },
          { name: 'Family Package', coverage: '50 Lakhs', premium: '8,000/year', benefits: ['Coverage for whole family', 'Child education benefit', 'Higher limits'] },
          { name: 'Professional Plus', coverage: '1 Crore', premium: '15,000/year', benefits: ['24/7 worldwide cover', 'Adventure sports', 'Premium benefits'] }
        ]
      }
    };
    
    return categories[categorySlug as keyof typeof categories] || null;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-slate-200 rounded mb-4"></div>
            <div className="h-4 w-96 bg-slate-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!categoryData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-32 pb-16">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Category Not Found</h1>
            <p className="text-slate-600 mb-8">The insurance category you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/">Return Home</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const IconComponent = categoryData.icon;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${categoryData.bgColor} ${categoryData.color} mb-4`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{categoryData.title}</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {categoryData.description}
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryData.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${categoryData.bgColor} flex items-center justify-center mt-0.5 mr-3`}>
                      <ShieldCheck className={`w-4 h-4 ${categoryData.color}`} />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categoryData.plans.map((plan: any, index: number) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{plan.name}</h3>
                    <div className="text-primary text-2xl font-bold mb-2">₹{plan.premium}</div>
                    <div className="text-sm text-slate-500 mb-4">Coverage: ₹{plan.coverage}</div>
                    
                    <div className="space-y-2">
                      {plan.benefits.map((benefit: string, i: number) => (
                        <div key={i} className="flex items-start text-sm">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-2">
                            <span className="text-green-600 text-xs">✓</span>
                          </div>
                          <span className="text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full mt-6">Get Quote</Button>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" onClick={() => {
                toast({
                  title: "Contact Request Sent",
                  description: "Our team will contact you shortly!"
                });
              }}>Need Help? Contact Us</Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsuranceCategory;
