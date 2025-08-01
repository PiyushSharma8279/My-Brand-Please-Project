import React, { useEffect } from 'react';
import './privatelabel.css';


function PrivateLabel() {
    useEffect(() => {
        const scroll = ScrollReveal({
            reset: true,
            duration: 2600,
            distance: '60px',
            scale: 0.85
        });

        scroll.reveal('.private', { delay: 1000, origin: 'bottom' });
        scroll.reveal('.brandsimage', { delay: 3500, origin: 'top' });
        scroll.reveal('.fontStyle', { delay: 1500, origin: 'bottom' });
        scroll.reveal('.launchText', { delay: 1100, origin: 'left' });
        scroll.reveal('.formulation', { delay: 1100, origin: 'right' });
        scroll.reveal('.buttonsAndImages', { delay: 1100, origin: 'bottom' });




    }, []);


    return (
        <>
            <div className=' bg-[#efdfc4] w-full h-[1000px] mt-[109px] flex flex-col items-center '>
                <div className=' mt-5 brandsimage'>
                    <img src="https://mybrandplease.com/wp-content/uploads/2025/05/mybrandplease.com_Logo-2.gif" alt="" />
                </div>
                <div>
                    <h2 className=' text-[55px] private'>PRIVATE LABEL IS NOW SIMPLIFIED</h2>
                </div>
                <div className=' flex flex-col items-center  fontStyle pb-3'>
                    <h2 className='  text-[30px]'>Unleash your custom personal care line effortlesly</h2>
                    <h2 className=' text-[30px]'>We made it easier than you ever imagined</h2>
                </div>
                <div className=' flex flex-col items-center font-medium pt-10'>
                    <h2 className='  text-[22px] launchText'>Launch your Own Cosmetic line & Amplify Your Brand With</h2>
                    <h2 className=' text-[22px] formulation'>Our Expert Formulations, Empowering Your Success!</h2>
                </div>
                <div className=' flex justify-evenly  w-full buttonsAndImages'>
                    <div className=''>
                        <img src="https://mybrandplease.com/wp-content/uploads/2023/08/FDA-scaled.webp" alt="" className='w-[150px] h-[150px]' />
                    </div>
                    <div className='pt-10'>
                        <button className=' bg-gradient-to-b bg-[#ff9006] to-[#ff5e3a] px-15 py-4 rounded-lg text-white font-medium text-[18px]'>Learn How</button>
                    </div>
                    <div className=''>
                        <img src="https://mybrandplease.com/wp-content/uploads/2023/08/MOQ.webp" alt="" className=' w-[150px] h-[150px]  ' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PrivateLabel
