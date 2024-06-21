/* eslint-disable react/no-unescaped-entities */

import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import profile_image from '../../assets/osman_avatar.png'
import whatsapp from '../../assets/whatsapp.png'
import github from '../../assets/github.png'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'

const Banner = () => { 
    return (
        <div className='mt-20 py-10'>
            <div className='Intro flex justify-between items-center '>
                       <div className='flex gap-5 items-center justify-between'>
                       <ul className='flex-col fixed left-0 justify-around'>
                        <li className='border-2 h-[50px] mt-2 w-[50px]  bg-white  border-[#F57F03] rounded-full p-2'>
                                <img  src={whatsapp}/>
                            </li>
                            <li className='border-2 h-[50px] mt-2 w-[50px]  bg-white   border-[#F57F03] rounded-full p-2'>
                                <img src={linkedin}/>
                            </li>
                            <li className='border-2 h-[50px] mt-2 w-[50px] 
                             bg-white border-[#F57F03]
                              rounded-full p-2'>
                                <img src={github}/>
                            </li>
                            <li className='border-2 h-[50px] mt-2 w-[50px]  bg-white border-[#F57F03] rounded-full p-2'>
                                <img src={twitter}/>
                            </li>
                            <li className='border-2 h-[50px] mt-2 w-[50px]  bg-white border-[#F57F03] rounded-full p-2'>
                                <img src={instagram}/>
                            </li>
                           
                        </ul>
                        <div className='ml-20'>
                        <h1 className='py-3'>
                            <span className='block py-3'>I'm</span>
                            <span className=' secondary_color_text '>Mohammad Osman Goni</span>

                        </h1>
                        <h2>
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                Delay ms={500}
                                className="text-2xl"
                                steps={[
                                    'Web Developer',
                                    2000,
                                    'Frontend Developer',
                                    2000,
                                    'Full Stack Developer',
                                    2000,
                                    'React Developer',
                                    2000,
                                    'Javascript Programmer',
                                    2000
                                ]}

                            />
                        </h2>
    
                        <button className='btn_outline my-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

                            <Link to={"https://drive.google.com/uc?export=download&id=1jbKqWxMbkw9Bn3tEtNBrUzCQzlceqoSi"}>
                                Download Resume
                            </Link>
                        </button>
                        </div>
 
                       </div>

                       <div>
                        <figure>
                            <img className=' border-2 h-[300px] w-[300px]
                            secondary_color_border rounded-full ' src={profile_image} alt='Profile Image'/>
                        </figure>
                       </div>
                    </div>
        </div>
    );
};

export default Banner;