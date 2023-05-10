import React, { useState, useEffect } from 'react'

const EndDate = "June 30, 2023 18:00:00";

export const Timer = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const formatTime = (time) => {
        if (time < 10) {
            return `0${time}`;
        } else {
            return `${time}`;
        }
    };


    useEffect(() => {
        const interval = setInterval(() => {
            const newDate = new Date(EndDate);

            const currentDate = new Date();

            const milliSecond = (newDate - currentDate) / 1000;

            const days = Math.floor(milliSecond / 3600 / 24);
            const hours = Math.floor(milliSecond / 3600) % 24;
            const minutes = Math.floor(milliSecond / 60) % 60;
            const seconds = Math.floor(milliSecond) % 60;

            setCountdown({
                days,
                hours,
                minutes,
                seconds,
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='flex flex-row gap-8'>
            <TimerBox title="Days" value={countdown.days} />
            <TimerBox title="Hours" value={formatTime(countdown.hours)} />
            <TimerBox title="Minutes" value={formatTime(countdown.minutes)} />
            <TimerBox title="Seconds" value={formatTime(countdown.seconds)} />
        </div>
    );

}

const TimerBox = (props) => {
    const { title, value } = props
    return (
        <div>
            <h2 className='font-medium text-3xl text-center'>{value}</h2>
            <h1 className='text-2xl text-center'>{title}</h1>
        </div>
    )
}