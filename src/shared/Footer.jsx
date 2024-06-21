import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import whatsapp from '../assets/whatsapp.png'
import github from '../assets/github.png'
const Footer = () => {
    const year=new Date().getFullYear[0]
    console.log(year)
    return (
        <div>
            <footer className="footer items-center p-4 shadow-lg shadow-white primary_color_bg text-neutral-content">
  <div className="items-center flex justify-between w-full">
    <p className='text-xl'>Copyright © {year||2024} - All right reserved Mohamad Osman Goni</p>
    <ul className='flex justify-center items-center gap-3'>
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
  </div> 
</footer>
        </div>
    );
};

export default Footer;