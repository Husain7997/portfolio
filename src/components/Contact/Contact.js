import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { RxRocket } from 'react-icons/rx';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
       <div className="hero bg-black">
 <div className="hero-content flex-col lg:flex-row-reverse justify-between">
           
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")}
                        type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs mb-5" /> <br />
                    <input {...register("email")} type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs mb-5" /> <br />
                    {/* <input {...register("message")} className="textarea textarea-bordered mb-5" placeholder="Message" /> <br/> */}
                    <textarea {...register("message")} className="textarea textarea-bordered max-w-xs" placeholder="Message"></textarea> <br />
                    <button type="submit" className="btn bg-green-500">Hit me up <RxRocket /></button>

                </form>
            </div>
            <div className='w-1/2 '>
                <h2 className='text-2xl text-green-400	my-6'> CONTACT</h2>
                <h1 className='text-5xl font-bold text-white my-6'>Got a problem to solve?</h1>
                <h5 className=' text-white my-6'>Get your space suit ready and tell me your ideas to develop your dream application.</h5>
                <p className='flex text-xl text-white my-6'><AiOutlineMail className=' text-green-500 mt-2'></AiOutlineMail> web.husainahmed@gmail.com</p>
            </div>
        </div>

       </div>
    );
};

export default Contact;