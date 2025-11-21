// --- BAGIAN 1: DATABASE SOLUSI PENGOLAHAN SAMPAH YANG SANGAT RINCI ---
const solutions = {
    // === KATEGORI PLASTIK RUMAH TANGGA UMUM ===
    "plastik_botol_pet": {
        name: "Botol Plastik PET (Air Mineral, Soda)",
        category: "Plastik (PET/Kode 1)",
        description: "Plastik PET mudah didaur ulang. Pisahkan tutup dan label sebelum didaur ulang.",
        solutions: [
            {
                title: "Pot Bunga Gantung Otomatis (Self-watering)",
                steps: ["Potong botol, balikkan bagian atas, dan gabungkan dengan bagian bawah sebagai reservoir air.", "Gunakan sumbu kain di leher botol untuk sistem penyiraman otomatis."],
                video: "https://www.youtube.com/embed/Pj15dJb63jE"
            },
            {
                title: "Eko-Briket (Ecobrick)",
                steps: ["Cuci dan keringkan botol dan sampah plastik lunak lainnya.", "Padatkan sampah plastik non-daur ulang ke dalam botol hingga sangat keras.","Gunakan sebagai balok bangunan modular."],
                image: "Petunjuk pembuatan Ecobrick untuk bahan bangunan"
            },
        ]
    },
    "plastik_pembungkus_makanan": {
        name: "Pembungkus Makanan/Sachet (Plastik Lunak)",
        category: "Plastik Campuran/Multi-Layer (Sulit Didaur Ulang)",
        description: "Plastik sachet dan pembungkus umumnya multi-layer, sulit diproses. Cara terbaik adalah menggunakan Ecobrick.",
        solutions: [
            {
                title: "Pengisi Ecobrick (Wajib Cuci Kering)",
                steps: ["Cuci sachet bekas hingga bersih dari sisa makanan/minuman.", "Keringkan sempurna, lalu masukkan dan padatkan ke dalam botol PET yang akan dijadikan Ecobrick."],
            },
            {
                title: "Kerajinan Anyaman Sachet",
                steps: ["Potong sachet menjadi strip dan anyam untuk membuat tas, dompet, atau taplak meja."]
            },
        ]
    },
    "plastik_tutup_botol": {
        name: "Tutup Botol Plastik",
        category: "Plastik (HDPE/PP)",
        description: "Tutup botol biasanya terbuat dari plastik berbeda (HDPE atau PP) yang bernilai jual tinggi. Pisahkan dari botol.",
        solutions: [
            {
                title: "Mosaik atau Hiasan Dinding",
                steps: ["Kumpulkan tutup botol dengan berbagai warna. Rekatkan pada papan untuk membuat karya seni mosaik atau hiasan dinding."],
            },
            {
                title: "Donasi ke Bank Sampah/Yayasan Proyek Khusus",
                steps: ["Kumpulkan dalam jumlah besar dan donasikan. Tutup botol sering digunakan untuk membuat kaki palsu, kursi roda, atau furnitur lainnya."],
            },
        ]
    },
    "plastik_spons_cuci": {
        name: "Spons Cuci Piring Bekas",
        category: "Plastik (Polyurethane/Sulit Didaur Ulang)",
        description: "Spons bekas tidak bisa didaur ulang. Sebelum dibuang, manfaatkan untuk tujuan lain.",
        solutions: [
            {
                title: "Pembersih Kotoran Kering",
                steps: ["Gunakan spons bekas yang sudah dicuci untuk membersihkan noda kering di lantai atau menggosok sepatu."],
            },
        ]
    },
    
    // === KATEGORI KERTAS & KARDUS ===
    "kertas_karton_susu": {
        name: "Kardus/Kemasan Minuman (Tetra Pak)",
        category: "Kertas Berlapis (Multi-material)",
        description: "Kemasan minuman adalah gabungan kertas, plastik, dan aluminium. Perlu didaur ulang di fasilitas khusus.",
        solutions: [
            {
                title: "Wadah Bibit Tanaman (Seedling Pots)",
                steps: ["Potong kemasan menjadi kotak kecil. Lubangi bagian bawah untuk drainase. Gunakan untuk menyemai bibit tanaman."],
            },
        ]
    },

    // === KATEGORI LOGAM ===
    "logam_kaleng_makanan": {
        name: "Kaleng Makanan/Minuman (Aluminium/Baja)",
        category: "Logam",
        description: "Logam sangat mudah didaur ulang. Pastikan kaleng bersih dan kering.",
        solutions: [
            {
                title: "Tempat Pensil atau Sendok Alat Makan",
                steps: ["Cuci bersih kaleng. Hias dengan cat atau kain. Pastikan tepi tidak tajam."],
            },
        ]
    },

    // === KATEGORI B3 (BERBAHAYA & BERACUN) ===
    "b3_bekas_cat": {
        name: "Kaleng Bekas Cat Minyak atau Thinner",
        category: "Limbah B3 (Wajib Dikelola Khusus)",
        description: "Sisa cat mengandung zat kimia berbahaya dan mudah terbakar. JANGAN dibuang ke saluran air atau tanah.",
        solutions: [
            {
                title: "Keringkan Sisa Cat dan Serahkan",
                steps: ["Biarkan sisa cat minyak mengering sempurna di ruang terbuka (tambahkan serbuk gergaji/pasir jika perlu).", "Setelah kering, bawa kaleng dan sisa cat beku ke fasilitas penampungan B3 resmi."],
            }
        ]
    },
    "b3_baterai": {
        name: "Baterai Bekas (AA, AAA, Kancing)",
        category: "B3 (Wajib Dikelola Khusus)",
        description: "Baterai mengandung logam berat beracun. Harus dikumpulkan terpisah.",
        solutions: [
            {
                title: "Serahkan ke Bank Sampah atau Dropbox Khusus",
                steps: ["Rekatkan kedua ujung kutub baterai dengan isolasi.", "Kumpulkan di wadah tertutup. Cari lokasi pengumpulan B3 resmi."],
                image: "Contoh tempat pengumpulan baterai bekas"
            }
        ]
    },
    
    // === PENANGANAN BENDA TIDAK WAJIB (EROR) ===
    "makhluk_hidup": {
        name: "Makhluk Hidup / Benda Hidup Lainnya",
        category: "TIDAK TERDETEKSI SEBAGAI SAMPAH",
        description: "Objek yang difoto bukan sampah. Fokuskan kamera pada objek mati.",
        solutions: [] // Tidak ada solusi daur ulang
    },
    "unknown": {
        name: "Sampah Tidak Dikenal atau Kotoran",
        category: "Umum",
        description: "Sampah ini tidak terdaftar, terlalu kotor, atau tidak dapat diidentifikasi.",
        solutions: [
             {
                title: "Bersihkan atau Buang ke TPA",
                steps: ["Jika terlalu kotor, buanglah ke tempat sampah umum.", "Jika sampah baru, bersihkan dan coba deteksi kembali."],
            }
        ]
    }
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
const toggleCamBtn = document.getElementById('toggle-cam-btn'); 

let currentCameraFacing = 'user'; // Default: 'user' (depan) untuk laptop

/**
 * 📸 FUNGSI INIT CAMERA YANG TANGGUH
 * Menggunakan try-catch berlapis untuk mengatasi masalah izin/driver di laptop.
 */
async function initCamera(facingMode) {
    if (webcamElement.srcObject) {
        webcamElement.srcObject.getTracks().forEach(track => track.stop());
    }

    let constraints = { video: { facingMode: facingMode } };
    let stream;
    
    try {
        // Coba 1: Coba dengan facingMode yang diminta (user/environment)
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        
    } catch (e) {
        // Jika Coba 1 gagal, coba 2: Batasan paling longgar (video: true)
        console.warn("Gagal dengan facingMode, mencoba batasan video: true.");
        constraints = { video: true };
        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
        } catch (errFallback) {
             // Jika semua gagal
            console.error("Gagal total mengakses kamera:", errFallback);
            captureBtn.textContent = "Kamera tidak dapat diakses. Cek izin/aplikasi lain.";
            return; // Keluar dari fungsi jika gagal total
        }
    }

    // Jika stream berhasil didapatkan:
    webcamElement.srcObject = stream;
    currentCameraFacing = facingMode;
    
    // Cek perangkat untuk tombol toggle
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(d => d.kind === 'videoinput');
    if (videoDevices.length > 1 && toggleCamBtn) {
        toggleCamBtn.style.display = 'block'; 
    } else if (toggleCamBtn) {
        toggleCamBtn.style.display = 'none'; 
    }
}

