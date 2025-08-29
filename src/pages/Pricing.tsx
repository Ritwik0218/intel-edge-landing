import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle,
  ArrowRight,
  Users,
  Building,
  TrendingUp,
  Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ROICalculator from "@/components/ROICalculator";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Enable the conversations that close.
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Give your sales team what they need to overcome objections and win more deals — even the tough ones. 
            Every plan includes automations, integrations, onboarding, and a dedicated success manager.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative ${plan.popular ? 'border-primary shadow-elegant' : 'border-border'} bg-gradient-card`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced Feature Comparison
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg shadow-card">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-6 font-semibold">Features</th>
                  <th className="text-center p-6 font-semibold">Essentials</th>
                  <th className="text-center p-6 font-semibold">Professional</th>
                  <th className="text-center p-6 font-semibold">Unlimited</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((category, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="p-6 font-medium">{category.name}</td>
                    <td className="text-center p-6">
                      {category.essentials ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : "—"}
                    </td>
                    <td className="text-center p-6">
                      {category.professional ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : "—"}
                    </td>
                    <td className="text-center p-6">
                      {category.unlimited ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20" style={{ backgroundColor: '#4B0082' }}>
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Calculate the ROI of Nirixion
              </h2>
              <p className="text-lg text-white/80">
                See how much you can save with competitive intelligence automation
              </p>
            </div>
            
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Integrations</h2>
            <p className="text-lg text-muted-foreground">
              Highlight deal-winning insights where your sales team already works.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-center justify-center w-24 h-16 bg-card rounded-lg shadow-card">
                <span className="text-sm font-semibold text-muted-foreground">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Customer Success</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {customerSuccess.map((item, index) => (
              <Card key={index} className="text-center bg-gradient-card shadow-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Leading Companies
            </h2>
          </div>
          
          <Card className="max-w-2xl mx-auto bg-gradient-card shadow-elegant">
            <CardHeader>
              <div className="flex items-center space-x-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <CardDescription className="text-foreground text-center">
                "The competitive intelligence automation has transformed how our sales team approaches deals. 
                We're closing more opportunities than ever before."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="font-semibold">Beatriz Cleves</p>
                <p className="text-sm text-muted-foreground">VP of Sales</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            {companies.map((company, index) => (
              <div key={index} className="text-sm font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See the Power of Competitive Intelligence Automation.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of teams already winning more deals with real-time competitive insights.
          </p>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/features" className="hover:text-primary transition-smooth">Features</a></li>
                <li><a href="/pricing" className="hover:text-primary transition-smooth">Pricing</a></li>
                <li><a href="/integrations" className="hover:text-primary transition-smooth">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-primary transition-smooth">About</a></li>
                <li><a href="/blog" className="hover:text-primary transition-smooth">Blog</a></li>
                <li><a href="/careers" className="hover:text-primary transition-smooth">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/docs" className="hover:text-primary transition-smooth">Documentation</a></li>
                <li><a href="/help" className="hover:text-primary transition-smooth">Help Center</a></li>
                <li><a href="/contact" className="hover:text-primary transition-smooth">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/terms" className="hover:text-primary transition-smooth">Terms of Use</a></li>
                <li><a href="/privacy" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
                <li><a href="/sitemap" className="hover:text-primary transition-smooth">Sitemap</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Kompyte. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const pricingPlans = [
  {
    name: "Essentials",
    description: "Perfect for small teams getting started",
    features: [
      "10 Companies Tracked",
      "25 User Licenses",
      "Unlimited Battlecards & Reports",
      "Unlimited Listening Alerts"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Most popular for growing teams",
    features: [
      "20 Companies Tracked",
      "100 User Licenses",
      "Unlimited Battlecards & Reports",
      "Unlimited Listening Alerts",
      "Unlimited Companies Database"
    ],
    popular: true
  },
  {
    name: "Unlimited",
    description: "For enterprise teams at scale",
    features: [
      "Unlimited Companies Tracked",
      "Unlimited User Licenses",
      "Unlimited Battlecards, Reports & Database",
      "Unlimited Listening Alerts",
      "Single Sign On (SSO)",
      "Advanced User Permission Mgmt"
    ],
    popular: false
  }
];

const featureComparison = [
  { name: "CI Automation", essentials: true, professional: true, unlimited: true },
  { name: "AI Insight Curation", essentials: true, professional: true, unlimited: true },
  { name: "Automated Company Profiles", essentials: false, professional: true, unlimited: true },
  { name: "Automation Workflows & Alerts", essentials: true, professional: true, unlimited: true },
  { name: "Sales Enablement & Reporting", essentials: true, professional: true, unlimited: true },
  { name: "ROI Reporting, Win/Loss Analysis", essentials: false, professional: true, unlimited: true },
  { name: "Battlecard Adoption Analytics", essentials: false, professional: false, unlimited: true },
  { name: "Custom Dashboards", essentials: false, professional: true, unlimited: true },
  { name: "Data Sources", essentials: true, professional: true, unlimited: true },
  { name: "Collaboration Tools", essentials: true, professional: true, unlimited: true },
  { name: "Support & Onboarding", essentials: true, professional: true, unlimited: true }
];

const integrations = [
  "Salesforce", "HubSpot", "Slack", "Teams", "Pipedrive", "Outreach"
];

const customerSuccess = [
  {
    icon: Users,
    title: "Dedicated Customer Success Manager",
    description: "Personal guidance from competitive intelligence experts"
  },
  {
    icon: Building,
    title: "Personalized onboarding & setup",
    description: "Custom configuration tailored to your sales process"
  },
  {
    icon: TrendingUp,
    title: "Hands-on consulting + ongoing optimization",
    description: "Continuous improvement and strategic guidance"
  }
];

const companies = [
  "Influitive", "Podium", "Sodexo", "Ruby", "TechTarget", "Outreach"
];

export default Pricing;