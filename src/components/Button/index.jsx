import React from 'react'
import { useState } from 'react';

const Button = () => {

    const [copied, setCopied] = useState(false);
    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText('davim.costa@outlook.com');
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
        }, 5000); 
        } catch (err) {
          console.log('Falha ao copiar o texto', err);
        }
    };

  return (
    <button 
        onClick={copyToClipboard}
        className='bg-neutral mt-3 flex gap-2 items-center custom-border font-semibold text-lightGray pl-2 pr-2 pt-1.5 pb-1.5 rounded-lg'>
        {copied ? 'Copiado!' : 'Copiar email'}
        <img src="/copyIcon.svg"  alt=""  />
    </button>
  )
}

export default Button