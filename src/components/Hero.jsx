export default function Hero() {
  return (
    <section style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      paddingBottom: '10vh'
    }}>
      <span className="mono-text text-accent" style={{ marginBottom: '16px', display: 'block', letterSpacing: '2px' }}>
        PORTAFOLIO — 2026
      </span>
      
      <h1 style={{ margin: '0 0 16px 0' }}>
        Jhonatan <br/> Ardila Uribe
      </h1>
      
      <h2 style={{ color: 'var(--text)', fontWeight: '300', marginBottom: '32px' }}>
        Ingeniería de Sonido
      </h2>
      
      <p style={{ maxWidth: '600px', fontSize: '18px', marginBottom: '48px' }}>
        Integrando desarrollo web, diseño de sistemas interactivos y procesamiento de señales para crear experiencias digitales inmersivas.
      </p>
      
      <div style={{ display: 'flex', gap: '16px' }}>
        <button style={{
          backgroundColor: 'var(--accent)',
          color: '#000',
          border: 'none',
          padding: '12px 24px',
          fontFamily: 'var(--mono)',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '4px'
        }}>
          VER PROYECTOS →
        </button>
        <button style={{
          backgroundColor: 'transparent',
          color: 'var(--text-h)',
          border: '1px solid var(--border)',
          padding: '12px 24px',
          fontFamily: 'var(--mono)',
          cursor: 'pointer',
          borderRadius: '4px'
        }}>
          CONTÁCTAME
        </button>
      </div>
    </section>
  );
}