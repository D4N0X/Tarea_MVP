import { useState } from 'react';
import TimeLine from "@/components/TimeLine";
import { Search, Tally2, Tally3, Tally4, Tally5 } from "lucide-react"; 

const ProcessTimeline = () => {
  const steps = [
    { 
      id: 1, 
      icon: Search, 
      title: "Sobre el proceso", 
      info: 'El proceso de prácticas de en departamento de Informática de la UTFSM consta de 2 prácticas en la carrera del estudiante:\n 1. Práctica Industrial (PI): Esta tiene como objetivo introducir al estudiante en el ambiente laboral de una Organización (empresa o institución) y se puede realizar tras haber aprobado asignaturas tales como Bases de datos y Lenguajes de programación. La duración es de 1 o 2 meses continuos con la jornada que establezca la Org. que sea equivalente a 162 o 324 horas de trabajo, que además se podrían realizar en más meses.\n Práctica Profesional (PP): La PP tiene como objetivo participar en un proyecto o trabajo pre-profesional de la especialidad en una Organización y se debe realizar tras hecha ya la PI. Su duración es de 2 o 3 meses continuos según la jornada que establezca la Org. que sea equivalente a 324 o 486 hrs respectivamente en varios meses.  Se recomienda hacerla post FeriaSW. De realizar la PP en la UTFSM se requiere consultar antes de a su inicio, pues lo ideal es hacerlo en Org. externas.\n El total de tiempo de realización de prácticas debe ser equivalente a 4 meses o 648 hrs entre las PI y PP, tiempo que puede ser repartido de las siguientes maneras: \n - 162 hrs de Práctica industrial + 486 hrs de Práctica profesional. \n -324 hrs de Práctica industrial + 324 hrs de Práctica profesional. '
    },
    { 
      id: 2, 
      icon: Tally2, 
      title: "Buscando Práctica", 
      info: 'Los estudiantes pueden encontrar prácticas por su propia iniciativa o pueden postular a las ofertas realizadas por la universidad. Vinculación con el Medio de la Universidad e Informática publican ofertas de práctica que son enviadas por Organizaciones (Empresas e Instituciones) en busca de practicantes de la UTFSM. Esta difusión se realiza mediante la lista de correo del Profesor Encargado o en <a href="https://gestal.usm.cl/todo-sobre-tu-practica/" target="_blank" rel="noopener noreferrer">el portal Gestal USM</a>.\n - Para postular a una buena práctica es recomendable que el estudiante confeccione un destacable currículo en papel y LinkedIn más una carta de presentación. \n - Debe estar atento a documentos extras que las empresas soliciten, además, se sugiere estar atento a los Requerimientos exigidos y Beneficios ofrecidos. \n En el mes de octubre el DI convocará a los estudiantes a una reunión de asistencia obligatoria para dar inicio al proceso de prácticas 2024, en donde conocerán sobre como es el proceso y resolverán las dudas existentes respecto a este mismo.'  
    },
    { 
      id: 3, 
      icon: Tally3, 
      title: "Realizando la Práctica", 
      info: "Tu práctica ha sido aprobada. ¡Prepárate para la inducción y el inicio!"
    },
    { 
      id: 4, 
      icon: Tally4, 
      title: "Finaizando la Páractica", 
      info: "Tu práctica ha sido aprobada. ¡Prepárate para la inducción y el inicio!"
    },
    { 
      id: 5, 
      icon: Tally5, 
      title: "Convalidaciones y casos especiales", 
      info: "Tu práctica ha sido aprobada. ¡Prepárate para la inducción y el inicio!"
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]); 

  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm shadow-xl border border-accent/30">
      
      {/* 1. La Línea de Tiempo Horizontal (Contenedor de Nodos) */}
      <div className="flex justify-between items-start mb-6 w-full px-4">
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
      <div className="mt-6 p-4 rounded bg-black/30 border border-accent/50 min-h-[80px]">
        <h3 className="text-xl font-bold text-accent mb-1">{activeStep.title}</h3>
        <p 
        className="text-white/90 whitespace-pre-wrap" 
        dangerouslySetInnerHTML={{ __html: activeStep.info }} />
        
      </div>
    </div>
  );
};

export default ProcessTimeline;