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
                                        La Tareas es solo el principio
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
                
                
              
            </div>

        </div>
    )

}

export default Home