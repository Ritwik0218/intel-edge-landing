import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-lg font-bold text-primary-foreground">K</span>
          </div>
          <span className="text-xl font-bold">nirixion</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-smooth">
            Plans
          </Link>
          <Link to="/resources" className="text-sm font-medium hover:text-primary transition-smooth">
            Resources
          </Link>
          <Link to="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;