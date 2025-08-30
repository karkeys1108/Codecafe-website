import { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Mail, Phone as PhoneIcon, Globe, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const countryCodes = [
  { code: '+1', name: '🇺🇸 +1 (US)' },
  { code: '+44', name: '🇬🇧 +44 (UK)' },
  { code: '+91', name: '🇮🇳 +91 (IN)' },
  { code: '+61', name: '🇦🇺 +61 (AU)' },
  { code: '+33', name: '🇫🇷 +33 (FR)' },
  { code: '+49', name: '🇩🇪 +49 (DE)' },
  { code: '+81', name: '🇯🇵 +81 (JP)' },
  { code: '+86', name: '🇨🇳 +86 (CN)' },
  { code: '+7', name: '🇷🇺 +7 (RU)' },
  { code: '+55', name: '🇧🇷 +55 (BR)' },
];

const BookCallModal = ({ isOpen, onClose }: BookCallModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    website: '',
    meetingDescription: '',
    preferredDate: '',
    preferredTime: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('.modal-content')) {
        handleClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleClose = () => {
    setCurrentStep(1);
    setSubmitStatus(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      handleNext();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({ 
        success: true, 
        message: 'Your call has been scheduled successfully! We will contact you soon to confirm the details.' 
      });
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        countryCode: '+1',
        phone: '',
        website: '',
        meetingDescription: '',
        preferredDate: '',
        preferredTime: '',
      });
      
      setCurrentStep(1);
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: 'There was an error submitting your request. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate time slots
  const timeSlots: JSX.Element[] = [];
  for (let hour = 9; hour <= 17; hour++) {
    ['00', '30'].forEach(minutes => {
      const time = `${hour.toString().padStart(2, '0')}:${minutes}`;
      timeSlots.push(
        <option key={time} value={time}>
          {time}
        </option>
      );
    });
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start pt-8 md:pt-16 justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 400 }}
          className="modal-content relative w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl border border-gray-800/50 overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="h-1.5 bg-gray-800">
            <motion.div 
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStep / 3) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent mb-1">
                  {currentStep === 1 ? 'Tell us about yourself' : currentStep === 2 ? 'Schedule your call' : 'Final details'}
                </h3>
                <p className="text-gray-400 text-sm">
                  Step {currentStep} of 3 · {currentStep === 1 ? 'Contact Information' : currentStep === 2 ? 'Availability' : 'Project Details'}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {submitStatus ? (
              <div className="py-8 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                  submitStatus.success ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'
                }`}>
                  {submitStatus.success ? (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {submitStatus.success ? 'Request Submitted!' : 'Something went wrong'}
                </h4>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  {submitStatus.message}
                </p>
                <button
                  onClick={handleClose}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 ${
                    submitStatus.success 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {submitStatus.success ? 'Close' : 'Try Again'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-500" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div className="relative md:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="flex space-x-3">
                          <div className="w-1/3">
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <PhoneIcon className="h-5 w-5 text-gray-500" />
                              </div>
                              <select
                                id="countryCode"
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
                              >
                                {countryCodes.map(country => (
                                  <option key={country.code} value={country.code}>
                                    {country.name}
                                  </option>
                                ))}
                              </select>
                              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                              placeholder="123-456-7890"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="relative md:col-span-2">
                        <label htmlFor="website" className="block text-sm font-medium text-gray-400 mb-1.5">
                          Website (optional)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Globe className="h-5 w-5 text-gray-500" />
                          </div>
                          <input
                            type="url"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                            placeholder="https://example.com"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Schedule */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-400 mb-1.5">
                          Preferred Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-500" />
                          </div>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-400 mb-1.5">
                          Preferred Time <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="h-5 w-5 text-gray-500" />
                          </div>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-10 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
                          >
                            <option value="">Select a time</option>
                            {timeSlots}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-amber-400 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.01a1 1 0 100-2H10V9a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-300">
                            We'll confirm your time slot via email within 24 hours. All times are in your local timezone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Project Details */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-5"
                  >
                    <div className="relative">
                      <label htmlFor="meetingDescription" className="block text-sm font-medium text-gray-400 mb-1.5">
                        Tell us about your project <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3">
                          <MessageSquare className="h-5 w-5 text-gray-500" />
                        </div>
                        <textarea
                          id="meetingDescription"
                          name="meetingDescription"
                          value={formData.meetingDescription}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Briefly describe your project, goals, and any specific requirements..."
                        />
                      </div>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                      <p className="text-sm text-gray-400 mb-3">
                        What would you like to discuss? (optional)
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          'Website Development',
                          'Mobile App',
                          'UI/UX Design',
                          'E-commerce',
                          'API Integration',
                          'Other'
                        ].map((topic) => (
                          <label key={topic} className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white cursor-pointer">
                            <input type="checkbox" className="rounded border-gray-600 text-amber-500 focus:ring-amber-500 bg-gray-700" />
                            <span>{topic}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className={`pt-2 flex ${currentStep === 1 ? 'justify-end' : 'justify-between'}`}>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={isSubmitting}
                      className="px-6 py-2.5 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Back
                    </button>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`ml-auto px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 flex items-center ${
                      isSubmitting
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-amber-500/20'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {currentStep === 3 ? 'Scheduling...' : 'Processing...'}
                      </>
                    ) : (
                      <>
                        {currentStep === 3 ? 'Schedule Call' : 'Continue'}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookCallModal;
