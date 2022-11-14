import {useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Table = () => {

    const[data,setData] = useState([])
    const[element,setElement] = useState([false])


    const getData = async()=>{
        await axios.get('https://api.itbook.store/1.0/new')
        .then(res => {setData(res.data.books)})
    }

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        if(data){
            setElement(true)
            console.log("succes!")
        }
    })


    return ( 
        <>
        {element ? 
            <>
                <div className="card flex-row flex-wrap mb-5" style={{width:"48rem",marginTop:"50px"}} >
                    <table class= "table table-striped border" >
                    <thead style={{tableLayout:'fixed',textOverflow:'inherit'}}>
                        <tr>
                            <th>Title</th>
                            <th>Subtitle</th>
                            <th>ISBN13</th>
                            <th>Price</th>
                            <th>Details</th>

                            
                        </tr> 
                    </thead>        
                    <tbody>
                        {data.map((data) =>{
                            let { title, subtitle, isbn13, price, image } = data;

                            return(
                                    <tr>
                                        <td>{title}</td>
                                        <td>{subtitle}</td>
                                        <td>{isbn13}</td>
                                        <td>{price}</td>
                                        <td><Link to = {`/details/${isbn13}`} >More Details</Link></td>
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
                
            </> 
            : <></>}
        </>
     );
}
 
export default Table;