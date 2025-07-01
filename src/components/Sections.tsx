import {useState} from "react";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";

const Tabs = {
    About: 'About',
    Projects: 'Projects',
    Contact: 'Contact'
} as const;

type TabsType = typeof Tabs[keyof typeof Tabs];

const Sections = () => {
    const [activeTab, setActiveTab] = useState<TabsType>(Tabs.Contact)

    return (
        <div className={'flex flex-col mt-10 items-center justify-center'}>
            <div className="flex">
                <button className={`${
                    activeTab === Tabs.About ? 'bg-neutral-200 dark:bg-neutral-950 scale-110' : ''
                } rounded-l-lg px-4 py-2 bg-neutral-100 dark:bg-neutral-800 transition-scale duration-300 ease-in-out`}
                        onClick={() => setActiveTab(Tabs.About)}
                >About
                </button>
                <button className={`${
                    activeTab === Tabs.Projects ? 'bg-neutral-200 dark:bg-neutral-950 scale-110' : ''
                } rounded-none px-4 py-2 bg-neutral-100 dark:bg-neutral-800 transition-scale duration-300 ease-in-out`}
                        onClick={() => setActiveTab(Tabs.Projects)}
                >Projects
                </button>
                <button className={`${
                    activeTab === Tabs.Contact ? 'bg-neutral-200 dark:bg-neutral-950 scale-110' : ''
                } rounded-r-lg px-4 py-2 bg-neutral-100 dark:bg-neutral-800 transition-scale duration-300 ease-in-out`}
                        onClick={() => setActiveTab(Tabs.Contact)}
                >Contact
                </button>
            </div>

            <div className="w-full text-center text-2xl">
                {
                    activeTab === Tabs.About ? <About/> : activeTab === Tabs.Projects ? <Projects/> : <Contact/>
                }
            </div>
        </div>
    )
}
export default Sections
