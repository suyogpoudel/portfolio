import React from "react";
import {motion} from "motion/react";

const Contact = () => {

    const FORM_ACCESS_KEY = '8b69ef93-25f1-4a3d-9c00-80d66acebc61'

    const onSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", FORM_ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            (event.target as HTMLFormElement).reset();
        }
    };

    return (
        <div className="tabs px-0">
            <h3 className='text-[32px] text-center'>Contact Me</h3>
            <form className='flex flex-col justify-center items-center' onSubmit={onSubmit}>
                <div className='flex flex-col gap-5 px-10 max-sm:px-0 py-10 w-[75%] max-sm:w-[90%]'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="nameField" className='text-[18px] opacity-90 px-3'>Name<span
                            className='text-red-500'>*</span>
                        </label>
                        <input type="text" id="nameField" placeholder="Enter your name" required name='name'
                               className='border-2 border-neutral-950 dark:border-neutral-200 rounded-lg py-2 px-4 text-[20px]'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="emailField" className='text-[18px] opacity-90 px-3'>Email<span
                            className='text-red-500'>*</span>
                        </label>
                        <input type="email" id="emailField" placeholder="Enter your email" required name='email'
                               className='border-2 border-neutral-950 dark:border-neutral-200 rounded-lg py-2 px-4 text-[20px]'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="subjectField" className='text-[18px] opacity-90 px-3'>Subject<span
                            className='text-red-500'>*</span>
                        </label>
                        <input type="text" id="subjectField" placeholder="Reason for contacting" required name='subject'
                               className='border-2 border-neutral-950 dark:border-neutral-200 rounded-lg py-2 px-4 text-[20px]'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="messageField" className='text-[18px] opacity-90 px-3'>Message<span
                            className='text-red-500'>*</span>
                        </label>
                        <textarea id='messageField' placeholder='Enter your message' required name='message'
                                  className='border-2 border-neutral-950 dark:border-neutral-200 rounded-lg py-2 px-4 text-[20px] min-h-[50px]'></textarea>
                    </div>

                </div>
                <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                               transition={{duration: 0.3, ease: 'easeInOut'}}
                               className=' border-2 border-blue-500 hover:bg-blue-500 rounded-lg py-2 px-4 text-[20px] transition-colors duration-300 ease-in-out cursor-pointer'
                               type='submit'>Send
                    Message
                </motion.button>
            </form>
        </div>
    )
}
export default Contact
