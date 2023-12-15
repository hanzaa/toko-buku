import Navbar from './Navbar'
import {Link} from 'react-router-dom'

const Header = ({username})=>{
    return(
        <>
            <div class="text-center bg-danger bg-gradient text-white py-3">
                <Link class="nav-link active" to="/">
                    <h1>Netlab Bookstore</h1>
                </Link>
                <p > Toko Buku Paling Lengkap!</p>
                <Navbar username={username}/>
            </div>
        </>
    )
}

export default Header