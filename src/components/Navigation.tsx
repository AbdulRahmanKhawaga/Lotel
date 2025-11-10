import { Button } from "@/components/ui/button";
import { Menu, X, Globe, UserRound, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [language, setLanguage] = useState<"EN" | "FR" | "ES" | "AR">("EN");
  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (langRef.current && !langRef.current.contains(target)) setOpenLang(false);
      if (userRef.current && !userRef.current.contains(target)) setOpenUser(false);
    };
    document.addEventListener("pointerdown", onDocClick);
    return () => document.removeEventListener("pointerdown", onDocClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/70 dark:bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary tracking-tight">
            LOTEL
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/support">Support</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/get-app">Get the App</NavLink>
          </div>

          {/* Right-side controls */}
          <div className="flex items-center gap-2">
            {/* Language Menu */}
            <div ref={langRef} className="relative hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Change language"
                aria-expanded={openLang}
                onClick={() => setOpenLang((v) => !v)}
              >
                <Globe className="h-5 w-5" />
              </Button>
              {openLang && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl border bg-card shadow-lg p-1 animate-in fade-in-0 zoom-in-95">
                  {([
                    { code: "EN", label: "English" },
                    { code: "FR", label: "Français" },
                    { code: "ES", label: "Español" },
                    { code: "AR", label: "العربية" },
                  ] as const).map((opt) => (
                    <button
                      key={opt.code}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted ${
                        language === opt.code ? "bg-muted" : ""
                      }`}
                      onClick={() => setLanguage(opt.code)}
                    >
                      {language === opt.code && <Check className="h-4 w-4 text-primary" />}
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Menu */}
            <div ref={userRef} className="relative hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Account"
                aria-expanded={openUser}
                onClick={() => setOpenUser((v) => !v)}
              >
                <UserRound className="h-5 w-5" />
              </Button>
              {openUser && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl border bg-card shadow-lg p-1 animate-in fade-in-0 zoom-in-95">
                  <a href="/login" className="block rounded-lg px-3 py-2 text-sm hover:bg-muted">Login</a>
                  <a href="/register" className="block rounded-lg px-3 py-2 text-sm hover:bg-muted">Register</a>
                </div>
              )}
            </div>

            <ThemeToggle />
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <NavLink href="/" mobile onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink href="/about" mobile onClick={() => setIsMenuOpen(false)}>
              About Us
            </NavLink>
            <NavLink href="/support" mobile onClick={() => setIsMenuOpen(false)}>
              Support
            </NavLink>
            <NavLink href="/contact" mobile onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink href="/get-app" mobile onClick={() => setIsMenuOpen(false)}>
              Get the App
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
