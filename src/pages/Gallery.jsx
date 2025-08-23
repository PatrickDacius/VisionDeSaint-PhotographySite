import Jus1 from "../assets/Jus1.jpeg"
import Jus2 from "../assets/Jus2.jpeg"
import Jus3 from "../assets/Jus3.jpeg"
import Jus4 from "../assets/Jus4.jpeg"

import Nai1 from "../assets/Nai1.jpeg"
import Nai2 from "../assets/Nai2.jpeg"
import Nai3 from "../assets/Nai3.jpeg"

import Prom1 from "../assets/Prom1.jpeg"
import Prom2 from "../assets/Prom2.jpeg"
import Prom3 from "../assets/Prom3.jpeg"

import Pat1 from "../assets/Pat1.jpeg"
import Pat2 from "../assets/Pat2.jpeg"

import Anka1 from "../assets/Anka1.jpeg"

import Rebel1 from "../assets/Rebel1.jpeg"

import Kid1 from "../assets/Kid1.jpeg"
import Kid2 from "../assets/Kid2.jpeg"



export default function Gallery() {
    return (
        <div className="gallery-container">

           <h2>Gallery coming soon! .. let pat cook</h2>

            <img src={Jus1} alt="Justice Eye Pic" />
            <img src={Jus2} alt="Justice Eye Pic" />
            <img src={Jus3} alt="Justice Eye Pic" />
            <img src={Jus4} alt="Justice Eye Pic" />
        
            <img src={Nai1} alt="Nai"/>
            <img src={Nai2} alt="Nai2 "/>
            <img src={Nai3} alt="Nai3"/>

            <img src={Prom1} alt="Prom Dress" />
            <img src={Prom2} alt="Prom Dress" />
            <img src={Prom3} alt="Prom Dress" />

            <img src={Pat1} alt="Patrick1" />
            <img src={Pat2} alt="Patrick2" />

            <img src={Anka1} alt="Anka" />

            <img src={Rebel1} alt="Rebel"/>

            <img src={Kid1} alt="Kid solo shoot"/>
            <img src={Kid2} alt="Kids party shoot"/>


            {/* 
              <img src={Jus1} alt="Justice Eye Pic" />
              <img src={Jus1} alt="Justice Eye Pic" /> */}

        </div>
    )
}