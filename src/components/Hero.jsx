import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useEffect, useState } from 'react'

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        }
        else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }

    }, []);

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 1.5 })
        gsap.to('#connect', { opacity: 1, delay: 1.5 })
    }, [])


    return (
        <section className="w-full nav-height relative">
            <article className=" h-full w-full flex-center flex-col">

                <p id="hero" className="hero-title">E&G Dance Company</p>

                <div className=" w-9/12 md:w-10/12">
                    <video autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>

                <div id="connect" className=" flex flex-col items-center opacity-0  ">

                    <a href="#highlights" className='btn flex justify-center'>Connect</a>
                    <p className="w-2/4 text-center text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vero, natus a qui delectus itaque commodi dolorem nam dolores sunt ipsam.</p>
                </div>

            </article>
        </section>
    )
}

export default Hero 