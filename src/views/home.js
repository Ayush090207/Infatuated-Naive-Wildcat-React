import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Infatuated Naive Wildcat</title>
        <meta property="og:title" content="Infatuated Naive Wildcat" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">About</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Contact</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Research</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        logoSrc="/logo-1500h.png"
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">LEARN MORE</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text115">
              Welcome to our world of technology, where innovation meets
              simplicity! To provide a tech-driven therapy for patients with
              treatment-resistant schizophrenia by safely helping them
              restructure delusions and hallucinations.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Neuronest Technology Soultions</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1592253611968-f99dff89f6ee?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDkzNTk3N3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        image2Src="https://images.unsplash.com/photo-1542879602-cff2923f19c6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDkzNjA4MHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        image3Src="https://images.unsplash.com/photo-1588432283548-bfc3f992e2f9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDkzNjIwMXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        image7Src="https://images.unsplash.com/photo-1637058267061-1115f6418518?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDkzNjM5Mnw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text117">Immersive VR Experience</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text118">Personalized Care</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Progress Monitoring</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text120">
              Experience therapy in a virtual environment for enhanced results
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text121">Customized Treatment Plans</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text122">Track Progress and Results</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text123">Explore Our Services</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text124">
              Discover how VR therapy can revolutionize mental health treatment
              and improve overall well-being.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text125">
              Experience the Future of Therapy
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text126">Immersive VR Environments</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text127">Interactive Therapy Tools</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text128">Progress Tracking</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text129">
              Step into realistic virtual environments designed to enhance
              therapy sessions.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text130">
              Engage with interactive tools and activities to make therapy
              sessions more effective and enjoyable.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text131">
              Track your progress and improvements throughout the therapy
              process with detailed analytics.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text132">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text133">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text134">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text136">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text138">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text139">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text140">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text141">$99</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text142">$149</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text143">$199</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text144">Sign Up</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text145">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text146">$999</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text147">Sign Up</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text148">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text149">$1499</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text150">Sign Up</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text151">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text152">$1999</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text153">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text154">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text155">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text156">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text157">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text158">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text159">Unlimited VR therapy sessions</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text160">Personalized therapy programs</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text161">Progress tracking</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text162">All features of Plan 1</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text163">Group therapy sessions</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text164">Monthly progress reports</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text165">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text166">All features of Plan 2</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text167">24/7 therapist support</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text168">
              Weekly check-ins with therapist
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text183">Initial Consultation</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text184">Customized Treatment Plan</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text185">Virtual Reality Sessions</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text186">Progress Tracking</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text187">
              Schedule a consultation with our experts to discuss your needs and
              goals for VR therapy.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text188">
              Based on the consultation, we will create a personalized VR
              therapy plan tailored to your specific requirements.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text189">
              Engage in immersive VR therapy sessions designed to address your
              challenges and promote mental well-being.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Track your progress throughout the VR therapy sessions and make
              adjustments as needed for optimal results.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text191">
              Neuronest&apos;s VR therapy has been a game-changer for our
              company. Highly recommend it!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text192">
              The VR therapy sessions provided by Neuronest have had a positive
              impact on our team&apos;s stress levels and overall job
              satisfaction.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text193">
              As someone who values mental health in the workplace, I am
              impressed by the results Neuronest&apos;s VR therapy has delivered
              for my employees.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text194">
              Neuronest&apos;s VR therapy is a unique and effective way to
              address stress and anxiety in the workplace. Our team loves it!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text195">
              I have seen incredible results using Neuronest&apos;s VR therapy
              for my employees. It has significantly improved their mental
              well-being and productivity.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text196">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text197">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text198">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text199">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text200">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text201">CEO, ABC Inc.</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text202">HR Manager, XYZ Corp.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203">Founder, 123 Company</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text204">Manager, LMN Co.</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text205">
              Feel free to reach out to us for any inquiries or to schedule a
              consultation.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text206">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text207">NeuroNest Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text208">NeuroNest Research Center</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209">
              123 Virtual Reality Street, VR City, 12345
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text210">
              456 Mindfulness Avenue, Mind City, 54321
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text211">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text212">About</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Contact</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text214">Research</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text215">Pricing</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text216">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text217">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text218">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
