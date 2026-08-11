function Testimonial() {
    const reviews = [
        {name: "Rahul", review: "Amazing work, delivered on time!", img:"https://www.shutterstock.com/image-photo/happy-hispanic-male-light-green-260nw-2559414567.jpg"},

        {name: "Rohit", review: "Great job, exceeded my expectations.", img: "https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"},

        {name: "Raj", review: "Excellent work, top-notch quality.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCW7dAVBAfJSxuUSA0dwDhiyNSIhJiIjf6CXfcUB4dN6SzrbjpQ-P1wjIS&s=10"},

        {name: "Amit", review: "Great work ,Outstanding performance, highly recommended.", img: "https://images.pexels.com/photos/10157816/pexels-photo-10157816.jpeg?cs=tinysrgb&dpr=1&w=500"}
    ]

    return(
        <div className="container">
            <h1 className="section-title">Client Testimonials</h1>

            {reviews.map((r,i) => (
                <div className="testimonial-card" key={i}>
                    <img src={r.img} alt={r.name} />

                    <h3>{r.name}</h3>
                    <p>{r.review}</p>
                </div>
            ))}

        </div>
    )
}

export default Testimonial;