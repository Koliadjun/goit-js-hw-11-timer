import { days, hours, mins, secs } from "./date.js";

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
});
