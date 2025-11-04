import heroImage from "@/assets/hero-office.jpg";
import { Link } from "react-router-dom";
import { Briefcase, Info } from "lucide-react"; 

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 lg:py-20"> 
      <div className="absolute inset-0 bg-black/20" /> 
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end min-h-[50vh]">
          
          {/* Columna Izquierda (Se mantiene igual) */}
          <div className="w-full lg:w-1/2 text-white text-left pt-12 pb-10 lg:pb-0 pr-8"> 
            <h1 className="mb-6 text-7xl font-bold leading-tight">
              Inicia Tu <br /> Trayectoria Profesional
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Descubre oportunidades de práctica.
              <br/>Conoce tus postulaciones.
              <br/>Documenta tu jornada.
            </p>
            
            <Link
              to="/practices"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold rounded-lg border-2 border-accent text-white bg-transparent hover:bg-accent hover:text-black transition duration-300"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Postula aquí
            </Link>
          </div>

          {/* Columna Derecha: Usa el componente modular ProcessTimeline */}
          <div className="w-full lg:w-1/2 flex flex-col justify-end">
            {/* Botón Documentación Oficial */}
            <div className="w-full flex justify-center lg:justify-end">
              <a 
                href="https://drive.google.com/file/d/1jLci7N4Z3PwNB6IY5OoEmJ3Cpc4mCEDp/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <button 
                  className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold rounded-lg border-2 border-accent text-white bg-transparent hover:bg-accent hover:text-black transition duration-300"
                >
                  <Info className="h-6 w-6 mr-2" /> 
                  Documentación Oficial
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;