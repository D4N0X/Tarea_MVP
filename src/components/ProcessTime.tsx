import { useState } from 'react';
import TimeLine from "@/components/TimeLine";
import {MailQuestion, Info, Search, Briefcase, Flag } from "lucide-react"; 

const ProcessTimeline = () => {
  const steps = [
    { 
      id: 1, 
      icon: MailQuestion, 
      title: "Consultas", 
      info: "Si tienes preguntas adicionales, contáctanos a través del correo de los encargados o del ayudante de prácticas. \n"
      + "<b>Profores Encargados:</b>\n"
      + "<li>Jose Luis Marti (jmart\@inf.utfsm.cl)</li>"
      + "<li>Pedro Gody (pgodoy\@inf.utfsm.cl)</li>"
      + "<li>Jose González Pasten (jose.gonzalezpa\@usm.cl)</li>"
      + "<b>Ayudante de Prácticas:</b>\n"
      + "<li>ayud-pra\@inf.utfsm.cl</li>"
    },
    { 
      id: 2, 
      icon: Search, 
      title: "Buscando Práctica", 
      info: "<p>Primero que nada hay que saber en qué consisten las prácticas Industrial y Profesional. Como se indica en el documento oficial de prácticas, estas son:</p>"
      + "    <li><p><u><strong>Práctica Industrial (PI):</strong></u> Esta tiene como objetivo introducir al estudiante en el ambiente laboral de una Organización (empresa o institución) y se puede realizar tras haber aprobado asignaturas tales como Bases de datos y Lenguajes de programación. La duración es de 1 o 2 meses continuos con la jornada que establezca la Org. que sea equivalente a&nbsp;<strong>162 </strong>o&nbsp;<strong>324</strong>&nbsp;horas de trabajo, que además se podrían realizar en más meses.</p></li>"
      + "    <li><p><u><strong>Práctica Profesional (PP):</strong></u> La PP tiene como objetivo participar en un proyecto o trabajo pre-profesional de la especialidad en una Organización y se debe realizar tras hecha ya la PI. Su duración es de 2 o 3 meses continuos según la jornada que establezca la Org. que sea equivalente a&nbsp;<strong>324</strong>&nbsp;o <strong>486</strong>&nbsp;hrs respectivamente en varios meses.&nbsp; Se recomienda hacerla post FeriaSW. De realizar la PP en la UTFSM se requiere <u>consultar antes</u> de a su inicio, pues lo ideal es hacerlo en Org. externas.&nbsp;</p></li>"
      + "    <p>Una vez claro en qué consiste cada, se puede saber un poco cómo diferenciar las ofertas de estas. Generalmente cuando las empresas hacen sus ofertas de prácticas indican a qué tipo corresponde, sin embargo a veces no lo hacen, y hay que leer en que consisten diferenciarlas. Igualmente una buena idea es postular igualmente y realizar la consulta directamente a la empresa, ya sea por correo o en la entrevista, indicando que necesitas hacer la primera práctica.</p>"
    },
    { 
      id: 3, 
      icon: Briefcase, 
      title: "Realizando la Práctica", 
      info: "Durante el desarrollo de la practica es requerido registrar las bitácoras en todos los días que hayas trabajado, dado que son estas las que realizan el conteo de horas del sistema. No son necesarias registrar cada detalle del día, puedes escribir generalidades de lo que hayas realizado. Lo importante es escribir que algo estás haciendo."
    },
    { 
      id: 4, 
      icon: Flag, 
      title: "Finalizando la Práctica", 
      info: ""
    },
    { 
      id: 5, 
      icon: Info, 
      title: "Convalidaciones y casos especiales", 
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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