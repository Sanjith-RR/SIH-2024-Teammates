import React from 'react'
import CardComponent from '@/components/about/CardComponent'
const page = () => {
    const data=[
        {
            img:'cloud1.png',
            name:'Jebisha',
            role:'UI Designer',
            desc:'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            socials:['https://linkedin.com/in/kkube','https://github.com/kishore-FDI']
        },
        {
            img:'cloud1.png',
            name:'Jebisha',
            role:'UI Designer',
            desc:'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            socials:['https://linkedin.com/in/kkube','https://github.com/kishore-FDI']

        },
        {
            img:'cloud1.png',
            name:'Jebisha',
            role:'UI Designer',
            desc:'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            socials:['https://linkedin.com/in/kkube','https://github.com/kishore-FDI']

        },
        {
            img:'cloud1.png',
            name:'Jebisha',
            role:'UI Designer',
            desc:'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            socials:['https://linkedin.com/in/kkube','https://github.com/kishore-FDI']

        },
        {
            img:'cloud1.png',
            name:'Jebisha',
            role:'UI Designer',
            desc:'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            socials:['https://linkedin.com/in/kkube','https://github.com/kishore-FDI']

        },
        {
            img:'cloud1.png',
            name:'Jebisha',
            role:'UI Designer',
            desc:'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            socials:['https://linkedin.com/in/kkube','https://github.com/kishore-FDI']

        }
    ]
  return (
    <main className='bg-blue-400 h-screen w-screen'>
        <header className=" flex gap-4 p-4 text-center text-white" style={{backgroundColor:'#054569'}}>
        <img src="logo.svg" alt="" className="ml-[0.5vw]"/>
        <h1 className="text-3xl tracking-wider text-center mt-1">
            <span className="text-blue-500">S</span>hinka {" "}
            <span className="text-blue-500">J</span>inzai
        </h1>
        </header>
        <div className='flex justify-between px-[4vw] mt-[3vh] text-white'>
            <div>
                <h1 className='text-3xl font-bold tracking-wider'>About <span className='text-blue-950'>S</span>hinka <span className='text-blue-950'>J</span>inzai</h1>
                <div className='text-xl flex flex-col gap-1.5 ml-2 mt-2'>
                    <p>• A generative AI powered web-application that renders a real-time video output to help represent the takeaways from the frame interpolation.</p>
                    <p>• The users of VEDAS/MOSDAC/BHUVAN can access our platform to derive their insights and address their business requirements.</p>
                    <p>• The challenging task of handling frame interpolation is done by using Generative AI and is represented using real-time geospatial and geographical coordinates through a seamless portal.</p>
                </div>

            </div>
            <img src="cloud1.png" alt="img" className='size-[25%]'/>
        </div>
        <div className='text-white -mt-3 '>
            <h1 className='px-[4vw] text-4xl'>Meet Our Team!</h1>
            <div className='flex gap-5 mt-4 items-center justify-between px-[4vw]'>
                {data.map((member,index)=>(
                    <CardComponent key={index} 
                    img={member.img}
                    socials={member.socials}
                    name={member.name}
                    role={member.role}
                    desc={member.desc}
                    />
                ))}
            </div>
        </div>
    </main>
  )
}

export default page