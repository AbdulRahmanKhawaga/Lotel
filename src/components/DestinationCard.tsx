import { Card } from "@/components/ui/card";

interface DestinationCardProps {
  name: string;
  image: string;
}

const DestinationCard = ({ name, image }: DestinationCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {name}
        </h3>
      </div>
    </Card>
  );
};

export default DestinationCard;
