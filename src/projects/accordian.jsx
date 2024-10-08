import React, { useState } from 'react'
import Wrapper from '../components/shared/wrapper'
import { accordianData } from '../data/data'
import Button from '../components/shared/Button';
import { Link } from 'react-router-dom';

const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    const handleMultiselection = (getCurrentId) => {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentId);
        }
        else {
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(copyMultiple);
    }

    return (
        <section>
            <Wrapper>
                {/* Back to Home */}
                <div className='flex mt-10'>
                    <Link className='flex items-center hover:text-[#017fa5] duration-300' to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <span>Back to home</span>
                    </Link>
                </div>
                <div className='text-center mt-10 md:text-4xl text-2xl'>
                    <h1>Accordian</h1>
                </div>
                <div className='flex justify-center mt-10'>
                    <Button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Multiple Selection {enableMultiSelection ? <span className='text-red-700 font-bold'>Off</span> : <span className='text-green-700 font-bold'>On</span>}</Button>
                </div>
                <div className='my-10'>
                    {
                        accordianData && accordianData.length > 0 ? accordianData.map((item, index) => (
                            <div className='max-w-2xl mx-auto' key={index}>
                                <div onClick={enableMultiSelection ? () => handleMultiselection(item.id) : () => handleSingleSelection(item.id)} className={`cursor-pointer border-gray-200  flex bg-gray-100 justify-between font-medium items-center p-5 border ${accordianData.length - 1 === index ? "border-b" : "border-b-0"}`}>
                                    <h3 className='md:text-base text-sm'>{item.question}</h3>
                                    <span>
                                        {
                                            (enableMultiSelection
                                                ? multiple.indexOf(item.id) !== -1
                                                : selected === item.id)
                                                ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-500">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-500">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                )
                                        }
                                    </span>
                                </div>
                                {
                                    enableMultiSelection ? multiple.indexOf(item.id) !== -1 && (
                                        <p className={`p-5 border md:text-base text-sm border-gray-200 ${accordianData.length - 1 === index ? "border-b border-t-0" : "border-b-0"}`}>{item.answer}</p>
                                    ) :
                                        selected === item.id && (<p className={`p-5 border md:text-base text-sm border-gray-200 ${accordianData.length - 1 === index ? "border-b border-t-0" : "border-b-0"}`}>{item.answer}</p>)
                                }
                            </div>
                        )) : <div>No Data Found!</div>
                    }
                </div>
            </Wrapper>
        </section>
    )
}

export default Accordian;