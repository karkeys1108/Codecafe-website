import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, Target, Code2, Lightbulb, ArrowRight, Star, Sparkles, Code, Globe, Shield, Users } from "lucide-react";
import PageTransition from "../components/common/PageTransition";

// Animated background
const AnimatedBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-amber-900/20"></div>
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-amber-400/10"
        style={{
          width: Math.random() * 300 + 100,
          height: Math.random() * 300 + 100,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50, 0],
          y: [0, Math.random() * 100 - 50, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: Math.random() * 20 + 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

type FeatureProps = {
  icon: React.ReactElement;
  title: string;
  description: string;
  index: number;
};

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, index }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 },
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(251, 191, 36, 0.2)" }}
      className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div
        className="w-16 h-16 rounded-2xl bg-amber-900/40 flex items-center justify-center mb-6 relative z-10 group-hover:bg-amber-900/60 transition-colors duration-300"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {React.cloneElement(icon, { className: "w-7 h-7 text-amber-400" })}
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-3 relative z-10">
        {title}
        <span className="block h-0.5 w-10 bg-amber-400 mt-2 transition-all duration-300 group-hover:w-20" />
      </h3>

      <p className="text-gray-300 relative z-10">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const features = [
    {
      icon: <Rocket />,
      title: "Our Vision",
      description: "Empowering the next generation of developers and freelancers by connecting them with real-world projects that enhance their skills and visibility in the tech industry.",
    },
    {
      icon: <Code />,
      title: "Our Expertise",
      description: "Specializing in creating opportunities for students and freelancers to work on meaningful projects that build their portfolio and professional network.",
    },
    {
      icon: <Target />,
      title: "Our Mission",
      description: "To bridge the gap between learning and professional success by providing students and freelancers with hands-on experience through real client projects.",
    },
    {
      icon: <Globe />,
      title: "Real-World Experience",
      description: "Gain practical experience by working on actual client projects, building a portfolio that stands out to future employers and clients.",
    },
    {
      icon: <Users />,
      title: "Community & Growth",
      description: "Join a supportive community of like-minded individuals, collaborate on projects, and grow your professional network in the tech industry.",
    },
    {
      icon: <Lightbulb />,
      title: "Skill Development",
      description: "Enhance your technical and soft skills through real challenges, mentorship, and continuous learning opportunities.",
    },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden">
        <AnimatedBackground />

        {/* Hero Section */}
        <section className="relative pt-36 pb-24 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-900/40 text-amber-400 text-sm font-medium mb-6 border border-amber-400/20"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Innovating Since 2023
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Building Digital <span className="text-amber-400">Excellence</span>
              </h1>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                We transform ideas into powerful digital solutions that drive growth, efficiency, and innovation for businesses worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/#contact"
                  className="px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg font-medium transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-amber-500/30 flex items-center"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to="/#services"
                  className="px-7 py-3.5 bg-transparent border-2 border-gray-600 hover:border-amber-400 text-white rounded-lg font-medium transition-all flex items-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900/50 to-gray-950/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why <span className="text-amber-400">Choose Us</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We combine technical expertise with creative thinking to deliver exceptional results
              </p>
              <div className="w-20 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <FeatureCard key={index} index={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 bg-gradient-to-r from-gray-900 to-amber-900/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { number: "95%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-amber-400/50 transition-colors"
                >
                  <div className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-900/40 text-amber-400 mb-8 border border-amber-400/20">
                <Star className="w-9 h-9" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate to turn your ideas into reality with our expert development services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/#contact"
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/#services"
                  className="px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-amber-400 text-white rounded-xl font-semibold text-lg transition-all flex items-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
