import {motion} from "motion/react";
import {
    IconBrandGithub,
    IconBrandVercel
} from "@tabler/icons-react";

const Footer = () => {
    return (
        <footer>
            <div className='w-full h-[2px] opacity-75 bg-neutral-900 dark:bg-neutral-300'>

                <div className='py-6 px-12 flex justify-between items-center max-sm:px-0 text-lg'>
                    <p className='flex items-center gap-1'>
                        Built with
                        <motion.a
                            href='https://react.dev/'
                            target='_blank'
                            className='inline-flex items-center gap-1 text-blue-500
                                 hover:text-blue-400 border-b border-transparent
                                 hover:border-blue-400 w-fit text-lg'
                            whileHover={{x: 3, y: -3}}
                            transition={{duration: 0.3}}
                        >
                            React
                        </motion.a>,
                        <motion.a
                            href='https://www.typescriptlang.org/'
                            target='_blank'
                            className='inline-flex items-center gap-1 text-blue-500
                                 hover:text-blue-400 border-b border-transparent
                                 hover:border-blue-400 w-fit text-lg'
                            whileHover={{x: 3, y: -3}}
                            transition={{duration: 0.3}}
                        >
                            Typescript
                        </motion.a>, and
                        <motion.a
                            href='https://tailwindcss.com/'
                            target='_blank'
                            className='inline-flex items-center gap-1 text-blue-500
                                 hover:text-blue-400 border-b border-transparent
                                 hover:border-blue-400 w-fit text-lg'
                            whileHover={{x: 3, y: -3}}
                            transition={{duration: 0.3}}
                        >
                            TailwindCSS
                        </motion.a>
                    </p>

                    <p className='flex items-center gap-1'>
                        View Project on
                        <motion.a
                            href='https://github.com/suyogpoudel/portfolio'
                            target='_blank'
                            className='inline-flex items-center gap-1 text-blue-500
                                 hover:text-blue-400 border-b border-transparent
                                 hover:border-blue-400 w-fit text-lg'
                            whileHover={{x: 3, y: -3}}
                            transition={{duration: 0.3}}
                        >
                            Github
                            <IconBrandGithub size={16} className='transition-transform group-hover:translate-x-1'/>
                        </motion.a>
                    </p>


                    <p className='flex items-center gap-1'>
                        Deployed using
                        <motion.a
                            href='https://vercel.com/'
                            target='_blank'
                            className='inline-flex items-center gap-1 text-blue-500
                                 hover:text-blue-400 border-b border-transparent
                                 hover:border-blue-400 w-fit text-lg'
                            whileHover={{x: 3, y: -3}}
                            transition={{duration: 0.3}}
                        >
                            Vercel
                            <IconBrandVercel size={16} className='transition-transform group-hover:translate-x-1'/>
                        </motion.a>
                    </p>
                </div>
            </div>

        </footer>
    )
}
export default Footer