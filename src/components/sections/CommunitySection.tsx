import { motion } from 'framer-motion';
import { Send, Instagram, MessageSquare, Twitter, Github, Linkedin } from 'lucide-react';

const CommunitySection = () => {
  const socialLinks = [
    {
      name: 'Telegram',
      icon: Send,
      color: 'hover:bg-blue-500',
      link: 'https://t.me/yourtelegram',
    },
    {
      name: 'GitHub',
      icon: Github,
      color: 'hover:bg-gray-700',
      link: 'https://github.com/yourusername',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'hover:bg-gradient-to-r from-pink-500 to-rose-500',
      link: 'https://instagram.com/yourusername',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'hover:bg-blue-400',
      link: 'https://twitter.com/yourusername',
    },
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      color: 'hover:bg-green-500',
      link: 'https://wa.me/yourwhatsapp',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'hover:bg-blue-600',
      link: 'https://linkedin.com/company/yourcompany',
    },
  ];

  return (
    <section 
      id="join-us"
      className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/community-bg.jpg')" }} // ✅ Change path to your image
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Optional watermark logo on top */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div 
          className="w-full h-full bg-[url('/images/Codechef.png')] bg-center bg-contain bg-no-repeat"
          style={{ backgroundSize: 'min(60vw, 60vh)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-amber-400">Community</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with us on social media for the latest updates and tech insights.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {socialLinks.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }}
                className={`w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center text-white text-2xl transition-all duration-300 ${platform.color} border border-white/10`}
                aria-label={platform.name}
              >
                <Icon className="w-7 h-7" />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            Follow us for tech insights, updates, and community events
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
