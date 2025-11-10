import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar, Users } from "lucide-react";

const SearchForm = () => {
  return (
    <div className="container mx-auto px-4 -mt-12 relative z-20">
      <div className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] p-8 max-w-5xl mx-auto border border-border">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-6 items-center">
          <div className="space-y-2">
            <Label htmlFor="destination" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Destination
            </Label>
            <Input
              id="destination"
              placeholder="Where are you going?"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkin" className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Check-in
            </Label>
            <Input id="checkin" type="date" className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkout" className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Check-out
            </Label>
            <Input id="checkout" type="date" className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Guests
            </Label>
            <Input
              id="guests"
              type="number"
              placeholder="2"
              min="1"
              className="w-full"
            />
          </div>

          <div className="md:flex items-center md:justify-start">
            <Button size="lg" className="w-full md:w-auto">
              Search Hotels
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
