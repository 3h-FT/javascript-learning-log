'use strict';

{
  const time = document.getElementById("time");
  const next = document.getElementById("next");
  const arrivalTime = document.getElementById("arrival-time");
  const countdown = document.getElementById("countdown");
  const second = document.getElementById("second");
  const arrivalSecond = document.getElementById("arrival-secondtime");

  // 毎日同じダイヤ
  const timetable = [
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

  function toMinutes(timeStr) {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  }

  function formatCountdown(now, departStr) {
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    let diff = toMinutes(departStr) - nowMinutes;
    if (diff < 0) diff += 24 * 60; // 翌日分に補正
    const h = Math.floor(diff / 60);
    const m = diff % 60;
    return `あと${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`;
  }

  function updateBusTimes() {
    //現在時刻
    const now = new Date();
    const clock = now.toLocaleTimeString("ja-JP", { hour12: false });
    time.textContent = clock;

    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    
    // 今日の中で未来の便
    let upcoming = timetable.filter(bus => toMinutes(bus.depart) > nowMinutes);

    // 今日にもう便がなければ翌日のダイヤを表示
    if (upcoming.length === 0) {
      upcoming = timetable;
    }

    // 次のバス
    next.textContent = upcoming[0].depart;
    arrivalTime.textContent = upcoming[0].arrive;
    countdown.textContent = formatCountdown(now, upcoming[0].depart);

    // 次の次のバス
    if (upcoming.length > 1) {
      second.textContent = upcoming[1].depart;
      arrivalSecond.textContent = upcoming[1].arrive;
    } else {
      // 翌日の最初の便を「次の次」として表示
      second.textContent = timetable[0].depart;
      arrivalSecond.textContent = timetable[0].arrive;
    }
  }

  setInterval(updateBusTimes, 1000);
  updateBusTimes();
}
