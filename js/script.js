window.onload = () => {

    function updateClock() {
        console.log("test");
        const date = new Date();
        const day = date.getDay();
        const month = date.getMonth();
        const dayNum = date.getDate();
        const year = date.getFullYear();
        const hour = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();
        const ampm = "AM"

        if (hour == 0) {
            hour = 12;
        }
        if (hour > 12) {
            hour = hour - 12;
            ampm = "PM"
        }

        function twoDigits(n) {
            return (n < 10 ? '0' : '') + n;
        }

        const months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];

        const week = ["Sunday",
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];

        const ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"]

        const values = [week[day], months[month], twoDigits(dayNum), year, twoDigits(hour), twoDigits(min), twoDigits(sec), ampm]

        for (let i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).firstChild.nodeValue = values[i]
        }
    };


    function initClock() {
        updateClock();
    }
    setInterval(updateClock, 1000);
}