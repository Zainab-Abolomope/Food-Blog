import { useEffect, useState } from "react";
import { data } from "../data/data";
import { http } from "../data/axios";
import { Link } from 'react-router-dom'


export default function Food() {
  const [food, setFood] = useState(null);
//   filter typebuttoons

   
    const filterType = (category) => {
        setFood(
          data.filter((item) => {
            return item.category === category;
          })
        );
      };

      const filterPrice = (price) => {
        setFood(
          data.filter((item) => {
            return item.price === price;
          })
        );
      };
    

    useEffect(()=>{
      http.get('http://localhost:3000/data')
      .then(res=> setFood(res.data))

    }, [])
    


  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}

      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Types</p>
          <div className="flex justify-between flex-wrap ">
            <button  onClick={()=> setFood(data)}className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">
              All
            </button>
            <button onClick={()=> filterType('burger')}className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Burger
            </button>
            <button onClick={()=> filterType('pizza')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Pizza
            </button>
            <button onClick={()=> filterType('salad')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Salad
            </button>
            <button onClick={()=> filterType('chicken')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Chicken
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={()=> filterPrice('$')} className=" border-orange-600 bg-orange-600 hover:bg-orange-600 hover:text-white m-1 ">
              $
            </button>
            <button  onClick={()=> filterPrice('$$')}  className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">
              $$
            </button>
            <button  onClick={()=> filterPrice('$$$')}   className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">
              $$$
            </button>
            <button  onClick={()=> filterPrice('$$$$')}   className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">
              $$$$
            </button>
            <button  onClick={()=> filterPrice('$$$$$')} className="  border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">
              $$$$$
            </button>
          </div>
        </div>
      </div>
      {/* display food images */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 ">
        {food && food.map((item, index) => (

          <div key={index} className=" border shadow-lg rounded-lg hover:scale-105 duration-300">
            <Link to={`/single/${item.id}`}>

            <img className="w-[400px] h-[300px]" src={item.image} alt={item.name} />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-500 p-1 text-white">{item.price}</span>
                </p>
                


              </div>
              <div>
                <button className='mb-3 border border-orange-600 font-bold p-3 rounded-xxl'>Add to cart</button>
              </div>
            </Link>
            
           
            
          </div>
        ))}
      </div>
    </div>
  );
}
