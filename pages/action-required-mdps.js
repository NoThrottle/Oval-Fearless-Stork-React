import React from 'react'
import Head from 'next/head'

import WorkDefaultCard from '../components/work-default-card'
import NestedWorkHeader from '../components/nested-work-header'
import NestedWorkDefaultCard from '../components/nested-work-default-card'

const MDPSActionRequired = (props) => {
  return (
    <>
      <div className="m-d-p-s-action-required-container">
        <Head>
          <title>MDPS-Action-Required - NoThrottle</title>
          <meta
            property="og:title"
            content="MDPS-Action-Required - NoThrottle"
          />
        </Head>
        <div className="m-d-p-s-action-required-container01">
          <h1 className="m-d-p-s-action-required-text">
            <span>
              HI!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </h1>
          <span className="m-d-p-s-action-required-text03">
            Here is a comprehensive list of all works that you have asked me to
            do which may need your attention. Thank you!
          </span>
        </div>
        <div className="m-d-p-s-action-required-container02">
          <div className="m-d-p-s-action-required-blog">
            <WorkDefaultCard
              status="UNPAID"
              image_src="https://i.imgur.com/5E1S2d0.png"
              description="MDPS opens its doors for student enrollment, school years 2022-2023."
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              PROJECT_DATE="March 4, 2022"
              PROJECT_NAME="Enrollment SY 2022-2023 Tarp"
              PROJECT_TYPE="GRAPHIC DESIGN"
              rootClassName="rootClassName3"
              revisions_date="v2-7/3/22, v3-11/3/22"
              FIRST_VERSION_DATE="March 5, 2022"
              final_revision_date="March 16, 2022"
            ></WorkDefaultCard>
            <WorkDefaultCard
              image_src="https://i.imgur.com/7wTzpYb.png"
              description="MDPS posts general instructions on how to enroll this school year."
              PROJECT_DATE="March 11, 2022"
              PROJECT_NAME="Enrollment SY 2022-2023 Tarp 2"
              PROJECT_TYPE="GRAPHIC DESIGN"
              rootClassName="work-default-card-root-class-name1"
              revisions_date="v2-2/4/22, v3-2/4/22"
              FIRST_VERSION_DATE="March 30, 2022"
              final_revision_date="April 4, 2022"
            ></WorkDefaultCard>
            <div className="m-d-p-s-action-required-blog-post-card">
              <img
                alt="image"
                src="https://i.imgur.com/28Iq24T.png"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="m-d-p-s-action-required-image"
              />
              <div className="m-d-p-s-action-required-container03">
                <div className="m-d-p-s-action-required-container04">
                  <span className="m-d-p-s-action-required-text04">
                    GRAPHIC DESIGN
                  </span>
                  <span className="m-d-p-s-action-required-text05">UNPAID</span>
                </div>
                <h1 className="m-d-p-s-action-required-text06">
                  Final Enrollment SY 2022-2023 Tarp
                </h1>
                <span className="m-d-p-s-action-required-text07">
                  MDPS puts out a final notice of their enrollments being open.
                </span>
                <div className="m-d-p-s-action-required-container05">
                  <div className="m-d-p-s-action-required-profile">
                    <span className="m-d-p-s-action-required-text08">
                      Start Date:
                    </span>
                    <span className="m-d-p-s-action-required-text09">
                      First Version Date:
                    </span>
                    <span className="m-d-p-s-action-required-text10">
                      Revisions:
                    </span>
                    <span className="m-d-p-s-action-required-text11">
                      Final Revision Date:
                    </span>
                  </div>
                  <div className="m-d-p-s-action-required-profile1">
                    <span className="m-d-p-s-action-required-text12">
                      June 28, 2022
                    </span>
                    <span className="m-d-p-s-action-required-text13">
                      July 3, 2022
                    </span>
                    <span className="m-d-p-s-action-required-text14">
                      v2-4/7/22
                    </span>
                    <span className="m-d-p-s-action-required-text15">
                      July 5, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-d-p-s-action-required-blog-post-card1">
              <img
                alt="image"
                src="https://i.imgur.com/BOZ5pUI.png"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="m-d-p-s-action-required-image1"
              />
              <div className="m-d-p-s-action-required-container06">
                <div className="m-d-p-s-action-required-container07">
                  <span className="m-d-p-s-action-required-text16">
                    GRAPHIC DESIGN
                  </span>
                  <span className="m-d-p-s-action-required-text17">UNPAID</span>
                </div>
                <h1 className="m-d-p-s-action-required-text18">
                  Duties and Responsibilities of Parents and Guardians
                </h1>
                <span className="m-d-p-s-action-required-text19">
                  Single slide presentation explaining the duties and
                  responsibilities of parents/guardians of MDPSians.
                </span>
                <div className="m-d-p-s-action-required-container08">
                  <div className="m-d-p-s-action-required-profile2">
                    <span className="m-d-p-s-action-required-text20">
                      Start Date:
                    </span>
                    <span className="m-d-p-s-action-required-text21">
                      First Version Date:
                    </span>
                    <span className="m-d-p-s-action-required-text22">
                      Revisions:
                    </span>
                    <span className="m-d-p-s-action-required-text23">
                      Final Revision Date:
                    </span>
                  </div>
                  <div className="m-d-p-s-action-required-profile3">
                    <span className="m-d-p-s-action-required-text24">
                      June 28, 2022
                    </span>
                    <span className="m-d-p-s-action-required-text25">
                      July 7, 2022
                    </span>
                    <span className="m-d-p-s-action-required-text26">
                      1 Revision (final)
                    </span>
                    <span className="m-d-p-s-action-required-text27">
                      July 11, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-d-p-s-action-required-container09">
              <NestedWorkHeader
                text="MDPS details their procedures and protocol regarding matters related to the prevention of Covid-19 spread in their school premises."
                text1="ALBUM MULTIMEDIA"
                heading="Covid-19 Procedures and Protocol"
                rootClassName="nested-work-header-root-class-name"
              ></NestedWorkHeader>
              <NestedWorkDefaultCard
                image_src="https://i.imgur.com/vcUYl60.png"
                PROJECT_DATE="June 26, 2022"
                PROJECT_NAME="Should I Report To School Flowchart"
                PROJECT_TYPE="GRAPHIC DESIGN"
                rootClassName="nested-work-default-card-root-class-name1"
                revisions_date="None"
                final_revision_date="June 27, 2022"
              ></NestedWorkDefaultCard>
              <NestedWorkDefaultCard
                image_src="https://i.imgur.com/MjmiXV6.png"
                PROJECT_DATE="June 26. 2022"
                PROJECT_NAME="What to do if a student is sick Flowchart"
                PROJECT_TYPE="GRAPHIC DESIGN"
                rootClassName="nested-work-default-card-root-class-name2"
                revisions_date="None"
                final_revision_date="June 27, 2022"
              ></NestedWorkDefaultCard>
              <NestedWorkDefaultCard
                image_src="https://i.imgur.com/ON5FCxk.png"
                PROJECT_DATE="June 26, 2022"
                PROJECT_NAME="Contingency Plan For School Closure/Re-Opening"
                PROJECT_TYPE="GRAPHIC DESIGN"
                rootClassName="nested-work-default-card-root-class-name3"
                revisions_date="None"
                final_revision_date="June 27, 2022"
              ></NestedWorkDefaultCard>
              <NestedWorkDefaultCard
                image_src="https://i.imgur.com/JjmEY83.png"
                PROJECT_DATE="June 26, 2022"
                PROJECT_NAME="Contact Tracing Flowchart"
                PROJECT_TYPE="Graphic Design"
                rootClassName="nested-work-default-card-root-class-name4"
                revisions_date="None"
                final_revision_date="June 27, 2022"
              ></NestedWorkDefaultCard>
              <NestedWorkDefaultCard
                image_src="https://i.imgur.com/U2T1re0.jpg"
                PROJECT_DATE="June 28, 2022"
                PROJECT_NAME="Procedure For Reporting, Management, and Referral"
                PROJECT_TYPE="GRAPHIC DESIGN"
                rootClassName="nested-work-default-card-root-class-name"
                revisions_date="None"
                final_revision_date="July 7, 2022"
              ></NestedWorkDefaultCard>
            </div>
            <WorkDefaultCard
              image_src="https://i.imgur.com/v1cKM8u.png"
              description="MDPS informs their community using a brochure dense with information about face-to-face classes."
              PROJECT_DATE="June 30, 2022"
              PROJECT_NAME="MDPS Manual for Face-to-face Classes Brochure"
              PROJECT_TYPE="GRAPHIC DESIGN"
              rootClassName="work-default-card-root-class-name2"
              revisions_date="v2-7/7/22, v3-11/7/22, v4-11/7/22"
              FIRST_VERSION_DATE="July 7, 2022"
              final_revision_date="July 11, 2022"
            ></WorkDefaultCard>
            <WorkDefaultCard
              image_src="https://i.imgur.com/3O2fhXH.png"
              description="MDPS presents information about the upcoming face-to-face classes."
              PROJECT_DATE="June 30, 2022"
              PROJECT_NAME="MDPS Regular Classes Open on August 8, 2022 - Presentation"
              PROJECT_TYPE="GRAPHIC DESIGN"
              rootClassName="work-default-card-root-class-name4"
              revisions_date="v2-11/7/22"
              FIRST_VERSION_DATE="July 7, 2022"
              final_revision_date="July 13, 2022"
            ></WorkDefaultCard>
          </div>
        </div>
        <footer className="m-d-p-s-action-required-footer">
          <span className="m-d-p-s-action-required-text28">
            © 2022 NoThrottle Inc., All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .m-d-p-s-action-required-container {
            width: 100%;
            display: flex;
            overflow: auto;
            flex-wrap: wrap;
            min-height: 100vh;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              90deg,
              rgba(250, 242, 254, 1) 0%,
              rgba(243, 243, 255, 1) 39%,
              rgba(240, 253, 255, 1) 100%
            );
          }
          .m-d-p-s-action-required-container01 {
            display: flex;
            position: relative;
            max-width: 1106px;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .m-d-p-s-action-required-text {
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .m-d-p-s-action-required-text03 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .m-d-p-s-action-required-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .m-d-p-s-action-required-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .m-d-p-s-action-required-blog-post-card {
            width: 100%;
            display: flex;
            max-width: 1106px;
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .m-d-p-s-action-required-blog-post-card:hover {
            transform: scale(1.02);
          }
          .m-d-p-s-action-required-image {
            width: auto;
            height: 350px;
            max-width: 600px;
            min-width: 350px;
            max-height: 350px;
            min-height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 0px;
            border-radius: 0px;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .m-d-p-s-action-required-container03 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .m-d-p-s-action-required-container04 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .m-d-p-s-action-required-text04 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .m-d-p-s-action-required-text05 {
            color: var(--dl-color-gray-500);
            font-weight: 300;
          }
          .m-d-p-s-action-required-text06 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .m-d-p-s-action-required-text07 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .m-d-p-s-action-required-container05 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .m-d-p-s-action-required-profile {
            display: flex;
            align-items: flex-start;
            padding-left: 0px;
            flex-direction: column;
          }
          .m-d-p-s-action-required-text08 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text09 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text10 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text11 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-profile1 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .m-d-p-s-action-required-text12 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text13 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text14 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text15 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-blog-post-card1 {
            width: 100%;
            display: flex;
            max-width: 1106px;
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .m-d-p-s-action-required-blog-post-card1:hover {
            transform: scale(1.02);
          }
          .m-d-p-s-action-required-image1 {
            width: auto;
            height: 350px;
            max-width: 600px;
            min-width: 350px;
            max-height: 350px;
            min-height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-radius: 0px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .m-d-p-s-action-required-container06 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .m-d-p-s-action-required-container07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .m-d-p-s-action-required-text16 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .m-d-p-s-action-required-text17 {
            color: var(--dl-color-gray-500);
            font-weight: 300;
          }
          .m-d-p-s-action-required-text18 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .m-d-p-s-action-required-text19 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .m-d-p-s-action-required-container08 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .m-d-p-s-action-required-profile2 {
            display: flex;
            align-items: flex-start;
            padding-left: 0px;
            flex-direction: column;
          }
          .m-d-p-s-action-required-text20 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text21 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text22 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text23 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-profile3 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .m-d-p-s-action-required-text24 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text25 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text26 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-text27 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-left: 0px;
          }
          .m-d-p-s-action-required-container09 {
            width: 100%;
            display: flex;
            max-width: 1106px;
            box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.1);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .m-d-p-s-action-required-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          @media (max-width: 991px) {
            .m-d-p-s-action-required-container {
              align-items: center;
              justify-content: center;
            }
            .m-d-p-s-action-required-container01 {
              width: auto;
              align-self: center;
            }
            .m-d-p-s-action-required-container02 {
              align-self: stretch;
              align-items: center;
              justify-content: center;
            }
            .m-d-p-s-action-required-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
            .m-d-p-s-action-required-blog-post-card1 {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .m-d-p-s-action-required-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .m-d-p-s-action-required-blog-post-card {
              flex-direction: column;
            }
            .m-d-p-s-action-required-image {
              width: 100%;
            }
            .m-d-p-s-action-required-blog-post-card1 {
              flex-direction: column;
            }
            .m-d-p-s-action-required-image1 {
              width: 100%;
            }
            .m-d-p-s-action-required-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .m-d-p-s-action-required-text28 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .m-d-p-s-action-required-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .m-d-p-s-action-required-container05 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .m-d-p-s-action-required-container08 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .m-d-p-s-action-required-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .m-d-p-s-action-required-text28 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default MDPSActionRequired
