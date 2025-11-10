import heroImg from "@/assets/hero-hotel.jpg";

interface HeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const Hero = ({ title, subtitle, breadcrumb }: HeroProps) => {
  return (
    <section className="relative h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Overlay: dark at top, softer at bottom + subtle radial center */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/15" />
        <div className="absolute inset-0 [background:radial-gradient(80%_60%_at_50%_40%,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_70%)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/85 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            {subtitle}
          </p>
        )}
        {breadcrumb && (
          <p className="text-white/80 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            {breadcrumb}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
