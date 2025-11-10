import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import DestinationCard from "@/components/DestinationCard";
import DealCard from "@/components/DealCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import marrakeshImg from "@/assets/marrakesh.jpg";
import rabatImg from "@/assets/rabat.jpg";
import casablancaImg from "@/assets/casablanca.jpg";
import barcelonaImg from "@/assets/barcelona.jpg";
import veniceImg from "@/assets/venice.jpg";
import niceImg from "@/assets/nice.jpg";

const Home = () => {
  const dealsRef = useRef<HTMLDivElement>(null);

  const destinations = [
    { name: "Marrakesh", image: marrakeshImg },
    { name: "Rabat", image: rabatImg },
    { name: "Casablanca", image: casablancaImg },
    { name: "Barcelona", image: barcelonaImg },
    { name: "Venice", image: veniceImg },
    { name: "Nice", image: niceImg },
  ];

  const deals = [
    {
      name: "Marrakesh",
      image: marrakeshImg,
      rating: "9/10",
      reviews: 100,
      price: 242,
      originalPrice: 310,
      discount: 22,
    },
    {
      name: "Rabat",
      image: rabatImg,
      rating: "9/10",
      reviews: 100,
      price: 242,
      originalPrice: 310,
      discount: 22,
    },
    {
      name: "Casablanca",
      image: casablancaImg,
      rating: "9/10",
      reviews: 100,
      price: 242,
      originalPrice: 310,
    },
    {
      name: "Barcelona",
      image: barcelonaImg,
      rating: "9/10",
      reviews: 100,
      price: 242,
      originalPrice: 310,
      discount: 22,
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (dealsRef.current) {
      const scrollAmount = 350;
      dealsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero
          title="CHOOSE WHERE TO STAY AND WE'LL SHOW YOU WHO WITH!"
          subtitle="Meet your people"
        />
        <SearchForm />

        {/* Get Inspired Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get inspired!
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover popular places for unforgettable adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <DestinationCard
                key={dest.name}
                name={dest.name}
                image={dest.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View More
            </Button>
          </div>
        </section>

        {/* Last Deals Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Last Deals!
              </h2>
              <p className="text-primary-foreground/90">
                Showing deals for: Aug 2 - Aug 4
              </p>
            </div>

            <div className="relative">
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
                onClick={() => scroll("left")}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div
                ref={dealsRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {deals.map((deal, index) => (
                  <div key={index} className="flex-shrink-0 w-80">
                    <DealCard {...deal} />
                  </div>
                ))}
              </div>

              <Button
                variant="secondary"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
                onClick={() => scroll("right")}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Trending Cities Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trend Cities!
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover popular places for unforgettable adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 4).map((dest) => (
              <DestinationCard
                key={dest.name}
                name={dest.name}
                image={dest.image}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
