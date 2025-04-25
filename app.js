const today = new Date();
const yil = today.getFullYear();
const yilBoshi = new Date(yil, 0, 1);
const yilOxiri = new Date(yil, 11, 31);

const msPerDay = 1000 * 60 * 60 * 24;

const kunRaqami = Math.floor((today - yilBoshi) / msPerDay) + 1;
const qolganKun = Math.ceil((yilOxiri - today) / msPerDay);

const haftaKuni = today.toLocaleDateString("uz-UZ", { weekday: "long" });
const sanaMatni = today.toLocaleDateString("uz-UZ", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const vaqt = today.toLocaleTimeString("uz-UZ");
const kunOyYil = today.toLocaleDateString("uz-UZ");

document.getElementById(
  "kun-qolgan"
).textContent = `Bugungi kun raqami: ${kunRaqami}`;
document.getElementById(
  "yil-statistikasi"
).textContent = `Bugun ${yil}-yilning 365 kunidan ${kunRaqami}-kuni. ${yil}-yildan ${qolganKun} kun qoldi.`;
document.getElementById(
  "hozirgi-sana"
).textContent = `Bugungi sana: ${haftaKuni}, ${sanaMatni}`;
document.getElementById(
  "vaqt-bilan"
).textContent = `Bugungi sana va vaqt: ${haftaKuni}, ${sanaMatni} ${vaqt}`;
document.getElementById(
  "kunoyyil"
).textContent = `Bugungi sana Kun/Oy/Yil: ${kunOyYil}`;
