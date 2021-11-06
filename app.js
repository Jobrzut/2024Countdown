const countdown = () => {
    const countDate = new Date('January 1, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //Działanie czasu
    const second = 1000;
    const minut = second * 60;
    const hour = minut * 60;
    const day = hour * 24;

    //Kalkulowanie
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinut = Math.floor((gap % hour) / minut);
    const textSecond = Math.floor((gap % minut) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minut").innerText = textMinut;
    document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);