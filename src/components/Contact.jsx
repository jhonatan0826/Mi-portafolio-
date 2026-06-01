export default function Contact() {
  return (
    <section id="contacto" style={{ padding: '80px 0 40px 0', display: 'flex', flexDirection: 'column', gap: '60px' }}>
      
      {/* Encabezado */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span className="text-accent mono-text">04</span>
        <div style={{ height: '1px', width: '40px', backgroundColor: 'var(--border)' }}></div>
        <span className="mono-text">CONTACTO</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        
        {/* Columna Izquierda: Info */}
        <div>
          <h2 style={{ fontSize: '48px', marginBottom: '24px', lineHeight: '1.1' }}>
            Construyamos algo <br /> <span className="text-accent">juntos.</span>
          </h2>
          <p style={{ marginBottom: '40px', color: 'var(--text)', maxWidth: '400px' }}>
            Estoy disponible para proyectos freelance, colaboraciones académicas, prácticas profesionales y conversaciones sobre sonido, código e interactividad.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'var(--mono)', fontSize: '14px' }}>
            <a href="mailto:jhonatanardila.dev@gmail.com" style={{ color: 'var(--text-h)', textDecoration: 'none' }}>
              [📧] jhonatanty32@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/jhonatan-ardila-b66245247/" target="_blank" style={{ color: 'var(--text-h)', textDecoration: 'none' }}>
              [in] linkedin.com/in/jhonatanardila
            </a>
            
            <a href="https://github.com/jhonatan0826" target="_blank" style={{ color: 'var(--text-h)', textDecoration: 'none' }}>
              [git] github.com/JhonatanArdila
            </a>

            <a href="https://www.instagram.com/jhonas_08/" target="_blank" style={{ color: 'var(--text-h)', textDecoration: 'none' }}>
              [ig] instagram.com/jhonas_0826
            </a>



          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="mono-text" style={{ fontSize: '12px' }}>NOMBRE</label>
              <input type="text" style={inputStyle} placeholder="Tu nombre" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="mono-text" style={{ fontSize: '12px' }}>CORREO ELECTRÓNICO</label>
              <input type="email" style={inputStyle} placeholder="tu@email.com" />
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label className="mono-text" style={{ fontSize: '12px' }}>MENSAJE</label>
            <textarea style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} placeholder="¿En qué puedo ayudarte?"></textarea>
          </div>

          <button type="submit" style={{
            backgroundColor: 'var(--accent)',
            color: '#000',
            border: 'none',
            padding: '16px',
            fontFamily: 'var(--mono)',
            fontWeight: 'bold',
            cursor: 'pointer',
            borderRadius: '4px',
            alignSelf: 'flex-start',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            ENVIAR MENSAJE —→
          </button>
        </form>
      </div>

      {/* Footer simple al final */}
      <footer style={{ 
        marginTop: '80px', 
        paddingTop: '40px', 
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        fontSize: '12px',
        color: 'var(--text-muted)',
        fontFamily: 'var(--mono)'
      }}>
        © 2026 Jhonatan Ardila Uribe. Todos los derechos reservados. Hecho en Bello, Colombia.
      </footer>
    </section>
  );
}

const inputStyle = {
  backgroundColor: 'var(--code-bg)',
  border: '1px solid var(--border)',
  padding: '12px',
  color: 'var(--text-h)',
  fontFamily: 'var(--sans)',
  borderRadius: '4px',
  outline: 'none'
};