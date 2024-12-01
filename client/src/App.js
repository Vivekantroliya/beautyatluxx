import React from 'react';

import Layout from './hoc/Layout/Layout';
import Banner from './containers/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import Section from './containers/Section/Section';
import Footer from './components/Footer/Footer';

import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contacts from './components/Contacts/Contacts';
import Summary from './components/Summary/Summary';

const App = () => {
    return (
      <Layout>
        <Navigation/>

        <Banner />

        <Section
          id = 'about'
          meta = 'Welcome to'
          name = 'Beauty at Luxx'
          description = 'We’re so glad you’re here! Whether you’re looking for a fresh new look, a relaxing treatment, or a little self-care, our team is here to make your experience exceptional. Step into our welcoming, stylish space and let us pamper you with top-notch services designed to help you look and feel your absolute best. We can’t wait to treat you!'
        >
          <About />
        </Section>

        <Section
          id = 'services'
          meta = 'What we do'
          name = 'Services'
          description = "Our salon provides a comprehensive range of beauty services designed to enhance your natural beauty and boost your confidence. From expert haircuts, coloring, and styling to rejuvenating skincare treatments, manicures, pedicures, and professional makeup applications, our skilled team is dedicated to delivering exceptional results. Whether you're preparing for a special occasion or simply looking to pamper yourself, we invite you to experience our personalized approach in a welcoming atmosphere. Book your appointment today!"        >
          <Services />
        </Section>

        <Section
          id = 'gallery'
          meta = 'Our work'
          name = 'Gallery'
          description = "Explore our work gallery to see the stunning transformations we've created for our clients. From stylish haircuts and vibrant color changes to flawless makeup and beautiful nail art, our portfolio showcases our expertise and dedication to excellence. Each image reflects our commitment to enhancing beauty and individual style. Let our work inspire your next look!"        >
          <Gallery />
        </Section>

        <Section
          id = 'testimonials'
          meta = 'What clients say'
          name = 'Testimonials'
          description = "Discover what our clients are saying! Read heartfelt testimonials from satisfied customers who have experienced our exceptional services. Their stories reflect our commitment to quality, style, and a welcoming atmosphere."
        >
          <Testimonials />
        </Section>
        
        <Section
          id = 'contact'
          meta = 'Where to find us'
          name = 'Contacts'
          description = "Get in touch with us! Whether you have questions, want to book an appointment, or need more information about our services, we’re here to help. Contact us via phone, email, or visit us in person. We look forward to hearing from you!"
        >
          <Contacts />
        </Section>

        <Summary />

        <Footer />
      </Layout>
    );
}

export default App;

/*

font-family: 'Satisfy', cursive;
font-family: 'Suranna', serif;
font-family: 'Poppins', sans-serif;
font-family: 'Dancing Script', cursive;
font-family: 'Montserrat', sans-serif;
font-family: 'Oranienbaum', serif;

$eunry1: #D6BCBC;
$eunry2: #6D0E2A;
$eunry3: #A28282;
$dark1: #444444;
$dark2: #616161;

*/