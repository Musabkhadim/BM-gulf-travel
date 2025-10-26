"use client"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function AirlinePartners() {
  const airlines = [
    { src: "/PIA.png", alt: "Airline 1" },
    { src: "/emirates.png", alt: "Airline 2" },
    { src: "/qatar.png", alt: "Airline 3" },
    { src: "/airarabia.png", alt: "Airline 4" },
    { src: "/etihad.png", alt: "Airline 5" },
    { src: "/flydubai.png", alt: "Airline 6" },
    { src: "/airblue.png", alt: "Airline 7" },
    { src: "/saudi.png", alt: "Airline 8" },
    { src: "/gulfairline.png", alt: "Airline 9" },
    { src: "/kuwait.png", alt: "Airline 10" },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false, // hide arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  }

  return (
    <div className="">
       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
  Trusted  <span className="gradient-text">Airlines</span>
</h2>



      <Slider {...settings}>
        {airlines.concat(airlines).map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-20 sm:h-24 md:h-28 px-4"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={170}
              height={170}
              className="object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
