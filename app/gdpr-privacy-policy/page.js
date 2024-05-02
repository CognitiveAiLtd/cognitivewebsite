import Header from "../components/header.js";
import Footer from "../components/Footer.js";
export default function GdprPrivacyPage() {
  return (
    <main className="main-box">
      <Header />

      <div className="inner-banner bg-black dark:bg-white  border-b">
        <div className="title-hedings">
          <h1 className="text-white dark:text-black">GDPR Privacy Policy</h1>
        </div>
      </div>

      <div className="policy-bg">
        <div className="container mx-auto">
          <div className="privacy-content">
            <div className="content-description">
              <h3 className="text-black dark:text-white">Introduction</h3>
              <p className="text-black dark:text-white">
                At Cognitive.ai we are committed to protecting the privacy and
                security of our users. This GDPR Privacy Policy outlines the
                types of personal data we collect, how we use it, the legal
                basis for processing the data, and the rights of our users
                regarding their personal data. Our website focuses on artificial
                intelligence (AI) and collects personal data including Name,
                Email, Address, IP Address, and Cookies.
              </p>

              <h3 className="text-black dark:text-white">
                Types of Data Collected
              </h3>

              <ul>
                <li className="text-black dark:text-white">
                  Personal Identification Information: Name, Email, and Address.
                </li>
                <li className="text-black dark:text-white">
                  Internet Data: IP Address and Cookies.
                </li>
              </ul>

              <h3 className="text-black dark:text-white">
                Purpose of Data Collection
              </h3>
              <p className="text-black dark:text-white">
                The data collected is used to:
              </p>
              <ul>
                <li className="text-black dark:text-white">
                  Enhance user experience on our website.
                </li>
                <li className="text-black dark:text-white">
                  Provide personalized AI-related content and services.
                </li>
                <li className="text-black dark:text-white">
                  Communicate with users regarding updates or inquiries.
                </li>
                <li className="text-black dark:text-white">
                  Conduct analytics and improve our website functionalities.
                </li>
              </ul>

              <h3 className="text-black dark:text-white">
                Legal Basis for Processing
              </h3>
              <p className="text-black dark:text-white">
                The processing of your personal data is based on:
              </p>
              <ul>
                <li className="text-black dark:text-white">
                  Consent: We will ask for your explicit consent for processing
                  personal data when required.
                </li>
                <li className="text-black dark:text-white">
                  Legitimate Interest: Processing is necessary for the purposes
                  of the legitimate interests pursued by us or by a third party,
                  except where such interests are overridden by the interests or
                  fundamental rights and freedoms of the data subject.
                </li>
              </ul>
              <h3 className="text-black dark:text-white">
                Data Protection Rights
              </h3>
              <p className="text-black dark:text-white">
                Under GDPR, users have the right to:
              </p>
              <ul>
                <li className="text-black dark:text-white">
                  Access their personal data.
                </li>
                <li className="text-black dark:text-white">
                  Rectify inaccurate personal data.
                </li>
                <li className="text-black dark:text-white">
                  Erase their personal data under certain conditions.
                </li>
                <li className="text-black dark:text-white">
                  Restrict processing of their personal data.
                </li>
                <li className="text-black dark:text-white">
                  Object to the processing of their personal data.
                </li>
                <li className="text-black dark:text-white">
                  Data portability, allowing users to obtain and reuse their
                  data for their own purposes across different services.
                </li>
              </ul>
              <h3 className="text-black dark:text-white">Data Security</h3>
              <p className="text-black dark:text-white">
                We implement appropriate technical and organizational measures
                to ensure a level of security appropriate to the risk,
                protecting your personal data from unauthorized access,
                alteration, disclosure, or destruction.
              </p>
              <h3 className="text-black dark:text-white">
                Consent and Withdrawal
              </h3>
              <p className="text-black dark:text-white">
                Consent for processing personal data can be given through our
                website. Users have the right to withdraw their consent at any
                time without affecting the lawfulness of processing based on
                consent before its withdrawal.
              </p>
              <h3 className="text-black dark:text-white">
                Data Protection Officer
              </h3>
              <p className="text-black dark:text-white">
                We have appointed a Data Protection Officer (DPO) to oversee
                compliance with this policy. For any inquiries or requests
                regarding your data, please contact our DPO at [DPO Contact
                Information].
              </p>
              <h3 className="text-black dark:text-white">
                Changes to This Policy
              </h3>
              <p className="text-black dark:text-white">
                We reserve the right to update this GDPR Privacy Policy at any
                time. We will notify users of any changes by posting the new
                policy on our website.
              </p>
              <h3 className="text-black dark:text-white">Contact Us</h3>
              <p className="text-black dark:text-white">
                If you have any questions about this GDPR Privacy Policy, please
                contact us at{" "}
                <a href="mailto:contact@cognitive.ai">contact@cognitive.ai</a>.
                This policy is designed to be clear, transparent, and easily
                understandable, fulfilling the GDPR requirements for data
                privacy and protection
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
