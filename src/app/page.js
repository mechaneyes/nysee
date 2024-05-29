"use client";

import Image from "next/image";
import SaveVCard from "@/app/components/vcard";

import "@/app/styles/styles.scss";

export default function Ray() {
  return (
    <div className="vcard">
      <div className="vcard__outer">
        <div className="vcard__inner">
          <div className="hero">
            <Image
              className="hero__image"
              alt="hero image"
              src="/images/hero.png"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
              quality={100}
            />
          </div>
          <div className="main-container">
            {/* // ————————————————————————————————————o————————————————————————————————————o contact section -->
                  // ————————————————————————————————————o contact section —>
              //  */}
            <section className="section section--title">
              <div className="title">
                <Image
                  className="hero__image"
                  alt="ray weitzeberg logo"
                  src="/images/initials.png"
                  width={100}
                  height={100}
                  quality={100}
                />
                <h1>Ray Weitzenberg</h1>
                <h3>Benevolent Creator</h3>
              </div>
              <div className="connect-icons">
                <div className="connect-icons__item">
                  <img alt="phone icon" src="images/phone.svg" />
                </div>
                <div className="connect-icons__item">
                  <img alt="sms icon: text bubble" src="images/sms.svg" />
                </div>
                <div className="connect-icons__item">
                  <a href="mailto:ray@mechaneyes.com">
                    <img
                      alt="email icon: envelope image"
                      src="images/mail.svg"
                    />
                  </a>
                </div>
                <div className="connect-icons__item">
                  <a href="https://www.google.com/maps/search/394+Myrtle+Ave%2C+%2399">
                    <img
                      alt="location icon: map pin"
                      src="images/location.svg"
                    />
                  </a>
                </div>
              </div>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o connect section -->
                  // ————————————————————————————————————o connect section —>
              //  */}
            <section className="section section--connect">
              <div className="section-header">
                <img
                  alt="Connect icon: phone handset"
                  src="images/contact.svg"
                />
                <h2>Connect</h2>
              </div>
              <ul>
                <li>
                  <h4>Name</h4>
                  <p>Ray Weitzenberg</p>
                </li>
                <li>
                  <h4>Mobile</h4>
                  <p>718.682.2628</p>
                </li>
                <li>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:ray@mechaneyes.com" target="_blank">
                      ray@mechaneyes.com
                    </a>
                  </p>
                </li>
                <li>
                  <h4>Company</h4>
                  <p>Mechaneyes</p>
                </li>
                <li>
                  <h4>Employee ID</h4>
                  <p>303.808.909</p>
                </li>
                <li>
                  <h4>Department</h4>
                  <p>Art+Tech</p>
                </li>
              </ul>
              <div className="save-vcard">
                <SaveVCard />
                <div className="save-vcard__icon">
                  <div class="save-vcard__icon">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        border: "1px solid white",
                        borderRadius: "50%",
                        paddingTop: "4px",
                        paddingLeft: "8px",
                        backgroundColor: "rgba(0, 0, 0, 0.35)",
                      }}
                    >
                      <g id="Icon" clip-path="url(#clip0_1_124)">
                        <path
                          className="save-vcard__svg"
                          d="M15.0116 12.0819C14.9074 11.5611 14.7251 11.0663 14.4647 10.5975C14.2043 10.1418 13.8918 9.72839 13.5272 9.3573C13.1626 8.98621 12.7459 8.67045 12.2772 8.41003C11.8215 8.14962 11.3267 7.96082 10.7928 7.84363C11.2746 7.43998 11.6587 6.94519 11.9452 6.35925C12.2316 5.77332 12.3748 5.14832 12.3748 4.48425C12.3748 3.87227 12.2577 3.29936 12.0233 2.7655C11.7889 2.23165 11.4699 1.76615 11.0663 1.36902C10.6626 0.971884 10.1939 0.662638 9.66 0.441284C9.11313 0.206909 8.5337 0.0897217 7.92172 0.0897217C7.30974 0.0897217 6.73032 0.206909 6.18344 0.441284C5.64959 0.662638 5.18084 0.971884 4.77719 1.36902C4.37355 1.76615 4.05453 2.23165 3.82016 2.7655C3.58578 3.29936 3.4686 3.87227 3.4686 4.48425C3.4686 5.14832 3.61183 5.77332 3.89828 6.35925C4.18474 6.94519 4.56886 7.43347 5.05063 7.8241C4.42563 7.98035 3.8462 8.22774 3.31235 8.56628C2.77849 8.90483 2.31951 9.31173 1.93539 9.78699C1.55128 10.2622 1.24855 10.7928 1.02719 11.3788C0.805837 11.9777 0.69516 12.6093 0.69516 13.2733V17.6093H10.7733C11.0858 18.3384 11.5806 18.9341 12.2577 19.3964C12.9347 19.8586 13.6965 20.0897 14.5428 20.0897C15.1027 20.0897 15.6301 19.9856 16.1248 19.7772C16.6196 19.5689 17.0526 19.2824 17.4237 18.9178C17.7948 18.5533 18.091 18.1236 18.3123 17.6288C18.5207 17.147 18.6248 16.6262 18.6248 16.0663C18.6248 15.0376 18.2765 14.1457 17.5799 13.3905C16.8833 12.6353 16.0272 12.1991 15.0116 12.0819ZM4.66 4.48425C4.66 3.59884 4.97901 2.84363 5.61703 2.21863C6.25506 1.59363 7.02328 1.28113 7.92172 1.28113C8.82016 1.28113 9.58839 1.59363 10.2264 2.21863C10.8644 2.84363 11.1834 3.59884 11.1834 4.48425C11.1834 5.36967 10.8644 6.12488 10.2264 6.74988C9.58839 7.37488 8.82016 7.68738 7.92172 7.68738C7.02328 7.68738 6.25506 7.37488 5.61703 6.74988C4.97901 6.12488 4.66 5.36967 4.66 4.48425ZM10.4608 16.0663C10.4608 16.1314 10.464 16.1932 10.4706 16.2518C10.4771 16.3104 10.4803 16.3723 10.4803 16.4374H1.9061V13.2733C1.9061 12.6613 2.02328 12.0884 2.25766 11.5546C2.49203 11.0207 2.81105 10.5552 3.21469 10.1581C3.61834 9.76095 4.08709 9.44519 4.62094 9.21082C5.16782 8.97644 5.74724 8.85925 6.35922 8.85925H9.48422C10.5129 8.85925 11.4243 9.1685 12.2186 9.78699C13.0129 10.4055 13.5402 11.1835 13.8006 12.121C12.8501 12.3033 12.0558 12.7622 11.4178 13.4979C10.7798 14.2336 10.4608 15.0897 10.4608 16.0663ZM14.5428 18.8983C13.7485 18.8983 13.0715 18.6216 12.5116 18.0682C11.9517 17.5149 11.6717 16.8475 11.6717 16.0663C11.6717 15.285 11.9517 14.6177 12.5116 14.0643C13.0715 13.5109 13.7485 13.2343 14.5428 13.2343C15.3371 13.2343 16.0142 13.5109 16.5741 14.0643C17.134 14.6177 17.4139 15.285 17.4139 16.0663C17.4139 16.8475 17.134 17.5149 16.5741 18.0682C16.0142 18.6216 15.3371 18.8983 14.5428 18.8983ZM15.4413 14.5819H14.2108V15.6757H13.117V16.9061H14.2108V18.0194H15.4413V16.9061H16.5545V15.6757H15.4413V14.5819Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_124">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="matrix(1 0 0 -1 0.690002 20.0897)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o summary -->
                  // ————————————————————————————————————o summary —>
              //  */}
            <section className="section">
              <div className="section-header">
                <img
                  alt="Précis icon: speech bubble with 'i' inside"
                  src="images/summary.svg"
                />
                <h2>Précis</h2>
              </div>
              <p>
                Fusing Art and Technology to
                <br />
                Inspire Delight and Wonder
              </p>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o location -->
                  // ————————————————————————————————————o location —>
              //  */}
            <section className="section section--location">
              <div className="section-header">
                <img
                  className="location-icon"
                  alt="location icon: map pin"
                  src="images/location.svg"
                />
                <h2>IRL</h2>
              </div>
              <p>394 Myrtle Ave, #99</p>
              <div className="location-button">
                <a
                  href="https://www.google.com/maps/search/394+Myrtle+Ave%2C+%2399"
                  target="_blank"
                >
                  Show on Map
                </a>
              </div>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o links -->
                  // ————————————————————————————————————o links —>
              //  */}
            <section className="section section--links">
              <div className="section-header">
                <img alt="Links icon: globe icon" src="images/webLinks.svg" />
                <h2>Digital Footprints</h2>
              </div>
              <ul>
                <li>
                  <a href="https://mechaneyes.com/" target="_blank">
                    Mechaneyes
                  </a>
                </li>
                <li>
                  <a
                    href="https://bsky.app/profile/mechaneyes.bsky.social"
                    target="_blank"
                  >
                    Bluesky
                  </a>
                </li>
                <li>
                  <a href="https://hypermute.com/@mechaneyes" target="_blank">
                    Mastodon
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mechaneyes" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mechaneyes"
                    target="_blank"
                  >
                    Instagarbage <span className="italicize">(fuck zuck)</span>
                  </a>
                </li>
              </ul>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o gallery -->
                  // ————————————————————————————————————o gallery —>
              //  */}
            <section className="section section--gallery">
              <Image
                alt="mechaneyes logo"
                src="/images/mechaneyes.gif"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                quality={100}
              />
              <Image
                alt="untitled"
                src="/images/untitled.jpg"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                quality={100}
              />
              <Image
                alt="tree branches covered in snow"
                src="/images/willoughbyWinter.jpg"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                quality={100}
              />
              <Image
                alt="lined ceiling with fluorescent light tubes"
                src="/images/atlanticTerminal.jpg"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                quality={100}
              />
              <Image
                alt="shapes decending down stairwell"
                src="/images/pacificDesignCenter.jpg"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                quality={100}
              />
              <Image
                alt="distorted image with river wrapping around person in canoe"
                src="/images/americanRiverVortex.jpg"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                quality={100}
              />
              <Image
                alt="dancer lit from behind by strobe light"
                src="/images/noOrdinaryMonkey.jpg"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                quality={100}
              />
              <Image
                alt="portrait of some woman goes by the name, hetal"
                src="/images/hetal.jpg"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                quality={100}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
