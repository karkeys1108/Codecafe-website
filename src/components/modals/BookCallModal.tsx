import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Common country codes with flags
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // Combine country code with phone number for backend
          phone: `${formData.countryCode}${formData.phone}`
        }),
      });

      if (response.ok) {
        setSubmitStatus({ 
          success: true, 
          message: 'Your call has been scheduled successfully! We will contact you soon.' 
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
      } else {
        throw new Error('Failed to submit form');
      }
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
      <div className="fixed inset-0 z-[1000] flex items-start pt-16 justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative w-full max-w-md p-6 mb-8 bg-background rounded-xl shadow-2xl border border-gray-800"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Book a Free Call</h3>
            <p className="text-gray-400">Let's discuss your project and how we can help</p>
          </div>

          {submitStatus ? (
            <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'}`}>
              <p className="text-center">{submitStatus.message}</p>
              {submitStatus.success && (
                <button
                  onClick={onClose}
                  className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Close
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1">
                  <label htmlFor="countryCode" className="block text-sm font-medium text-gray-300 mb-1">
                    Code <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {countryCodes.map(country => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="1234567890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">
                  Company Website <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-700 bg-gray-700 text-gray-300 text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="flex-1 min-w-0 block w-full px-4 py-2 bg-gray-800 border border-l-0 border-gray-700 rounded-r-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="yourcompany.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="meetingDescription" className="block text-sm font-medium text-gray-300 mb-1">
                  Meeting Purpose <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="meetingDescription"
                  name="meetingDescription"
                  value={formData.meetingDescription}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="What would you like to discuss? Please provide some context about your project or questions..."
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-1">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    {timeSlots}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Free Call'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookCallModal;
