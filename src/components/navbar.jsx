import  { useState } from "react";
import { Link } from  'react-router-dom'
import { FaBars } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown, FaBorderStyle,  FaHeart,  FaWallet,  FaHandsHelping ,FaFill ,FaDownload} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoPeople } from "react-icons/io5";






export default function navbar() {
  const [nav, setNav]  = useState(false);

  function removeNav(){
    setNav(!nav)

  }
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center ">
        <div onClick={removeNav} className="cursor-pointer ">
          <i>
            <FaBars />
          </i>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center rounded-full p-1 text-[14px] ">
          <p className="bg-black text-white rounded-xl px-1 py-2 cursor-pointer">
            Delivery
          </p>
          <p className="p-2 cursor-pointer">Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="flex align-center">
        {/* <i className=""><FaSearch/></i> */}
        <input
          className="rounded-full flex items-center px-2  w-[200px] sm:w-[400px] lg:[500px]"
          type="text"
          placeholder="Search foods"
        />
      </div>

      <Link className="bg-black text-white px-7 py-2 rounded-xl" to='login'>Login  </Link>

      {/* cart button */}
      <button className="bg-black text-white px-7 py-2 rounded-xl flex items-center gap-2">
        <i  className="relative ">
          
          <FaCartArrowDown />
          <h1  size={10} className="absolute bottom-[6px] text-orange-400" ></h1>
        </i>
        Cart
      </button>

      {/* mobile menu */}
      {/* overlay */}
      {
        nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>:''
      }
      
      {/* side-menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-green-50 z-10 duration-300 items-center' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-green-50 z-10 duration-300 items-center'}>
        <i onClick={removeNav}className=" absolute right-4 top-4 cursor-pointer">
          <IoMdClose size={30} />
        </i>
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <Link to='/orders' className="text-xl py-4 flex">
              <FaBorderStyle size={25} className="mr-4" />
              Orders
            </Link>
            <Link to='/favorite' className="text-xl py-4 flex">
              <FaHeart size={25} className="mr-4" />
              Favourites
            </Link >
            <Link to='/wallet' className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </Link>
           
            <Link to='/help' className="text-xl py-4 flex">
              <FaHandsHelping size={25} className="mr-4" />
              Help
            </Link>
            <Link to='/promotions' className="text-xl py-4 flex">
              <FaFill size={25} className="mr-4" />
              Promotions
            </Link>
            <Link to='/best-one'className="text-xl py-4 flex">
              <FaDownload size={25} className="mr-4" />
              Best One
            </Link>
            <Link to='/invite-friends' className="text-xl py-4 flex">
              < IoPeople size={25} className="mr-4" />
              Invite Friends
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
