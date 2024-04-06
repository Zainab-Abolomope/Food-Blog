import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { http } from "../data/axios";
import Navbar from '../components/navbar'


export default function SingleCart() {

    const { id } = useParams();
    console.log(id)
  const [selectedItem, setSelectedItem] = useState({
     name: "Double Cheeseburger",
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fD      B8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    price: "$$$$",
  

  })
   

  useEffect(()=>{
    
    http.get(`http://localhost:3000/data/${id}`)
    .then(res => setSelectedItem(res.data))
    

    

  },[id])
  

  return <div>
    <Navbar/>
  
        <img  className="w-[400px] h-[200px]"src={selectedItem.image} alt="" />
        <p>{selectedItem.category}</p>
        <p>{selectedItem.category}</p>
        <p>{selectedItem.price}</p>
    </div>


}
