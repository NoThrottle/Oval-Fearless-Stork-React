import React from 'react'
import Head from 'next/head'

import Header1 from '../components/header1'
import Thingy from '../components/thingy'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <main className="home-container">
        <Head>
          <title>NoThrottle</title>
          <meta
            name="description"
            content="Art shouldn't just be for the rich. NoThrottle's goal is to provide cost effective solutions to your business' need."
          />
          <meta property="og:title" content="NoThrottle" />
          <meta
            property="og:description"
            content="Art shouldn't just be for the rich. NoThrottle's goal is to provide cost effective solutions to your business' need."
          />
        </Head>
        <Header1></Header1>
        <div className="home-hero">
          <div className="home-container1">
            <h1 className="home-text">NoThrottle</h1>
            <h2 className="home-text01">
              <span>Art shouldn&apos;t be just for the rich</span>
              <br></br>
            </h2>
            <div className="home-btn-group">
              <button className="home-button button">
                <span>
                  <span>Learn More</span>
                  <br></br>
                </span>
              </button>
              <button className="home-button1 button">
                <span>
                  <span>Contact</span>
                  <br></br>
                </span>
              </button>
            </div>
            <span className="home-text10">
              NoThrottle aims to provide high quality, cost effective, and cost
              efficient products for your business, commercial, or personal
              needs. Pricing is done extremely dynamically to ensure that you
              pay for what you need, not what the average person needs.
            </span>
          </div>
        </div>
        <div className="home-features">
          <h1 className="home-text11">Why work with us:</h1>
          <div className="home-container2">
            <div className="home-feature-card">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M554 256l364 256-364 256v-512zM170 768v-512l364 256z"></path>
              </svg>
              <div className="home-container3">
                <h2 className="home-text12">Fast Response</h2>
                <span>
                  We usually reply within 1 hour of an email or message. The
                  maximum you&apos;d be waiting for a reply is half a day.
                </span>
              </div>
            </div>
            <div className="home-feature-card1">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <div className="home-container4">
                <h2 className="home-text14">Flexible Working Hours</h2>
                <span>
                  You could need something done at 1 am, and if we&apos;re
                  available at that time, we can do it.
                </span>
              </div>
            </div>
            <div className="home-feature-card2">
              <svg viewBox="0 0 1024 1024" className="home-icon4">
                <path d="M384 128c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM790.994 512c0 0 0 0 0 0 0-57.993 47.013-105.006 105.006-105.006s105.006 47.013 105.006 105.006c0 0 0 0 0 0 0 57.993-47.013 105.006-105.006 105.006s-105.006-47.013-105.006-105.006zM688.424 783.53c0-52.526 42.58-95.106 95.106-95.106s95.106 42.58 95.106 95.106c0 52.526-42.58 95.106-95.106 95.106s-95.106-42.58-95.106-95.106zM425.862 896c0-47.573 38.565-86.138 86.138-86.138s86.138 38.565 86.138 86.138c0 47.573-38.565 86.138-86.138 86.138s-86.138-38.565-86.138-86.138zM162.454 783.53c0-43.088 34.93-78.018 78.018-78.018s78.018 34.93 78.018 78.018c0 43.088-34.93 78.018-78.018 78.018s-78.018-34.93-78.018-78.018zM57.338 512c0-39.026 31.636-70.662 70.662-70.662s70.662 31.636 70.662 70.662c0 39.026-31.636 70.662-70.662 70.662s-70.662-31.636-70.662-70.662zM176.472 240.472c0 0 0 0 0 0 0-35.346 28.654-64 64-64s64 28.654 64 64c0 0 0 0 0 0 0 35.346-28.654 64-64 64s-64-28.654-64-64zM899.464 240.472c0 64.024-51.906 115.934-115.936 115.934-64.024 0-115.936-51.91-115.936-115.934 0-64.032 51.912-115.934 115.936-115.934 64.030 0 115.936 51.902 115.936 115.934z"></path>
              </svg>
              <div className="home-container5">
                <h2 className="home-text16">No Commitment</h2>
                <span>
                  If you need something done but unsure if we&apos;re going to
                  be the first to commit to your request, just mention that in
                  the email.
                </span>
              </div>
            </div>
            <div className="home-feature-card3">
              <svg viewBox="0 0 1316.5714285714284 1024" className="home-icon6">
                <path d="M0 859.429v-347.429h1316.571v347.429c0 50.286-41.143 91.429-91.429 91.429h-1133.714c-50.286 0-91.429-41.143-91.429-91.429zM365.714 731.429v73.143h219.429v-73.143h-219.429zM146.286 731.429v73.143h146.286v-73.143h-146.286zM1225.143 73.143c50.286 0 91.429 41.143 91.429 91.429v128h-1316.571v-128c0-50.286 41.143-91.429 91.429-91.429h1133.714z"></path>
              </svg>
              <div className="home-container6">
                <h2 className="home-text18">Inexpensive</h2>
                <span>
                  Pricing is done dynamically, taking into account your
                  organization size, personal needs, and etc. We will never
                  charge more than the cost estimates we provide during a
                  pricing discussion.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text20">12+</h1>
            <span className="home-text21">Happy Clients</span>
            <span className="home-text22">
              Be part of this number by having me design your graphics.
            </span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text23">70</h1>
            <span className="home-text24">Projects Completed</span>
            <span className="home-text25">
              Increase this number by getting in contact!
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text26">
              <span>500</span>
              <span>+</span>
            </h1>
            <span className="home-text29">Worked Hours</span>
            <span className="home-text30">
              Any paid/contracted work time is yours; you are the priority.
            </span>
          </div>
          <div className="home-stat3">
            <h1 className="home-text31">16/5</h1>
            <span className="home-text32">Support</span>
            <span className="home-text33">
              Found a typo or minor error and need it to be fixed ASAP?
              I&apos;ll be there.
            </span>
          </div>
        </div>
        <div className="home-container7">
          <span className="home-text34">WHAT WE DO:</span>
        </div>
        <div className="home-container8">
          <Thingy
            status="1"
            image_src="https://i.imgur.com/5E1S2d0.png"
            description="Tarpaulin, Posters, Signs, Infographics, Logos, and many more!"
            PROJECT_NAME="Graphic Designs"
            PROJECT_TYPE="We make"
            rootClassName="thingy-root-class-name"
          ></Thingy>
          <Thingy
            status="2"
            image_src="https://i.imgur.com/TuOnpNW.png"
            description="Posters, Concept Art, Portraits, Sketches, etc."
            PROJECT_NAME="Illustrations"
            PROJECT_TYPE="We create"
            rootClassName="thingy-root-class-name1"
          ></Thingy>
          <Thingy
            status="3"
            image_src="https://i.imgur.com/EhFUAag.png"
            description="Video Editing, Motion Graphics, Animations, plus more!"
            PROJECT_NAME="Motion Graphics"
            PROJECT_TYPE="We produce"
            rootClassName="thingy-root-class-name2"
          ></Thingy>
          <Thingy
            status="4"
            image_src="https://user-images.githubusercontent.com/75120879/150243149-a58a7607-706b-43e9-990d-6fb2848eb671.png"
            description="UI and UX Design, Game Development, Quality of Life software, Mobile Apps, and more!"
            PROJECT_NAME="Software"
            PROJECT_TYPE="We build"
            rootClassName="thingy-root-class-name3"
          ></Thingy>
        </div>
        <img
          alt="image"
          src="/playground_assets/wave%5B1%5D.svg"
          className="home-image"
        />
        <div className="home-banner">
          <h2 className="home-text35">
            <span>Want to join NoThrottle Inc.?</span>
            <br></br>
            <span>Use our name, and keep 100% of the profits!</span>
            <br className="home-text39"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
          <button className="home-button2 button">Learn More</button>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </main>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 100%;
            align-self: stretch;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgba(250, 242, 254, 1) 0%,
                rgba(243, 243, 255, 0.95) 39%,
                rgba(240, 253, 255, 0.7) 100%
              ),
              url('https://i.imgur.com/TnRPUg7.png');
          }
          .home-container1 {
            width: 600px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text {
            font-size: 3rem;
          }
          .home-text01 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-300);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-300);
          }
          .home-button:hover {
            transform: scale(1.02);
          }
          .home-button1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-100);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button1:hover {
            transform: scale(1.02);
          }
          .home-text10 {
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1106px;
            margin-top: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text11 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon {
            width: 4rem;
            height: 4rem;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text12 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon2 {
            width: 3rem;
            height: 4rem;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text14 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon4 {
            width: 4rem;
            height: 4rem;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container5 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text16 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-feature-card3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon6 {
            width: 6rem;
            height: 4rem;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container6 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text18 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-stats {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            max-width: 1106px;
            margin-top: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-stat {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text20 {
            color: var(--dl-color-primary-500);
            font-size: 3rem;
          }
          .home-text21 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text22 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text23 {
            color: var(--dl-color-primary-500);
            font-size: 3rem;
          }
          .home-text24 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text25 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text26 {
            color: var(--dl-color-primary-500);
            font-size: 3rem;
          }
          .home-text29 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text30 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text31 {
            color: var(--dl-color-primary-500);
            font-size: 3rem;
          }
          .home-text32 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text33 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-container7 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-self: center;
            max-height: var(--dl-size-size-maxwidth);
            min-height: 512px;
            align-items: center;
            margin-bottom: -2px;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/wave.svg');
            background-position: center;
          }
          .home-text34 {
            color: rgb(255, 255, 255);
            font-size: 6rem;
            align-self: flex-end;
            font-style: normal;
            font-weight: 700;
          }
          .home-container8 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            background-color: rgb(0, 153, 255);
          }
          .home-image {
            width: 100%;
            height: auto;
            transform: rotate(180deg);
            align-self: stretch;
            margin-top: -2px;
            object-fit: cover;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            z-index: 100;
            margin-top: -px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text35 {
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text39 {
            font-weight: 600;
          }
          .home-button2 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-button2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          @media (max-width: 1600px) {
            .home-container7 {
              height: auto;
            }
          }
          @media (max-width: 1200px) {
            .home-text34 {
              font-size: 5rem;
              font-style: normal;
              font-weight: 700;
            }
            .home-banner {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-container1 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text {
              text-align: center;
            }
            .home-text01 {
              text-align: center;
            }
            .home-text10 {
              text-align: center;
            }
            .home-features {
              width: auto;
            }
            .home-text20 {
              text-align: center;
            }
            .home-text23 {
              text-align: center;
            }
            .home-text26 {
              text-align: center;
            }
            .home-text31 {
              text-align: center;
            }
            .home-text34 {
              font-size: 5rem;
            }
            .home-text35 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features {
              width: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container2 {
              grid-template-columns: 1fr;
            }
            .home-feature-card {
              flex-direction: row;
            }
            .home-container3 {
              flex-direction: column;
            }
            .home-feature-card1 {
              flex-direction: row;
            }
            .home-icon2 {
              width: 3rem;
              height: 4rem;
            }
            .home-container4 {
              flex-direction: column;
            }
            .home-feature-card2 {
              flex-direction: row;
            }
            .home-container5 {
              flex-direction: column;
            }
            .home-feature-card3 {
              flex-direction: row;
            }
            .home-container6 {
              flex-direction: column;
            }
            .home-stats {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-text21 {
              text-align: center;
            }
            .home-text24 {
              text-align: center;
            }
            .home-text29 {
              text-align: center;
            }
            .home-text32 {
              text-align: center;
            }
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container1 {
              width: auto;
              max-width: 600px;
              min-width: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .home-button1 {
              align-self: center;
              margin-left: var(--dl-space-space-unit);
            }
            .home-text10 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-features {
              width: auto;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container3 {
              flex-direction: column;
            }
            .home-container4 {
              flex-direction: column;
            }
            .home-container5 {
              flex-direction: column;
            }
            .home-container6 {
              flex-direction: column;
            }
            .home-stats {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-container7 {
              width: auto;
              max-width: 1200px;
              min-width: 100%;
            }
            .home-text34 {
              font-size: 3rem;
            }
            .home-container8 {
              align-self: stretch;
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
