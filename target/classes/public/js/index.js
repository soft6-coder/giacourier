let isCounterStarted;
let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

function startCounter() {
  valueDisplays.forEach(function (valueDisplay) {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 87;
      valueDisplay.textContent = numberWithCommas(startValue);
      if (startValue > endValue) {
        valueDisplay.textContent = numberWithCommas(endValue) + ' +';
        clearInterval(counter);
      }
    }, duration);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 2070) {
    if (!isCounterStarted) {
      isCounterStarted = true;
      startCounter();
    }
  }
};
