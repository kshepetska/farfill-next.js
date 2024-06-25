import Nav from '../components/Nav'
import Header from '../components/Header'
import Brands from '../components/Brands'
import Services from './services'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Brands />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}
