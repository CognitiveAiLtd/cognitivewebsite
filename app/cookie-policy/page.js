import Header from "../components/header.js";
import Footer from "../components/Footer.js";

export default function CookiePolicy() {
  return (
    <main className="main-box">
      <Header />
      <div className="inner-banner bg-black dark:bg-white  border-b">
        <div className="title-hedings">
          <h1 className="text-white dark:text-black">Cookie Policy</h1>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="privacy-content">
          <div className="content-description">
            <h3 className="text-black dark:text-white">Introduction</h3>
            <p className="text-black dark:text-white">
              This Cookie Policy outlines the use of cookies and similar
              technologies on the Cognitive.ai website. By using our website,
              you consent to the use of cookies in accordance with this policy.
            </p>

            <h3 className="text-black dark:text-white">What Are Cookies?</h3>
            <p className="text-black dark:text-white">
              Cookies are small text files stored on your device (computer,
              tablet, smartphone, etc.) by websites you visit. They are widely
              used to make websites work more efficiently, as well as to provide
              information to the site owners. Cookies can be {`"`}session{`"`}{" "}
              or {`"`}persistent{`"`} cookies: session cookies are deleted when
              you close your browser, while persistent cookies remain on your
              device until they expire or you delete them.
            </p>

            <h3 className="text-black dark:text-white">How We Use Cookies</h3>
            <p className="text-black dark:text-white">
              Cognitive.ai uses cookies to enhance your experience, gather
              general visitor information, and track visits to our website.
              Specifically, we use cookies for:
            </p>
            <ul>
              <li className="text-black dark:text-white">
                Essential Functions: These cookies are necessary for the website
                to function and cannot be switched off. They are usually set in
                response to actions made by you, such as setting your privacy
                preferences, logging in, or filling in forms.
              </li>
              <li className="text-black dark:text-white">
                Performance and Analytics: Cookies help us understand how
                visitors interact with our website by collecting and reporting
                information anonymously. This includes the use of third-party
                analytics services like Google Analytics2.
              </li>
              <li className="text-black dark:text-white">
                Functionality: These cookies enable the website to provide
                enhanced functionality and personalization, such as remembering
                your preferences or settings.
              </li>
              <li className="text-black dark:text-white">
                Marketing and Advertising: Cookies may be used to deliver
                advertisements more relevant to you and your interests. They are
                also used to limit the number of times you see an advertisement
                and help measure the effectiveness of advertising campaigns.
              </li>
            </ul>

            <h3 className="text-black dark:text-white">Third-Party Cookies</h3>
            <p className="text-black dark:text-white">
              In addition to our own cookies, we may also use various
              third-party cookies to report usage statistics of the website,
              deliver advertisements on and through the website, and so on
            </p>
            <h3 className="text-black dark:text-white">
              Your Choices Regarding Cookies
            </h3>
            <p className="text-black dark:text-white">
              If you prefer to avoid the use of cookies on this website, you
              must first disable the use of cookies in your browser and then
              delete the cookies saved in your browser associated with this
              website. You may use this option for preventing the use of cookies
              at any time.
            </p>
            <ul>
              <li className="text-black dark:text-white">
                Browser Settings: Most web browsers allow some control of most
                cookies through the browser settings. To find out more about how
                to manage and delete cookies, visit wikipedia.org,
                allaboutcookies.org, or the help page of your specific browser.
              </li>
              <li className="text-black dark:text-white">
                Online Tools: Some third parties provide ways to opt-out of
                their cookies directly, for example, Google Analytics provides
                an opt-out tool for its cookies.
              </li>
            </ul>

            <h3 className="text-black dark:text-white">
              Changes to Our Cookie Policy
            </h3>
            <p className="text-black dark:text-white">
              We may update this Cookie Policy from time to time in response to
              changing legal, technical, or business developments. When we
              update our Cookie Policy, we will take appropriate measures to
              inform you, consistent with the significance of the changes we
              make.
            </p>
            <h3 className="text-black dark:text-white">Contact Us</h3>
            <p className="text-black dark:text-white">
              If you have any questions about our use of cookies or this Cookie
              Policy, please contact us at{" "}
              <a href="mailto:contact@cognitive.ai">contact@cognitive.ai</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