/**
 * 🔑 FUNGSI DETEKSI AKURAT (Perlu Integrasi ML)
 */
async function detectTrash(imageData) {
    loadingMsg.style.display = 'block';
    
    // --- TEMPAT INTEGRASI MODEL ML ANDA DI SINI (TensorFlow.js) ---
    // GANTI baris di bawah ini dengan LOGIKA ML NYATA
    await new Promise(resolve => setTimeout(resolve, 3000)); 
    const detectedMLKey = "plastik_botol_pet"; // CONTOH SIMULASI

    loadingMsg.style.display = 'none';

    // ⚠️ PENANGANAN MAKHLUK HIDUP/EROR
    if (detectedMLKey === "makhluk_hidup") {
        alert("⚠️ Eror! Objek yang terdeteksi adalah makhluk hidup. Mohon fokus pada objek sampah.");
        return; 
    } 
    
    // PENANGANAN SAMPAH
    if (solutions[detectedMLKey]) {
        displaySolutions(detectedMLKey);
    } else {
        alert("Sampah tidak terdeteksi atau jenisnya tidak terdaftar. Coba lagi atau gunakan input manual.");
    }
}

// Fungsi Menampilkan Solusi (SAMA)
function displaySolutions(key) {
    const data = solutions[key];
    solutionContainer.innerHTML = ''; 

    detectedType.textContent = `${data.name} (${data.category})`;
    
    const descP = document.createElement('p');
    descP.innerHTML = `<strong>${data.description}</strong>`;
    solutionContainer.appendChild(descP);

    // Cek apakah ada solusi yang terdaftar
    if (data.solutions && data.solutions.length > 0) {
        data.solutions.forEach((sol) => {
            const card = document.createElement('div');
            card.className = 'solution-card';

            const title = document.createElement('h3');
            title.textContent = sol.title;
            card.appendChild(title);

            const stepsList = document.createElement('ol');
            sol.steps.forEach(step => {
                const li = document.createElement('li');
                li.textContent = step;
                stepsList.appendChild(li);
            });
            card.appendChild(stepsList);

            if (sol.video) {
                const iframe = document.createElement('iframe');
                iframe.className = 'video-embed';
                iframe.src = sol.video;
                iframe.title = sol.title;
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                card.appendChild(iframe);
            } else if (sol.image) {
                const imgP = document.createElement('p');
                imgP.innerHTML = `*** Petunjuk Visual: ${sol.image} ***`;
                card.appendChild(imgP);
            }
            
            solutionContainer.appendChild(card);
        });
    } else {
         const info = document.createElement('p');
         info.textContent = "Tidak ada langkah pengolahan manual yang disarankan. Objek ini mungkin harus diserahkan ke fasilitas khusus (B3) atau dibuang ke TPA.";
         solutionContainer.appendChild(info);
    }

    detectionArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
}


