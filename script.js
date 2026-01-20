const peserta = [
    {nama: "Sayekty Kinan Lestari", nim: "251134093"}, {nama: "Yoane Aurelya Pinasti", nim: "251134011"},
    {nama: "Methildis Manda Jellu", nim: "251134021"}, {nama: "Ismailia Putri Az-zahra", nim: "251134135"},
    {nama: "MARIA RUBEI MANAI SAGORO", nim: "251134111"}, {nama: "Feodora Anggita Cahya Julitasari", nim: "251134032"},
    {nama: "Isnaini Kurnia Dewi", nim: "251134018"}, {nama: "Veni Vibriyani", nim: "251134079"},
    {nama: "Clara Cantika Duana Cin Mou", nim: "251134033"}, {nama: "Maria Febrianti Esa", nim: "251134007"},
    {nama: "Elisabeth Avissa Angelina", nim: "251134052"}, {nama: "Anggel Duwi Nevellin", nim: "241134051"},
    {nama: "Faustina Marsha Ocedevina", nim: "251134029"}, {nama: "Margarita", nim: "251134090"},
    {nama: "Stella Nadya Kurniasari", nim: "251134108"}, {nama: "HILARIA CRYSA HEVI", nim: "251134130"},
    {nama: "VERA", nim: "251134040"}, {nama: "Sabina Amelia Agustin", nim: "251134045"},
    {nama: "Novelin Christie", nim: "251134082"}, {nama: "Maria Rodolfa Aurel Oktavia", nim: "251134042"},
    {nama: "Novia Wirda Yanti", nim: "251134081"}, {nama: "Calista Puteri Kuswari", nim: "251134072"},
    {nama: "wayan celsy lovilia sarisa", nim: "251134119"}, {nama: "Marice sumas", nim: "251134097"},
    {nama: "Grace Wonok", nim: "251134138"}, {nama: "Kara Nagita Reva", nim: "251134038"},
    {nama: "Agnes Wayega Orokai", nim: "251134096"}, {nama: "Monika Jenny Ngaji", nim: "251134035"},
    {nama: "Maria Wulan Kristiani", nim: "251134128"}, {nama: "Yosia Refa Nedabia", nim: "251134034"},
    {nama: "Yosep", nim: "251134077"}, {nama: "Boas Sababang", nim: "251134146"},
    {nama: "Franciscus bramantyo dian m", nim: "251134049"}, {nama: "Roberto Friguntoro Seda", nim: "251134129"},
    {nama: "Laurentius Krisna Dwi Prasetyo", nim: "251134133"}, {nama: "Galang dwi noverien", nim: "251134112"},
    {nama: "Ignasius Rafael Wijaya (Ketua)", nim: "251134091"}
];

const listUl = document.getElementById('nama-list');
const btnBatal = document.getElementById('btn-batal');
const btnIya = document.getElementById('btn-iya');

// Render Nama
peserta.forEach(p => {
    let li = document.createElement('li');
    li.innerHTML = `<span>${p.nama}</span> <small>${p.nim}</small>`;
    li.onclick = () => startPrank();
    listUl.appendChild(li);
});

function startPrank() {
    document.getElementById('prank-overlay').style.display = 'flex';
    
    // Getar HP terus menerus
    let vibe = setInterval(() => {
        if ("vibrate" in navigator) navigator.vibrate(200);
    }, 300);

    // Countdown Palsu
    let count = 10;
    let counter = setInterval(() => {
        count--;
        document.getElementById('countdown').innerText = count;
        if(count <= 0) {
            clearInterval(counter);
            clearInterval(vibe);
            showSurprise();
        }
    }, 1000);
}

// Tombol Batal yang Kabur
btnBatal.addEventListener('mouseover', moveButton);
btnBatal.addEventListener('touchstart', moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - btnBatal.clientWidth);
    const y = Math.random() * (window.innerHeight - btnBatal.clientHeight);
    btnBatal.style.left = `${x}px`;
    btnBatal.style.top = `${y}px`;
    
    // Tambah log palsu biar makin panik
    const log = document.getElementById('log');
    log.innerHTML += "> Deleting partition... FAILED. Retrying...<br>";
    log.scrollTop = log.scrollHeight;
}

btnIya.onclick = showSurprise;

function showSurprise() {
    document.getElementById('prank-overlay').style.display = 'none';
    document.getElementById('surprise-overlay').style.display = 'flex';
    if ("vibrate" in navigator) navigator.vibrate(0); // Stop getar
}
