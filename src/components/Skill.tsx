import type {JSX} from "react";

interface SkillProps {
    title: string,
    icon: JSX.Element
}

const Skill = ({title, icon}: SkillProps) => {
    return (
        <li className='skills'>
            {icon}
            {title}
        </li>
    )
}
export default Skill
