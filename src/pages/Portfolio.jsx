function Portfolio(){
    const projects = [
        {title: "Property-listings", desc: "This is a property listings website built using react", img:"ss1.png", Link:"https://property-ten-gamma.vercel.app/"},

        {title:"Construction-company", desc: "This is a construction company website built using react", img:"ss2.png", Link: "https://construction-zeta-fawn.vercel.app/"},

        {title: "personal portfolio website", desc: "This is a personal portfolio website built using react", img:"ss3.png", Link: "https://personal-portfolio-hjpi.vercel.app/"}
    ]

    return(
        <div className="container">
            <h1 className="section-title">My Projects</h1>
            <div className="grid">
                {projects.map((p,i) => (
                    <div className="card" key={i}>
                          <img src={p.img} alt={p.title} />
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                     
                        <a href={p.Link} className="btn">View Project</a>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Portfolio;