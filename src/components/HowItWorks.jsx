import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/Animations'

const HowItWorks = () => {
    const videoRef = useRef()

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        },

            animateWithGsap('.g_fadeIn', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.inOut'

            })
        )

    }, [])

    return (
        <section className='common-padding'>

            <div className='screen-max-widht'>
                <div id='chip' className='flex-center w-full my-20'>
                    <img src={chipImg} alt="chip" width={180} />
                </div>

                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'> a17 pro chip <br /> a monster win for gaming </h2>
                    <span className='hiw-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing el.</span>
                </div>

                <div className=' mt-10 md:mt-20 mb-14'>
                    <div className=' relative h-full flex-center'>
                        <div className=' overflow-hidden'>
                            <img src={frameImg} alt="Iphone" className='bg-transparent relative z-10' />
                        </div>
                        <div className='hiw-video'>
                            <video className='pointer-events-none' playsInline preload='none' muted autoPlay ref={videoRef}>
                                <source src={frameVideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>

                    <p className='text-gray font-semibold text-center mt-3'> honkai Start Rail  </p>
                </div>

                <div className=" md:w-[80%] m-auto flex flex-col md:flex-row gap-3 md:last:items-center">
                    <div className=" flex flex-1 flex-col gap-10 justify-center mb-10">
                        <p className="hiw-text g_fadeIn">
                            iPhone 15 Pro is {' '}
                            <span className="text-white">
                                the first iPhone to feature an aerospace-grade titanium design
                            </span>,
                            using the same alloy that spacecrafts use for missions to Mars.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur
                        </p>
                        <p className="hiw-text g_fadeIn">
                                iPhone 15 Pro is {' '}
                                <span className="text-white">
                                    the first iPhone to feature an aerospace-grade titanium design
                                </span>,
                                using the same alloy that spacecrafts use for missions to Mars.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur
                            </p>
                    
                    </div>

                    <ul className=' flex-1 flex justify-center self-center items-center gap-4 flex-col g_fadeIn'>
                        <li className='hiw-text'>New</li>
                        <li className='hiw-bigtext'>Pro-class GPU</li>
                        <li className='hiw-text'> With 6 core</li>
                      
                    </ul>

                </div>


            </div>

        </section>
    )
}

export default HowItWorks