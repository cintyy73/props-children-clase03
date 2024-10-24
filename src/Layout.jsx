const Layout = ({children}) => {


  return (
    <div className="layout">
        <header >
            <nav className="container">
                <img src="vite.svg" alt="logo"/>
                <h3>22va</h3>
            <ul className="container">
                <li>Clases</li>
                <li>Repositorios</li>
                <li>Grabaciones</li>
                <li>Contactos</li>
            </ul>
            </nav>
        </header>
        <main>
        {children}
        </main>
        <footer>Creado por comisión 22va de ADA</footer>
    </div>
  )
}

export default Layout
