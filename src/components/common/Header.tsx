import React from 'react'
import Cta from './Cta'

const Header = () => {
    return (
        <div className='fixed top-12 left-1/2 -translate-x-1/2 p-3 pl-6 border border-off-gold/15 rounded-xs bg-off-gold/5 backdrop-blur-[30px] '>
            <div className='flex items-center gap-8'>
                <h4 className='text-xl leading-100 satoshi'>Aman.</h4>
                <div className='satoshi flex items-center gap-4'>
                    <ul className='flex items-center gap-5 text-custom-xs leading-130 uppercase tracking-[1.5px]'>
                        <li>Services</li>
                        <li>Work</li>
                        <li>About</li>
                        <li>Pages</li>
                    </ul>
                    <Cta>Let’s talk</Cta>
                </div>
            </div>
        </div>
    )
}

export default Header