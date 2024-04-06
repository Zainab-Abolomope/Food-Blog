

export default function hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
            {/* overlay */}
            <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex-col justify-center p-14 ">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl font-bold">The <span  className="text-orange-600">Best</span></h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl font-bold">Foods <span className="text-orange-600">Delivered</span></h1>
            </div>
            <img className="w-full max-h-[500px]" src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb"alt="" />

            
          
        </div>
    </div>
  )
}
