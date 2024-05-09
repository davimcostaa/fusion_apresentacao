import React from 'react'
import Button from '../Button'
import Tag from '../Tag'

const Header = () => {
  return (
    <section className='w-full h-[389px] lg:h-[350px] bg-black custom-border rounded-xl padding-default flex flex-col justify-around'>
        <div className='flex justify-between items-center'>
            <p className='text-lightGray text-lg'>Desenvolvedor Full-Stack</p>
            <Tag />
        </div>

        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-white text-3xl font-bold'>Eu sou Davi Costa</h1>
                <p className='text-lightGray pt-5'> Um desenvolvedor criando experiências <br /> digitais excepcionais. </p>

                <Button />
            </div>

            <div>
                <img src="/avatar.png" alt="" className='rounded-full border-8 border-gray' width='157px' />
            </div>
        </div>
    </section>
  )
}

export default Header