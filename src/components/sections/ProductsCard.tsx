// src/components/sections/Products.tsx
import { motion } from "framer-motion";

const products = [
  {
    title: "Hutgen",
    description:
      "Next-gen innovation hub — powerful platform built to redefine how businesses scale with modern digital solutions.",
    icon: (
      <svg
        className="w-8 h-8 text-amber-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
        />
      </svg>
    ),
    status: "Coming Soon",
  },
];

export default function Products() {
  return (
    <section
      id="solutions"
      className="py-20 relative overflow-hidden flex justify-center items-center -mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mozilla">
          <span className="inline-block px-8 py-4 text-lg font-semibold text-amber-400 rounded-full mb-4 font-mozilla shadow-md relative overflow-hidden">
  <span className="absolute inset-0 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-900 opacity-30 blur-xl animate-pulse rounded-full"></span>
  <span className="relative z-10">Our Products</span>
</span>


          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-nata">
            Innovative platforms crafted to transform workflows, empower
            developers, and accelerate business growth.
          </p>
        </div>

        {/* Centered Card */}
        <div className="flex justify-center">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="group relative max-w-md w-full"
            >
              <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/5">
                <div className="flex flex-col h-full">
                  <div className="mb-6 p-3 w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white font-mozilla">
                        {product.title}
                      </h3>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          product.status === "In Development"
                            ? "text-blue-400 bg-blue-900/30"
                            : "text-amber-400 bg-amber-900/30"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-6 font-nata">
                      {product.description}
                    </p>
                  </div>
                  <button className="mt-auto w-full py-3 px-6 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 group-hover:text-amber-400">
                    Learn More
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
