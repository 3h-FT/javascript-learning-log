'use strict';

{
    const time = document.getElementById("time");

    function showClock() {
        // 時間を取得
        const nowTime = new Date(); 
        const nowHour = nowTime.getHours();
        const nowMin = nowTime.getMinutes();
        const nowSec = nowTime.getSeconds(); 

        // 表示をそろえる
        const hourClock = String(nowHour).padStart(2, '0');
        const minClock  = String(nowMin).padStart(2, '0');
        const secClock  = String(nowSec).padStart(2, '0');
        const clock     = `${hourClock}:${minClock}:${secClock}`;
        
        time.textContent = clock;
    }

    showClock();

    setInterval(showClock, 1000);
}
