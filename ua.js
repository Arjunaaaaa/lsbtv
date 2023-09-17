
        // Fungsi untuk mendeteksi apakah pengguna adalah agen
        function cekUserAgen() {
            // Mendapatkan informasi user agent dari browser
            var userAgent = navigator.userAgent;

            // Daftar kata kunci yang mungkin muncul dalam user agent agen
            var kataKunciAgen = ["Lsbtv", "iPhone", "Pencuri", "Ngopy"];

            // Memeriksa apakah salah satu kata kunci agen ada dalam user agent
            var isAgen = kataKunciAgen.some(function(agen) {
                return userAgent.includes(agen);
            });

            // Jika pengguna adalah agen, tidak ada tindakan tambahan yang diambil
            // Jika pengguna bukan agen, akan dialihkan ke halaman lain
            if (!isAgen) {
                window.location.href = "halaman-lain.html"; // Ganti "halaman-lain.html" dengan URL halaman yang sesuai
            }
        }

        // Panggil fungsi cekUserAgen saat halaman dimuat
        window.onload = cekUserAgen;
