import type {JSX} from "react";
import {motion} from "motion/react";

interface SkillProps {
    title: string,
    icon: JSX.Element
}

const Skill = ({title, icon}: SkillProps) => {
    return (
        <motion.li className='skills'
                   whileHover={{
                       y: -5
                   }} transition={{
            duration: 0.3,
            ease: 'easeInOut'
        }}
        >
            {icon}
            {title}
        </motion.li>
    )
}
export default Skill
