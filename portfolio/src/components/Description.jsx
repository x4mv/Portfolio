import '../Styles/Description.css'

export const Description = () => {
    return (
        <>
            <div className="border border-slate-700 border-dotted grid place-content-center rounded-md p-4">
                <h1 className='title-lbl mb-4'>Desarrollador de <span className="software-lbl">Software</span></h1>
                <p className='desciption-text mb-2'>
                Soy un desarrollador frontend que se especializa en crear sitios web para empresas de todo tipo, 
                con un fuerte enfoque en el <span className='span-highlight'>diseño y calidad</span>. 
                Combino habilidades técnicas con creatividad para construir <span className='span-highlight'>páginas web atractivas y funcionales</span>, 
                asegurando una <span className='span-highlight' >experiencia de usuario fluida</span>.
                </p>
            </div>
        </>
    )
}

