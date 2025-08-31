import { FileText, Shield, AlertTriangle, Code, Mail } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import PolicyLayout, { PolicySection } from '../components/policy/PolicyLayout';

const TermsOfService = () => {
  return (
    <PageTransition>
      <PolicyLayout 
        title="Terms of Service" 
        lastUpdated="August 31, 2025"
        icon={<FileText className="w-6 h-6" />}
      >
        <PolicySection title="Introduction">
          <p>Welcome to CodeCafe! These Terms of Service govern your use of our platform and services. By accessing or using our services, you agree to be bound by these terms.</p>
        </PolicySection>

        <PolicySection title="Account Terms">
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 13 years old to use our services</li>
            <li>You are responsible for maintaining the security of your account</li>
            <li>You are responsible for all content posted and activity that occurs under your account</li>
            <li>You must not use our services for any illegal or unauthorized purpose</li>
          </ul>
        </PolicySection>

        <PolicySection title="User Responsibilities">
          <p>As a user of our platform, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Comply with all applicable laws and regulations</li>
            <li>Respect the intellectual property rights of others</li>
            <li>Not engage in any activity that interferes with or disrupts our services</li>
            <li>Not attempt to gain unauthorized access to our systems or networks</li>
          </ul>
        </PolicySection>

        <PolicySection title="Intellectual Property">
          <div className="flex items-start space-x-4 bg-accent/10 p-4 rounded-lg mb-4">
            <Code className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-accent-foreground">Your Content</h4>
              <p className="text-sm text-muted-foreground">You retain ownership of any intellectual property rights that you hold in your content. By posting content, you grant us a worldwide license to use, host, and display that content.</p>
            </div>
          </div>
        </PolicySection>

        <PolicySection title="Limitation of Liability">
          <div className="flex items-start space-x-4 bg-destructive/10 p-4 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-destructive">Disclaimer</h4>
              <p className="text-sm text-destructive/90">Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our services will be uninterrupted or error-free.</p>
            </div>
          </div>
        </PolicySection>

        <PolicySection title="Termination">
          <p>We may terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of our services, or for any other reason.</p>
        </PolicySection>

        <PolicySection title="Changes to Terms">
          <p>We reserve the right to modify these terms at any time. We will provide notice of any changes by updating the "Last Updated" date at the top of these terms.</p>
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p className="mt-2">
            <a href="mailto:legal@codecafe.com" className="text-primary hover:underline">
              legal@codecafe.com
            </a>
          </p>
        </PolicySection>
      </PolicyLayout>
    </PageTransition>
  );
};

export default TermsOfService;
