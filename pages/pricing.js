import React from 'react'
import Head from 'next/head'

import Header1 from '../components/header1'
import Footer from '../components/footer'

const Pricing = (props) => {
  return (
    <>
      <div className="pricing-container">
        <Head>
          <title>Pricing - NoThrottle</title>
          <meta property="og:title" content="Pricing - NoThrottle" />
        </Head>
        <Header1 rootClassName="header1-root-class-name2"></Header1>
        <div className="pricing-pricing">
          <div className="pricing-container01">
            <div className="pricing-pricing-card">
              <span className="pricing-text">Free</span>
              <div className="pricing-container02">
                <span className="pricing-text01">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="pricing-text04">0</span>
              </div>
              <div className="pricing-container03">
                <span className="pricing-text05">
                  <span>✔ Full access to design tool</span>
                </span>
                <span className="pricing-text07">
                  <span>✔ Publish with Teleport</span>
                </span>
                <span className="pricing-text09">
                  <span>✔ Subdomain publish</span>
                </span>
                <span className="pricing-text11">
                  <span>✔ Download code</span>
                </span>
              </div>
              <button className="pricing-button button">Learn More</button>
            </div>
            <div className="pricing-pricing-card1">
              <span className="pricing-text13">basic</span>
              <div className="pricing-container04">
                <span className="pricing-text14">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="pricing-text17">9</span>
                <span className="pricing-text18">
                  <span>/ monthly</span>
                </span>
              </div>
              <span className="pricing-text20">
                <span>Billed annualy or $12 month-to-month.</span>
                <span></span>
              </span>
              <div className="pricing-container05">
                <span className="pricing-text23">
                  <span>✔ All features of FREE plan</span>
                </span>
                <span className="pricing-text25">
                  <span>✔ Connect to custom domains</span>
                </span>
                <span className="pricing-text27">
                  <span>✔ Private projects</span>
                </span>
                <span className="pricing-text29">
                  <span>✔ No project limitations</span>
                </span>
                <span className="pricing-text31">
                  <span>✔ Unlimited collabotators</span>
                </span>
              </div>
              <button className="pricing-button1 button">Learn More</button>
            </div>
            <div className="pricing-pricing-card2">
              <span className="pricing-text33">Pro</span>
              <div className="pricing-container06">
                <span className="pricing-text34">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="pricing-text37">29</span>
                <span className="pricing-text38">
                  <span>/ monthly</span>
                </span>
              </div>
              <span className="pricing-text40">
                <span>Billed annualy or $32 month-to-month.</span>
                <span></span>
              </span>
              <div className="pricing-container07">
                <span className="pricing-text43">
                  <span>✔ All features of BASIC plan</span>
                </span>
                <span className="pricing-text45">
                  <span>✔ Priority support</span>
                </span>
                <span className="pricing-text47">
                  <span>✔ Premium analytics</span>
                </span>
                <span className="pricing-text49">
                  <span>✔ Version history</span>
                </span>
              </div>
              <button className="pricing-button2 button">Learn More</button>
            </div>
          </div>
        </div>
        <div className="pricing-pricing1">
          <div className="pricing-card">
            <div className="pricing-container08">
              <span className="pricing-text51">Free</span>
              <span className="pricing-text52">$0</span>
              <span className="pricing-text53">Per month</span>
            </div>
            <span className="pricing-text54">
              <span className="pricing-text55">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  lorem lorem, malesuada in metus vitae, scelerisque accumsan
                  ipsum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span></span>
            </span>
            <button className="pricing-button3 button">Learn More</button>
          </div>
          <div className="pricing-card1">
            <div className="pricing-container09">
              <span className="pricing-text59">basic</span>
              <span className="pricing-text60">$9</span>
              <span className="pricing-text61">Per month</span>
            </div>
            <span className="pricing-text62">
              <span className="pricing-text63">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  lorem lorem, malesuada in metus vitae, scelerisque accumsan
                  ipsum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span></span>
            </span>
            <button className="pricing-button4 button">Learn More</button>
          </div>
          <div className="pricing-card2">
            <div className="pricing-container10">
              <span className="pricing-text67">Pro</span>
              <span className="pricing-text68">$29</span>
              <span className="pricing-text69">Per month</span>
            </div>
            <span className="pricing-text70">
              <span className="pricing-text71">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  lorem lorem, malesuada in metus vitae, scelerisque accumsan
                  ipsum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span></span>
            </span>
            <button className="pricing-button5 button">Learn More</button>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .pricing-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .pricing-pricing {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-color: #d9d9d9;
            background-position: center;
          }
          .pricing-container01 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .pricing-pricing-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 400px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-pricing-card:hover {
            transform: scale(1.02);
          }
          .pricing-text {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .pricing-container02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .pricing-text01 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text04 {
            font-size: 4rem;
            font-weight: 700;
          }
          .pricing-container03 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .pricing-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-button {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-pricing-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 400px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-pricing-card1:hover {
            transform: scale(1.02);
          }
          .pricing-text13 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .pricing-container04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .pricing-text14 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text17 {
            font-size: 4rem;
            font-weight: 700;
          }
          .pricing-text18 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text20 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-container05 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .pricing-text23 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text25 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text27 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text29 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text31 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-button1 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-pricing-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 400px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .pricing-pricing-card2:hover {
            transform: scale(1.02);
          }
          .pricing-text33 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .pricing-container06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .pricing-text34 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text37 {
            font-size: 4rem;
            font-weight: 700;
          }
          .pricing-text38 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .pricing-text40 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .pricing-container07 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .pricing-text43 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text45 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text47 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text49 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-button2 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-pricing1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1106px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-card {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-white);
          }
          .pricing-container08 {
            display: flex;
            min-width: 150px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-text51 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
            text-transform: uppercase;
          }
          .pricing-text52 {
            margin: var(--dl-space-space-halfunit);
            font-size: 4rem;
            font-style: normal;
            font-weight: 500;
          }
          .pricing-text53 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
          }
          .pricing-text54 {
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-sixunits);
          }
          .pricing-text55 {
            font-style: normal;
            font-weight: 400;
          }
          .pricing-button3 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-button3:hover {
            transform: scale(1.02);
          }
          .pricing-card1 {
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-white);
          }
          .pricing-container09 {
            display: flex;
            min-width: 150px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-text59 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
            text-transform: uppercase;
          }
          .pricing-text60 {
            margin: var(--dl-space-space-halfunit);
            font-size: 4rem;
            font-style: normal;
            font-weight: 500;
          }
          .pricing-text61 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
          }
          .pricing-text62 {
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-sixunits);
          }
          .pricing-text63 {
            font-style: normal;
            font-weight: 400;
          }
          .pricing-button4 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-button4:hover {
            transform: scale(1.02);
          }
          .pricing-card2 {
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-white);
          }
          .pricing-container10 {
            display: flex;
            min-width: 150px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-text67 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
            text-transform: uppercase;
          }
          .pricing-text68 {
            margin: var(--dl-space-space-halfunit);
            font-size: 4rem;
            font-style: normal;
            font-weight: 500;
          }
          .pricing-text69 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
          }
          .pricing-text70 {
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-sixunits);
          }
          .pricing-text71 {
            font-style: normal;
            font-weight: 400;
          }
          .pricing-button5 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pricing-button5:hover {
            transform: scale(1.02);
          }
          @media (max-width: 1600px) {
            .pricing-pricing-card {
              max-width: 400px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .pricing-pricing-card1 {
              max-width: 400px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .pricing-pricing-card2 {
              max-width: 400px;
              border-radius: var(--dl-radius-radius-radius8);
            }
          }
          @media (max-width: 991px) {
            .pricing-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 100%;
              align-items: center;
            }
            .pricing-pricing-card1 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .pricing-pricing-card2 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .pricing-text52 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .pricing-text54 {
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
            }
            .pricing-button3 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .pricing-text60 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .pricing-text62 {
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
            }
            .pricing-button4 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .pricing-text68 {
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .pricing-text70 {
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
            }
            .pricing-button5 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .pricing-container01 {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .pricing-pricing-card {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-pricing-card1 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-pricing-card2 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-pricing1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .pricing-card {
              width: 100%;
              flex-direction: column;
            }
            .pricing-text54 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-card1 {
              width: 100%;
              flex-direction: column;
            }
            .pricing-text62 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pricing-card2 {
              width: 100%;
              flex-direction: column;
            }
            .pricing-text70 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pricing-container01 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-pricing-card2 {
              margin-bottom: 0px;
            }
            .pricing-pricing1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .pricing-text54 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .pricing-text62 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .pricing-text70 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Pricing
