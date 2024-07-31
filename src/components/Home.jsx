import React from 'react'
import '../App.css'
import FencerDesign from "../assets/FencerDesign.png"
import ClubImg from '../assets/ClubImg.jpg'
import HomeFencerImage from '../assets/HomeFencerImage.png'

const Home = () => {
    return (
        <>

            {/* Hero Section */}
            <div className='heroSection mb-10 flex justify-center items-center'>
                <div className='mt-20'>
                    <img src={HomeFencerImage} alt="home fencer image" className='w-[500px] h-full' />
                </div>
            </div>



            {/* Join Club Section */}

            <div className='ClubSection px-10 py-10 border border-black rounded-2xl flex itemx-center justify-evenly gap-10 mt-10 text-sky-950'>

                <div className='rounded-[50px] w-1/2'>
                    <img src={ClubImg} alt="club image" className='w-full rounded-[50px]' />
                </div>



                <div className='w-1/2'>
                    <h1 className='text-[2rem] font-extrabold'>Join Our <br /> Fencing Club</h1>
                    <p className='text-justify my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex quo quibusdam dolores ullam sint voluptate sit quos eius, deleniti vel, nulla reprehenderit, cupiditate culpa sequi. Totam ut pariatur dolorem! Nobis hic veritatis ducimus sit ea at molestias. Quae reiciendis veniam doloremque enim recusandae maiores nobis unde. Labore, quisquam molestias?</p>
                    <p className='text-justify my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex quo quibusdam dolores ullam sint voluptate sit quos eius?</p>

                    <button className='bg-sky-950 font-bold text-white text-2xl rounded-2xl px-7 py-3 hover:shadow-2xl duration-150'>Join Club</button>
                </div>


            </div>




            {/* About Section */}


            <div className='aboutSection px-12 py-10 border border-black rounded-2xl flex itemx-center justify-evenly gap-5'>
                <div className='w-1/2 aboutInfo text-sky-950'>
                    <h3 className='text-xl mt-2 underline underline-offset-4'>About Us</h3>
                    <h2 className='text-2xl mt-2 underline underline-offset-4'>WHO WE ARE</h2>
                    <h1 className='text-3xl mt-2 mb-5 underline underline-offset-4'>A Legacy of Excellence</h1>
                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ad voluptas, est saepe optio in minima voluptatum fuga fugiat nisi quisquam aut ea laborum soluta sed id accusamus, dicta quam distinctio quos a hic quaerat officia. Amet velit repellat, tempore quibusdam omnis laudantium, quod officiis eum error dicta enim pariatur inventore iste voluptas voluptatum corporis,</p>
                    <div className='grid grid-cols-2 gap-5 mt-10 font-bold'>
                        <div className='flex flex-col justify-center items-center px-10 py-3 rounded-2xl bg-slate-300 gap-3'>
                            <h1 className='text-2xl'>100+</h1>
                            <p>Players in Academy</p>
                        </div>
                        <div className='flex flex-col justify-center items-center px-10 py-3 rounded-2xl bg-slate-300 gap-3'>
                            <h1 className='text-2xl'>10+</h1>
                            <p>International Players</p>
                        </div>
                        <div className='flex flex-col justify-center items-center px-10 py-3 rounded-2xl bg-slate-300 gap-3'>
                            <h1 className='text-2xl'>30+</h1>
                            <p>National Players</p>
                        </div>
                        <div className='flex flex-col justify-center items-center px-10 py-3 rounded-2xl bg-slate-300 gap-3'>
                            <h1 className='text-2xl'>50+</h1>
                            <p>State Players</p>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 aboutImg flex justify-center items-center bg-yellow-400 rounded-[50px]'>
                    <img src={FencerDesign} alt="about image" />
                </div>
            </div>







        </>
    )
}

export default Home
