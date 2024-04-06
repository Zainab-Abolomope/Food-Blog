import Navbar from '../components/navbar'

export default function favorite() {
  return (
    <main>
         <Navbar/>
    <div className=' favorite w-[65%] h-[60vh] flex-col m-auto py-40  mb-[30] items-center justify-center '>
        {/* offers left */}
        <div  className=''>
            <h1 className='text-black size-[80px] font-bold'>Exclusive</h1>
            <h1>Peoples Favourite</h1>
            <p>BEST SELLER</p>
            <button>Check Now</button>
        </div>
        {/* offers right */}
        <div>
            <img  className=" w-[600px] h-[300px]"  src= "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60" alt="Burger " />
        </div>
    </div>

    </main>
   
  )
}
