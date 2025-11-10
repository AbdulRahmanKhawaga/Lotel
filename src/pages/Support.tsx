import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HelpCircle, MessageCircle, Book, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const faqs = [
    {
      question: "How do I book a hotel?",
      answer:
        "Simply search for your destination, select your check-in and check-out dates, choose the number of guests, and click 'Search Hotels'. Browse through available options and click 'Book Now' on your preferred hotel.",
    },
    {
      question: "Can I cancel or modify my reservation?",
      answer:
        "Yes, cancellation and modification policies vary by hotel. You can view the specific policy on the hotel details page before booking. To cancel or modify, go to 'My Bookings' in your account.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. All payments are processed securely through our encrypted payment system.",
    },
    {
      question: "Do you offer group bookings?",
      answer:
        "Yes, we offer special rates for group bookings of 5 rooms or more. Please contact our support team with your requirements, and we'll provide you with a customized quote.",
    },
    {
      question: "Is travel insurance included?",
      answer:
        "Travel insurance is not automatically included but can be added during the booking process. We highly recommend adding travel insurance for peace of mind during your trip.",
    },
    {
      question: "How can I contact the hotel directly?",
      answer:
        "Once your booking is confirmed, you'll receive the hotel's contact information in your confirmation email. You can also find this information in 'My Bookings' section of your account.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero
          title="Support Center"
          subtitle="We're here to help you 24/7"
          breadcrumb="Home / Support"
        />

        {/* Quick Help Cards */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <Card className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">FAQs</h3>
              <p className="text-sm text-muted-foreground">
                Find quick answers
              </p>
            </Card>

            <Link to="/contact">
              <Card className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all cursor-pointer h-full">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Chat with support
                </p>
              </Card>
            </Link>

            <Card className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Guides</h3>
              <p className="text-sm text-muted-foreground">Browse tutorials</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">Phone support</p>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is available
              24/7 to assist you with any questions or concerns.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Support Team
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
