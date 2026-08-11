function Services(){
    const services = ["Web Development","UI/UX Design", "Responsive Websites", "Web Sites", "Web Applications"];

    return(
        <div className="container">
            <h1 className="section-title">Services I Offer</h1>
            <ul className="service-list">
                {services.map((s,i) => <li key={i}>{s}</li>)}
            </ul>
        </div>
    )
}

export default Services;