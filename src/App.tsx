import {IconClock} from "@tabler/icons-react";

const App = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <h2 className='text-5xl text-slate-900'>This website is currently in development :)</h2>
                <h3 className='text-3xl text-slate-900 opacity-75'>Will be active soon....<IconClock/></h3>
            </div>
        </div>
    )
}
export default App
