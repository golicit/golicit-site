import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
            <p className="text-gray-600 mb-2">We may collect personal and non-personal information from you, including but not limited to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Name, email address, contact details</li>
              <li>Organization or institution information</li>
              <li>IP address and browser type</li>
              <li>Usage data and cookies</li>
              <li>Any data submitted via forms or communications</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h3>
            <p className="text-gray-600 mb-2">We use the information collected to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to inquiries or support requests</li>
              <li>Send administrative or promotional communications (with consent)</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Data Sharing and Disclosure</h3>
            <p className="text-gray-600 mb-2">We do not sell your personal information. We may share your data with:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Trusted third-party service providers assisting with operations</li>
              <li>Legal authorities if required by law or regulation</li>
              <li>Internal teams for customer support and service delivery</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Data Security</h3>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to safeguard your data against unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Cookies and Tracking</h3>
            <p className="text-gray-600">
              We use cookies and similar technologies to enhance your user experience, analyze site traffic, and provide personalized content. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h3>
            <p className="text-gray-600 mb-2">Depending on your jurisdiction, you may have rights to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Access or update your personal data</li>
              <li>Request data deletion</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-600 mt-2">
              To exercise these rights, contact us at support@golicit.com.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Third-Party Links</h3>
            <p className="text-gray-600">
              Our website may contain links to third-party websites. We are not responsible for their content or privacy practices. We recommend reviewing their privacy policies separately.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Children's Privacy</h3>
            <p className="text-gray-600">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Updates to This Policy</h3>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Effective Date".
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h3>
            <p className="text-gray-600 mb-2">If you have any questions or concerns about this Privacy Policy, please contact:</p>
            <ul className="text-gray-600 space-y-1">
              <li>📧 Email: support@golicit.com</li>
              <li>📞 Phone: 6289203262</li>
              <li>🏢 Address: 256, West ghosh Para Road</li>
              <li>Shyamnagar, Pin - 743127</li>
              <li>West Bengal</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 