import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';
// yarn add -D @types/react-router-dom
// el @types es un archivo de ayuda o un archivo de definicion de TypeScript el cual nos da todo el tipado es decir que ahora es como si esta libreria de 'react-router-dom' hubiera sido escrita en TypeScript pero no lo fue
// al hacer el @types/react-router-dom ahora TypeScript va a saber todas las funcionalidades de la libreria de 'react-router-dom'

// NOTA: en el package .json notemos que tenemos versiones distintas del 'react-router-dom' y tambien del '@types/react-router-dom'
// Usualmente no debemos de preocuparnos de que no sean la misma version porque lo unico importante es que la version mayor si sea la misma en este caso ambas estan en su version 6 o 5 y eso esta bien 




export const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className='main-layout'>

                    <nav>
                        <img src={ logo } alt='React Logo' />

                        <ul>
                            <li>
                                {/* de manera condicional necesitamos mostrar una clase de CSS que tenemos en el index.css llamada nav-active */}
                                <NavLink to='/home' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/users' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                            </li>
                        </ul>          
                    </nav>

                    <Routes>

                        <Route path="about" element={ <h1>About Page</h1> } />
                        <Route path="users" element={ <h1>Users Page</h1> } />
                        <Route path="home" element={ <h1>Home Page</h1> } />

                        <Route path="/*" element={ <Navigate to='/home' replace/> } />
                        {/* usamos el <Route path="/*" element={ <Navigate to='/home' replace/> } /> en caso de que no tengamos definida alguna ruta en particular para que redireccione al usuario al '/home' */}
                        
                    </Routes>

                </div>
            </BrowserRouter>
        </>
    )
}