import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { ModeToggle } from './mode-toogle';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="hidden sm:inline-flex">
              Se connecter
            </Button>
          </Link>
          <Link to="/signup">
            <Button>
              S'inscrire
            </Button>
          </Link>
          <ModeToggle />
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
