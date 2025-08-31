import { useState } from 'react';
import { BookCallData, bookCall } from '@/lib/api/bookCall';
import { useRouter } from 'next/router';

export const useBookCall = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const submitBookCall = async (data: BookCallData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Convert timezone to IANA format if needed (e.g., 'America/New_York')
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      await bookCall({
        ...data,
        timezone,
      });

      setSuccess(true);
      
      // Redirect to thank you page after successful submission
      setTimeout(() => {
        router.push('/thank-you');
      }, 2000);
      
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to book call. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitBookCall,
    isLoading,
    error,
    success,
    reset: () => {
      setError(null);
      setSuccess(false);
    },
  };
};

export default useBookCall;
