import React from 'react'

export default function Footer(props) {
    return (
        <div className='mb-4'>
            <hr className='my-3 border-slate-500'></hr>
            <h1 className='text-3xl my-4'>/ Author</h1>
            <div className='flex my-2'>
                <img className='w-20 h-20 mr-4 rounded-lg'
                    src={
                        props.imgID
                }></img>
                <div className='flex justify-evenly	 flex-col'>
                    <div className='flex flex-col text-2xl font-bold '>
                        {
                        props.author
                    }</div>
                    <div className='flex flex-col text-xl '>in {
                        props.industry
                    }
                        &nbsp;/ {
                        props.age
                    }
                        &nbsp; from {
                        props.place
                    }</div>
                </div>
            </div>

            <h1 className='text-3xl my-4'>/ Attachments</h1>
            <h1 className='text-3xl my-4'>/ Comments</h1>
            <div className=' border-2 rounded-lg border-slate-500 w-full h-64 flex justify-center content-center items-center text-slate-500 text-xl	'>
                coming soon..</div>
        </div>
    )
}
