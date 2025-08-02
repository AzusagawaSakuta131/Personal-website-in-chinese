interface HomeProps {
  setActiveSection: (section: string) => void;
  setHoverSection:(section:string)=>void;
}
export const Home = ({setActiveSection, setHoverSection}:HomeProps) => {
  return (
    <div className="content">
      <p>Hello! Welcome to me personal website.This is home page.</p>
      <p>Click the <span onClick={()=>setActiveSection("projects")}  onMouseEnter={() => setHoverSection("projects")} onMouseLeave={() => setHoverSection("")}>PROJECTS</span> button to explore my web development work.</p>
      <p>To learn more about my services, click the <span  onClick={()=>setActiveSection("about")} onMouseEnter={() => setHoverSection("about")} onMouseLeave={() => setHoverSection("")}>ABOUT</span> button.</p>
      <p>If you have any questions or would like to get in touch, feel free to click the <span onClick={()=>setActiveSection("contact")} onMouseEnter={() => setHoverSection("contact")} onMouseLeave={() => setHoverSection("")}>CONTACT</span> button.</p>
      </div>
  )
}
