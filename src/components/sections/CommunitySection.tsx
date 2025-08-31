import { motion } from 'framer-motion';
import { Send, Instagram, MessageSquare, MessageCircle } from 'lucide-react';

const CommunitySection = () => {
  const socialLinks = [
    { 
      name: 'Telegram',
      icon: Send,
      bg: 'bg-amber-500 hover:bg-amber-600',
      border: 'border-amber-500/30 hover:border-amber-500',
      iconBg: 'bg-amber-100/10 group-hover:bg-amber-100/20',
      iconColor: 'text-amber-400',
      link: 'https://t.me/cod_e_cafe',
      description: 'Join our Telegram group',
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      bg: 'bg-amber-500 hover:bg-amber-600',
      border: 'border-amber-500/30 hover:border-amber-500',
      iconBg: 'bg-amber-100/10 group-hover:bg-amber-100/20',
      iconColor: 'text-amber-400',
      link: 'https://discord.gg/geEebNr8',
      description: 'Chat with our community',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      bg: 'bg-gradient-to-br from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500',
      border: 'border-amber-500/30 hover:border-amber-500',
      iconBg: 'bg-amber-100/10 group-hover:bg-amber-100/20',
      iconColor: 'text-amber-400',
      link: 'https://www.instagram.com/cod.e.cafe?igsh=MTJpOTQ5MXBsdGp3YQ==',
      description: 'Follow our updates',
    },
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      bg: 'bg-amber-500 hover:bg-amber-600',
      border: 'border-amber-500/30 hover:border-amber-500',
      iconBg: 'bg-amber-100/10 group-hover:bg-amber-100/20',
      iconColor: 'text-amber-400',
      link: 'https://whatsapp.com/channel/0029VbB5pikF6smrn7wtqs20',
      description: 'Message us directly',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="join-us"
      className="relative py-20 overflow-hidden bg-card border-t border-border/50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 group/header"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Join Our{' '}
            <span className="relative inline-block pb-1">
              <span className="relative z-10">Community</span>
              <span className="absolute bottom-0 left-0 w-full h-2  bg-amber-400 -z-10 group-hover/header:h-3 transition-all duration-300 ease-out" style={{ transform: 'translateY(4px)' }} />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto group-hover/header:text-foreground/90 transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Connect with us and be part of something amazing
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {socialLinks.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                variants={item}
                whileHover={{ 
                  y: -8,
                  transition: { 
                    type: 'spring',
                    stiffness: 300,
                    damping: 15
                  } 
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl opacity-0 group-hover:opacity-70 blur transition duration-500 group-hover:duration-200 -z-10" />
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex flex-col items-center p-6 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:bg-card/90 group-hover:border-amber-400/30 group-hover:shadow-lg group-hover:shadow-amber-500/10`}
                >
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl ${platform.iconBg} flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-amber-50/20`}
                    whileHover={{ 
                      rotate: 15, 
                      scale: 1.1,
                      boxShadow: '0 0 15px rgba(251, 191, 36, 0.3)'
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className={`w-6 h-6 ${platform.iconColor} group-hover:scale-110 transition-transform`} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-amber-500 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center group-hover:text-foreground/90 transition-colors">
                    {platform.description}
                  </p>
                  <motion.span 
                    className="mt-4 text-xs text-muted-foreground group-hover:text-amber-500 group-hover:font-medium transition-all flex items-center gap-1 cursor-pointer"
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    Join now
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </motion.span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
