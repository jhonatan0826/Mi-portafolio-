export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 0',
      marginBottom: '40px'
    }}>
      <div className="text-accent" style={{ fontFamily: 'var(--heading)', fontSize: '24px', fontWeight: 'bold' }}>
        JA
      </div>
      <ul style={{
        display: 'flex',
        gap: '24px',
        listStyle: 'none',
        fontFamily: 'var(--sans)',
        fontSize: '14px'
      }}>
        <li><a href="#sobre-mi" style={{ color: 'var(--text)', textDecoration: 'none' }}>Sobre mí</a></li>
        <li><a href="#habilidades" style={{ color: 'var(--text)', textDecoration: 'none' }}>Habilidades</a></li>
        <li><a href="#proyectos" style={{ color: 'var(--text)', textDecoration: 'none' }}>Proyectos</a></li>
        <li><a href="#contacto" style={{ color: 'var(--text)', textDecoration: 'none' }}>Contacto</a></li>
      </ul>
    </nav>
  );
}