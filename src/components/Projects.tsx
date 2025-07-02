import {IconCat, IconDice, IconNotes, IconQrcode} from "@tabler/icons-react";
import Project from "./Project.tsx";

const Projects = () => {
    return (
        <div className="tabs">
            <h3 className='text-[32px] text-center'>Projects</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mt-2 '>

                <Project texts={{
                    title: 'To-Do List (React)',
                    description: 'To-Do list app, built using react and styled with tailwind.',
                    link: 'https://react-todo-list-suyog.vercel.app/'
                }} icon={<IconNotes size={30}/>}/>

                <Project texts={{
                    title: 'To-Do List',
                    description: 'To-Do list app, built using plain javascript with objects and classes.',
                    link: 'https://todo-list-suyog.vercel.app/'
                }} icon={<IconNotes size={30}/>}/>

                <Project texts={{
                    title: 'Kitty Facts',
                    description: 'A react app styled with tailwind that uses an api to fetch random facts about cats.',
                    link: 'https://random-kitty-facts.vercel.app/'
                }} icon={<IconCat size={30}/>}/>

                <Project texts={{
                    title: 'Random Useless Facts',
                    description: 'A react app styled with tailwind that uses an api to fetch random useless facts.',
                    link: 'https://random-useless-fact.vercel.app/'
                }} icon={<IconDice size={30}/>}/>

                <Project texts={{
                    title: 'QR Code Generator',
                    description: 'An app built with react and tailwind that fetches QR codes based on provided urls.',
                    link: 'https://qr-code-generator-react-app.vercel.app/'
                }} icon={<IconQrcode size={30}/>}/>


            </div>
        </div>
    )
}
export default Projects
