// membuat object node-notifier
const notifier = require("node-notifier");

// membuat object moment
const moment = require("moment");

// mendapatkan data time dari argument command
const argTime = process.argv.slice(2);

// waktu bekerja
const POMODORO_DURATION = argTime[0];

// waktu istirahat
const BREAK_DURATION = argTime[1];

// variable apakah kita sedang bekerja?
let isWorking = false;

// variable waktu tersisa
let reaminingTime = 0;

// function formatter time
function formattingTime(totalSecond) {
    const duration = moment.duration(totalSecond, "seconds");

    // mendapatkan nilai dalam JAM
    const hours = duration.hours().toString().padStart(2, "0");

    // mendapatkan nilai dalam Menit
    const minutes = duration.minutes().toString().padStart(2, "0");

    // mendapatkan nilai dalam Detik
    const seconds = duration.seconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

// function utama
function startTimer(duration) {
    isWorking = !isWorking;

    reaminingTime = duration * 60;

    const timer = setInterval(() => {
        reaminingTime--;

        const formattedTime = formattingTime(reaminingTime);

        // menampilkan hasil
        console.info(`${(isWorking) ? "Working" : "Break"} : ${formattedTime}`);

        if (reaminingTime === 0) {
            clearInterval(timer);

            notifier.notify({
                title: (isWorking) ? "Break Time!" : "Working Time!",
                message: (isWorking) ? "Good Break!" : "Good Work!",
                sound: true,
                wait: true
            });

            startTimer((isWorking) ? BREAK_DURATION : POMODORO_DURATION);
        }
    }, 1000);
}

// memulai
startTimer(POMODORO_DURATION);