import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Headphones,
  ArrowRight 
} from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Resources & Learning Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to master competitive intelligence and drive more sales success.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground mb-4">
                    {category.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    Explore {category.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            More Resources Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building an extensive library of competitive intelligence resources. 
            Stay tuned for guides, templates, and best practices.
          </p>
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
            <p>&copy; 2024 nirixion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Guides",
    description: "Comprehensive guides to competitive intelligence best practices"
  },
  {
    icon: Video,
    title: "Videos",
    description: "Video tutorials and product demonstrations"
  },
  {
    icon: FileText,
    title: "Templates",
    description: "Ready-to-use templates for battlecards and reports"
  },
  {
    icon: Headphones,
    title: "Webinars",
    description: "Live and recorded webinars from industry experts"
  }
];

export default Resources;