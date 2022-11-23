import { useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'
import HeaderPublico from '../components/HeaderPublico'

const OlvidePassword = () => {

    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if (email === '' || email.length < 6) {
            setAlerta({
                msg: 'El Email es obligatorio',
                error: true
            });
            return
        }

        try {
            const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email })

            setAlerta({
                msg: data.msg,
                error: false
            })

            setEmail('')

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }


    }

    const { msg } = alerta

    return (
        <>
            <HeaderPublico /> 
            <div className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
                <div className='md:w-2/3 lg:w-2/5 '>
                    <h1 className="text-[#4B1D89] font-black text-5xl capitalize text-center">Recupera tu acceso y no pierdas tus {''}
                        <span className="text-[#1B053B]">proyectos</span>
                    </h1>

                    {msg && <Alerta alerta={alerta} />}

                    <form
                        className="my-10 bg-white shadow rounded-lg p-10"
                        onSubmit={handleSubmit}
                    >


                        <div className="my-5">
                            <label
                                className="uppercase text-gray-600 block text-xl font-bold"
                                htmlFor="email"
                            >Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email de Registro"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>


                        <input
                            type="submit"
                            value="Enviar Instrucciones"
                            className="bg-[#1B053B] mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-[#F5C116] transition-colors"
                        />

                    </form>

                    <nav className="lg:flex lg:justify-between">
                        <Link
                            className='block text-center my-5 text-slate-500 uppercase text-sm'
                            to="/auth"
                        >¿Ya tienes una cuenta? Inicia Sesión</Link>

                        <Link
                            className='block text-center my-5 text-slate-500 uppercase text-sm'
                            to="/auth/registrar"
                        >¿No tienes una cuenta? Regístrate</Link>
                    </nav>

                </div>
            </div>

        </>
    )
}

export default OlvidePassword