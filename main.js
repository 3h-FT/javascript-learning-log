'use strict';
{
  const time = document.getElementById("time");
  const next = document.getElementById("next");
  const arrivalTime = document.getElementById("arrival-time");
  const countdown = document.getElementById("countdown");
  const second = document.getElementById("second");
  const arrivalSecond = document.getElementById("arrival-secondtime");
  const toggleBtn = document.getElementById("toggle-destination");
  const destinationTitle = document.querySelector(".destination h3");
  const toggleTimetableBtn = document.getElementById("toggle-timetable");
  const allTimetable = document.getElementById("all-timetable");
  const timetableBody = document.getElementById("timetable-body");

  const timetableForward = [
    { depart: "06:00", arrive: "07:00" },
    { depart: "08:00", arrive: "09:00" },
    { depart: "10:00", arrive: "11:00" },
    { depart: "12:00", arrive: "13:00" },
    { depart: "14:00", arrive: "15:00" },
    { depart: "16:00", arrive: "17:00" },
    { depart: "18:00", arrive: "19:00" },
    { depart: "20:00", arrive: "21:00" },
    { depart: "22:00", arrive: "23:00" },
  ];

  const timetableBackward = [
    { depart: "07:00", arrive: "08:00" },
    { depart: "09:00", arrive: "10:00" },
    { depart: "11:00", arrive: "12:00" },
    { depart: "13:00", arrive: "14:00" },
    { depart: "15:00", arrive: "16:00" },
    { depart: "17:00", arrive: "18:00" },
    { depart: "19:00", arrive: "20:00" },
    { depart: "21:00", arrive: "22:00" },
  ];

  let isForward = true;

  function getCurrentTimetable() {
    return isForward ? timetableForward : timetableBackward;
  }

  function toMinutes(timeStr) {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  }

  function formatCountdown(now, departStr) {
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    let diff = toMinutes(departStr) - nowMinutes;
    if (diff < 0) diff += 24 * 60;
    const h = Math.floor(diff / 60);
    const m = diff % 60;
    return `あと${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }

  function updateBusTimes() {
    const timetable = getCurrentTimetable();
    const now = new Date();
    const clock = now.toLocaleTimeString("ja-JP", { hour12: false });
    time.textContent = clock;
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    let upcoming = timetable.filter(bus => toMinutes(bus.depart) > nowMinutes);
    if (upcoming.length === 0) {
      upcoming = timetable;
    }

    next.textContent = upcoming[0].depart;
    arrivalTime.textContent = upcoming[0].arrive;
    countdown.textContent = formatCountdown(now, upcoming[0].depart);

    if (upcoming.length > 1) {
      second.textContent = upcoming[1].depart;
      arrivalSecond.textContent = upcoming[1].arrive;
    } else {
      second.textContent = timetable[0].depart;
      arrivalSecond.textContent = timetable[0].arrive;
    }
  }

  function renderTimetable() {
    const timetable = getCurrentTimetable();
    timetableBody.innerHTML = "";
    timetable.forEach(bus => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${bus.depart}</td><td>${bus.arrive}</td>`;
      timetableBody.appendChild(tr);
    });
  }

  toggleBtn.addEventListener("click", () => {
    isForward = !isForward;
    if (isForward) {
      destinationTitle.textContent = "○○○○ ▶ ××××行";
    } else {
      destinationTitle.textContent = "×××× ▶ ○○○○行";
    }
    updateBusTimes();
    renderTimetable();
  });

  toggleTimetableBtn.addEventListener("click", () => {
    if (allTimetable.style.display === "none") {
      allTimetable.style.display = "block";
      toggleTimetableBtn.textContent = "全体の時刻表を隠す";
      renderTimetable();
    } else {
      allTimetable.style.display = "none";
      toggleTimetableBtn.textContent = "全体の時刻表を表示";
    }
  });

  setInterval(updateBusTimes, 1000);
  updateBusTimes();
  renderTimetable();
}
