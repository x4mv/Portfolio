import { TableOfContents } from './components/TableOfContents.jsx'
import { Description, ContactMe } from './components/index.js'


export const Content = () => {
    return (
        <div>

            <div className='circlePosition w-[400px] h-[400px]
            bg-[#1c2080e8] roundend-[100%] absolute z-1 top-[25%]
            left-[15%] translate-x-[-50%] translate-y-[-50%]
            blur-[300px]
            '>

            </div>
            <main className="grid gap-y-8  main-grid m-4">
                <Description />

                <h1>Projectos</h1>
                <TableOfContents/>

                <h1>Contacto</h1>
                <ContactMe />
            </main>

            <div className='circlePosition w-[400px] h-[400px]
            bg-[#1c2080e8] roundend-[100%] absolute z-1 top-[75%]
            right-[5%] translate-x-[-50%] translate-y-[-50%]
            blur-[300px]
            '>

            </div>
        </div>
    )
}

