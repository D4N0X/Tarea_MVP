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
      info: "Una vez finalizado la practica, se evaluará tu desempeño por tu supervisor en la empresa. Una vez aprobado la práctica se debe esperar a que la información sea revisada por el ayudante de prácticas. Posteriormente, será el profesor encargado y luego por dirección de estudios. El tiempo de aprovación es variable y en caso de aporbar, será refeljado en el sistema SIGA."
    },
    { 
      id: 5, 
      icon: Info, 
      title: "Convalidaciones y Casos Especiales", 
      info: "<p>EL DI considera las siguientes situaciones excepcionales, que deberán ser aprobadas por las Jefaturas de Carrera, y recomendación del Encargado de Practicas:&nbsp;</p>"
        + "  <p><b>1.</b> Que la PI sea desarrollada como una <u>práctica social</u>, es decir, que tiene como objetivo aportar a la comunidad, o bien, reconocer un trabajo remunerado que lo ayude a solventar su situación socioeconómica complicada.&nbsp;</p>"
        + "  <p><b>2.</b> Que una de las practicas sea equivalente a una estadía en un Centro o proyecto de Investigación. Requiere una carta de patrocinio de un profesor del DI.&nbsp;</p>"
        + "  <p><b>3.</b> Que la PI y PP se realicen de manera continua en una misma empresa. En este caso deberá desarrollarla en modalidad hibrida (Debido a que el tiempo de práctica será más extendido la/el estudiante debe poder continuar sus estudios) y ser por un total de <strong>648</strong>&nbsp;horas.&nbsp;&nbsp;&nbsp;</p>"
        + "  <p><b>4.</b> Que una de las prácticas se realice el extranjero, tarea que la/el estudiante asume bajo su propia responsabilidad.&nbsp; En Chile la/el estudiante es cubierto en su práctica por un seguro simple que se da a todo alumno universitario nacional, de modo que quien la desarrolle en el extranjero debe contratar un seguro internacional ad-hoc. (Dado que el sistema de prácticas pedirá un RUT de esa empresa al momento de ingresar los datos de la organización, ingrese 11.111.111-1 )&nbsp;&nbsp;</p>"
        + "  <p><b>5.</b> Que una de las prácticas sea equivalente al planteamiento y desarrollo de un Proyecto de Emprendimiento. Si su solicitud es aceptada deberá subir al sistema de gestión lo siguiente:&nbsp;</p><p><b>a.</b> Plan Operacional (procesos claves de Producción) y Modelo de Negocios (incluye Ingresos y Egresos)&nbsp;</p><p><b>b.</b>Bitácora detallada del trabajo realizado&nbsp;</p><p><b>c.</b>Link a página Web y RRSS del emprendimiento con indicadores de tráfico. Incluyen fotografías (de avances logrados), video (para motivar a clientes o beneficiarios a usar la solución ofrecida), y definiciones como son Misión, Visión y Valores. (Dado que el sistema exigirá un RUT de su emprendimiento al momento de ingresar los datos de la organización, ingrese 00.000.000-0)&nbsp;</p>"
        + "  <p><b>6.</b> Que sus prácticas sean equivalentes a un trabajo profesional desarrollado en UNA empresa o institución durante al menos el triple del periodo a reconocer. Esta alternativa es para el caso de estudiantes que partieron a trabajar previamente en una empresa de la especialidad y están próximo a titularse.&nbsp;&nbsp;</p><p>Si desea convalidar, deberá ingresar la práctica en el sistema en modo de convalidación, rellenar los datos correspondientes y subir los siguienes documentos:</p><p><b>a.</b>Currículo de una página en que detalla las actividades desarrolladas&nbsp;</p><p><b>b.</b>Carta de su Jefe en la Empresa en que éste avala la calidad del aporte realizado&nbsp;</p><p><b>c.</b>RUT de la empresa&nbsp;</p><p><b>d.</b>Certificado de imposiciones previsionales o copia de las boletas con glosa adhoc de los meses a convalidar"
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

        <div className="text-white/90 whitespace-pre-wrap px-2"
        dangerouslySetInnerHTML={{ __html: activeStep.info }} />
      </div>
    </div>
  );
};

export default ProcessTimeline;