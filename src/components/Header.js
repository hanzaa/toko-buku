import Navbar from './Navbar'

const Header = ()=>{
    return(
        <>
            <div class="text-center bg-danger bg-gradient text-white py-3">
                <h1>Netlab Bookstore</h1>
                <p > Toko Buku Paling Lengkap!</p>
                <Navbar/>
            </div>
        </>
    )
}

export default Header