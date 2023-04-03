function main() {
  let dateOfEvent = "2023-04-15T15:30:00";
  let daysCounter = document.getElementById("remaining-days");
  let hoursCounter = document.getElementById("remaining-hours");
  let minutesCounter = document.getElementById("remaining-minutes");
  let secondsCounter = document.getElementById("remaining-seconds");

  setInterval(refreshCounter, 1000);

  function refreshCounter() {
    const DateTime = luxon.DateTime;
    const dateNow = DateTime.now();
    const dateEvent = DateTime.fromISO(dateOfEvent);
    const diff = dateEvent.diff(dateNow, [
      "days",
      "hours",
      "minutes",
      "seconds",
    ]);
    daysCounter.innerText = diff.days;
    hoursCounter.innerText = diff.hours;
    minutesCounter.innerText = diff.minutes;
    secondsCounter.innerText = Math.round(diff.seconds);
  }

}

main();
