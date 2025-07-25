import Lesabout1 from "../assets/Lesabout1.jpeg"

const About = () =>  {
    return (
        <div className="about-page">
            <h1>Meet Les - The Eye Behind the Lens</h1>
            <img src={Lesabout1} alt="Les smiling with camera" className="les-photo" />
            <p>
                With his roots in Haiti and a heart for helping people, Les blends compassion with creativity in everything he does.
                His Journey in Photography began as simple as a hobby. A way to capture a moment, a smile, a spark. But over time, it evolved 
                into something deeper: a passion for storytelling through images. 
            </p>

            <p>
                While pursing his career as a Registered Nurse, Les discovered that Photography offered a different kind of healing. 
                This healing is one that preserves memories, uplifts confidence, and helps people see themselves in their best light.
            </p>

            <p>
                From graduations and events to creative shoots and portraits, every session with Les is about more than just the photo..
                It's about freezing time, capturing energy, and creating something that will be cherished for years to come. 
            </p>

            <p>
                VisionDeSaint is more than a brand - It's a commitment to helping people feel seen, celebrated, and remembered.
            </p>

            <p>
                📍 Based in NYC <br />
                📷 Specialties: Portraits, Graduation, Events, Creative Shoots
            </p>

            <a href="/booking" className="about-cta">Book a Session</a>

        </div>
    )
}

export default About