import {useNavigate} from 'react-router-dom';

const Carousel = () => {
    const navigate = useNavigate()



    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={require('../assets/books.jpg')} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Netlab Bookstore</h5>
                    <p>Netlab Bookstore merupakan sebuah toko buku yang memiliki berbagai macam buku yang dapat kamu cari!</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={require('../assets/books2.jpg')} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>New Arrival</h5>
                    <p>Koleksi buku-buku terbaru yang ada di toko kami! </p>
                    <div class="slider-btn">
                        <button type="button" class="btn btn-danger" onClick={()=>{navigate('/new')}}>New Book!</button>
                    </div>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </>
    )
}

export default Carousel