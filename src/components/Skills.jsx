export default function Skills() {
  return (
    <section id="habilidades" style={{ padding: '80px 0', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      {/* Encabezado de la sección */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span className="text-accent mono-text">02</span>
        <div style={{ height: '1px', width: '40px', backgroundColor: 'var(--border)' }}></div>
        <span className="mono-text">HABILIDADES</span>
      </div>

      {/* Contenedor Grid para las 3 columnas con bordes */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        border: '1px solid var(--border)',
        borderRadius: '4px'
      }}>
        
        {/* Columna 1: Desarrollo Web */}
        <div style={{ padding: '40px', borderRight: '1px solid var(--border)' }}>
          <h3 className="mono-text text-accent" style={{ marginBottom: '24px' }}>DESARROLLO WEB</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-h)' }}>

            <li>• Matlab</li>
            <li>• React</li>
            <li>• Vite</li>
            <li>• JavaScript</li>
            <li>• HTML5 & CSS3</li>
            
          </ul>
        </div>

        {/* Columna 2: Desarrollo Interactivo */}
        <div style={{ padding: '40px', borderRight: '1px solid var(--border)' }}>
          <h3 className="mono-text text-accent" style={{ marginBottom: '24px' }}>DESARROLLO INTERACTIVO</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-h)' }}>
            <li>• Unity</li>
            <li>• C#</li>
            <li>• FMOD</li>
            <li>• Física de Juegos</li>
            <li>• Narrativa Sistémica</li>
            
          </ul>
        </div>

        {/* Columna 3: Audio & DSP */}
        <div style={{ padding: '40px' }}>
          <h3 className="mono-text text-accent" style={{ marginBottom: '24px' }}>AUDIO & DSP</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-h)' }}>
            <li>• Pro Tools</li>
            <li>• Max MSP</li>
            <li>• Logic</li>
            <li>• MATLAB</li>
            <li>• Procesamiento de Señales (DSP)</li>
            <li>• Mezcla Espacial</li>
            <li>• Max MSP</li>
            <li>• Plug data</li>
            <li>• Análisis Acústico</li>
          </ul>
        </div>

      </div>
    </section>
  );
}