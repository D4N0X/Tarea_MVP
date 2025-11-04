const TimeLine = ({ icon: Icon, title, isActive, onClick }) => (
  <button onClick={onClick} className="relative space-y-2 flex flex-col items-center flex-1 group focus:outline-none">
    
    {/* Nodo */}
    <div 
      className={`relative z-10 p-2 rounded-full transition-colors duration-300 border-2 border-accent/50
        ${isActive ? 'bg-accent text-white shadow-lg shadow-accent/50' : 'bg-white/10 text-white/70 border-2'}
      `}
    >
      <Icon className="h-6 w-6" />
    </div>
    
    {/* Título del Nodo */}
    <span 
      className={`mt-2 text-sm text-center font-medium transition-colors duration-300
        ${isActive ? 'text-white' : 'text-white/70'}
      `}
    >
      {title}
    </span>

    {/* Línea horizontal */}
    <div className={` left-0 w-full transition-colors duration-300
      ${isActive ? 'h-1.5 bg-accent' : 'h-0.5 bg-accent/30'}
      `}
    >
      
    </div>
  </button>
);

export default TimeLine;