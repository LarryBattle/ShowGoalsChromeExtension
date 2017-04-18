window.onload = function () {
    var timeEl = document.querySelector('#currentTime');
    var showUpdatedTime = function () {
        timeEl.innerHTML = (new Date()).toLocaleString();
    };
    showUpdatedTime();
    setInterval(showUpdatedTime, 1000);
};