// 1. Importas la imagen desde la carpeta assets
import fotoPerfil from '../assets/perfil.jpg'; 

export default function About() {
  return (
    <section id="sobre-mi" style={{ padding: '80px 0', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      {/* Encabezado de la sección */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span className="text-accent mono-text">01</span>
        <div style={{ height: '1px', width: '40px', backgroundColor: 'var(--border)' }}></div>
        <span className="mono-text">SOBRE MÍ</span>
      </div>

      {/* Contenedor principal a dos columnas */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start' }}>
        
        {/* 2. Columna Izquierda: Aquí va tu foto real */}
        <div style={{ 
          aspectRatio: '1/1', 
          border: '1px solid var(--border)',
          borderRadius: '4px',
          overflow: 'hidden' // Esto asegura que la foto respete los bordes redondeados
        }}>
          <img 
            src={fotoPerfil} 
            alt="Jhonatan Ardila" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', // cover hace que la foto llene el cuadro sin deformarse
              filter: 'grayscale(20%)' // Opcional: le da un toque ligeramente gris para que encaje con el diseño oscuro
            }} 
          />
        </div>

        {/* Columna Derecha: Contenido de texto (se mantiene igual) */}
        <div>
          <h2 style={{ fontSize: '40px', marginBottom: '24px', color: 'var(--text-h)' }}>
            Donde el código <br/> 
            <span className="text-accent">encuentra el sonido.</span>
          </h2>
          
          <p style={{ marginBottom: '16px' }}>
            Estudiante de noveno semestre de Ingeniería de Sonido con fuerte enfoque en la tecnología. Me apasiona el desarrollo de interfaces interactivas, la implementación de lógicas en videojuegos y el análisis de señales acústicas.
          </p>
          
          <p style={{ marginBottom: '40px' }}>
            Disfruto construyendo puentes entre el código limpio y el audio profesional, creando herramientas que viven en la intersección de la ingeniería y la expresión creativa.
          </p>

          {/* Contadores inferiores */}
          <div style={{ display: 'flex', gap: '48px' }}>
            <div>
              <div className="mono-text" style={{ fontSize: '12px', marginBottom: '8px' }}>SEMESTRE</div>
              <div className="text-accent" style={{ fontFamily: 'var(--heading)', fontSize: '32px' }}>9º</div>
            </div>
            <div>
              <div className="mono-text" style={{ fontSize: '12px', marginBottom: '8px' }}>PROYECTOS</div>
              <div className="text-accent" style={{ fontFamily: 'var(--heading)', fontSize: '32px' }}>12+</div>
            </div>
            <div>
              <div className="mono-text" style={{ fontSize: '12px', marginBottom: '8px' }}>STACKS</div>
              <div className="text-accent" style={{ fontFamily: 'var(--heading)', fontSize: '32px' }}>3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}