// --- BAGIAN 3: EVENT LISTENERS ---

// Listener Ganti Kamera
if (toggleCamBtn) {
    toggleCamBtn.addEventListener('click', () => {
        const newFacingMode = currentCameraFacing === 'environment' ? 'user' : 'environment';
        initCamera(newFacingMode);
    });
}

// Listener Ambil Foto
captureBtn.addEventListener('click', () => {
    if (!webcamElement.srcObject) {
         alert("Kamera belum aktif. Pastikan kamera Anda tidak digunakan aplikasi lain.");
         return;
    }
    const context = canvasElement.getContext('2d');
    canvasElement.width = webcamElement.videoWidth;
    canvasElement.height = webcamElement.videoHeight;
    context.drawImage(webcamElement, 0, 0, canvasElement.width, canvasElement.height);

    const imageData = canvasElement.toDataURL('image/jpeg');
    detectTrash(imageData);
});

// Listener Input Manual
manualBtn.addEventListener('click', () => {
    const selectedKey = manualSelect.value;
    if (selectedKey && solutions[selectedKey]) {
        displaySolutions(selectedKey);
    } else {
        alert("Silakan pilih jenis sampah yang valid.");
    }
});

// Listener Reset
resetBtn.addEventListener('click', () => {
    resultArea.classList.add('hidden');
    detectionArea.classList.remove('hidden');
});

// Jalankan inisialisasi kamera saat dokumen dimuat (default: kamera depan)
window.onload = () => initCamera('user');
