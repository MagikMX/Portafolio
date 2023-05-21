// const progressBars = document.querySelectorAll('.progress-bar');
// const startBtn = document.getElementById('start-btn');

// progressBars.forEach((progressBar) => {
//     const progress = progressBar.querySelector('.progress');
//     const progressText = progressBar.querySelector('.progress-text');

//     let percent = parseInt(progressText.dataset.percent);
//     let intervalId;

//     function startProgress() {
//         clearInterval(intervalId);
//         percent = parseInt(progressText.dataset.percent);
//         progress.style.width = `${percent}%`;
//         progressText.textContent = `${percent}%`;

//         intervalId = setInterval(() => {
//             percent++;
//             if (percent > parseInt(progressText.dataset.percent)) {
//                 percent = parseInt(progressText.dataset.percent);
//             }
//             progress.style.width = `${percent}%`;
//             progressText.textContent = `${percent}%`;
//             progressText.dataset.percent = percent;

//             if (percent >= parseInt(progressText.dataset.percent)) {
//                 clearInterval(intervalId);
//             }
//         }, 50);
//     }

//     startBtn.addEventListener('click', startProgress);
// });
const progressBars = document.querySelectorAll('.progress-bar');
const startBtn = document.getElementById('start-btn');

progressBars.forEach((progressBar) => {
    const progress = progressBar.querySelector('.progress');
    const progressText = progressBar.querySelector('.progress-text');

    const dataPercent = parseInt(progressText.dataset.percent);
    let percent = 0;
    let intervalId;

    function startProgress() {
        clearInterval(intervalId);
        progress.style.width = `${percent}%`;
        progressText.style.width = `${percent}%`;

        intervalId = setInterval(() => {
            percent++;
            if (percent > dataPercent) {
                percent = dataPercent;
                clearInterval(intervalId);
            }
            progress.style.width = `${percent}%`;
            progressText.style.width = `${percent}%`;
            progressText.textContent = percent + '%';
        }, 20);
    }

    startBtn.addEventListener('click', startProgress);
});
