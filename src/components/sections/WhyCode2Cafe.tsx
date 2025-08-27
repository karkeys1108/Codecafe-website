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
    <section className="relative">
      <div className=" px-20 relative w-full flex flex-col items-center justify-center pt--10 pb-20">
        {/* Futuristic BG */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* glowing gradient lines */}
          <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent"></div>
          <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"></div>

          {/* radial gradient glow */}
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold font-mozilla">
              Why{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text font-mozilla">
                CodeCafe ?
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-nata">
              We transform bold ideas into seamless digital solutions that
              accelerate growth and make a real impact.
            </p>
          </motion.div>

          {/* Right Side - Feature Chips with Circuit Lines */}
          <div className="relative flex flex-col items-start space-y-6 px-20 font-sans">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: feature.delay, duration: 0.6 }}
                className="relative"
              >
                {/* Chip */}
                <div className="px-5 py-3 bg-white/5 rounded-[25%] border border-white/10 backdrop-blur-md shadow-md hover:shadow-amber-500/20 transition text-sm font-medium">
                  {feature.title}
                </div>

                {/* Futuristic Dot + Line */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{
                    top: "100%",
                    height: "30px",
                    width: "2px",
                    background:
                      "linear-gradient(to bottom, #f59e0b, transparent)",
                    marginTop: "4px",
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full shadow-lg shadow-amber-500/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
