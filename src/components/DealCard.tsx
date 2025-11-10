import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface DealCardProps {
  name: string;
  image: string;
  rating: string;
  reviews: number;
  price: number;
  originalPrice: number;
  discount?: number;
}

const DealCard = ({
  name,
  image,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
}: DealCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-xl border bg-card/80 backdrop-blur-sm shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        {discount && (
          <div className="absolute top-4 right-4 bg-deal-badge text-deal-badge-foreground px-3 py-1 rounded-full text-sm font-bold shadow">
            -{discount}%
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-accent" />
            <span className="font-medium">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">${price}</span>
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            </div>
            <p className="text-sm text-muted-foreground">per night</p>
          </div>
          <Button size="sm" variant="secondary">Book Now</Button>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;
