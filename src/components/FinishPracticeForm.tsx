import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

// Definimos los props que este componente recibirá
interface FinishPracticeFormProps {
  isOpen: boolean;
  onClose: () => void;
  practiceTitle: string;
  onSubmit: (formData: any) => void;
}

// Estado inicial para el formulario
const initialState = {
  descripcionEmpresa: "",
  descripcionUnidad: "",
  organigrama: "",
  tareasPrincipales: "",
  plataformaTecnologica: "",
  aportePersonal: "",
  beneficiosRecibidos: "",
  fechaInicio: "",
  fechaFin: "",
};

export const FinishPracticeForm = ({ 
  isOpen, 
  onClose, 
  practiceTitle, 
  onSubmit 
}: FinishPracticeFormProps) => {
  const [formData, setFormData] = useState(initialState);

  // Manejador genérico para todos los inputs y textareas
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Éxito!",
      description: "Practica Finalizada, proto llegará la confirmación a tu correo.",
    });
    // Aquí puedes agregar validación antes de enviar
    console.log("Formulario de finalización enviado:", formData);
    onSubmit(formData); // Llama a la función 'onSubmit' (que vendrá del Dashboard)
    setFormData(initialState); // Limpia el formulario
    onClose(); // Cierra el modal
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Finalizar Práctica: {practiceTitle}</DialogTitle>
          <DialogDescription>
            Completa la siguiente información para finalizar tu práctica.
          </DialogDescription>
        </DialogHeader>
        
        {/* Usamos un <form> para manejar el 'onSubmit' */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fechaInicio">Fecha de Inicio *</Label>
              <Input id="fechaInicio" type="date" value={formData.fechaInicio} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="fechaFin">Fecha de Fin *</Label>
              <Input id="fechaFin" type="date" value={formData.fechaFin} onChange={handleChange} required />
            </div>
          </div>
          
          <div>
            <Label htmlFor="descripcionEmpresa">Descripción general de la Empresa/Institución *</Label>
            <Textarea id="descripcionEmpresa" value={formData.descripcionEmpresa} onChange={handleChange} placeholder="Misión, visión, tamaño, rubro..." required />
          </div>

          <div>
            <Label htmlFor="descripcionUnidad">Descripción de la Unidad (cargos, lugar, etc.) *</Label>
            <Textarea id="descripcionUnidad" value={formData.descripcionUnidad} onChange={handleChange} placeholder="Departamento, equipo, ubicación física..." required />
          </div>

          <div>
            <Label htmlFor="organigrama">Organigrama de la Unidad (Opcional)</Label>
            <Textarea id="organigrama" value={formData.organigrama} onChange={handleChange} placeholder="Describe la estructura jerárquica o pega un enlace a una imagen." />
          </div>

          <div>
            <Label htmlFor="tareasPrincipales">Tareas principales realizadas *</Label>
            <Textarea id="tareasPrincipales" value={formData.tareasPrincipales} onChange={handleChange} placeholder="Detalla las responsabilidades y proyectos..." required />
          </div>

          <div>
            <Label htmlFor="plataformaTecnologica">Plataforma tecnológica utilizada (Opcional)</Label>
            <Textarea id="plataformaTecnologica" value={formData.plataformaTecnologica} onChange={handleChange} placeholder="Lenguajes, frameworks, software, metodologías..." />
          </div>

          <div>
            <Label htmlFor="aportePersonal">Aporte personal realizado *</Label>
            <Textarea id="aportePersonal" value={formData.aportePersonal} onChange={handleChange} placeholder="Mejoras, ideas, proyectos propios..." required />
          </div>

          <div>
            <Label htmlFor="beneficiosRecibidos">Beneficios recibidos (Opcional)</Label>
            <Textarea id="beneficiosRecibidos" value={formData.beneficiosRecibidos} onChange={handleChange} placeholder="Capacitaciones, bonos, aprendizaje clave..." />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Enviar y Finalizar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};