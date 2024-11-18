"use client";
import { Fragment, useEffect, useState } from "react";

import Image from "next/image";
import Footer from "./components/Footer";
import Link from "next/link";
import Header from "./components/header";
import gsap from "gsap";
import $ from "jquery";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.set(".bannerlogo ", { xPercent: 10 });

    var rotate = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".banner-right",
          pin: false,
          scrub: 1.1,
          start: "top top",
          end: "+=10000",
        },
      })
      .to(".bannerlogo ", {
        rotation: 600,
        duration: 25,
        ease: "none",
      });

    /*welcome Section Code Gsap animation */
    const svg = document.getElementById("svg");
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflowY = "visible";
      },
    });

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.from(".loader-wrap-heading h1", {
      delay: 0.5,
      y: 200,
      skewY: 20,
    }).to(".loader-wrap-heading h1", {
      delay: 0.5,
      y: -200,
      skewY: 20,
    });
    tl.to(svg, {
      duration: 0.8,
      attr: { d: curve },
      ease: "power2.easeIn",
    }).to(svg, {
      duration: 0.8,
      attr: { d: flat },
      ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
      y: -1500,
    });
    tl.to(".loader-wrap", {
      zIndex: -1,
      display: "none",
    });
    // tl.to(".preld-cont");

    document.addEventListener("DOMContentLoaded", function () {
      var navbar = document.querySelector(".navbar");
      var navLinks = document.querySelectorAll(".navbar ul li");

      ScrollTrigger.create({
        start: 50,
        onEnter: () => navLinks.forEach((link) => link.classList.add("hide")),
        onLeaveBack: () =>
          navLinks.forEach((link) => link.classList.remove("hide")),
      });
    });

    /*Para text Animate today cognitive*/
    gsap.from("#para-text-section", {
      y: 300,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: "#para-text",
        start: "top 90%",
        end: "top 60%",
        scrub: 4,
        toggleActions: "restart none none none",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "2rem",
        // },
      },
    });

    gsap.from(".Innovations", {
      y: 300,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: ".Innovations",
        start: "top 90%",
        end: "top 60%",
        scrub: 4,
        toggleActions: "restart none none none",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "2rem",
        // },
      },
    });

    gsap.from(".sound-text1", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#real-estate",
        start: "top 99%",
        end: "top 50%",
        scrub: 4,
        toggleActions: "restart none none none",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "2rem",
        // },
      },
    });

    gsap.from(".sound-text2", {
      y: 300,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: "#real-estate1",
        start: "top 50%",
        end: "top 20%",
        scrub: 4,
        toggleActions: "restart none none none",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "2rem",
        // },
      },
    });

    gsap.from("#real-estate2", {
      y: 300,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: "#real-estate2",
        start: "top 90%",
        end: "top 60%",
        scrub: 4,
        toggleActions: "restart none none none",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "2rem",
        // },
      },
    });

    gsap.from(".art-inno", {
      y: 70,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: ".art-inno",
        start: "top 99%",
        end: "top 50%",
        scrub: 4,
        toggleActions: "restart none none none",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "2rem",
        // },
      },
    });
    gsap.from(".myart-inno", {
      y: 200,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: ".myart-inno",
        start: "top 90%",
        end: "top 60%",
        scrub: 4,
        toggleActions: "restart none none none",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "2rem",
        // },
      },
    });
    /*The Cognitive.ai Edge gsap Animate */
    gsap.from(".para-text-section2", {
      y: 300,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: ".para-text2",
        start: "top 80%",
        end: "top 40%",
        scrub: 4,
        toggleActions: "restart none none none",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "2rem",
        // },
      },
    });

    /*Sound Sectoin Animate gsap */
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#slide-action-sound",
          start: "top 80%",
          end: "top 20%",
          scrub: 4,
          toggleActions: "restart none none none",
          // markers: {
          //   startColor: "white",
          //   endColor: "white",
          //   fontSize: "2rem",
          // },
        },
      })
      .from("#left-slide-sound", { x: -500, duration: 5, opacity: 0 }, 0)
      .from("#right-slide-sound", { x: 500, duration: 5, opacity: 0 }, 0)
      .from(".sound-text", { y: 400, opacity: 0, duration: 5 }, 0);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#real-estate",
          start: "top 80%",
          end: "top 20%",
          scrub: 4,
          toggleActions: "restart none none none",
          // markers: {
          //   startColor: "white",
          //   endColor: "white",
          //   fontSize: "2rem",
          // },
        },
      })

      .from("#real-estate", { x: 800, duration: 5, opacity: 0 }, 0);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#real-estate1",
          start: "top 80%",
          end: "top 20%",
          scrub: 4,
          toggleActions: "restart none none none",
          // markers: {
          //   startColor: "white",
          //   endColor: "white",
          //   fontSize: "2rem",
          // },
        },
      })

      .from("#real-estate1", { x: -800, duration: 5, opacity: 0 }, 0);

    /*Image zooming effect animate gsap*/
    gsap.from("#humanoid-cont", {
      duration: 0.5,
      opacity: 0,
      scale: 0.4,
      transformOrigin: "top center",
      ease: "none",
      scrollTrigger: {
        trigger: "#humanoid-img",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "2rem",
        // },
      },
    });
  }, []);

  useEffect(() => {
    // jQuery event handling
    $(".navigation a").on("click", function (e) {
      var target = this.hash,
        $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top - 80,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
          }
        );
    });
  }, []);

  return (
    <main className="flex  flex-col  justify-between  bg-color">
      <div className="preld-cont">
        <div className="loader-wrap">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
          </svg>

          <div className="loader-wrap-heading">
            <span className="span-load">
              <h1>
                <Image
                  className="logo"
                  src="/logo.png"
                  alt="Logo"
                  width={550}
                  height={100}
                  priority
                />
              </h1>
            </span>
          </div>
        </div>
      </div>

      <Header />

      <section className="banner dark:bg-black">
        <div className="container mx-auto">
          <div className="w-full grid gap-4 sm:grid-cols-1 lg:grid-cols-2 items-center banner-main">
            <div className="banner-left">
              <div className="banner-caption">
                <h2 className="text-black dark:text-white">
                  The <span>Genesis</span> of Cognitive.ai
                </h2>
                <p className="text-black dark:text-white">
                  Cognitive was conceived in 2023 during the boom in generative
                  AI. We realized quickly that we could match our expertise in
                  the digital asset space with impactful solutions that could
                  help people all over the world streamline processes in
                  multiple verticals.
                </p>
              </div>
            </div>

            <div className="banner-right">
              <Image
                className="bannerlogo float-end"
                src="/banner.png"
                alt="banner-Logo"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>
          <div className="subscribe">
            <Image
              className="subscribe-logo"
              src="/subscribe.png"
              alt="subscribe-Logo"
              width={210}
              height={210}
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="para-text-section"
        className="middle-text text-center text-white"
      >
        <div className="container mx-auto">
          <div className="container mx-auto">
            <div className="w-full info mx-auto">
              <p id="para-text" className="mb-4 text-black dark:text-white">
                The initial call to action for us was the ethical issues that
                surround AI. Humanity is reckoning with a powerful tool of an
                unprecedented nature equipped with an intelligence of its own.
                Like anything, the benefits it brings come with a set of risks
                that need to be addressed. Cognitive is dedicated to building
                awareness around this societal paradigm shift and promises to
                build platforms that allow humanity{`'`}s collective voice to be
                heard.
              </p>
              <p id="para-text" className="mb-4 text-black dark:text-white">
                The name {`'`}
                <Link href="https://cognitive.ai/">Cognitive.ai</Link>
                {`'`} represents the human element of AI. We believe that any
                advancement in the field should augment human skill and
                creativity, not impede or pose a threat to it. It is also
                important that, like a parent, we implement a moral compass and
                strong set of values when raising and nurturing this intelligent
                life.
              </p>

              <p id="para-text" className="mb-4 text-black dark:text-white">
                Equipped with a diverse and driven team, Cognitive promises to
                offer solutions across a wide range of industries, designed to
                empower the people harnessing them. We also make our products
                easy to access through resonant and powerful domains at the
                heart.
              </p>
              <p id="para-text text-black dark:text-white">
                We are <Link href="https://cognitive.ai/">Cognitive.ai</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="empower">
        <Image
          className="empowering-banner"
          src="/empowering.png"
          alt="empowering"
          width={1900}
          height={1035}
          priority
        />
        <div className="container mx-auto">
          <div className="empower-main">
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 items-end">
              <div className="w-full empowr-info mx-auto Innovations">
                <h2>Empowering Lives Through Ai</h2>
                <p>
                  At <Link href="https://cognitive.ai/">Cognitive.ai</Link>, we
                  are dedicated to addressing complex problems through advanced
                  AI solutions that improve lives and make processes more
                  efficient. Our mission has two main objectives: to enhance
                  individual productivity through AI-driven efficiency, and to
                  foster creativity and expression through innovative AI
                  applications. We strive to democratize the benefits of AI,
                  making sure its transformative power is universal and
                  accessible to everyone.
                </p>
              </div>
              <div className="logo-empower">
                <Image
                  className="logo  sm:float-none lg:float-end"
                  src="/logo.png"
                  alt="Logo"
                  width={250}
                  height={24}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-service" id="our-service">
        <div className="title-hedings text-white text-center">
          <h2 className="text-black dark:text-white">Our Ai Innovations</h2>
        </div>
        <Image
          className="w-full empowering-banner"
          src="/image_neo.png"
          alt="artificial-intelligence"
          width={1500}
          height={1500}
          quality={100}
          priority
        />
        <div className="container mx-auto">
          <div className="empower-main">
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 items-end">
              <div className="w-full rounded-lg px-4 shadow-2xl backdrop-blur-sm	 empowr-info mx-auto art-inno">
              <h2>
                  <Link href="http://neo.ai/">Neo.ai</Link>
                </h2>
                <p className="sound-text1">
                <Link href="http://neo.ai/">Neo.ai</Link> will be an AI-powered sound wellness app designed to alleviate stress and
                 help you deal with the daily grind. 
                Talk to Neo about health-related issues, objectives and creating a brighter future.
                </p>
              </div>
              <div className="logo-empower">
                <Image
                  className="logo sm:float-none lg:float-end"
                  src="/logo.png"
                  alt="Logo"
                  width={250}
                  height={24}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sound-home mb-4">

        <div
          id="slide-action-sound"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
        >

          <div id="real-estate2" className="sound">
            <Image
              className="logo float-end"
              src="/logo.png"
              alt="Logo"
              width={250}
              height={24}
              priority
            />
            <Image
              className="blueprint-item w-full h-full object-fill"
              src="/bcn_with_logo.png"
              alt="about_ai_image"
              width={1900}
              height={1035}
              priority
            />
            <div className="w-full sound-info mx-auto">
              <h2 className="sound-text3"><Link href="http://bcn.com/">Bcn.com</Link></h2>
              <p className="sound-text3">
                The latest website of the city of Barcelona, Spain.
                It serves as a central digital hub for residents,
                visitors, and businesses, offering a wealth of information
                about the city{`'`}s services, events, culture, and public administration.
                The site provides updates on cultural activities, festivals,
                and public initiatives, positioning Barcelona as a vibrant,
                modern city with a rich history and dynamic future.
              </p>
            </div>
          </div>
          <div id="real-estate2" className="sound">
            <Image
              className="logo float-end"
              src="/logo.png"
              alt="Logo"
              width={250}
              height={24}
              priority
            />
            <Image
              className="blueprint-item"
              src="/about_ai_image.jpg"
              alt="about_ai_image"
              width={1900}
              height={1035}
              priority
            />
            <div className="w-full sound-info mx-auto">
              <h2 className="sound-text3"><Link href="http://aboutai.com/">Aboutai.com</Link> </h2>
              <p className="sound-text3">
              <Link href="http://aboutai.com/">About AI</Link> is a product that differs from our others because it
                uses a .com domain name, which is more suitable for a mass
                audience. As part of our mission, we feel that educating the
                public to AI{`'`}s nature is of critical importance, so we will
                offer a free resource that provides bite-sized videos to make
                understanding AI easy and fun.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section
        className="cog-edge text-center text-white para-text-section2"
        id="about"
      >
        <div className="container mx-auto">
          <div className="w-full info mx-auto">
            <div className="title-hedings">
              <h2 className="para-text2 text-black dark:text-white">
                The Cognitive.ai Edge
              </h2>
            </div>

            <p className="text-black dark:text-white">
              We stand out in the marketplace by using generic and highly
              relevant .ai domains, making it easier for consumers to navigate
              to our products.
            </p>
            <p className="text-black dark:text-white">
              To stay ahead of emerging trends, we continuously update our
              products to ensure they remain dynamic and sophisticated in what
              is a rapidly evolving space. Our energy and passion for these
              technologies drive innovation and ensure we are constantly
              committed to improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="meet-team text-center text-white" id="team">
        <div className="container mx-auto">
          <div className="w-full info mx-auto">
            <div className="title-hedings">
              <h2 className="text-black dark:text-white">Meet The Team</h2>
            </div>
          </div>
        </div>
        <div className="team grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          <div className="team-bio">
            <Image
              className="futuristic w-full"
              src="/andy-booth.jpg"
              alt="andybooth"
              width={480}
              height={680}
              priority
            />
            <div className="bio">
              <h2>Andy Booth</h2>
              <h4>Creative</h4>
              <p>
              Andy{`'`}s background in digital assets led him to conceive and create <Link href="https://cognitive.ai/">Cognitive.ai</Link>. Since AI has become central to the evolution of the internet and digital processes, Andy chose to leverage its power and offer products and solutions to a wider audience.
              </p>
              <div className="linkedin-bio">
                <Link href="https://www.linkedin.com/in/andycognitive/">
                  <Image
                    className="futuristic"
                    src="/linked.png"
                    alt="linkedin"
                    width={35}
                    height={35}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="team-bio">
            <Image
              className="futuristic w-full"
              src="/vv-11.jpg"
              alt="vincent"
              width={480}
              height={680}
              priority
            />
            <div className="bio">
              <h2>Vincent Valentine</h2>
              <h4>Ai Consultant</h4>
              <p>
              Vincent has more than 20 years of experience with online businesses. His focus is on creating positive and forward-thinking AI-centric products. Vince is a consultant and advisor to Cognitive.
              </p>
              <div className="linkedin-bio">
                <Link href="https://www.linkedin.com/in/bitvalentine/">
                  {" "}
                  <Image
                    className="futuristic"
                    src="/linked.png"
                    alt="linkedin"
                    width={35}
                    height={35}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="team-bio">
            <Image
              className="futuristic w-full"
              src="/nao_team_.jpg"
              alt="naoteam"
              width={480}
              height={680}
              priority
            />
            <div className="bio">
              <h2>Naomi Campomanes Valdiviezo</h2>
              <h4>Executive Assistant</h4>
              <p>
                Coming from a management background and having worked as an
                Office Manager, she made the bold decision to completely change
                her life. She began searching for a job that would inspire her,
                where she could not only enhance her skills but also acquire new
                knowledge. This is when she crossed paths with Andy and Vincent,
                and finally found her rightful place. With great excitement, she
                accepted the position of Executive Assistant at Cognitive.ai,
                embarking on a new journey in the AI industry alongside them.
              </p>
              <div className="linkedin-bio">
                <Link href="https://www.linkedin.com/in/andrea-naomi-campomanes-valdiviezo/">
                  {" "}
                  <Image
                    className="futuristic"
                    src="/linked.png"
                    alt="linkedin"
                    width={35}
                    height={35}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="team-bio">
            <Image
              className="futuristic w-full"
              src="/anna-1.jpg"
              alt="naoteam"
              width={480}
              height={680}
              priority
            />
            <div className="bio">
              <h2>Anna Yagci</h2>
              <h4>COO</h4>
              <p>
                With almost a decade of experience in Marketing and Brand
                Management, Anna has played pivotal roles in various
                multinational projects and led diverse teams. Her passion for
                creativity and her enthusiasm for working in multicultural
                environments have been the driving forces behind her career.
                Seeking to leverage her skills while embracing new challenges,
                Anna made a significant shift in her professional journey, which
                led her to Cognitive.ai, where she is eagerly working as a
                Project Manager.
              </p>
              <div className="linkedin-bio">
                <Link href="#">
                  {" "}
                  <Image
                    className="futuristic"
                    src="/linked.png"
                    alt="linkedin"
                    width={35}
                    height={35}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="most-advance">
        <div className="w-full info mx-auto text-center">
          <div className="title-hedings text-white">
            <h2 className="text-black dark:text-white">
              The Most Advanced <br />
              <span>AI Platform</span> Ever Seen
            </h2>
          </div>
        </div>

        <div className="main-btm-pic">
          <div id="humanoid-cont" className="container mx-auto">
            <div className="ai-pic mx-auto text-center text-white">
              <Image
                id="humanoid-img"
                className="humanoid-robot m-auto"
                src="/humanoid-robot-working.png"
                alt="humanoid"
                width={1361}
                height={545}
                priority
              />

              <p className="text-black dark:text-white">
                Harness the power of AI to revolutionize your home, creativity,
                and sound. Explore our platform and join us in shaping tomorrow
                {`'`}s world, today.
              </p>
            </div>
          </div>
        </div>

        <div className="adv-box bg-white dark:bg-black"></div>
      </section>

      <Footer />
    </main>
  );
}
