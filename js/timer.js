export default class CountdownTimer {
    constructor({ selector, targetDate } = {}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerRefs = {
            timer: document.querySelector(this.selector),
            daysSpan: document.querySelector(`${this.selector} span[data-value="days"]`),
            hoursSpan: document.querySelector(`${this.selector} span[data-value="hours"]`),
            minsSpan: document.querySelector(`${this.selector} span[data-value="mins"]`),
            secsSpan: document.querySelector(`${this.selector} span[data-value="secs"]`),
        }

    }
    getTimerValue = () => {
        let days = Math.floor((this.targetDate - Date.now()) / (1000 * 60 * 60 * 24));
        let hours = Math.floor(((this.targetDate - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor(((this.targetDate - Date.now()) % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor(((this.targetDate - Date.now()) % (1000 * 60)) / 1000);
        return { days, hours, mins, secs }
    }
    renderValue = () => {
        this.timerRefs.secsSpan.textContent = this.getTimerValue().secs;
        this.timerRefs.minsSpan.textContent = this.getTimerValue().mins;
        this.timerRefs.hoursSpan.textContent = this.getTimerValue().hours;
        this.timerRefs.daysSpan.textContent = this.getTimerValue().days;
    }



    startTimer = () => {
        setInterval(() => { this.renderValue() }, 1000)
    }
};
