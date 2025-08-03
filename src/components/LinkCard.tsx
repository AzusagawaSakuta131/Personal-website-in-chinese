interface LinkProps{
    id:string;
    img:string;
    text:string;
    hoverCard:string;
    href:string;
    setHoverCard:(hoverCard:string)=>void;
}
export const LinkCard = ({hoverCard,setHoverCard,id,img,text,href}:LinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
    className={`linkcard ${hoverCard === id ? 'hover' : ''}`}
    onMouseEnter={()=> setHoverCard(id)}
    onMouseLeave={()=> setHoverCard("")}
    >
        <img src={img} alt = {`${id} icon`} className="linkicon"/>
        <div className="liney"></div>
        <p className="linktext">{text}</p>
    </a>
  )
}
