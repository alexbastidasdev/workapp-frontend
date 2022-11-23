import { Link } from 'react-router-dom'

const HeaderPublico = () => {

    return (
        <header className="py-1 px-3 bg-white border-b sticky top-0">
            <div className="md:flex md:justify-between">
                <Link to="/">
                    <img src="/logotipo.svg" alt="logotipo" className="px-2 pb-1 w-24" />
                </Link>

                <div className='flex flex-col md:flex-row items-center gap-6'>

                    <Link
                        to="/auth"
                        className='font-bold uppercase text-[#1B053B] hover:text-[#F5C116]'
                    >Iniciar Sesion</Link>

                    <Link
                        to="/auth/registrar"
                        className='font-bold uppercase text-[#1B053B] hover:text-[#F5C116]'
                    >Registro</Link>


                </div>
            </div>
        </header>
    )
}

export default HeaderPublico