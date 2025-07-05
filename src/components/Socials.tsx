import {motion} from "motion/react";
import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX
} from "@tabler/icons-react";

const Socials = () => {
    return (
        <div>
            <div className="flex justify-center items-center gap-4 mt-2 max-sm:scale-80">
                <motion.a href="https://www.instagram.com/_suyogpoudel?igsh=MWprb3NzOWozeDIyOQ==" target='_blank'
                          animate={{opacity: 0.8}}
                          whileHover={{opacity: 1, scale: 1.05}}
                          whileTap={{scale: 0.8}}
                          transition={{duration: 0.3, ease: 'easeInOut'}}>
                    <IconBrandInstagram size={30}/>
                </motion.a>

                <motion.a href="https://www.facebook.com/suyogpoudel01" target='_blank'
                          animate={{opacity: 0.8}}
                          whileHover={{opacity: 1, scale: 1.05}}
                          whileTap={{scale: 0.8}}
                          transition={{duration: 0.3, ease: 'easeInOut'}}>
                    <IconBrandFacebook size={30}/>
                </motion.a>

                <motion.a href="https://x.com/__suyogpoudel" target='_blank'
                          animate={{opacity: 0.8}}
                          whileHover={{opacity: 1, scale: 1.05}}
                          whileTap={{scale: 0.8}}
                          transition={{duration: 0.3, ease: 'easeInOut'}}>
                    <IconBrandX size={30}/>
                </motion.a>

                <motion.a href="https://github.com/suyogpoudel" target='_blank'
                          animate={{opacity: 0.8}}
                          whileHover={{opacity: 1, scale: 1.05}}
                          whileTap={{scale: 0.8}}
                          transition={{duration: 0.3, ease: 'easeInOut'}}>
                    <IconBrandGithub size={30}/>
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/suyog-poudel-a88515263/" target='_blank'
                          animate={{opacity: 0.8}}
                          whileHover={{opacity: 1, scale: 1.05}}
                          whileTap={{scale: 0.8}}
                          transition={{duration: 0.3, ease: 'easeInOut'}}>
                    <IconBrandLinkedin size={30}/>
                </motion.a>
            </div>
        </div>
    )
}
export default Socials
