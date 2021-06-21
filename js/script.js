// import { days, hours, mins, secs } from "./date.js";
import CountdownTimer from "./timer.js"

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jun 21, 2021 10:17'),
    title: 'До кінця світу залишилось',
});
timer.startTimer()
