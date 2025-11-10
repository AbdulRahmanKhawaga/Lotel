import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import receptionImg from "@/assets/hotel-reception.jpg";
import roomImg from "@/assets/hotel-room.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero title="About Us" breadcrumb="Home / About Us" />

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
                  <img
                    src={receptionImg}
                    alt="Hotel Reception"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] mt-12">
                  <img
                    src={roomImg}
                    alt="Hotel Room"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                The world's best Hotel
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide exceptional hospitality services that transform your
                travel experience into unforgettable memories. Our carefully
                curated selection of hotels ensures you find the perfect
                accommodation for every journey.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of expertise in the hospitality industry, we connect
                travelers with premium accommodations worldwide. Our commitment
                to excellence and customer satisfaction has made us a trusted
                partner for thousands of guests.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <p className="text-muted-foreground">Partner Hotels</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">50K+</div>
                  <p className="text-muted-foreground">Happy Guests</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">30+</div>
                  <p className="text-muted-foreground">Countries</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <p className="text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                What makes us different
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-elegant)] text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service,
                  ensuring the highest standards.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-elegant)] text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Care</h3>
                <p className="text-muted-foreground">
                  Your comfort and satisfaction are our top priorities. We care
                  about every detail.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-elegant)] text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Global Reach</h3>
                <p className="text-muted-foreground">
                  Access to amazing destinations worldwide, bringing the world
                  to your fingertips.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
