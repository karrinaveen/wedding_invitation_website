const weddingDate = new Date("2026-11-21T21:51:00+05:30").getTime();
const units = { days: document.querySelector("#days"), hours: document.querySelector("#hours"), minutes: document.querySelector("#minutes"), seconds: document.querySelector("#seconds") };
function updateCountdown() { const distance = Math.max(0, weddingDate - Date.now()); const values = { days: Math.floor(distance / 86400000), hours: Math.floor(distance / 3600000) % 24, minutes: Math.floor(distance / 60000) % 60, seconds: Math.floor(distance / 1000) % 60 }; Object.entries(values).forEach(([key, value]) => { units[key].textContent = String(value).padStart(2, "0"); }); }
updateCountdown(); setInterval(updateCountdown, 1000);
