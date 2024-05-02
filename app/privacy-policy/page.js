import Header from "../components/header.js";
import Footer from "../components/Footer.js";
export default function PrivacyPage() {
  return (
    <main className="main-box">
      <Header />

      <div className="inner-banner bg-black dark:bg-white  border-b">
        <div className="title-hedings">
          <h1 className="text-white dark:text-black">Privacy policy</h1>
        </div>
      </div>

      <div className="policy-bg">
        <div className="container mx-auto">
          <div className="privacy-content">
            <div className="content-description">
              <h3 className="text-black dark:text-white">Introduction</h3>
              <p className="text-black dark:text-white">
                Our website is committed to protecting the privacy of our users.
                This Privacy Policy outlines our practices regarding the
                collection, use, and sharing of personal information through our
                website.
              </p>

              <h3 className="text-black dark:text-white">
                Information Collection
              </h3>
              <p className="text-black dark:text-white">
                When you register on our website, we collect personal
                information that may include your name, email address, physical
                address, phone number, and other details necessary to provide
                you with our services.
              </p>

              <h3 className="text-black dark:text-white">Use of Information</h3>
              <p className="text-black dark:text-white">
                The personal information we collect is used to:
              </p>
              <ul>
                <li className="text-black dark:text-white">
                  Create and manage your user account
                </li>
                <li className="text-black dark:text-white">
                  Provide customer support and respond to your requests
                </li>
                <li className="text-black dark:text-white">
                  Improve our website and services
                </li>
                <li className="text-black dark:text-white">
                  Comply with legal obligations
                </li>
              </ul>

              <h3 className="text-black dark:text-white">
                Sharing of Information
              </h3>
              <p className="text-black dark:text-white">
                We do not sell or rent personal information to third parties. We
                may share your information with service providers who perform
                services on our behalf, such as hosting, data analysis, payment
                processing, and customer service. These service providers are
                bound by confidentiality agreements to protect the security and
                confidentiality of your personal information.
              </p>
              <h3 className="text-black dark:text-white">Data Security</h3>
              <p className="text-black dark:text-white">
                We implement reasonable security measures to protect against the
                loss, misuse, or alteration of the information under our
                control. However, no internet transmission is completely secure
                or error-free, and we cannot guarantee the absolute security of
                your personal information.
              </p>
              <h3 className="text-black dark:text-white">Your Rights</h3>
              <p className="text-black dark:text-white">
                You have the right to access, correct, or delete your personal
                information. You may also have the right to object to or
                restrict certain processing of your personal information.
              </p>
              <h3 className="text-black dark:text-white">Children</h3>
              <p className="text-black dark:text-white">
                We do not intentionally collect personal information from
                children under 13. If you{`'`}re under 13, please refrain from
                submitting any personal details via our Website or Service. We
                urge parents and guardians to oversee their children{`'`}s
                Internet use and to enforce this policy by instructing them not
                to provide personal information through our Website or Service
                without permission. If you suspect that a child under 13 has
                given us personal information through our Website or Service,
                please contact us.
              </p>
              <h3 className="text-black dark:text-white">Newsletter</h3>
              <p className="text-black dark:text-white">
                We provide electronic newsletters that you can voluntarily
                subscribe to at any time. If you wish to stop receiving our
                newsletter or marketing emails, you can follow the unsubscribe
                instructions included in these emails or contact us directly.
                However, please note that you will continue to receive essential
                transactional emails.
              </p>
              <h3 className="text-black dark:text-white">
                Changes to This Policy
              </h3>
              <p className="text-black dark:text-white">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new Privacy
                Policy on our website and updating the effective date.
              </p>
              <h3 className="text-black dark:text-white">Acknowledgment</h3>
              <p className="text-black dark:text-white">
                By using our website, you acknowledge that you have read and
                understand this Privacy Policy. This Privacy Policy is a general
                template and should be tailored to meet the specific legal
                requirements of your jurisdiction and the practices of your
                website. It is recommended to consult with a legal expert to
                ensure full compliance with privacy laws such as the CCPA, GDPR,
                and others
              </p>
              <h3 className="text-black dark:text-white">Contact Us</h3>
              <p className="text-black dark:text-white">
                If you have any questions or concerns about our Privacy Policy
                or our data practices, please contact us at{" "}
                <a href="mailto:contact@cognitive.ai">contact@cognitive.ai</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
