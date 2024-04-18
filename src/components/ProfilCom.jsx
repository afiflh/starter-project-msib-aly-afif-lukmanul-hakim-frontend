import React from 'react';

const ProfilCom = () => {
    return (
        <div>
            <div className='flex justify-between bg-black absolute top-0 left-0 w-full shadow-2xl'>
                <div className='p-5 ml-3'>
                    <img src="./src/assets/gamers.png" alt="Profile" className='rounded-3xl w-10 h-10' />
                </div>
                <div className='p-3 absolute left-24 mt-4'>
                    <span className='mr-10'>Dashboard</span>
                    <span className='mr-10'>Game</span>
                    <span>About Store</span>
                </div>
                <div className='p-5 mr-5'>
                    <img src="./src/assets/Afif.jpg" alt="Profile" className='rounded-3xl w-10 h-10' />
                </div>  
            </div>
            
            <div className='bg-black absolute top-44 left-0 w-full h-[470px] rounded-2xl shadow-2xl flex flex-col items-center'>
                <table className='text-white text-3xl tracking-widest mt-32'>
                    <tr>
                        <td className='text-start'>Name</td>
                        <td className='text-start'>&nbsp;:</td>
                        <td className='text-start'>Afif Lukmanul Hakim</td>
                    </tr>
                    <tr>
                        <td className='text-start'>Username</td>
                        <td className='text-start'>&nbsp;:</td>
                        <td className='text-start'>Pipskieee</td>
                    </tr>
                    <tr>
                        <td className='text-start'>Email</td>
                        <td className='text-start'>&nbsp;:</td>
                        <td className='text-start'>apip@gmail.com</td>
                    </tr>
                    <tr>
                        <td className='text-start'>Age</td>
                        <td className='text-start'>&nbsp;:</td>
                        <td className='text-start'>21</td>
                    </tr>
                    <tr>
                        <td className='text-start'>Address</td>
                        <td className='text-start'>&nbsp;:</td>
                        <td className='text-start'>Probolinggo</td>
                    </tr>
                </table>
            </div>
            <img src="./src/assets/Afif.jpg" alt="Profile" className='rounded-full w-28 h-28 absolute top-32 left-[630px]' />
        </div>
        

        
    )
};

export default ProfilCom;