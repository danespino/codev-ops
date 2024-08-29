// Placeholder to host a component
import React from "react";

    const Hours = () => {

        const serviceHours = [
            { day: "Monday", open: "10:00", close: "16:00" },
            { day: "Tuesday", open: "10:00", close: "16:00" },
            { day: "Wednesday", open: "10:00", close: "16:00" },
            { day: "Thursday", open: "10:00", close: "16:00" },
            { day: "Friday", open: "10:00", close: "16:00" },
            { day: "Saturday", open: "9:00", close: "20:00" },
            { day: "Sunday", open: "9:00", close: "20:00" },
    
        ]

        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

        const todayHours = serviceHours.find((day) => day.day === today);

        return (
            <div id="hours">
                <h2>Today's Hours</h2>
                <p>Today ( {todayHours.day} ) we are open from {todayHours.open} to {todayHours.close}</p>
            </div>
        )
    }

export default Hours;