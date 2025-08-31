import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../lib/cookies';

interface VisitorData {
  visitCount: number;
  firstVisit: string;
  lastVisit: string;
  isReturning: boolean;
  visitorId: string;
}

export const useVisitorTracking = () => {
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);
  const [totalVisitors, setTotalVisitors] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trackVisitor = () => {
      try {
        // Get or create visitor ID
        let visitorId = getCookie('visitor_id');
        const isNewVisitor = !visitorId;
        
        // Generate new visitor ID if it's a new visitor
        if (isNewVisitor) {
          visitorId = 'visitor_' + Math.random().toString(36).substr(2, 9);
          setCookie('visitor_id', visitorId, { days: 365 });
          
          // Increment total visitors count (in a real app, this would be an API call)
          const currentTotal = parseInt(getCookie('total_visitors') || '0', 10);
          const newTotal = currentTotal + 1;
          setCookie('total_visitors', newTotal.toString(), { days: 365 });
          setTotalVisitors(newTotal);
        } else {
          const storedTotal = parseInt(getCookie('total_visitors') || '0', 10);
          setTotalVisitors(storedTotal);
        }

        // Get or set visit count
        let visitCount = parseInt(getCookie('visit_count') || '0', 10);
        visitCount += 1;
        setCookie('visit_count', visitCount.toString(), { days: 365 });

        // Get or set first visit
        let firstVisit = getCookie('first_visit');
        const now = new Date().toISOString();
        if (!firstVisit) {
          firstVisit = now;
          setCookie('first_visit', firstVisit, { days: 365 });
        }

        // Update last visit
        setCookie('last_visit', now, { days: 365 });
        const lastVisit = now;

        setVisitorData({
            visitCount,
            firstVisit,
            lastVisit,
            isReturning: !isNewVisitor,
            visitorId: visitorId || '', // Fixed: Added property name before the OR operator
          });
      } catch (error) {
        console.error('Error tracking visitor:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Only track on client side
    if (typeof window !== 'undefined') {
      trackVisitor();
    }
  }, []);

  return { visitorData, totalVisitors, isLoading };
};
