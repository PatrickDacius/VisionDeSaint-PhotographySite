import LesHome1 from "../assets/LesHome1.jpeg"

const  Home = ()=> {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to VisionDeSaint Photography</h1>
                    <h2>Shoot with Vision. Create with Saint.</h2>
                    <img src={LesHome1} alt="les in the snow" className="les-photo" />
                    <p>NYC based Photographer specializing in lifestyle, portraits, events, and creative shoots.</p>
                    <p>RN by day, Photographer by passion.</p>
                    
                    <div className="hero-buttons">
                        <button>View Gallery</button>
                        <button>Book a Shoot</button>
                    </div>
                </div>
            </section>

           {/*About section*/}



        </div>
    );
}


export default Home