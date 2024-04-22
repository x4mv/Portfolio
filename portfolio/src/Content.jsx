import { Description, Projects, ContactMe } from './components/index.js'


export const Content = () => {
    return (
        <div>
            <main className="grid gap-y-8  main-grid m-4">
                <Description className="row-span-1"/>
                <Projects className="row-span-2"/>
                <ContactMe className="row-span-1"/>
            </main>
        </div>
    )
}

