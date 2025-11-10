import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, mobile, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "transition-colors font-medium",
        mobile
          ? "block py-2 px-4 rounded-lg hover:bg-muted"
          : "hover:text-primary",
        isActive
          ? mobile
            ? "bg-primary text-primary-foreground"
            : "text-primary"
          : "text-foreground"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
