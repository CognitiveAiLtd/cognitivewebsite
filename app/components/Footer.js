import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer-main" id="contact">
      <div className="footer-copywrite sm:block lg:flex items-center text-black dark:text-white">
        <div className="foot-bottom w-full">
          <div className="foot-address text-black dark:text-white flex gap-4">
            <svg
              class="h-8 w-8 text-white-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />{" "}
              <circle cx="12" cy="10" r="3" />
            </svg>{" "}
            <p className="text-black dark:text-white">
              <a href="mailto:contact@cognitive.ai">contact(@)cognitive.ai</a>
              <br />
              Suite 4, 4 Giro’s Passage, Gibraltar GX11 1AA
            </p>
          </div>
        </div>

        <div className="foot-nav w-full">
          <ul>
            <li className="text-black dark:text-white">
              <Link href="privacy-policy">Privacy Policy</Link>
            </li>

            <li className="text-black dark:text-white">
              <Link href="cookie-policy">Cookie Policy</Link>
            </li>

            <li className="text-black dark:text-white">
              <Link href="gdpr-privacy-policy">GDPR Privacy Policy </Link>
            </li>
          </ul>
        </div>
        <div className="copywrite-info w-full text-right">
          <p className="text-black dark:text-white">
            © 2024 Cognitive.ai All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
