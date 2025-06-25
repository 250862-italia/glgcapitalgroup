export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #1e40af 50%, #1e293b 100%)',
      color: 'white',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Header */}
        <div style={{ 
          background: 'rgba(0,0,0,0.2)', 
          padding: '1rem', 
          borderRadius: '10px',
          marginBottom: '3rem'
        }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0' }}>
            GLG Capital Group
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: '1rem 0 0 0' }}>
            Piattaforma di Investimenti Professionale
          </p>
        </div>

        {/* Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>
              €2,450,000
            </div>
            <div style={{ opacity: '0.8', marginTop: '0.5rem' }}>
              Portfolio Totale
            </div>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6' }}>
              +12.5%
            </div>
            <div style={{ opacity: '0.8', marginTop: '0.5rem' }}>
              Rendimento Annuo
            </div>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
              24
            </div>
            <div style={{ opacity: '0.8', marginTop: '0.5rem' }}>
              Investimenti Attivi
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="/login" 
            style={{
              background: 'white',
              color: '#1e293b',
              padding: '1rem 2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            Accedi al Portale
          </a>
          <a 
            href="/dashboard" 
            style={{
              background: '#3b82f6',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: '2px solid #3b82f6'
            }}
          >
            Dashboard
          </a>
        </div>

        {/* Footer */}
        <div style={{ 
          marginTop: '4rem', 
          padding: '2rem', 
          borderTop: '1px solid rgba(255,255,255,0.2)',
          opacity: '0.7'
        }}>
          <p>© 2024 GLG Capital Group. Piattaforma professionale di investimenti.</p>
        </div>
      </div>
    </div>
  )
}
