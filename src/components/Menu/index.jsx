import React from 'react'

const Menu = () => {
  return (
    <div className='font-inter flex'>
        <div>
            <img src='/logo.svg'  />
        </div>
        <div className='h-[64px] w-full bg-black rounded-[50px] custom-border'>
        <nav className='flex h-full justify-center md:justify-between items-center font-bold text-white pl-[66px] pr-[66px]'>
            <a href="#sobre" className='hover:text-orange'>
                SOBRE
            </a>

            <a href='https://portfolio-ten-xi-79.vercel.app/pt' target='_blank' className='hover:text-orange hidden md:block'>
                PORTFOLIO
            </a>

            <a href="mailto:davim.costa@outlook.com" className='hover:text-orange hidden md:block'>
                CONTATO
            </a>
        </nav>
        </div>
    </div>
  )
}

export default Menu