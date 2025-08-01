import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import TrySamplesBtn from './TrySamplebtn/TrySamplesBtn'
import Bag from './Bag/Bag'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Categories from './Categories/Categories'


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (index) => {
        setIsOpen(isOpen === index ? null : index)


    }
    const items = [
        {
            countries: (
                <>
                    <div className=' flex w-full pr-9 gap-1'>
                        <img
                            src="https://flagcdn.com/w80/ar.png"
                            alt="AR"
                            className="w-8 h-5 object-cover"
                        />
                        <div>AR</div>
                    </div>
                    <div className=' flex w-full gap-1'>
                        <img
                            src="https://flagcdn.com/w80/fr.png"
                            alt="FR"
                            className="w-8 h-5 object-cover"
                        />
                        <div>FR</div>
                    </div>
                    <div className=' flex w-full gap-1'>
                        <img
                            src="https://flagcdn.com/w80/gb.png"
                            alt="England"
                            className="w-8 h-5 object-cover"
                        />
                        <div>EN</div>
                    </div>
                </>
            )
        },

    ]

    return (
        <>
            <div className=' fixed top-0 right-0 left-0 z-50 bg-white flex justify-center items-center py-[20px] w-full  text-[#333]'>
                <div className=' w-1/3'>
                    <img src="https://mybrandplease.com/wp-content/uploads/2025/05/mybrandplease.com_Logo-2.gif" alt="" />
                </div>
                <div className=' flex flex-col gap-3'>


                    <div className=' flex justify-end gap-2 items-center'>
                        <SearchBar />
                        <div className=' text-[#ff508b]'>
                            Get free consultation
                        </div>
                        <TrySamplesBtn />
                        <Bag />

                        {items.map((item, index) => (
                            <div key={index} onClick={() => handleToggle(index)} className="relative border border-gray-300 h-10 w-[104px]  flex justify-evenly items-center cursor-pointer">
                                <div>
                                    <img
                                        src="https://flagcdn.com/w80/gb.png"
                                        alt="England"
                                        className="w-8 h-5 object-cover"
                                    />
                                </div>
                                <h2>EN</h2>
                                <div className="cursor-pointer ">
                                    {isOpen === index ? <FaChevronUp className=' text-gray-500 ' /> : <FaChevronDown className=' text-gray-500' />}
                                </div>

                                {
                                    isOpen === index && (
                                        <div
                                            className={`absolute top-10 left-0 bg-white shadow-md p-2 rounded transition-all duration-100 delay-600 ease-in-out`}
                                        >
                                            {item.countries}
                                        </div>


                                    )}
                            </div>
                        ))}


                    </div>
                    <div>
                        <Categories />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
