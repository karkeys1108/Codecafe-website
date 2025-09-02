import { motion } from "framer-motion";

export default function WhyCodeCafe() {
  const features = [
    { title: "Innovative & Futuristic Solutions", delay: 0.2 },
    { title: "Client-Centric Approach", delay: 0.3 },
    { title: "Seamless End-to-End Execution", delay: 0.4 },
    { title: "Trusted by Businesses & Startups", delay: 0.5 },
    { title: "Driven by Passion & Creativity", delay: 0.6 },
    { title: "Commitment to Long-Term Growth", delay: 0.7 },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute top-0 left-4 sm:left-10 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent"></div>
          <div className="absolute top-0 right-4 sm:right-10 w-px h-full bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"></div>
          <div className="absolute top-1/3 left-1/4 sm:left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mozilla">
              Why{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text font-mozilla">
                CodeCafe ?
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-nata">
              We transform bold ideas into seamless digital solutions that
              accelerate growth and make a real impact.
            </p>
          </motion.div>

          {/* Right Side - Feature Chips */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay }}
                className="p-4 sm:p-5 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-amber-500/30 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-200">{feature.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
