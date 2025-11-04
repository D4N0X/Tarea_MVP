import { useState } from 'react';
import TimeLine from "@/components/TimeLine";
import { Info, Search, Briefcase, Flag } from "lucide-react"; 

const ProcessTimeline = () => {
  const steps = [
    { 
      id: 1, 
      icon: Info, 
      title: "Sobre el proceso", 
      info: ""
    },
    { 
      id: 2, 
      icon: Search, 
      title: "Buscando Práctica", 
      info: ""
    },
    { 
      id: 3, 
      icon: Briefcase, 
      title: "Realizando la Práctica", 
      info: "Tu práctica ha sido aprobada. ¡Prepárate para la inducción y el inicio!"
    },
    { 
      id: 4, 
      icon: Flag, 
      title: "Finalizando la Práctica", 
      info: "Tu práctica ha sido aprobada. ¡Prepárate para la inducción y el inicio!"
    },
    { 
      id: 5, 
      icon: Info, 
      title: "Convalidaciones y casos especiales", 
      info: "Tu práctica ha sido aprobada. ¡Prepárate para la inducción y el inicio!"
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]); 

  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm shadow-xl border border-accent/30">
      
      {/* 1. La Línea de Tiempo Horizontal (Contenedor de Nodos) */}
      <div className="flex justify-between items-start mb-6 w-full px-6">
        {steps.map((step) => (
          <TimeLine 
            key={step.id}
            {...step}
            isActive={activeStep.id === step.id}
            onClick={() => setActiveStep(step)}
          />
        ))}
      </div>
      
      {/* 2. La Información Desplegada */}
      <div className="mt-6 p-4 rounded bg-black/30 border border-accent min-h-[80px]">
        <h3 className="text-xl font-bold text-accent mb-1">{activeStep.title}</h3>
        <p 
        className="text-white/90 whitespace-pre-wrap" 
        dangerouslySetInnerHTML={{ __html: activeStep.info }} />
        
      </div>
    </div>
  );
};

export default ProcessTimeline;