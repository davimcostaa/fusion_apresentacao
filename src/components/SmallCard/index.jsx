import React from 'react'

const SmallCard = ({title, technology, link, image}) => {
  return (
    <div className='w-full h-[330px] lg:h-[265px] bg-black rounded-lg padding-default custom-border flex flex-col lg:flex-row justify-between'>
            <div className='flex flex-col justify-center gap-1'>   
                <div className='flex gap-3'>
                    <h4 className='text-2xl text-white font-semibold'>{title}</h4>
                    <a href={link}>
                        <img src='/arrow.svg' width={40} />
                    </a>
                </div>

                <span className='text-lightGray text-lg'>{technology}</span>
            </div>

            <img
                src={`/${image}.png`}
                className="w-[250px] lg:w-[280px]"
                alt=""
                />
    </div>
  )
}

export default SmallCard