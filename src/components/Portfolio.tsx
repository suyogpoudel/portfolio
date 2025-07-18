import Socials from "./Socials.tsx";
import {motion} from "motion/react";
import Sections from "./Sections.tsx";
import faceImage from "../assets/face.jpg";


const Portfolio = () => {
    return (
        <div className="mt-[75px] w-[50%] max-md:w-[75%] max-sm:w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center gap-1">
                <motion.img src={faceImage} alt="My Photo"
                            className="rounded-full w-32 h-32 max-sm:w-28 max-sm:h-28 object-cover"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            transition={{duration: 0.3, ease: 'easeInOut'}}/>

                <h2 className='text-[32px] max-sm:text-[28px] opacity-80'>Suyog Poudel</h2>

                <Socials/>
            </div>

            <Sections/>
        </div>
    )
}
export default Portfolio
