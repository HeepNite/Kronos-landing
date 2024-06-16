import { Navbar, Hero, Highlights, ThreeModel, Feature, HowItWorks, Footer } from './components'
import * as Sentry from '@sentry/react'


const App = () => {


  return (
    <main className="">
      <Navbar />
      <Hero />
      <Highlights />
      <ThreeModel />
      <Feature />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);