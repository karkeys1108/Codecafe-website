import { motion } from 'framer-motion';
import { Shield, Lock, User, Server } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';

const PrivacyPolicy = () => {
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
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-400">Last Updated: August 28, 2025</p>
          </motion.div>

          <div className="space-y-8">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-amber-400" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We collect information that you provide directly to us when you:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create an account or profile</li>
                  <li>Submit project proposals or applications</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Participate in our community forums or discussions</li>
                </ul>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <User className="w-6 h-6 mr-2 text-amber-400" />
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Connect freelancers with relevant projects</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Server className="w-6 h-6 mr-2 text-amber-400" />
                Data Security
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Secure data storage and processing practices</li>
                </ul>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-300">
                <p>You have the right to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>To exercise these rights, please contact us at privacy@codecafe.com.</p>
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
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>
              <p className="text-gray-300 mt-4">
                If you have any questions about this Privacy Policy, please contact us at privacy@codecafe.com.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;
