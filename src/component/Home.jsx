import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai" 

const Home = () => {
  return (
    <>
    <div className="home" id='home'>
        <main>
            <h1>Coding Shala</h1>
            <p>Lern coding and make your future</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio aperiam amet soluta facilis placeat excepturi error, debitis adipisci corporis molestiae? Nesciunt laudantium debitis pariatur facilis modi dicta ratione architecto! 
            </p>
        </div>
    </div>
    <div className="home3" id='about' >
        <div>
            <h1>Who we are ?</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quam corrupti praesentium, consectetur expedita ipsa laborum nostrum modi molestiae earum labore, cupiditate deleniti id, provident repudiandae doloremque vel iure excepturi.
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={
                    {animationDelay:"0.3s"}
                }>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.5s" 
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:"0.7s"
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay:"1s"
                }}>
                    <AiFillInstagram/>
                    <p>Instagram </p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home

