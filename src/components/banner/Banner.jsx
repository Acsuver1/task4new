import { BsSun } from "react-icons/bs"; 
import { BsSunriseFill } from "react-icons/bs"; 
import { BsSunsetFill } from "react-icons/bs"; 
import { WiHumidity } from "react-icons/wi"; 
import React, { useEffect } from 'react';
import { Container } from '../../utils/index';
import { useSelector, useDispatch } from 'react-redux';

const Banner = () => {
    const data = useSelector((state) => state.searchData);
    console.log(data);

   
    return (
        <>
            <Container>
                <div className='bg-banner bg-cover bg-center rounded-lg h-[450px] mt-[50px]   style={{ boxShadow: "0 4px 15px blueviolet" }}'>
                    <div className='bg-linear-color w-full h-full '>
                        {data && ( 
                            <>
                                <div className='flex justify-between items-center p-4 '>
                                    <div className='mt-[100px]'>
                                        <h2>
                                            <img
                                                className='w-[100px]'
                                                src={data.current.condition.icon}
                                                alt="Weather Icon"
                                            />
                                        </h2>
                                        <h2 className='text-white text-9xl font-semibold'>
                                            {data.current.temp_c}°C
                                        </h2>
                                        <br />
                                        <div className='flex gap-4 items-center ml-4 '>
                                            <h1 className='text-white text-4xl font-bold'>
                                                {data.location.country},
                                            </h1>
                                            <h1 className='text-white text-4xl font-bold'>
                                                {data.location.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className='mt-[300px] ml-4'>
                                        <h1 className='text-white text-2xl font-bold'>
                                            {new Date(data.current.last_updated).toLocaleTimeString()}
                                        </h1>
                                        <h2 className='text-white text-lg'>
                                            {new Date(data.current.last_updated).toLocaleDateString()}
                                        </h2>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div>
    <iframe 
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A83d4b9b1e6e51f22266e03261569b264f30b0e2cc14e9d94e88860b6fdf0c636&amp;source=constructor"
        className="w-full h-[450px] mt-[50px] rounded lg h-[300px] mt-[50px]" 
        frameborder="0" 
        allowfullscreen
    ></iframe>
</div>

                <div>
                {
                    data && (
                        <>
                        <div
        className="w-[460px] h-[196px] rounded-[30px] p-8 flex items-center justify-between  mt-[50px] bg-white"
        style={{ boxShadow: "0 4px 15px blueviolet" }}>
        <div className="text-left">
          <div className="flex gap-4 w-[150px] h-[76px] text-[blueviolet] text-[18px]">
            <WiHumidity className="text-[54px]" />
            <p className="text-black text-[18px]">
              Humidity {data.current.humidity}%
            </p>
          </div>
          <div className="flex gap-4 w-[150px] h-[66px] text-[blueviolet] text-[18px]">
        <BsSun className="text-[54px]" />
            <p className="text-black text-[18px]">
              UV Index: {data.current.uv} out of 10
            </p>
          </div>
        </div>

        <div className="h-full w-[1px] bg-black mx-4"></div>

        <div className="text-right">
          <div className="flex gap-4 w-[150px] h-[76px] text-[blueviolet] text-[18px]">
          <BsSunsetFill className="text-[44px]" />
            <p className="text-black text-[18px]">
              Sunrise {data.forecast.forecastday[0].astro.sunrise}
            </p>
          </div>
          <div className="flex gap-4 w-[150px] h-[66px] text-[blueviolet] text-[18px]">
          <BsSunriseFill className="text-[54px] "  />
            <p className="text-black text-[18px]">
              Sunset {data.forecast.forecastday[0].astro.sunset}
            </p>
          </div>
        </div>
      </div>
                        </>
                    )
                }
                </div>
            </Container>
        </>
    );
};

export default Banner;
