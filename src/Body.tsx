import {useEffect, useState} from "react";
import {motion} from "motion/react"
import {IconMoon, IconSun} from "@tabler/icons-react";
import Portfolio from "./components/Portfolio.tsx";

const Body = () => {
    const [isDark, setIsDark] = useState<boolean>(localStorage.getItem('theme') === 'dark' || false)

    const applyTheme = () => {
        if (isDark) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }

    useEffect(() => {
        applyTheme();
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const themeSwitch = () => {
        setIsDark(!isDark)

        applyTheme();

        localStorage.setItem('theme', isDark ? 'dark' : 'light')

    }

    return (
        <div>
            <motion.button onClick={themeSwitch}
                           className="absolute top-5 right-5 p-2 bg-neutral-200 dark:bg-neutral-950 rounded-full cursor-pointer"

                           whileHover={{
                               scale: 1.1,
                               rotate: 45,
                           }}

                           whileTap={{
                               scale: 0.9,
                               rotate: -45,
                           }}

                           transition={{
                               duration: 0.3,
                               ease: 'easeInOut',
                           }}
            >

                {
                    isDark ? <IconSun/> : <IconMoon/>
                }
            </motion.button>

            <Portfolio/>

        </div>
    )
}
export default Body
