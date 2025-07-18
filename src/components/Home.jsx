import NavBar from './NavBar';
import Hero from './Hero';
import Problem from './Problem';
import NewEcosystem from './NewEcosystem';
import AppIntro from './AppIntro';
import Features from './Features';
import Inbuiltfeatures from './InbuiltFeatures';
import Innovate from './Innovate';
import UnderDevelopment from './UD';
import Footer from './Footer';
import Mockup from './Mockup';
import Action from './Action';



function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Problem/>
      <NewEcosystem />
      <Mockup />
      <Action />
      <UnderDevelopment/>
      <Footer />
      
      
     
    </div>
  );
}

export default Home;
