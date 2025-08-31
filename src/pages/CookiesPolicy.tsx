import { Cookie, Settings, Shield, Info, Users, Clock, UserCheck, BarChart2 } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import PolicyLayout, { PolicySection } from '../components/policy/PolicyLayout';
import { useVisitorTracking } from '../hooks/useVisitorTracking';
import { formatDistanceToNow } from 'date-fns';

const VisitorStats = () => {
  const { visitorData, totalVisitors, isLoading } = useVisitorTracking();

  if (isLoading || !visitorData) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-accent/5 p-4 rounded-lg border border-border">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Visitors</p>
            <p className="text-xl font-semibold">{totalVisitors.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="bg-accent/5 p-4 rounded-lg border border-border">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <UserCheck className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Your Visits</p>
            <p className="text-xl font-semibold">{visitorData.visitCount}</p>
          </div>
        </div>
      </div>

      <div className="bg-accent/5 p-4 rounded-lg border border-border">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">First Visit</p>
            <p className="text-sm font-medium">
              {formatDistanceToNow(new Date(visitorData.firstVisit), { addSuffix: true })}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-accent/5 p-4 rounded-lg border border-border">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <BarChart2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <p className="text-sm font-medium">
              {visitorData.isReturning ? 'Returning Visitor' : 'New Visitor'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      <PolicyLayout 
        title="Cookies & Visitor Analytics" 
        lastUpdated="August 31, 2025"
        icon={<Cookie className="w-6 h-6" />}
      >
        <PolicySection title="Visitor Statistics">
          <p className="mb-4">
            We use cookies to analyze visitor behavior and improve our website. Here's what we track:
          </p>
          <VisitorStats />
        </PolicySection>

        <PolicySection title="What Are Cookies">
          <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionalities.</p>
        </PolicySection>

        <PolicySection title="How We Use Cookies">
          <p>We use cookies for various purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Remembering your preferences and settings</li>
            <li>Analyzing site traffic and usage patterns</li>
            <li>Enabling social media features</li>
            <li>Personalizing your experience</li>
            <li>Delivering targeted advertisements</li>
          </ul>
        </PolicySection>

        <PolicySection title="Types of Cookies We Use">
          <div className="space-y-4">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="p-4 bg-accent/5 rounded-lg border border-border">
                <h3 className="font-medium text-foreground mb-2">{cookie.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cookie.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {cookie.examples.map((example, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded-full">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PolicySection>

        <PolicySection title="Managing Cookies">
          <div className="flex items-start space-x-4 bg-accent/10 p-4 rounded-lg">
            <Settings className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-accent-foreground">Cookie Preferences</h4>
              <p className="text-sm text-muted-foreground">
                You can manage your cookie preferences through your browser settings. Most browsers allow you to refuse or accept cookies and to delete them.
              </p>
            </div>
          </div>
        </PolicySection>

        <PolicySection title="Important Information">
          <div className="flex items-start space-x-4 bg-destructive/10 p-4 rounded-lg">
            <Info className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-destructive">Note About Blocking Cookies</h4>
              <p className="text-sm text-destructive/90">
                Blocking some types of cookies may impact your experience of our website and the services we are able to offer.
              </p>
            </div>
          </div>
        </PolicySection>

        <PolicySection title="Changes to This Policy">
          <p>We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>If you have any questions about our use of cookies, please contact us at:</p>
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

export default CookiesPolicy;
