
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Calculator, Car, Heart, HomeIcon, Shield, User, Umbrella, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Static data for demonstration
const vehicleInsuranceTypes = [
  { id: 'third-party', name: 'Third Party Insurance' },
  { id: 'comprehensive', name: 'Comprehensive Insurance' },
  { id: 'premium', name: 'Premium Comprehensive' }
];

const vehicleTypes = [
  { id: 'bike', name: 'Motorcycle/Scooter' },
  { id: 'car', name: 'Car/Jeep/Van' },
  { id: 'commercial', name: 'Commercial Vehicle' }
];

const vehicleValues = [
  { value: 500000, display: '5 Lakhs' },
  { value: 1000000, display: '10 Lakhs' },
  { value: 1500000, display: '15 Lakhs' },
  { value: 2000000, display: '20 Lakhs' },
  { value: 2500000, display: '25 Lakhs' },
  { value: 3000000, display: '30 Lakhs' },
  { value: 4000000, display: '40 Lakhs' },
  { value: 5000000, display: '50 Lakhs' },
];

const healthCoverages = [
  { value: 100000, display: '1 Lakh' },
  { value: 200000, display: '2 Lakhs' },
  { value: 300000, display: '3 Lakhs' },
  { value: 500000, display: '5 Lakhs' },
  { value: 1000000, display: '10 Lakhs' },
  { value: 1500000, display: '15 Lakhs' },
  { value: 2000000, display: '20 Lakhs' },
];

const healthPlans = [
  { id: 'individual', name: 'Individual Plan' },
  { id: 'family', name: 'Family Floater' },
  { id: 'senior', name: 'Senior Citizen' },
  { id: 'critical', name: 'Critical Illness' },
];

const ageGroups = [
  { id: '18-30', name: '18-30 years' },
  { id: '31-40', name: '31-40 years' },
  { id: '41-50', name: '41-50 years' },
  { id: '51-60', name: '51-60 years' },
  { id: '60+', name: 'Above 60 years' },
];

