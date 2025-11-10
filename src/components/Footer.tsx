import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        {/* Newsletter / CTA Bar */}
        <div className="mb-12">
          <div className="bg-primary text-primary-foreground rounded-2xl px-6 py-8 shadow-[var(--shadow-elegant)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Join our adventurous community!</h3>
                <p className="text-white/90">Sign up to our newsletter for deals, inspo, and other travel treats!</p>
              </div>
            </div>
            <form className="relative w-full md:w-[380px]">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="w-full rounded-full bg-white/20 placeholder-white/80 text-white border-white/30 focus-visible:ring-white/60"
              />
              <Button type="submit" size="icon" className="absolute right-1.5 top-1.5 h-10 w-10 rounded-full bg-accent text-accent-foreground shadow">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + Social */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LOTEL</h3>
            <p className="text-muted-foreground mb-6">
              Discover amazing places and create unforgettable memories with our curated selection of hotels worldwide.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Be Partner</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="/support" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-4">Contact Information</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-sm text-muted-foreground">Location:</p>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">Morocco</span>
                </div>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">Email:</p>
                <div className="flex items-center gap-2 mt-1">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">lotel@test.com</span>
                </div>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">Phone:</p>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">+000000000000</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t text-center text-muted-foreground">
          <p>
            Copyright © <span className="font-semibold">LOTEL</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
