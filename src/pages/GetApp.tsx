import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star, Bell, Map, Shield } from "lucide-react";

const GetApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero
          title="Get the LOTEL App"
          subtitle="Book hotels on the go with our mobile application"
          breadcrumb="Home / Get App"
        />

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Travel Smarter with Our App
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience seamless hotel booking with exclusive mobile-only
                  deals, instant notifications, and easy management of your
                  reservations.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Exclusive Mobile Deals</h3>
                    <p className="text-muted-foreground">
                      Get access to special discounts available only on our
                      mobile app
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Instant Notifications</h3>
                    <p className="text-muted-foreground">
                      Stay updated with booking confirmations and travel alerts
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Map className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Easy Navigation</h3>
                    <p className="text-muted-foreground">
                      Find hotels near you with integrated maps and GPS
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Secure Payments</h3>
                    <p className="text-muted-foreground">
                      Book with confidence using our encrypted payment system
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-5 w-5" />
                  Download for Android
                </Button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-[600px] w-[300px] rounded-[3rem] border-8 border-foreground/20 bg-gradient-to-br from-primary to-primary/80 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Smartphone className="h-32 w-32 text-primary-foreground/30" />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-card/90 backdrop-blur-sm p-4 rounded-xl">
                      <h3 className="font-bold mb-2">Coming Soon!</h3>
                      <p className="text-sm text-muted-foreground">
                        Our mobile app is under development and will be
                        available soon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-muted-foreground">App Downloads</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Hotels Available</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetApp;
