import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-office.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24">
      <div className="absolute inset-0 bg-black/20" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight">
            Inicia Tu Trayectoria Profesional
          </h1>
          <p className="mb-8 text-xl text-white/90">
            Descubre oportunidades de práctica significativas, rastrea tus aplicaciones y documenta tu jornada de aprendizaje con nuestro portal integral.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;