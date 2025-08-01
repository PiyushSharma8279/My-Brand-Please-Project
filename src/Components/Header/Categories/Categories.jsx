import React from 'react'
import { NavLink } from 'react-router-dom'

function Categories() {
    return (
        <>
            <div className=' flex gap-3 items-center text-[14px] font-medium'>
                <NavLink to="" 
                className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-[#ff508b]" : "text-gray-700"} hover:text-[#ff508b] lg:p-0`
                                    }
                
                >
                    Home
                </NavLink>
                  <NavLink to="/about" 
                className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-[#ff508b]" : "text-gray-700"}  hover:text-[#ff508b] lg:p-0`
                                    }
                
                >
                    About Us
                </NavLink>
                <NavLink>How it Works</NavLink>
                <NavLink>Our Product</NavLink>
                <NavLink>Why Choose Us?</NavLink>
                <NavLink>Additional Services</NavLink>
                <NavLink>Resources</NavLink>




            </div>


        </>
    )
}

export default Categories
