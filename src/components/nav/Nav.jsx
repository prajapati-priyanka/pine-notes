import "./Nav.css"

const Nav = ()=>{
    return(
        <header className="header">
            <h2>Pine <span>Notes</span></h2>
            <nav className="header-links">
                <button className="btn btn-login lg-text">Login</button>
                <button className="btn btn-primary md-text">Sign Up</button>
            </nav>
        </header>
    )
}

export{Nav};