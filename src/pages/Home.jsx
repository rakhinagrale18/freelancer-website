import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="container1">
            <section className="hero">
                <h1>Hi, I'm Rakhi</h1>
                <p>Freelance React Developer | Building modern web experience</p>

                
                <p className="p1">I am a skilled web developer with expertise in React, HTML, CSS, and JavaScript. I specialize in creating dynamic and interactive user interfaces that deliver exceptional user experiences.</p>

                <div className="btns">
                <Link to="/Portfolio" className="btn"> View My Work </Link>

                <Link to="/Contact" className="btn">Contact Me</Link>
                </div>

            </section>

        <div className="img">
            <img src="/photo.jpg" />
        </div>

        </div>
    )
}

export default Home;