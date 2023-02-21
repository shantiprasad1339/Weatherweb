import React, { useEffect, useState } from 'react'

function Weather() {
    const [weather, setWeather] = useState('makrana');
    const [report, setReport] = useState({});

    const inputchange = (event) => {
        setWeather(event.target.value)
    }

    const clickfn = () => {
        setReport(weather)
    }
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&units=metric&appid=93846a444f7b8aa9eaaf29729a532e29`
            const apiResponce = await fetch(url);
            const resJason = await apiResponce.json();
            // console.log(resJason)

            setReport(
                {
                    name: resJason.name,
                    temp: resJason.main.temp,
                    mintemp: resJason.main.temp_min,
                    maxtemp: resJason.main.temp_max,
                    weather: resJason.weather[0].main
                }
            )
        }
        fetchApi();
    }, [report]);
    return (
        <>
            <div className="bg-teal-100 w-screen h-screen flex justify-center py-10  " >

                {/* <h1 className="text-red-300 flex justify-center py-10 font-bold text-5xl">hello</h1> */}
                <div className="main_div bg-cyan-50 rounded-xl mr-1 w-84 h-2/3 md:h-5/6 border-solid border-4 ">
                    <div className="flex justify-center py-5">
                        <h1 className="font-bold text-lg underline tracking-wide md:tracking-widest md:text-lg italic">Dutchman's WeatherWeb</h1>

                    </div>
                    <div className='flex  justify-center py-2 px-5'>
                        <input type='text' placeholder="Add location" className="pl-2 rounded-xl border-solid border-2 border-black" onChange={inputchange} />
                        <i className="fa-sharp fa-solid fa-hand-pointer text-2xl mt-1 cursor-pointer ml-5" onClick={clickfn}></i>
                    </div>
                    <div className=' flex justify-center'>
                        <i className="fa-solid fa-cloud-sun-rain text-8xl"></i>
                        {/* <img src='/src/images/sun.png'className='w-20'/> */}

                    </div>
                    <div className=' flex ml-5'>


                    </div>

                    <div className="px-4">

                        <h1 className='font-bold text-xl flex justify-center mt-1 italic mt-3'>{report.name}-- {report.temp}  Deg. cel.</h1>
                        <h4 className='font-bold text-xl flex justify-center mt-1 italic mt-2'>weather-- {report.weather} </h4><h4 className='ml-2'></h4>

                        <div className=' '>
                            <p className='mt-5 flex justify-center italic'>Min temp-- {report.mintemp} Deg. cel.</p>
                            <p className='mt-0 flex justify-center'>Max temp-- {report.maxtemp} Deg. cel.</p>
                        </div>

                    </div>

                </div>
            </div>
            <hr />
        </>
    )
}

export default Weather;