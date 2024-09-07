import React from 'react'
import { BsLinkedin,BsGithub } from 'react-icons/bs'

const CardComponent = ({img,name,role,desc,socials}:{
    img:string,
    name:string,
    role:string,
    desc:string,
    socials:Array<string>
}) => {
  return (
    <section className='bg-blue-50 text-gray-400 max-w-[14vw] flex flex-col items-center justify-center text-justify rounded-md p-2'>
        <div>
            <img src={img} alt="none"  className='h-[5vw] mt-3'/>
        </div>
        <div>
            <h1 className='text-blue-700 text-lg font-semibold'>{name}</h1>
        </div>
        <div>
            <h1>{role}</h1>
        </div>
        <div className='px-3'>
            {desc}
        </div>
        <div className='flex gap-4'>
            <a href={socials[0]}>
                <BsLinkedin/>
            </a>
            <a href={socials[1]}>
                <BsGithub/>
            </a>
        </div>
    </section>
  )
}

export default CardComponent