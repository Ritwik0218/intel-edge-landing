import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  TrendingUp, 
  Bell, 
  Users, 
  DollarSign, 
  Globe, 
  Briefcase, 
  MessageSquare,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Competitor monitoring dashboard" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 text-center px-4 animate-fade-in">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-float">
            🚀 Trusted by 500+ Growth Teams
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Monitor Your Competitors in Real-Time
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            For founders, marketers, and analysts who need instant competitive intelligence to stay ahead of the market.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Try it Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Request a Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            No credit card required • Setup in 2 minutes • Cancel anytime
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help businesses stay ahead with fast, reliable competitor insights. 
              Trusted by teams worldwide to monitor competition across all channels 
              and make data-driven strategic decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What You Get With Our Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete competitive intelligence at your fingertips
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card shadow-card hover:shadow-elegant transition-smooth animate-scale-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works in 3 Simple Steps
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Loved by Growth Teams, Founders & Analysts
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card shadow-card border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-foreground">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stay Ahead of Your Competitors?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of teams already monitoring their competition with real-time insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Try it Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Request a Demo
            </Button>
          </div>
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
            <p>&copy; 2024 CompetitorMonitor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: MessageSquare,
    title: "Competitor News & PR",
    description: "Track announcements, press releases, and media coverage in real-time"
  },
  {
    icon: Globe,
    title: "Website Monitoring",
    description: "Monitor UI changes, pricing updates, and new product launches"
  },
  {
    icon: Briefcase,
    title: "Job & Hiring Data",
    description: "Track competitor hiring patterns and team expansion signals"
  },
  {
    icon: TrendingUp,
    title: "Social Media Insights",
    description: "Monitor activity across X, LinkedIn, Reddit, and other platforms"
  },
  {
    icon: DollarSign,
    title: "Funding & Expenses",
    description: "Get alerts on funding rounds, acquisitions, and financial updates"
  },
  {
    icon: Eye,
    title: "Pricing Intelligence",
    description: "Real-time pricing changes and competitive positioning analysis"
  },
  {
    icon: Users,
    title: "Custom Competitor Inputs",
    description: "Add any competitor manually or import from existing lists"
  },
  {
    icon: Bell,
    title: "Weekly Auto-Reports",
    description: "Automated insights delivered to Slack, Notion, or Email"
  }
];

const steps = [
  {
    title: "Add Competitors",
    description: "Import or manually input competitor names and websites to start monitoring"
  },
  {
    title: "AI-Powered Monitoring",
    description: "Our AI tracks changes across multiple channels and data sources automatically"
  },
  {
    title: "Instant Alerts & Reports",
    description: "Get real-time updates delivered to Slack, Notion, or Email when changes occur"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Startup Founder",
    quote: "This tool saves us 10+ hours/week in competitive research. The Slack integration is a game-changer."
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager",
    quote: "The real-time alerts help us stay ahead of competitor launches. Essential for our product strategy."
  },
  {
    name: "Emily Johnson",
    role: "Growth Analyst",
    quote: "Finally, a comprehensive view of our competitive landscape. The insights drive all our marketing decisions."
  }
];

export default LandingPage;