

export const Card = (props) => {
  
  const {titulo, description, image, tools} = props

  return (
  
    <div className="border border-slate-700 border-dotted">
        <img src={image} alt="project-display" className=""/>
        <h1>{titulo}</h1>
        <p>{description}</p>
        <p>{tools.map( tool => tool+' ')}</p>
    </div>

  )
}
