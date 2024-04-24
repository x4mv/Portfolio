import '../Styles/Card.css'

export const Card = (props) => {
  
  const {titulo, description, image, link} = props
  

  return (
  
    <div className="border border-slate-700 border-dotted">
        <img src={image} alt="project-display" className=""/>


        <div className='grid grid-rows-[1fr, 2fr, 1fr]'>

          <h1 className="project-title">{titulo}</h1>
          <p className='project-description'>{description}</p>
          <p className='project-link'>
            <a href={link} target="_blank" className='project-link-text'>Repositorio de Github</a>
          </p>

        </div>
       
        
        
    </div>

  )
}
