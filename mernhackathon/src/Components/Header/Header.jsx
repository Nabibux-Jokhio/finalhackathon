import React from 'react'

function Header() {
    return (
        <div className='flex justify-between items-center p-4'>
            <img src='...' alt='...' />
            <div className='flex items-center gap-4'>
                <div className='bg-green-500 px-3 py-1 rounded-lg text-white font-semibold'> 
                    Signup
                </div>
                <div className='bg-blue-500 px-3 py-1 rounded-lg text-white font-semibold'>
                    Login
                </div>
            </div>
        </div>
    )
}

export default Header
