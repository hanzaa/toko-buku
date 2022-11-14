import Card from './Card'
import Table from './Table'

import {useState} from 'react'

const NewArrival = () => {
    const [element,setElement] = useState([true])
    const handle = ()=>{
        if (element){
            setElement(false)
        }else{
            setElement(true)
        }
    }
    return ( 
        <>
        <div className="container">
            <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                <div className="row">
                    <div className="col">
                        <h2  className="fw-bold"style={{width:"38rem",marginTop:"50px"}}>New Arrival</h2>
                    </div>
                    <div className="col">
                        <button type="button" class="btn btn-outline-danger" onClick={handle} style={{width:"15rem",marginTop:"50px"}}>Change View Mode</button>
                    </div>
                </div>
                {element ? <Card/> : <Table/> }
            </div>
        </div>
            
        </>
     );
}
 
export default NewArrival;