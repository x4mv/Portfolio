import { Card } from "./Card"
import {projects} from "../data/data"


export const TableOfContents = () => {
  

  return (
    <div className="grid grid-cols-3 gap-4">
        {
          projects.map( project => (
            <Card 
            key={project.id} 
            titulo={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            />
          ))
        }
        
    </div>
  )
}
