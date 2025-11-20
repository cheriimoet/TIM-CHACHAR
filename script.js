// --- BAGIAN 1: DATABASE SOLUSI PENGOLAHAN SAMPAH ---
// Kunci (key) harus sesuai dengan output model ML atau nilai dari manual-select.
const solutions = {
    "plastik_botol": {
        name: "Botol Plastik PET (Contoh: Air Mineral)",
        category: "Plastik",
        description: "Botol plastik PET sangat baik untuk diolah menjadi barang fungsional.",
        solutions: [
            {
                title: "Pot Bunga Gantung",
                steps: [
                    "Potong botol menjadi dua bagian.",
                    "Lubangi bagian bawah untuk drainase.",
                    "Hias dengan cat akrilik atau tali rami.",
                    "Isi dengan tanah dan bibit tanaman."
                ],
                video: "https://www.youtube.com/embed/Pj15dJb63jE" // Ganti dengan link embed YouTube yang relevan
            },
            {
                title: "Wadah Penyimpanan Kecil",
                steps: [
                    "Potong bagian bawah botol (sekitar 5-10 cm).",
                    "Gunakan resleting bekas dan lem panas untuk menyatukan dua potongan dasar botol.",
                    "Sempurna untuk menyimpan koin, jarum, atau pernak-pernik kecil."
                ],
                image: "Image of DIY small storage container from plastic bottle bottom"
            },
            {
                title: "Eko-Briket (Ecobrick)",
                steps: [
                    "Bersihkan dan keringkan botol.",
                    "Masukkan sampah plastik non-daur ulang (kresek, bungkus sachet) ke dalam botol.",
                    "Padatkan hingga botol benar-benar keras dan tidak dapat dikempeskan.",
                    "Gunakan sebagai bahan bangunan modular."
                ]
            }
        ]
    },
    "kertas_koran": {
        name: "Kertas Koran/Majalah",
        category: "Kertas",
        description: "Kertas bekas bisa diubah menjadi kerajinan tangan atau didaur ulang secara massal.",
        solutions: [
            {
                title: "Kerajinan Kertas Gulung (Quilling)",
                steps: [
                    "Potong kertas koran menjadi strip tipis.",
                    "Gulung strip menggunakan lidi atau alat quilling.",
                    "Rekatkan gulungan untuk membentuk hiasan, bingkai foto, atau perhiasan."
                ],
                image: "Image of Quilling art made from newspaper"
            },
            {
                title: "Pupuk Kompos",
                steps: [
                    "Sobek kertas koran menjadi potongan kecil (bahan cokelat/karbon).",
                    "Campurkan dengan sisa makanan (bahan hijau/nitrogen) dan tanah.",
                    "Siram sedikit dan aduk secara berkala hingga menjadi kompos."
                ]
            }
        ]
    },
    "b3_baterai": {
        name: "Baterai Bekas",
        category: "B3 (Bahan Berbahaya dan Beracun)",
        description: "Baterai bekas harus **diserahkan** ke tempat pengumpulan khusus karena mengandung zat berbahaya yang mencemari lingkungan. **JANGAN** dibuang ke tempat sampah biasa.",
        solutions: [
            {
                title: "Serahkan ke Bank Sampah atau Dropbox Khusus",
                steps: [
                    "Rekatkan ujung-ujung baterai dengan isolasi untuk mencegah korsleting.",
                    "Kumpulkan di wadah tertutup yang aman.",
                    "Cari lokasi Bank Sampah B3, tempat penukaran baterai di supermarket, atau kantor lingkungan hidup terdekat."
                ],
                image: "Image of proper battery disposal site"
            },
            {
                title: "Hindari Penggunaan Baterai Sekali Pakai",
                steps: [
                    "Pilih perangkat elektronik yang menggunakan baterai isi ulang (rechargeable).",
                    "Gunakan adaptor daya sebisa mungkin."
                ]
            }
        ]
    }
    // Tambahkan solusi untuk sampah lain seperti 'plastik_tas', 'kertas_karton', 'b3_obat', dll.
};

// --- BAGIAN 2: LOGIKA APLIKASI WEB ---

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const captureBtn = document.getElementById('capture-btn');
const manualSelect = document.getElementById('manual-select');
const manualBtn = document.getElementById('manual-btn');
const resetBtn = document.getElementById('reset-btn');
const loadingMsg = document.getElementById('loading-msg');
const detectionArea = document.getElementById('detection-area');
const resultArea = document.getElementById('result-area');
const detectedType = document.getElementById('detected-type');
const solutionContainer = document.getElementById('solution-container');

