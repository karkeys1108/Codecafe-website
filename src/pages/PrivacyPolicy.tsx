import { Shield, Lock, User, Server, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import PolicyLayout, { PolicySection } from '../components/policy/PolicyLayout';

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <PolicyLayout 
        title="Privacy Policy" 
        lastUpdated="August 31, 2025"
        icon={<ShieldCheck className="w-6 h-6" />}
      >
        <PolicySection title="Introduction">
          <p>At CodeCafe, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.</p>
        </PolicySection>

        <PolicySection title="Information We Collect">
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Personal identification information (name, email, phone number)</li>
            <li>Account information (username, password, profile data)</li>
            <li>Usage data (pages visited, features used, time spent)</li>
            <li>Device information (browser type, IP address, device identifiers)</li>
          </ul>
        </PolicySection>

        <PolicySection title="How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Communicate with you about updates and offers</li>
            <li>Ensure the security of our services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </PolicySection>

        <PolicySection title="Data Security">
          <div className="flex items-start space-x-4 bg-accent/10 p-4 rounded-lg">
            <Shield className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-accent-foreground">Your Data is Protected</h4>
              <p className="text-sm text-muted-foreground">We implement appropriate security measures to protect your personal information from unauthorized access and disclosure.</p>
            </div>
          </div>
        </PolicySection>

        <PolicySection title="Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Access your personal data</li>
            <li>Request correction of your data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
          </ul>
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            <a href="mailto:privacy@codecafe.com" className="text-primary hover:underline">
              privacy@codecafe.com
            </a>
          </p>
        </PolicySection>
      </PolicyLayout>
    </PageTransition>
  );
};

export default PrivacyPolicy;
