import AboutImg from '../assets/about-me.png'
export default function About(){
    return <section className='flex bg-primary px-5'>
        <div className='w-1/2'>
        <img src={AboutImg} />
        </div>
        <div className='w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-5xl text-white border-b-4  border-[#c6bade] mb-5 w-[215px]'>About Me</h1>
            <p className='text-white pb-5'>Hi, My name is Aravindan S.I am a Full-Stack Web Develeoper.I Built BEautiful websites using React.js and Tailwind CSS
            </p>
            <p className='text-white pb-5'>I am Proficient in Frontend Skills like React.js, HTML, CSS, Python and Many More</p>
            <p className='text-white'>In Backend i Know Node.js, Express.js, MongoDB, and Mongoose</p>
            </div>
        </div>
    </section>
}