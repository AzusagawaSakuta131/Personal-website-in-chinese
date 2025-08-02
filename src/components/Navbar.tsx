interface NavbarProps {
  sections: string[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  hoverSection:string;
  setHoverSection:(section:string)=> void;
}
export const Navbar = ({ sections, activeSection, setActiveSection,hoverSection,setHoverSection }:NavbarProps) => {
  return (
    <div>
    <nav className="navbar">
        {sections.map((section:string) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            onMouseEnter={() => setHoverSection(section)} 
            onMouseLeave={() => setHoverSection("")}
            className={`${activeSection === section ? "active" : ""} 
            ${hoverSection === section ? "hoverd" : ""}`}
          >
            {section}
          </button>
        ))}
      </nav></div>
  )
}
