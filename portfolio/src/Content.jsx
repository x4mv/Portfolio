import { Description, Projects, ContactMe } from './components/index.js'


export const Content = () => {
    return (
        <div className="grid grid-cols-1 grid-row-3 gap-y-2">
            <Description className="row-span-1"/>
            <Projects className="row-span-2"/>
            <ContactMe className="row-span-1"/>
        </div>
    )
}

