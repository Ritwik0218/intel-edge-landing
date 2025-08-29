import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ROICalculator = () => {
  const [salesReps, setSalesReps] = useState<number>(15);
  const [competitors, setCompetitors] = useState<number>(20);
  const [competitiveness, setCompetitiveness] = useState<string>("medium");
  
  const [researchSavings, setResearchSavings] = useState<number>(0);
  const [preventedLosses, setPreventedLosses] = useState<number>(0);
  const [totalROI, setTotalROI] = useState<number>(0);

  const getCompetitivenessMultiplier = (level: string) => {
    switch (level) {
      case "light": return 0.25;
      case "medium": return 0.5;
      case "high": return 0.75;
      default: return 0.5;
    }
  };

  const getCompetitivenessLabel = (level: string) => {
    switch (level) {
      case "light": return "Light (10–25%)";
      case "medium": return "Competitive (25–50%)";
      case "high": return "Highly-Competitive (50–75%)";
      default: return "Competitive (25–50%)";
    }
  };

  useEffect(() => {
    const savings = salesReps * competitors * 600;
    const losses = salesReps * 5000 * getCompetitivenessMultiplier(competitiveness);
    const total = savings + losses;
    
    setResearchSavings(savings);
    setPreventedLosses(losses);
    setTotalROI(total);
  }, [salesReps, competitors, competitiveness]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
      <CardContent className="p-8">
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="space-y-2">
            <Label htmlFor="salesReps" className="text-white font-medium">
              # of Sales Reps
            </Label>
            <Input 
              id="salesReps" 
              type="number" 
              value={salesReps}
              onChange={(e) => setSalesReps(parseInt(e.target.value) || 0)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              min="1"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="competitors" className="text-white font-medium">
              # of Competitors
            </Label>
            <Input 
              id="competitors" 
              type="number" 
              value={competitors}
              onChange={(e) => setCompetitors(parseInt(e.target.value) || 0)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              min="1"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="competitiveness" className="text-white font-medium">
              Competitiveness
            </Label>
            <Select value={competitiveness} onValueChange={setCompetitiveness}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue>
                  {getCompetitivenessLabel(competitiveness)}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="light">Light (10–25%)</SelectItem>
                <SelectItem value="medium">Competitive (25–50%)</SelectItem>
                <SelectItem value="high">Highly-Competitive (50–75%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Outputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {formatCurrency(researchSavings)}
              </div>
              <div className="text-white/80 font-medium">Research Savings</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {formatCurrency(preventedLosses)}
              </div>
              <div className="text-white/80 font-medium">Prevented Losses</div>
            </CardContent>
          </Card>
        </div>

        {/* Total ROI - Highlighted */}
        <Card className="bg-white/20 border-white/30 mb-8">
          <CardContent className="p-8 text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {formatCurrency(totalROI)}
            </div>
            <div className="text-xl text-white/90 font-semibold">Total ROI</div>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 font-semibold transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#FF6B35', 
              color: 'white',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E55A2B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF6B35';
            }}
          >
            Request a Breakdown
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ROICalculator;