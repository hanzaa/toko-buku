import axios from 'axios';
import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';


/*Silakan edit code di bawah agar dapat menampilkan daftar buku baru dari API secara dinamis */
/* HINT : Gunakan mapping array */
const Card = () =>{
    const navigate = useNavigate()

    const[data,setData] = useState([])
    const[element,setElement] = useState([false])

    useEffect(()=>{
        const getData = async()=>{
            await axios.get('https://api.itbook.store/1.0/new')
            .then(res => {setData(res.data.books)})
        }
        getData()
    },[])

    useEffect(()=>{
        if(data){
            setElement(true)
            console.log("succes!")
        }
    },[data])

    return(
        <>
        {element ? 
        <>
            {/*Berikut ini merupakan template untuk membuat book card, silakan diedit sesuai kebutuhan */}
            {data.map((data) =>{
                let { title, subtitle, isbn13, price, image } = data;

                return(
                <div className="card flex-row flex-wrap mb-5" style={{width:"48rem",marginTop:"50px"}} onClick={()=>{navigate(`/details/${isbn13}`)}}>
                <div className="card-header border-0">
                    <img key={image} src={image} alt="Buku.jpg" width="200" height="220" class="px-4"/>
                </div>
                <div className="card-block p-4" style={{width:"50%"}}>
                    <h4 key={title}className="card-title">{title}</h4>
                    <p key={subtitle}className="card-text">{subtitle}</p>
                    <p key={isbn13}className="text-muted">{isbn13}</p>
                    <h5 key={price}>{price}</h5>
                </div>
                </div>
                )
            })}

        </>
        :<></>}
        </>

    )
}

export default Card;