// 1. Inisialisasi Kamera
function initCamera() {
    // Meminta akses ke kamera (getUserMedia)
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            webcamElement.srcObject = stream;
        })
        .catch(err => {
            console.error("Error mengakses kamera: ", err);
            // Jika gagal, sembunyikan tombol capture dan beritahu user
            captureBtn.textContent = "Kamera tidak dapat diakses.";
            captureBtn.disabled = true;
        });
}

// 2. Fungsi Deteksi (Simulasi ML)
async function detectTrash(image) {
    loadingMsg.style.display = 'block';
    // --- DI SINI ANDA AKAN MENGINTEGRASIKAN MODEL TENSORFLOW.JS ---
    // Placeholder: Setelah 2 detik, simulasi hasil deteksi.
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    loadingMsg.style.display = 'none';

    // *** GANTI BAGIAN INI DENGAN LOGIKA PREDIKSI MODEL ML ANDA ***
    // Model harus memberikan hasil 'key' yang sesuai dengan objek 'solutions'
    // Contoh Simulasi:
    const mockResults = ["plastik_botol", "kertas_koran", "b3_baterai"];
    const detectedKey = mockResults[Math.floor(Math.random() * mockResults.length)]; 
    // ***************************************************************

    if (solutions[detectedKey]) {
        displaySolutions(detectedKey);
    } else {
        alert("Jenis sampah tidak terdeteksi. Coba lagi atau gunakan input manual.");
    }
}

// 3. Menampilkan Solusi ke Halaman
function displaySolutions(key) {
    const data = solutions[key];
    solutionContainer.innerHTML = ''; // Kosongkan kontainer lama

    detectedType.textContent = `${data.name} (${data.category})`;
    
    // Tampilkan deskripsi umum
    const descP = document.createElement('p');
    descP.innerHTML = `<strong>${data.description}</strong>`;
    solutionContainer.appendChild(descP);

    // Tampilkan setiap solusi
    data.solutions.forEach((sol, index) => {
        const card = document.createElement('div');
        card.className = 'solution-card';

        const title = document.createElement('h3');
        title.textContent = sol.title;
        card.appendChild(title);

        // Langkah-langkah
        const stepsList = document.createElement('ol');
        sol.steps.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            stepsList.appendChild(li);
        });
        card.appendChild(stepsList);

        // Link Video/Gambar Petunjuk
        if (sol.video) {
            const iframe = document.createElement('iframe');
            iframe.className = 'video-embed';
            iframe.src = sol.video;
            iframe.title = sol.title;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            card.appendChild(iframe);
        } else if (sol.image) {
            // Untuk gambar petunjuk (Contoh: )
            const imgP = document.createElement('p');
            imgP.innerHTML = `*** Petunjuk Visual: ${sol.image} ***`; // Anda harus mengimplementasikan fungsi untuk menampilkan gambar nyata
            card.appendChild(imgP);
        }
        
        solutionContainer.appendChild(card);
    });

    detectionArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
}


// --- BAGIAN 3: EVENT LISTENERS ---

// A. Tombol Ambil Foto
captureBtn.addEventListener('click', () => {
    // Ambil frame dari video
    const context = canvasElement.getContext('2d');
    canvasElement.width = webcamElement.videoWidth;
    canvasElement.height = webcamElement.videoHeight;
    context.drawImage(webcamElement, 0, 0, canvasElement.width, canvasElement.height);

    // Dapatkan data gambar (Blob atau base64) untuk diproses oleh ML Model
    const imageData = canvasElement.toDataURL('image/jpeg');

    // Panggil fungsi deteksi (Simulasi ML)
    detectTrash(imageData);
});

// B. Input Manual
manualBtn.addEventListener('click', () => {
    const selectedKey = manualSelect.value;
    if (selectedKey && solutions[selectedKey]) {
        displaySolutions(selectedKey);
    } else {
        alert("Silakan pilih jenis sampah yang valid.");
    }
});

// C. Tombol Reset
resetBtn.addEventListener('click', () => {
    resultArea.classList.add('hidden');
    detectionArea.classList.remove('hidden');
});

// Jalankan inisialisasi kamera saat dokumen dimuat
window.onload = initCamera;