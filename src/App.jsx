import './App.css';
import { Header } from './Components/Header/Header.jsx';
import { BeachSection } from './Components/BeachSection/BeachSection.jsx';
import { Mvv } from './Components/Mvv/Mvv.jsx';
import { StoriesSection } from './Components/StoriesSection/StoriesSection.jsx';
import { ImpactSection } from './Components/ImpactSection/ImpactSection.jsx';
import { ContactForm } from './Components/ContactForm/ContactForm.jsx';
import { Footer } from './Components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <BeachSection />
      <Mvv />
      <StoriesSection />
      <ImpactSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
