import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () =>{
    const [text,setText] = useState('')
    const navigate = useNavigate()

    return (
        <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" to="/new-arrival">New Arrival</Link>
                </li>
                <li class="nav-item">
                <a class="nav-link" aria-disabled>About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" aria-disabled>Contact</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" aria-disabled>Link</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                onChange={(typing)=>setText(typing.target.value)}/>
                <button class="btn btn-outline-danger text-white" type="submit"
                onClick={()=>{navigate('/search/'+text)}}>Search</button>
            </form>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar