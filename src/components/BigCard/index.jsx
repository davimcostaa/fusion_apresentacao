import React from 'react'

const BigCard = () => {
  return (
    <section id='sobre' className='w-full lg:w-1/2 h-[700px] lg:h-[550px] bg-black rounded-lg padding-default custom-border'>
        <h4 className='text-orange text-2xl font-bold mb-5'>Sobre Mim</h4>
        <p className='text-white font-semibold text-justify'>
            Olá! Sou um jovem de 20 anos (que se diz cinéfilo) apaixonado por tecnologia, residente em Brasília - DF.
            <br />
            <br />
            Minha jornada profissional começou com uma formação técnica em TI, seguida por uma graduação em Análise e Desenvolvimento de Sistemas. Sou um entusiasta de tecnologias modernas, com experiência em React, Next.js, Python, React Native, Java (☕) e AdonisJS. 
            <br />
            <br />
            Como um ávido cinéfilo, encontro inspiração tanto nas telonas quanto no código. Além disso, sou um grande fã das incríveis Taylor Swift e Beyoncé, cujas trajetórias artísticas e inovações constantes me inspiram a buscar sempre o melhor em tudo o que faço.
            <br />
            <br />
            Apesar de meu amor pelo back-end e suas tecnologias, o encanto do front-end conquistou meu coração.        </p>

    </section>
  )
}

export default BigCard