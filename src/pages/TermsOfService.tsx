import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';

const TermsOfService = () => {
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
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-400">Last Updated: August 28, 2025</p>
          </motion.div>

          <div className="space-y-8">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <div className="space-y-4 text-gray-300">
                <p>Welcome to CodeCafe! These Terms of Service ("Terms") govern your access to and use of our platform, services, and applications (collectively, the "Service").</p>
                <p>By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.</p>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Scale className="w-6 h-6 mr-2 text-amber-400" />
                2. Accounts and Registration
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>To access certain features of the Service, you must register for an account. When you register, you agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                  <li>Notify us immediately if you discover or suspect any security breaches</li>
                  <li>Take responsibility for all activities that occur under your account</li>
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
                <Shield className="w-6 h-6 mr-2 text-amber-400" />
                3. User Responsibilities
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>As a user of our platform, you agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Not engage in any activity that could harm or disrupt the Service</li>
                  <li>Not use the Service for any illegal or unauthorized purpose</li>
                  <li>Not transmit any viruses or malicious code</li>
                </ul>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">4. Project Collaboration</h2>
              <div className="space-y-4 text-gray-300">
                <p>When participating in projects through our platform:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You are responsible for the quality and delivery of your work</li>
                  <li>Payment terms will be agreed upon between collaborators</li>
                  <li>Disputes between users should be resolved amicably</li>
                  <li>CodeCafe reserves the right to mediate disputes when necessary</li>
                </ul>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-amber-400" />
                5. Disclaimers and Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DO NOT GUARANTEE THAT:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE</li>
                  <li>THE QUALITY OF ANY PROJECTS OR SERVICES WILL MEET YOUR EXPECTATIONS</li>
                  <li>ANY ERRORS IN THE SERVICE WILL BE CORRECTED</li>
                </ul>
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these Terms at any time. We will provide notice of any changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at legal@codecafe.com.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TermsOfService;
