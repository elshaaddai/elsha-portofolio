import './App.css';
import Home from './components/home'
import Header from './components/header'
import Profile from './components/profile'
import Project from './components/project'
import Certificate from './components/certificate';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Profile />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
