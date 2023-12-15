import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [text, setText] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useState('')

    useEffect(() => {
        const isLogin = () => {
            const username = localStorage.getItem('username');
            if (username && username.trim() !== '') {
                setIsLogin(true);
                setUser(username)
            } else {
                setUser('guest')
            }
        }
        isLogin()
    }, [isLogin])



    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/new-arrival">New Arrival</Link>
                            </li>
                        </ul>
                        <form class="d-flex me-auto" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                                onChange={(typing) => setText(typing.target.value)} />
                            <button class="btn btn-outline-danger text-white" type="submit"
                                onClick={() => { navigate(`/search/${text}`) }}>Search</button>
                        </form>
                        <p class="text-end p-2 m-0">signed as : {user}</p>

                    </div>

                    {isLogin ?
                        <button type="button" onClick={() => {
                            setIsLogin(false);
                            localStorage.removeItem('username');
                            localStorage.removeItem('password');
                        }} class="btn btn-outline-danger border-white text-white">Logout</button>
                        :
                        <a type="button" href="/login" class="btn btn-outline-danger border-white text-white">Login</a>

                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar