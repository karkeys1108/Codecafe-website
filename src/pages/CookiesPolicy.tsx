import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Lock } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';

const CookiesPolicy = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: ['Authentication', 'Security', 'User preferences']
    },
    {
      name: 'Performance Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page visits', 'Traffic sources', 'User behavior']
    },
    {
      name: 'Analytics Cookies',
      description: 'We use these to understand how our platform is being used and improve user experience.',
      examples: ['Google Analytics', 'Heatmaps', 'Session recordings']
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies track visitors across websites to display relevant ads.',
      examples: ['Retargeting', 'Ad performance', 'Conversion tracking']
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-900/40 text-amber-400 mb-6">
              <Cookie className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Cookies Policy</h1>
            <p className="text-lg text-gray-400">Last Updated: August 28, 2025</p>
          </motion.div>

          <div className="space-y-8">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionalities.
              </p>
              <p className="text-gray-300">
                By using our website, you consent to the use of cookies in accordance with this policy. You can manage your cookie preferences at any time through your browser settings.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-amber-400" />
                Types of Cookies We Use
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {cookieTypes.map((cookie, index) => (
                  <motion.div 
                    key={cookie.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (index * 0.1) }}
                    className="bg-gray-700/30 p-5 rounded-lg border border-gray-600/50"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{cookie.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{cookie.description}</p>
                    <div className="text-xs text-gray-400">
                      <span className="font-medium">Examples:</span>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        {cookie.examples.map((example, i) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 mr-2 text-amber-400" />
                Managing Your Cookie Preferences
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>You can control and/or delete cookies as you wish. Here's how:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Most web browsers allow some control of cookies through browser settings</li>
                  <li>You can delete all cookies that are already on your device</li>
                  <li>You can set most browsers to prevent cookies from being placed</li>
                  <li>If you disable cookies, some features of our website may not function properly</li>
                </ul>
                <p className="pt-2">
                  For more detailed information about cookie management with specific web browsers, visit the browser's respective websites.
                </p>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-amber-400" />
                Third-Party Cookies
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We may use third-party services that place cookies on your device. These include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Advertising networks for targeted ads</li>
                  <li>Social media platforms for social sharing features</li>
                  <li>Payment processors for secure transactions</li>
                </ul>
                <p>
                  These third parties have their own privacy policies and may use cookies, web beacons, and similar technologies to collect information about your use of our website.
                </p>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>
              <p className="text-gray-300 mt-4">
                If you have any questions about this Cookies Policy, please contact us at privacy@codecafe.com.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CookiesPolicy;
