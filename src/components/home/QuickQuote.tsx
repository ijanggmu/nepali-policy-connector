
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Shield } from 'lucide-react';

const QuickQuote = () => {
  const [step, setStep] = useState(1);
  const [insuranceType, setInsuranceType] = useState('');
  
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  return (
    <section className="py-16 md:py-24 relative bg-pattern-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/10 text-primary rounded-full inline-flex items-center px-3 py-1 text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-1" />
              Quick Quote
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Get Your Personalized Insurance Quote in Minutes
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Answer a few simple questions and get instant quotes from Nepal's leading insurance providers. Compare, customize, and choose the best policy for your needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">1</div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Select your insurance type</h3>
                  <p className="text-slate-600">Choose from our wide range of insurance products</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">2</div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Enter your details</h3>
                  <p className="text-slate-600">Provide basic information for an accurate quote</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">3</div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Compare and choose</h3>
                  <p className="text-slate-600">View quotes from multiple insurers and select the best one</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/premium-calculator">
                  <Button variant="outline" className="flex items-center gap-2 btn-scale rounded-full">
                    <Calculator className="w-4 h-4" />
                    <span>Use Premium Calculator</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-medium p-6 md:p-8 border border-slate-100 glow-primary">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-slate-900">Get Your Quote</h3>
                  <div className="text-sm text-slate-500">Step {step} of 3</div>
                </div>
                
                <div className="w-full bg-slate-100 h-2 rounded-full mb-8">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {step === 1 && (
                <motion.div 
                  className="space-y-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item}>
                    <Label htmlFor="insurance-type" className="mb-2 block text-slate-700">
                      Insurance Type
                    </Label>
                    <Select value={insuranceType} onValueChange={setInsuranceType}>
                      <SelectTrigger id="insurance-type" className="w-full">
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="health">Health Insurance</SelectItem>
                        <SelectItem value="life">Life Insurance</SelectItem>
                        <SelectItem value="vehicle">Vehicle Insurance</SelectItem>
                        <SelectItem value="travel">Travel Insurance</SelectItem>
                        <SelectItem value="property">Property Insurance</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  {insuranceType === 'health' && (
                    <>
                      <motion.div variants={item}>
                        <Label htmlFor="coverage" className="mb-2 block text-slate-700">
                          Coverage Type
                        </Label>
                        <Select>
                          <SelectTrigger id="coverage" className="w-full">
                            <SelectValue placeholder="Select coverage type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="individual">Individual</SelectItem>
                            <SelectItem value="family">Family</SelectItem>
                            <SelectItem value="senior">Senior Citizen</SelectItem>
                            <SelectItem value="maternity">Maternity</SelectItem>
                            <SelectItem value="critical">Critical Illness</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    
                      <motion.div variants={item}>
                        <Label htmlFor="sum-insured" className="mb-2 block text-slate-700">
                          Sum Insured (NPR)
                        </Label>
                        <Select>
                          <SelectTrigger id="sum-insured" className="w-full">
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="100000">₹ 1 Lakh</SelectItem>
                            <SelectItem value="300000">₹ 3 Lakhs</SelectItem>
                            <SelectItem value="500000">₹ 5 Lakhs</SelectItem>
                            <SelectItem value="1000000">₹ 10 Lakhs</SelectItem>
                            <SelectItem value="2000000">₹ 20 Lakhs</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </>
                  )}

                  {insuranceType === 'vehicle' && (
                    <>
                      <motion.div variants={item}>
                        <Label htmlFor="vehicle-type" className="mb-2 block text-slate-700">
                          Vehicle Type
                        </Label>
                        <Select>
                          <SelectTrigger id="vehicle-type" className="w-full">
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="car">Car</SelectItem>
                            <SelectItem value="bike">Bike/Scooter</SelectItem>
                            <SelectItem value="commercial">Commercial Vehicle</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                      
                      <motion.div variants={item}>
                        <Label htmlFor="vehicle-age" className="mb-2 block text-slate-700">
                          Vehicle Age
                        </Label>
                        <Select>
                          <SelectTrigger id="vehicle-age" className="w-full">
                            <SelectValue placeholder="Select vehicle age" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New Vehicle</SelectItem>
                            <SelectItem value="0-3">0-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              )}
              
              {step === 2 && (
                <motion.div 
                  className="space-y-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item}>
                    <Label htmlFor="full-name" className="mb-2 block text-slate-700">
                      Full Name
                    </Label>
                    <Input id="full-name" placeholder="Enter your full name" />
                  </motion.div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div variants={item}>
                      <Label htmlFor="phone" className="mb-2 block text-slate-700">
                        Phone Number
                      </Label>
                      <Input id="phone" placeholder="e.g., 9801234567" />
                    </motion.div>
                    
                    <motion.div variants={item}>
                      <Label htmlFor="email" className="mb-2 block text-slate-700">
                        Email Address
                      </Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </motion.div>
                  </div>
                  
                  <motion.div variants={item}>
                    <Label htmlFor="age" className="mb-2 block text-slate-700">
                      Age
                    </Label>
                    <Input id="age" type="number" placeholder="Enter your age" />
                  </motion.div>
                  
                  <motion.div variants={item}>
                    <Label htmlFor="location" className="mb-2 block text-slate-700">
                      Location
                    </Label>
                    <Select>
                      <SelectTrigger id="location" className="w-full">
                        <SelectValue placeholder="Select your location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kathmandu">Kathmandu</SelectItem>
                        <SelectItem value="pokhara">Pokhara</SelectItem>
                        <SelectItem value="lalitpur">Lalitpur</SelectItem>
                        <SelectItem value="bhaktapur">Bhaktapur</SelectItem>
                        <SelectItem value="biratnagar">Biratnagar</SelectItem>
                        <SelectItem value="birgunj">Birgunj</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </motion.div>
              )}
              
              {step === 3 && (
                <motion.div 
                  className="space-y-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item} className="text-center px-4 py-8">
                    <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Ready to View Your Quotes!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Click the button below to view personalized quotes from Nepal's top insurers
                    </p>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 gap-2 h-12 btn-scale"
                    >
                      View My Quotes
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                  
                  <motion.div variants={item}>
                    <Separator className="my-4" />
                    <div className="text-center text-sm text-slate-500">
                      <p>By proceeding, you agree to our Terms of Service and Privacy Policy</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
              
              {step < 3 && (
                <div className="mt-8 flex justify-between">
                  {step > 1 ? (
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  <Button 
                    onClick={handleNext} 
                    disabled={step === 1 && !insuranceType}
                    className="bg-primary hover:bg-primary/90 btn-scale"
                  >
                    Continue
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/2 h-64 bg-primary/5 -z-10 rounded-tl-[100px] opacity-70"></div>
    </section>
  );
};

export default QuickQuote;
