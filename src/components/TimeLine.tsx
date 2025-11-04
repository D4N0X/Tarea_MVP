const TimeLine = ({ icon: Icon, title, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`relative flex flex-col items-center flex-1 group focus:outline-none`}
  >
    {/* Línea horizontal */}
    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-accent/30 group-last:hidden"></div>
    
    {/* Círculo/Nodo */}
    <div 
      className={`relative z-10 p-2 rounded-full transition-colors duration-300
        ${isActive ? 'bg-accent text-white shadow-lg shadow-accent/50' : 'bg-white/10 text-white/70 border-2 border-accent/50'}
      `}
    >
      <Icon className="h-5 w-5" />
    </div>
    
    {/* Título del Nodo */}
    <span 
      className={`mt-2 text-sm text-center font-medium transition-colors duration-300
        ${isActive ? 'text-white' : 'text-white/70'}
      `}
    >
      {title}
    </span>
  </button>
);

export default TimeLine;