// ============================================================
// SIDANTI – Data OJK & Kominfo
// Sumber: ojk.go.id & kominfo.go.id (diperbarui manual)
// Update terakhir: Oktober 2025
// ============================================================

const DATA_PINJOL_LEGAL = [
  "Modalku","Investree","Amartha","KoinWorks","Akseleran",
  "Danamas","Gradana","Crowde","iGrow","Tanifund",
  "Alami","Ethis","Dana Syariah","Cashcepat","Kredivo",
  "Akulaku","Home Credit","Adakami","Easycash","Indodana",
  "Kredit Pintar","Maucash","Pinjam Modal","Rupiah Cepat","Tunaiku",
  "UangMe","Finmas","Dana Rupiah","KTA Kilat","SpeedCash",
  "Julo","Cicil","Findaya","Pintek","Edufund",
  "Dompet Kilat","AwanTunai","Batumbu","Danacita","Finfini",
  "Pinjol OJK","Modal Rakyat","Do-It","Komunal","TaniFund",
  "Mekar","Taralite","Pinjam Duit","AdaKami","Pihak Kita"
];

const DATA_PINJOL_ILEGAL_CIRI = [
  { ciri: "Tidak terdaftar di OJK", icon: "🚫" },
  { ciri: "Bunga sangat tinggi, tidak transparan", icon: "📈" },
  { ciri: "Proses sangat mudah tanpa verifikasi ketat", icon: "⚡" },
  { ciri: "Meminta akses kontak HP & galeri foto", icon: "📱" },
  { ciri: "Mengancam menyebar data jika telat bayar", icon: "😱" },
  { ciri: "Tidak ada alamat kantor yang jelas", icon: "🏚️" },
  { ciri: "Penagihan kasar & melanggar privasi", icon: "😤" },
  { ciri: "Nama aplikasi mirip lembaga resmi", icon: "🎭" }
];

const DATA_JUDOL_DOMAIN = [
  "slot","poker","casino","togel","toto","jackpot","bet","betting",
  "gambling","gacor","maxwin","pragmatic","pg soft","habanero",
  "joker123","spadegaming","live22","mega888","918kiss",
  "zeus slot","mahjong","olympus","sweet bonanza","starlight princess",
  "gates of olympus","wild bandito","rujak bonanza","lucky neko",
  "sugar rush","koi gate","monkey king","hot hot fruit"
];

const DATA_JUDOL_MODUS = [
  { modus: "Aplikasi game berhadiah uang", icon: "🎮" },
  { modus: "Link slot/togel via WhatsApp & Telegram", icon: "📲" },
  { modus: "Website dengan domain luar negeri (.com, .net, .xyz)", icon: "🌐" },
  { modus: "Grup Telegram/WA 'tips menang'", icon: "💬" },
  { modus: "Influencer media sosial mempromosikan", icon: "📸" },
  { modus: "APK yang diinstal dari luar Play Store", icon: "📦" },
  { modus: "Iming-iming bonus deposit pertama", icon: "💰" }
];

const DATA_DAMPAK_BANSOS = [
  { dampak: "Rekening diblacklist PPATK karena transaksi mencurigakan", level: "high" },
  { dampak: "Tidak bisa menerima transfer bantuan sosial (PKH, BLT, dll)", level: "high" },
  { dampak: "Data diri disalahgunakan oleh pinjol ilegal", level: "high" },
  { dampak: "Keluarga ikut terdampak karena nomor rekening keluarga", level: "medium" },
  { dampak: "Terjerat hutang berlipat ganda dari bunga pinjol ilegal", level: "high" },
  { dampak: "Ancaman pidana karena UU Judi (hingga 10 tahun penjara)", level: "high" }
];
