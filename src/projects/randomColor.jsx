import Wrapper from '../components/shared/wrapper'
import Button from '../components/shared/Button'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');
    const [copySuccess, setCopySuccess] = useState('');

    const randomColorUtility = (length) => {
        let randomColor = Math.floor(Math.random() * length);
        return randomColor;
    };

    const handleCreateRandomHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    };

    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    };

    const handleCopyColor = () => {
        navigator.clipboard.writeText(color).then(() => {
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(''), 1000);
        }).catch(() => {
            setCopySuccess('Failed to copy!');
        });
    };

    useEffect(() => {
        if (typeOfColor === 'rgb') {
            handleCreateRandomRgbColor();
        } else {
            handleCreateRandomHexColor();
        }
    }, [typeOfColor]);

    return (
        <section>
            <Wrapper>
                  {/* Back to Home */}
                  <div className='flex mt-10 hover:text-[#017fa5] duration-300'>
                    <Link className='flex items-center' to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <span>Back to home</span>
                    </Link>
                </div>
                <div className='my-10 max-w-4xl mx-auto bg-gray-200 rounded-xl shadow'>
                    <div className='md:p-10 py-5 px-3'>
                        <h1 className='text-center md:text-4xl text-2xl'>Random Color Generator</h1>
                        <h2 className='text-center mt-6 text-2xl font-bold text-[#017fa5]'>{typeOfColor === "hex" ? "Hex" : "RGB"} Color</h2>
                        <div className='md:w-64 md:h-56 w-56 h-32 mx-auto mt-7' style={{ backgroundColor: color }}></div>
                        <div>
                            <h3 className='text-center text-lg py-5 font-bold text-[#1e3c46]'>{color}</h3>
                        </div>
                        <div className='flex md:flex-row flex-col justify-center gap-4'>
                            <Button
                                onClick={() => setTypeOfColor('hex')}
                                classes={`${typeOfColor === 'hex' ? '!bg-red-700 !text-white' : '!bg-[#017fa5]'
                                    } !hover:text-white !text-white !hover:bg-red-500`}>
                                Select HEX Color
                            </Button>
                            <Button
                                onClick={() => setTypeOfColor('rgb')}
                                classes={`${typeOfColor === 'rgb' ? '!bg-red-700 !text-white' : '!bg-[#017fa5]'
                                    } !hover:text-white !text-white !hover:bg-red-500 !bg-[#017fa5]`}>
                                Select RGB Color
                            </Button>
                            <Button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} classes={"!bg-[#017fa5] !focus:ring-blue-100 !text-white"}>Generate Random Color</Button>
                            <Button onClick={handleCopyColor} classes={"!bg-green-500 !text-white flex gap-2 items-center justify-center"}>{copySuccess ? <span>{copySuccess}</span> : "Copy Color"} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default RandomColor;