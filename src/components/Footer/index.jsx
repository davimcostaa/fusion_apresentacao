import React from 'react'
import Tag from '../Tag'

const Footer = () => {
  return (
    <footer className='flex flex-col-reverse lg:flex-row w-full justify-between items-center custom-border padding-default rounded-xl h-[148px] lg:h-[64px] bg-black '>
        <span className='text-white font-semibold'>Davi Marques</span>
        <ul className='flex text-white gap-4'>
            <li><a className='hover:text-orange' href="https://github.com/davimcostaa" target='_blank'>GitHub</a></li>
            <li><a className='hover:text-orange' href="https://wa.me/5561993915306" target='_blank'>Whatsapp</a></li>
            <li><a className='hover:text-orange' href="https://www.linkedin.com/in/davi-marquesc/" target='_blank'>Linkedin</a></li>
        </ul>
        <Tag />
    </footer>
  )
}

export default Footer