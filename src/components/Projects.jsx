import arpaImg from '../assets/Arpa.jpeg';
import sinfImg from '../assets/eafit.jpeg';
import grabaImg from '../assets/grabacion.jpeg';
import bateriaImg from '../assets/bateria.jpeg';
import podImg from '../assets/Podcast.jpeg';
import RFImg from '../assets/RF.jpeg';
import teaImg from '../assets/teatro.jpeg';


export default function Projects() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Catálogo Interactivo Rick & Morty",
      description: "Aplicación web construida para consumir una API externa, utilizando custom hooks para filtrar y mostrar datos de personajes en una interfaz fluida.",
      tags: ["REACT", "VITE", "API REST"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 2,
      title: "Rediseño Sonoro Interactivo",
      description: "Implementación en motor de físicas de movimiento en primera persona y un sistema de audio dinámico con grabaciones realistas para un plataformero clásico.",
      tags: ["UNITY", "C#", "FMOD"],
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600",
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 3,
      title: "Análisis Espectral Acústico",
      description: "Sistema de extracción de frecuencias fundamentales y coeficientes MFCC implementado para el análisis de grabaciones de voz, utilizando un dataset exclusivo depurado con grabaciones de Maleja.",
      tags: ["MATLAB", "DSP", "MFCC"],
      image: "https://images.unsplash.com/photo-1516280440502-0a1fb86e3f05?auto=format&fit=crop&q=80&w=600",
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 4,
      title: "Grabación binaural de la sinfónica de eafit",
      description: "Capura de concierto de la bada sinfónica de EAFIT",
      tags: ["Audio binaural", "Sinfónica"],
      image: sinfImg,
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 5,
      title: "Arpa laser",
      description: "Instrumento poco convencional en el cual se incorporaron diferentes técnicas de sintesis de sonido, circuitos para ",
      tags: ["Plug Data", "Circuitos electronicos"],
      image: arpaImg,
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 6,
      title: "Grabación de grupos",
      description: "Grabación de diferentes grupos en sesiones en vivo",
      tags: ["PRO TOOLS", "GRABACIÓN", "MICROFONERÍA"],
      image: grabaImg,
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 7,
      title: "Grabación de batería",
      description: "Grabación de batería para diferentes álbumes",
      tags: ["PRO TOOLSs", "GRABACIÓN", "MICROFONERÍA", "BATERÍA"],
      image: bateriaImg,
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 8,
      title: "Grabación de podcast",
      description: "Grabación de podcast",
      tags: ["PRO TOOLS", "GRABACIÓN", "MICROFONERÍA", "PODCAST"],
      image: podImg,
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 9,
      title: "RF para eventos en vivo",
      description: "Monitoreo por medio de RF para eventos en vivo",
      tags: ["LIVE SOUND", "RF", "MICROFONERÍA"],
      image: RFImg,
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 10,
      title: "Monitoreo de en vivo para teatro musical",
      description: "Monitoreo de evento privado de teatro musical",
      tags: ["Monitoreo", "RF", "MICROFONERÍA"],
      image: teaImg,
      demoLink: "#",
      repoLink: "#"
    }


    
    
  ];

  return (
    <section id="proyectos" style={{ padding: '80px 0', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      {/* Encabezado */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span className="text-accent mono-text">03</span>
        <div style={{ height: '1px', width: '40px', backgroundColor: 'var(--border)' }}></div>
        <span className="mono-text">PROYECTOS</span>
      </div>

      {/* Grid de Proyectos */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px' 
      }}>
        {portfolioProjects.map((project) => (
          <div key={project.id} style={{ 
            border: '1px solid var(--border)', 
            borderRadius: '4px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--code-bg)'
          }}>
            {/* Imagen */}
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%)' }} 
              />
            </div>
            
            {/* Contenido de la tarjeta */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--text-h)' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '15px', marginBottom: '24px', flexGrow: 1 }}>
                {project.description}
              </p>
              
              {/* Etiquetas / Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              
              {/* Enlaces */}
              <div style={{ display: 'flex', gap: '16px', fontFamily: 'var(--mono)', fontSize: '14px' }}>
                <a href={project.demoLink} className="text-accent" style={{ textDecoration: 'none' }}>
                  [↗] Live Demo
                </a>
                <a href={project.repoLink} style={{ color: 'var(--text)', textDecoration: 'none' }}>
                  [⑂] Repositorio
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}