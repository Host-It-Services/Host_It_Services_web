import { motion } from 'framer-motion';

export const WhyChooseUs = () => {
    const reasons = [
      "Quality service",
      "Affordable Prices",
      "Customer Satisfaction",
      "24/7 Customer support"
    ]
  
    return (
<section className="py-12 md:py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200">
<div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {/* Using relevant icons for each reason */}
                {index === 0 && (
                  <svg
                  className="w-8 h-8 text-purple-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                 </svg>
                )}
                {index === 1 && (
                  <svg
                  className="w-8 h-8 text-purple-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                 </svg>
                )}
                {index === 2 && (
                   <svg
                   className="w-8 h-8 text-purple-400"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {index === 3 && (
                 <svg
                 className="w-8 h-8 text-purple-400"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                )}
              </motion.div>
              <h3 className="text-xl font-semibold">{reason}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    
    
    

    

    
    
    



    )
  }