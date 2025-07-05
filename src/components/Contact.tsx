import {motion} from "motion/react";

const Contact = () => {
    return (
        <div className="tabs px-0">
            <h3 className='text-[32px] text-center'>Contact Me</h3>
            <form className='flex flex-col justify-center items-center'>
                <div className='flex flex-col gap-5 px-10 max-sm:px-0 py-10 w-[75%] max-sm:w-[90%]'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-[18px] opacity-90 px-3'>Name<span
                            className='text-red-500'>*</span>
                        </label>
                        <input type="text" id="name" placeholder="Enter your name" required
                               className='border-2 border-neutral-950 dark:border-neutral-200 rounded-lg py-2 px-4 text-[20px]'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-[18px] opacity-90 px-3'>Email<span
                            className='text-red-500'>*</span>
                        </label>
                        <input type="email" id="name" placeholder="Enter your email" required
                               className='border-2 border-neutral-950 dark:border-neutral-200 rounded-lg py-2 px-4 text-[20px]'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-[18px] opacity-90 px-3'>Subject<span
                            className='text-red-500'>*</span>
                        </label>
                        <input type="text" id="name" placeholder="Reason for contacting" required
                               className='border-2 border-neutral-950 dark:border-neutral-200 rounded-lg py-2 px-4 text-[20px]'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-[18px] opacity-90 px-3'>Message<span
                            className='text-red-500'>*</span>
                        </label>
                        <textarea id='name' placeholder='Enter your message'
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