const PremiumCalculator = () => {
  const [activeTab, setActiveTab] = useState('vehicle');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<null | { premium: number, policies: any[] }>(null);
  const { toast } = useToast();
  
  // Vehicle insurance state
  const [vehicleType, setVehicleType] = useState('');
  const [insuranceType, setInsuranceType] = useState('');
  const [vehicleAge, setVehicleAge] = useState(0);
  const [vehicleValue, setVehicleValue] = useState<number | null>(null);
  
  // Health insurance state
  const [healthPlan, setHealthPlan] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [sumInsured, setSumInsured] = useState<number | null>(null);
  const [familyMembers, setFamilyMembers] = useState(1);

  // Life insurance state
  const [age, setAge] = useState(30);
  const [coverageAmount, setCoverageAmount] = useState(1000000);
  const [term, setTerm] = useState(20);
  const [smoker, setSmoker] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const calculatePremium = () => {
    setLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      let calculatedPremium = 0;
      let mockPolicies = [];
      
      if (activeTab === 'vehicle' && vehicleType && insuranceType && vehicleValue) {
        // Mock calculation for vehicle insurance
        const baseRate = insuranceType === 'third-party' ? 0.02 : insuranceType === 'comprehensive' ? 0.035 : 0.05;
        const ageMultiplier = 1 + (vehicleAge * 0.05);
        calculatedPremium = vehicleValue * baseRate * ageMultiplier;
        
        // Mock policies
        mockPolicies = [
          { 
            name: 'Sagarmatha Insurance', 
            premium: Math.round(calculatedPremium * 0.9),
            coverage: vehicleValue,
            benefits: ['24/7 Roadside Assistance', 'Cashless Claims', 'No Claim Bonus'] 
          },
          { 
            name: 'Nepal Insurance', 
            premium: Math.round(calculatedPremium * 1.0),
            coverage: vehicleValue,
            benefits: ['Express Claims Settlement', 'Free Towing Service', 'Depreciation Cover'] 
          },
          { 
            name: 'Himalayan General Insurance', 
            premium: Math.round(calculatedPremium * 1.1),
            coverage: vehicleValue,
            benefits: ['Zero Depreciation', 'Engine Protection', 'Return to Invoice'] 
          }
        ];
      } 
      else if (activeTab === 'health' && healthPlan && ageGroup && sumInsured) {
        // Mock calculation for health insurance
        const baseRate = healthPlan === 'individual' ? 0.02 : healthPlan === 'family' ? 0.025 : healthPlan === 'senior' ? 0.045 : 0.035;
        const ageMultiplier = ageGroup === '18-30' ? 1 : ageGroup === '31-40' ? 1.2 : ageGroup === '41-50' ? 1.5 : ageGroup === '51-60' ? 1.8 : 2.2;
        const memberMultiplier = healthPlan === 'family' ? (1 + (familyMembers - 1) * 0.5) : 1;
        
        calculatedPremium = sumInsured * baseRate * ageMultiplier * memberMultiplier;
        
        // Mock policies
        mockPolicies = [
          { 
            name: 'Prime Health Insurance', 
            premium: Math.round(calculatedPremium * 0.9),
            coverage: sumInsured,
            benefits: ['Cashless Treatment', 'No Medical Check-up', 'Pre-existing Disease Cover after 3 years'] 
          },
          { 
            name: 'Nepal Life Health+', 
            premium: Math.round(calculatedPremium * 1.0),
            coverage: sumInsured,
            benefits: ['Day-care Procedures', 'Maternity Cover', 'Ambulance Service'] 
          },
          { 
            name: 'Himalayan Health Care', 
            premium: Math.round(calculatedPremium * 1.15),
            coverage: sumInsured,
            benefits: ['Pre & Post Hospitalization Cover', 'No Room Rent Capping', 'Free Health Check-up'] 
          }
        ];
      }
      else if (activeTab === 'life') {
        // Mock calculation for life insurance
        const baseRate = 0.005;  // 0.5% base rate
        const ageMultiplier = 1 + ((age - 25) * 0.03);  // 3% increase per year over age 25
        const smokerMultiplier = smoker ? 1.5 : 1;  // 50% extra for smokers
        const termMultiplier = 1 + (term * 0.02);  // 2% increase per year of term
        
        calculatedPremium = (coverageAmount * baseRate * ageMultiplier * smokerMultiplier) / termMultiplier;
        
        // Mock policies
        mockPolicies = [
          { 
            name: 'Reliable Life Secure', 
            premium: Math.round(calculatedPremium * 0.95),
            coverage: coverageAmount,
            benefits: ['Terminal Illness Benefit', 'Premium Waiver', 'Guaranteed Returns'] 
          },
          { 
            name: 'Nepal Life Shield', 
            premium: Math.round(calculatedPremium * 1.0),
            coverage: coverageAmount,
            benefits: ['Accidental Death Benefit', 'Critical Illness Cover', 'Tax Benefits'] 
          },
          { 
            name: 'Sagarmatha Life Protect+', 
            premium: Math.round(calculatedPremium * 1.1),
            coverage: coverageAmount,
            benefits: ['Family Income Benefit', 'Disability Coverage', 'Funeral Expenses Cover'] 
          }
        ];
      }
      
      setResults({ premium: Math.round(calculatedPremium), policies: mockPolicies });
      setLoading(false);
      
      toast({
        title: "Calculation Complete",
        description: "We've found the best insurance deals for you!",
      });
    }, 1500);
  };
  
  const resetCalculator = () => {
    setVehicleType('');
    setInsuranceType('');
    setVehicleAge(0);
    setVehicleValue(null);
    setHealthPlan('');
    setAgeGroup('');
    setSumInsured(null);
    setFamilyMembers(1);
    setAge(30);
    setCoverageAmount(1000000);
    setTerm(20);
    setSmoker(false);
    setResults(null);
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    resetCalculator();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Calculator className="w-8 h-8" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Premium Calculator</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Get accurate premium estimates instantly. Compare quotes from Nepal's top insurance providers and find the best coverage at the best price.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Tabs 
                defaultValue="vehicle" 
                value={activeTab} 
                onValueChange={handleTabChange}
                className="w-full"
              >
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="vehicle" className="flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    <span>Vehicle</span>
                  </TabsTrigger>
                  <TabsTrigger value="health" className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    <span>Health</span>
                  </TabsTrigger>
                  <TabsTrigger value="life" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Life</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="vehicle">
                  <Card>
                    <CardHeader>
                      <CardTitle>Vehicle Insurance Calculator</CardTitle>
                      <CardDescription>
                        Calculate premiums for two-wheelers, cars, and commercial vehicles
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vehicle-type">Vehicle Type</Label>
                          <Select value={vehicleType} onValueChange={setVehicleType}>
                            <SelectTrigger id="vehicle-type">
                              <SelectValue placeholder="Select vehicle type" />
                            </SelectTrigger>
                            <SelectContent>
                              {vehicleTypes.map(type => (
                                <SelectItem key={type.id} value={type.id}>
                                  {type.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="insurance-type">Insurance Type</Label>
                          <Select value={insuranceType} onValueChange={setInsuranceType}>
                            <SelectTrigger id="insurance-type">
                              <SelectValue placeholder="Select insurance type" />
                            </SelectTrigger>
                            <SelectContent>
                              {vehicleInsuranceTypes.map(type => (
                                <SelectItem key={type.id} value={type.id}>
                                  {type.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="vehicle-age">Vehicle Age (years)</Label>
                        <div className="flex items-center gap-4">
                          <Slider
                            id="vehicle-age"
                            min={0}
                            max={15}
                            step={1}
                            value={[vehicleAge]}
                            onValueChange={(vals) => setVehicleAge(vals[0])}
                            className="flex-1"
                          />
                          <span className="font-medium w-8 text-center">{vehicleAge}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="vehicle-value">Vehicle Value (NPR)</Label>
                        <Select 
                          value={vehicleValue ? vehicleValue.toString() : ''} 
                          onValueChange={(val) => setVehicleValue(Number(val))}
                        >
                          <SelectTrigger id="vehicle-value">
                            <SelectValue placeholder="Select vehicle value" />
                          </SelectTrigger>
                          <SelectContent>
                            {vehicleValues.map(val => (
                              <SelectItem key={val.value} value={val.value.toString()}>
                                NPR {val.display}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 btn-scale"
                        onClick={calculatePremium}
                        disabled={!vehicleType || !insuranceType || vehicleValue === null || loading}
                      >
                        {loading ? "Calculating..." : "Calculate Premium"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="health">
                  <Card>
                    <CardHeader>
                      <CardTitle>Health Insurance Calculator</CardTitle>
                      <CardDescription>
                        Estimate premiums for individual, family, and senior citizen health plans
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="health-plan">Plan Type</Label>
                          <Select value={healthPlan} onValueChange={setHealthPlan}>
                            <SelectTrigger id="health-plan">
                              <SelectValue placeholder="Select plan type" />
                            </SelectTrigger>
                            <SelectContent>
                              {healthPlans.map(plan => (
                                <SelectItem key={plan.id} value={plan.id}>
                                  {plan.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="age-group">Age Group</Label>
                          <Select value={ageGroup} onValueChange={setAgeGroup}>
                            <SelectTrigger id="age-group">
                              <SelectValue placeholder="Select age group" />
                            </SelectTrigger>
                            <SelectContent>
                              {ageGroups.map(group => (
                                <SelectItem key={group.id} value={group.id}>
                                  {group.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      {healthPlan === 'family' && (
                        <div className="space-y-2">
                          <Label htmlFor="family-members">Number of Family Members</Label>
                          <div className="flex items-center gap-4">
                            <Slider
                              id="family-members"
                              min={1}
                              max={6}
                              step={1}
                              value={[familyMembers]}
                              onValueChange={(vals) => setFamilyMembers(vals[0])}
                              className="flex-1"
                            />
                            <span className="font-medium w-8 text-center">{familyMembers}</span>
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        <Label htmlFor="sum-insured">Sum Insured (NPR)</Label>
                        <Select 
                          value={sumInsured ? sumInsured.toString() : ''} 
                          onValueChange={(val) => setSumInsured(Number(val))}
                        >
                          <SelectTrigger id="sum-insured">
                            <SelectValue placeholder="Select coverage amount" />
                          </SelectTrigger>
                          <SelectContent>
                            {healthCoverages.map(coverage => (
                              <SelectItem key={coverage.value} value={coverage.value.toString()}>
                                NPR {coverage.display}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 btn-scale"
                        onClick={calculatePremium}
                        disabled={!healthPlan || !ageGroup || sumInsured === null || loading}
                      >
                        {loading ? "Calculating..." : "Calculate Premium"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="life">
                  <Card>
                    <CardHeader>
                      <CardTitle>Life Insurance Calculator</CardTitle>
                      <CardDescription>
                        Calculate term life insurance premiums based on your age and requirements
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Your Age</Label>
                        <div className="flex items-center gap-4">
                          <Slider
                            id="age"
                            min={18}
                            max={70}
                            step={1}
                            value={[age]}
                            onValueChange={(vals) => setAge(vals[0])}
                            className="flex-1"
                          />
                          <span className="font-medium w-12 text-center">{age} years</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="coverage">Coverage Amount (NPR)</Label>
                        <div className="flex items-center gap-4">
                          <Slider
                            id="coverage"
                            min={500000}
                            max={10000000}
                            step={500000}
                            value={[coverageAmount]}
                            onValueChange={(vals) => setCoverageAmount(vals[0])}
                            className="flex-1"
                          />
                          <span className="font-medium text-right w-32">
                            NPR {(coverageAmount / 100000).toFixed(1)} Lakhs
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="term">Policy Term (years)</Label>
                        <div className="flex items-center gap-4">
                          <Slider
                            id="term"
                            min={5}
                            max={40}
                            step={5}
                            value={[term]}
                            onValueChange={(vals) => setTerm(vals[0])}
                            className="flex-1"
                          />
                          <span className="font-medium w-12 text-center">{term} years</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 pt-2">
                        <input
                          type="checkbox"
                          id="smoker"
                          checked={smoker}
                          onChange={(e) => setSmoker(e.target.checked)}
                          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <Label htmlFor="smoker">Do you smoke?</Label>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 btn-scale"
                        onClick={calculatePremium}
                        disabled={loading}
                      >
                        {loading ? "Calculating..." : "Calculate Premium"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
            
            {results && (
              <motion.div 
                className="mt-10 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Your Estimated Premium</h2>
                  <p className="text-slate-600 mb-4">
                    Based on your inputs, we've calculated the following premium estimates:
                  </p>
                  <div className="text-4xl font-bold text-primary">
                    NPR {results.premium.toLocaleString()}
                    <span className="text-lg font-normal text-slate-500">/year</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Recommended Policies
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {results.policies.map((policy, index) => (
                      <Card key={index} className={index === 0 ? "border-primary/50 shadow-md" : ""}>
                        {index === 0 && (
                          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                            <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                              BEST DEAL
                            </div>
                          </div>
                        )}
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" />
                            <span>{policy.name}</span>
                          </CardTitle>
                          <CardDescription>
                            Coverage: NPR {policy.coverage.toLocaleString()}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="text-2xl font-bold text-slate-900 mb-3">
                            NPR {policy.premium.toLocaleString()}
                            <span className="text-sm font-normal text-slate-500">/year</span>
                          </div>
                          <div className="space-y-1">
                            {policy.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-start text-sm">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-2">
                                  <span className="text-green-600 text-xs">✓</span>
                                </div>
                                <span className="text-slate-600">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant={index === 0 ? "default" : "outline"} className="w-full">
                            {index === 0 ? "Buy Now" : "View Details"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button variant="outline" onClick={resetCalculator}>
                    Reset Calculator
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PremiumCalculator;
