import { useState } from 'react';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Navbar } from './Navbar';

export const HorizontalGroup = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hoverSection,setHoverSection] = useState("")
  const sections:string[] = ["home", "about", "projects", "contact"];
  return (
    <div>
      <Navbar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        hoverSection={hoverSection}
        setHoverSection={setHoverSection}
        />
      <div className="line">

      </div>
      <main>
        {activeSection === "home" && <Home setActiveSection={setActiveSection} setHoverSection={setHoverSection}/>}
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
};
