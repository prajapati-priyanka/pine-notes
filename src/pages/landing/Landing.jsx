import "./Landing.css"

const Landing = () =>{
    return(
        <div>
            {/* <Nav /> */}
            <main className="main text-center">
                
                <section className="main-description">
                    <h1 className="main-title">Pine <span>Notes</span></h1>
                    <h2 className="main-subtitle">Tame your work, organise your life.</h2>
                    <p className="main-text lg-text">Remember everything and tackle any project with your notes, tasks,and schedule all in one place.</p>
                    <div className="user-links">
                    <button className="btn btn-primary md-text">Sign Up</button>
                    <button className="btn btn-outline-primary md-text">Get Started</button>
                    
                    </div>
                    <button className="btn-login md-text">Already have an account?</button>  
                    
                    
                   
                </section>
                <figure className="main-hero">
                    <img src="../assets/hero.svg" className="img-responsive" alt="hero-img"/>
                </figure>
               
            </main>
          
        </div>
    )
}

export {Landing};