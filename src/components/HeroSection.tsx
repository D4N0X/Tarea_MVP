import heroImage from "@/assets/hero-office.jpg";
import { Link } from "react-router-dom";
import { Briefcase, Info, FileQuestionIcon } from "lucide-react"; 

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 lg:py-8"> 
      <div className="absolute inset-0 bg-black/20" /> 
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-[50vh] text-center">
          {/* Alto */}
          <div className="w-full">
            <h1 className="mb-6 text-7xl font-bold leading-tight">
              Inicia Tu <br /> Trayectoria Profesional
            </h1>
            <div className="mb-8 text-xl text-white/90 flex flex-col gap-1">
              <span>Descubre oportunidades de práctica.</span>
              <span>Conoce tus postulaciones.</span>
              <span>Documenta tu jornada.</span>
            </div>
          </div>

          {/* Bajo */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Columna Izquierda */}
          <div className="w-full lg:w-1/3 flex justify-center">
            {/* Botón Postula aquí */}
            <Link
              to="/practices"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold rounded-lg border-2 border-accent text-white bg-transparent hover:bg-accent hover:text-black transition duration-300"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Postula aquí
            </Link>
          </div>

          {/* Columna Central */}
          <div className="w-full lg:w-1/3 flex justify-center">
            {/* Botón Documentación Oficial */}
            <div className="w-full flex justify-center lg:justify-center">
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

          {/* Columna Izquierda */}
          <div className="w-full lg:w-1/3 flex justify-center">
            {/* Botón Preguntas frecuentes */}
            <button
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold rounded-lg border-2 border-accent text-white bg-transparent hover:bg-accent hover:text-black transition duration-300"
              >
                <FileQuestionIcon className="h-6 w-6 mr-2" />
                Preguntas Frecuentes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;