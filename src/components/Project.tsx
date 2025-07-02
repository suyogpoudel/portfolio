import {IconWorld} from "@tabler/icons-react";
import {motion} from "motion/react";

interface ProjectProps {
    texts: { title: string, description: string, link: string },
    icon: JSX.Element
}

const Project = ({texts, icon}: ProjectProps) => {
    let {title, description, link} = texts;

    return (
        <div
            className='bg-neutral-300 dark:bg-neutral-900 rounded-2xl px-6 py-4 w-full h-full max-sm:px-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
            <div className='flex flex-col items-center gap-2 justify-center  text-center'>
                {icon}
                <a className='text-[24px] max-sm:text-[18px]'>{title}</a>
                <p className='text-[18px]'>{description}</p>
                <motion.a href={link} target='_blank' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                          transition={{duration: 0.3, ease: 'easeInOut'}}
                          className='flex justify-center items-center bg-blue-500 px-2 py-1 rounded-md gap-1 text-xl'>Go
                    to
                    site <IconWorld/></motion.a>
            </div>
        </div>
    )
}
export default Project
