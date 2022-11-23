import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'
import useAuth from '../hooks/useAuth';
import HeaderPublico from '../components/HeaderPublico'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth();

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();

        if ([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }

        try {
            const { data } = await clienteAxios.post('/usuarios/login', { email, password })
            setAlerta({})
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/proyectos')
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
                    <h1 className="text-[#4B1D89] font-black text-5xl capitalize text-center">Inicia sesión y administra tus {''}
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
                        <div className="my-5">
                            <label
                                className="uppercase text-gray-600 block text-xl font-bold"
                                htmlFor="password"
                            >Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password de Registro"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <input
                            type="submit"
                            value="Iniciar Sesión" 
                            className="bg-[#1B053B] mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-[#F5C116] transition-colors"
                        />

                    </form>

                    <nav className="lg:flex lg:justify-between">
                        <Link
                            className='block text-center my-5 text-slate-500 uppercase text-sm'
                            to="/auth/registrar"
                        >Regístrate</Link>

                        <Link
                            className='block text-center my-5 text-slate-500 uppercase text-sm'
                            to="/auth/olvide-password"
                        >Olvide Mi Password</Link>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Login