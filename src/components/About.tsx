import {
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandReact, IconBrandTailwind,
    IconBrandTypescript, IconCalendar, IconCompass
} from "@tabler/icons-react";

const About = () => {
    return (
        <div className="tabs">
            <div className="flex flex-col items-center justify-center gap-2">
                <h3 className='text-[32px]'>Suyog Poudel</h3>

                <div className='flex items-center justify-center gap-3 max-sm:gap-[6px]'>
                    <p className='text-lg max-sm:text-md opacity-80 flex items-center gap-1'>
                        <IconCalendar/> August 21
                    </p>
                    <p className='text-lg opacity-80 flex items-center gap-1'>
                        <IconCompass/> Biratnagar, Nepal
                    </p>
                </div>
            </div>

            <div className="mt-5 px-10 max-sm:px-0">
                <p className='text-[28px] max-sm:text-[22px] text-center'>
                    I am a student, aspiring to be a full stack developer. I am slowly improving my skills, getting
                    closer to my goal everyday.
                </p>

                <p className='text-[24px] opacity-90 mt-5 text-center'>Skills:</p>
                <ul className='grid grid-cols-2 gap-5 max-sm:gap-2 place-items-center mt-2'>
                    <li className='skills'>
                        <IconBrandHtml5/>
                        HTML
                    </li>
                    <li className='skills'>
                        <IconBrandCss3/>
                        CSS
                    </li>
                    <li className='skills'>
                        <IconBrandTailwind/>
                        Tailwind
                    </li>
                    <li className='skills'>
                        <IconBrandJavascript/>
                        JavaScript
                    </li>
                    <li className='skills'>
                        <IconBrandTypescript/>
                        TypeScript
                    </li>
                    <li className='skills'>
                        <IconBrandReact/>
                        React
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default About
