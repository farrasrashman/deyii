const wishes = [
    "Selamat ulang tahun babee. akhirnya yaa nyentuh umur 17 jugaa, semoga keterima di fh uwiii yeah yang sudah kamu impikan itu padahal psikotes nya akuntan HAHAHAHA",
];

const wishElement = document.getElementById('wish');
const girlfriendImage = document.getElementById('girlfriend-image');

function getRandomWish() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    return wishes[randomIndex];
}

function updateWish() {
    const randomWish = getRandomWish();
    wishElement.textContent = randomWish;
}

updateWish();