import HeaderPublico from "../components/HeaderPublico"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <HeaderPublico />

            <div className="leading-normal tracking-normal text-black">

                <div className="pt-15">
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">

                            <h1 className="my-4 text-5xl font-bold leading-tight text-[#4B1D89]">
                                workApp unifica tus tareas, compañeros de equipo y herramientas
                            </h1>
                            <p className="leading-normal text-2xl mb-8 text-[#1B053B]">
                                Mantenlo todo en el mismo lugar, aunque tu equipo no lo esté.
                            </p>

                            <Link
                                to="/auth/registrar"
                                className='text-white text-sm bg-[#1B053B] py-3 px-6 rounded-md uppercase font-bold hover:bg-[#F5C116] mx-auto lg:mx- mb-3'
                            >EMPEZAR</Link>

                        </div>

                        <div className="w-full md:w-3/5 py-6 text-center">
                            <img className="w-full md:w-4/5 z-50" src="hero.png" />
                        </div>
                    </div>
                </div>

                <section className="bg-white border-b py-8">
                    <div className="container max-w-5xl mx-auto m-8">
                        <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-[#4B1D89]">
                            No solo es trabajo. Es una forma de trabajar juntos.
                        </h2>
                        
                        <div className="flex flex-wrap">
                            <div className="w-5/6 sm:w-1/2 p-6">
                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Empieza creando tu proyecto, crea tareas,  colaboradores con WorkApp. 
                                </h3>
                                <p className="text-gray-600 mb-8 text-justify">
                                Personaliza y amplía 
                                con más funciones tu trabajo en equipo a su mismo ritmo. 
                                Gestiona proyectos, organiza tareas y crea espíritu de equipo, en un solo lugar.<br />
                                    <br />
                                    </p>
                        
                            </div>
                           
                        <div className="w-full">
                            <img className="w-full " src="vista.png" />
                        </div>
                        </div>
                        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                            <div className="w-full sm:w-1/2 p-6 mt-6">
                            <img src="tarea.png" alt="" />
                          </div>
                            <div className="w-full sm:w-1/2 p-6 mt-6">
                                <div className="align-middle">
                                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Funciones para el éxito de tu equipo
                                    </h3>
                                    <p className="text-gray-600 mb-8 text-justify">
                                    Para garantizar la productividad del equipo se requiere una herramienta eficaz (y mucho café). Desde reuniones y proyectos hasta la definición de objetivos y eventos, con las intuitivas funciones de Trello cualquier equipo puede configurar y personalizar rápidamente flujos de trabajo para casi todo.
                                        <br /><br/>
                                        
                                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                        El tablero es solo el principio
                                        </h3>                               
                                    </p>
                                    <p className="text-gray-600 mb-8 text-justify">
                                    Para garantizar la productividad del equipo se requiere una herramienta eficaz (y mucho café). Desde reuniones y proyectos hasta la definición de objetivos y eventos, con las intuitivas funciones de Trello cualquier equipo puede configurar y personalizar rápidamente flujos de trabajo para casi todo.
                                        <br /></p>
                                </div>
                                <p className="text-gray-600 mb-8 text-justify">
                                Las tareas de WorkApp son tu pasaporte a un trabajo más organizado, ya que permiten gestionar, supervisar y compartir con el equipo todas las partes de una tarea. Abre cualquier tareas para descubrir un ecosistema de checklists, fechas de vencimiento, adjuntos, conversaciones y mucho más.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100 py-8">
                    <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Pricing
                        </h1>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                                    <div className="p-8 text-3xl font-bold text-center border-b-4">
                                        Free
                                    </div>
                                    <ul className="w-full text-center text-sm">
                                        <li className="border-b py-4">Thing</li>
                                        <li className="border-b py-4">Thing</li>
                                        <li className="border-b py-4">Thing</li>
                                    </ul>
                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                        £0
                                        <span className="text-base">for one user</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                           hola
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="container mx-auto text-center py-6 mb-12">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                        Call to Action
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <h3 className="my-4 text-3xl leading-tight">
                        Main Hero Message to sell yourself!
                    </h3>
                    <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Action!
                    </button>
                </section>

                <footer className="bg-white py-3 px-3">
                    <div className="md:flex md:justify-between">

                        <Link to="/">
                            <img src="../logotipo.svg" alt="logotipo" className="px-2 pb-1 w-24" />
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

                </footer>

            </div>

        </div>
    )

}

export default Home