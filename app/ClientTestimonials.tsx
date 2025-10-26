// components/ClientTestimonials.js
'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const ClientTestimonials = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Muhammad Waqas",
      location: "Riyadh, Saudi Arabia",
      rating: 5,
      text: "BM Gulf Travel & Tours made our Saudi honeymoon perfect! Smooth hotel bookings and reliable transport. Best agency for Gulf trips.",
      image: "/client1.png"
    },
    {
      id: 2,
      name: "Haris khan",
      location: "Doha, Qatar",
      rating: 5,
      text: "Their Qatar tour package was amazing. Visas, hotels, and flights—all arranged perfectly. Highly professional Gulf travel experts!",
      image: "/client2.png"
    },
    {
      id: 3,
      name: "Babu Anish",
      location: "Muscat, Oman",
      rating: 4.5,
      text: "Our family trip to Oman was well-organized and stress-free. BM Gulf really knows how to handle Gulf destinations smoothly.",
      image: "/client3.png"
    },
    {
      id: 4,
      name: "Muhammad Asif",
      location: "Manama, Bahrain",
      rating: 5,
      text: "BM Gulf arranged our Bahrain getaway perfectly. Great service and fast visa support. Highly recommended for Gulf travelers!",
      image: "/client4.png"
    },
    {
      id: 5,
      name: "Muhammad Awais",
      location: "Dubai, UAE",
      rating: 4.5,
      text: "Our Dubai trip was seamless and luxurious. BM Gulf handled every detail with care—true Gulf travel specialists!",
      image: "/client5.png"
    },
    {
      id: 6,
      name: "Ahmed Raza",
      location: "Sharjah, UAE",
      rating: 5,
      text: "They managed my UAE business trip perfectly—hotel, transfers, and meetings. Best Gulf travel service I've used.",
      image: "/client6.png"
    },
     {
      id: 10,
      name: "Musab Khadim",
      location: "Dubai, UAE",
      rating: 5,
      text: "BM Gulf Travel & Tours exceeded expectations! From visa to hotel, every Gulf trip detail was perfectly managed.",
      image: "/client10.png"
    },
    {
      id: 7,
      name: "Sawal Ali",
      location: "Kuwait City, Kuwait",
      rating: 5,
      text: "BM Gulf made our Kuwait vacation wonderful. Everything was on time and well planned. Great Gulf agency!",
      image: "/client7.png"
    },
    {
      id: 8,
      name: "Awais Zakir",
      location: "Abu Dhabi, UAE",
      rating: 4.5,
      text: "Visa and hotel arrangements were quick and smooth. BM Gulf made our Abu Dhabi trip totally hassle-free!",
      image: "/client11.png"
    },
    {
      id: 9,
      name: "Muhammad Arbab",
      location: "Doha, Qatar",
      rating: 5,
      text: "Excellent service for our Qatar business tour. BM Gulf handled everything professionally and on time.",
      image: "/client9.png"
    },
   
  ];

  // Auto slider effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  // Scroll to current index
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 320;
      const gap = 24;
      const scrollPosition = currentIndex * (cardWidth + gap);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor"/>
                <stop offset="50%" stopColor="transparent"/>
              </linearGradient>
            </defs>
            <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        )}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-8 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'linear-gradient(45deg, #C1872E 0%, #20A1BF 50%, #819A8C 100%)',
            'linear-gradient(135deg, #819A8C 0%, #C1872E 50%, #20A1BF 100%)',
            'linear-gradient(225deg, #20A1BF 0%, #819A8C 50%, #C1872E 100%)',
            'linear-gradient(315deg, #C1872E 0%, #20A1BF 50%, #819A8C 100%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3 text-white">What Our Clients Say</h2>
          <p className="text-white/90 max-w-2xl mx-auto">Discover why travelers choose us for their unforgettable Gulf journeys</p>
        </motion.div>

        {/* Testimonials */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto snap-x snap-mandatory py-4 px-2 scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {testimonials.map((testimonial, index) => {
              const card = (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: index * 0.2 } }}
                  whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                  className="flex-shrink-0 w-80 snap-center md:w-72 sm:w-64"
                >
                  <motion.div
                    className="relative p-1 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0px rgba(193, 135, 46, 0.3)",
                        "0 0 0 3px rgba(32, 161, 191, 0.6)",
                        "0 0 0 0px rgba(129, 154, 140, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ background: `linear-gradient(45deg, #C1872E, #20A1BF, #819A8C)`, padding: '2px' }}
                  >
                    <div 
                      className="bg-white rounded-full p-5 shadow-lg h-full relative overflow-hidden cursor-pointer"
                      style={{ 
                        borderRadius: '45px',
                        border: '2px solid transparent',
                        background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #C1872E, #20A1BF, #819A8C) border-box'
                      }}
                    >
                      <div className="flex items-center mb-3">
                        <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border-2" style={{ borderColor: '#819A8C' }} />
                        <div className="ml-3">
                          <h3 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h3>
                          <p className="text-xs text-gray-600">{testimonial.location}</p>
                        </div>
                      </div>

                      <div className="mb-3">
                        <StarRating rating={testimonial.rating} />
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed italic"
                        style={{
                          background: 'linear-gradient(90deg, #C1872E, #20A1BF, #819A8C)',
                          backgroundSize: '200% auto',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                          animation: 'gradientText 3s ease infinite'
                        }}>
                        "{testimonial.text}"
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );

              // Make Musab's card clickable
              if (testimonial.name === "Musab Khadim") {
                return (
                  <a
                    key={testimonial.id}
                    href="https://musabkhadim.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    {card}
                  </a>
                );
              }

              // Make Awais Zakir's card clickable
              if (testimonial.name === "Awais Zakir") {
                return (
                  <a
                    key={testimonial.id}
                    href="http://awais-zakir-abbasi.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    {card}
                  </a>
                );
              }

              return card;
            })}
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center mt-6">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'scale-125' : 'bg-white/50 hover:bg-white/70'
                  }`}
                  style={{ backgroundColor: index === currentIndex ? '#C1872E' : '' }}
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .snap-x { scroll-snap-type: x mandatory; }
          .snap-center { scroll-snap-align: center; }
          @keyframes gradientText {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClientTestimonials;