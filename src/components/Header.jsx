import { Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import useAuth from '../hooks/useAuth'
import Busqueda from './Busqueda'

const Header = () => {

    const { handleBuscador, cerrarSesionProyectos } = useProyectos()
    const { cerrarSesionAuth } = useAuth()

    const handleCerrarSesion = () => {
        cerrarSesionAuth()
        cerrarSesionProyectos()
        localStorage.removeItem('token')
    }


    return (
        <header className="py-1 px-2 bg-white border-b sticky top-0">
            <div className="md:flex md:justify-between">
                <Link to="/proyectos">
                    <img src="./src/logotipo.svg" alt="logo" className="px-2 pb-1 w-24" />
                </Link>

                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <button
                        type="button"
                        className='font-bold uppercase text-[#1B053B] hover:text-[#F5C116]'
                        onClick={handleBuscador}
                    >Buscar Proyecto</button>
                    <Link
                        to="/proyectos"
                        className='font-bold uppercase text-[#1B053B] hover:text-[#F5C116]' 
                    >Proyectos</Link>

                    <button
                        type="button"
                        className='text-white text-sm bg-[#1B053B] p-3 rounded-md uppercase font-bold hover:bg-[#F5C116]'
                        onClick={handleCerrarSesion}
                    >Cerrar Sesión</button>

                    <Busqueda />
                </div>
            </div>
        </header>
    )
}

export default Header