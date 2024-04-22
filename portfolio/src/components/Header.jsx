import '../App.css'

export const Header = () => {
  return (
    <>
        <header className='bg-black border-b border-solid border-slate-700 p-4 mb-2'>
            <nav>
                <ul className='text-slate-400 p-2 flex justify-center'>
                    <li className='transition duration-300 delay-150 hover:delay-150 hover:text-white ml-8'>About me</li>
                    <li className='transition duration-300 delay-150 hover:delay-150 hover:text-white ml-8'>Projects</li>
                    <li className='transition duration-300 delay-150 hover:delay-150 hover:text-white ml-8'>Contact me</li>
                </ul>
            </nav>
        </header>
    </>
  )
}

