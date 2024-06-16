import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { IoArrowForwardCircleOutline, IoPlayCircleOutline } from "react-icons/io5";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0, delay: 1.5 })
    gsap.to('.link', { opacity: 1, y: 0, delay: 2, duration: 1.5, stagger: 0.25 })
  }, [])

  return (
    <section id="High" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <article className="screen-max-width">
        <div className="mb-12 w-full flex justify-center md:justify-between flex-wrap items-end">
          <h1 id="title" className="section-heading">
            Get the Highligths
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className=" link flex gap-2">
              <span>
                Watch the film
              </span>
              <IoPlayCircleOutline size={22} />
            </div>

            <div className=" link flex gap-2">
              <span>
                Watch the event
              </span>
              <IoArrowForwardCircleOutline size={22} />
            </div>
          </div>
        </div>
        <VideoCarousel />
      </article>
    </section>
  )
}

export default Highlights       