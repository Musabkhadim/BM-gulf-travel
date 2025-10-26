// components/FAQSection.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const faqItems = [
    {
      question: "What services does BM Gulf Travel offer?",
      answer: "BM Gulf Travel offers expert services in flight booking, visit visa processing, freelance visa assistance, and Umrah packages Hajj packages — all at affordable and transparent prices."
    },
    {
      question: "Do you provide both domestic and international travel services?",
      answer: "Yes, BM Gulf Travel offers both domestic and international travel solutions — from Pakistan to destinations across the Gulf, Asia, and beyond."
    },
    {
      question: "How can I book a flight or tour package with BM Gulf Travel?",
      answer: "You can book directly through our website, contact us via WhatsApp or phone, or visit our office. Our team will help you find the best deal based on your travel dates and budget."
    },
    {
      question: "Can you customize travel packages?",
      answer: "Absolutely! We specialize in creating personalized itineraries tailored to your preferences, budget, and travel style. Just share your ideas with our travel experts, and we'll craft your dream vacation."
    },
    {
      question: "What documents do I need for international travel?",
      answer: "Requirements vary by destination but typically include a valid passport (with 6+ months validity), visas if required, travel insurance, vaccination certificates, and any necessary permits. We provide detailed checklists for each destination."
    },
    {
      question: "How do you handle travel emergencies?",
      answer: "We provide 24/7 emergency support during your travels. Our local contacts and global network ensure immediate assistance with medical emergencies, lost documents, flight changes, or any unexpected situations."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden py-12 rounded-3xl mx-4 my-8"
      style={{
        background: 'linear-gradient(135deg, #DAE9EF 0%, #F7F3F1 50%, #DAE9EF 100%)'
      }}
    >
      {/* Top Wavy Partition Line */}
      <div className="absolute top-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-8"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25" 
            className="fill-current text-white"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5" 
            className="fill-current text-white"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-white"
          ></path>
        </svg>
      </div>

      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-20"
        style={{
          y: y1,
          background: 'linear-gradient(45deg, #8DC9D9, #C3D1C8)'
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-15"
        style={{
          y: y2,
          background: 'linear-gradient(45deg, #E8C99B, #8DC9D9)'
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full opacity-10"
        style={{
          y: y3,
          background: 'linear-gradient(45deg, #C3D1C8, #E8C99B)'
        }}
      />

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-40 right-40 w-8 h-8 rounded-full bg-white opacity-30"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-40 w-6 h-6 rounded-full bg-white opacity-40"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10 pt-8 pb-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Card with Gradient Border */}
                <motion.div
                  className="relative p-0.5 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    background: 'linear-gradient(45deg, #8DC9D9, #E8C99B, #C3D1C8)'
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left flex justify-between items-center group"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4 group-hover:text-gray-900 transition-colors">
                        {item.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(45deg, #8DC9D9, #C3D1C8)'
                        }}
                      >
                        <svg 
                          className="w-4 h-4 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openIndex === index ? 'auto' : 0,
                        opacity: openIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: openIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="pt-4"
                      >
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, #E8C99B, #8DC9D9)'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
        
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-8"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25" 
            className="fill-current text-white"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5" 
            className="fill-current text-white"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default FAQSection;