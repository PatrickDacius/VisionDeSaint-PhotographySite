import Lesabout1 from "../assets/Lesabout1.jpeg"
import Lesabout2 from "../assets/Lesabout2.jpeg"
import Lesabout3 from "../assets/Lesabout3.jpeg"


const About = () =>  {
    return (
        <div className="about-page">
            <h1>Meet Les - The Eye Behind the Lens</h1>
            <img src={Lesabout1} alt="Les smiling with camera" className="les-photo" />
            <p>
                Les is a Haitian creative whose roots inspire every image he captures. Raised by parents who taught him the value of hard work and compassion, he brings that same care and purpose into every frame. 
                While pursing a career in healthcare as a registered nurse - a role that is built on empathy, trust, and healing - Les found a parallel calling: storytelling through photography. 
            </p>

            <p>
               What began as a hobby quickly grew into a deep passion. For Les, Photography is more than just taking picture. It's about preserving the feeling of the moment. 
               Whether it's a proud smile on graduation day, a look of confidence on a bold outfit, or the quiet joy shared between loved ones, Les aims to capture what words can't always express.
            </p>
            <img src={Lesabout2} alt="Les looking nonchalantly" className="les-photo" />
            <p>
                Through VisionDeSaint, his goal is to help people feel seen - not just in the literal sense, but emotionally. His work reflects a commitment to detail, authenticity, and artistry.
                Every session is a chance to create something timeless. A memory that you can look back on and still feel. 
            </p>

            <p>
                Les serves others by showing them how powerful, beautiful, and unforgettable their memories are. 
            </p>
            <img src={Lesabout3} alt="Les looking nonchalantly again.." className="les-photo" />
            <p>
                📍 Based in NYC <br />
                📷 Specialties: Portraits, Graduation, Events, Creative Shoots
            </p>

            <a href="/booking" className="about-cta">Book a Session</a>

        </div>
    )
}

export default About