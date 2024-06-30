// script.js
function cekKhodam(event) {
   event.preventDefault();
   const nama = document.getElementById('search').value.trim(); // Trim to remove leading/trailing spaces
   
   if (nama === '') {
       alert('Nama kisanak tidak boleh kosong!');
   } else {
      const khodam = [
         'Kodok',
         'Katak',
         'Ular',
         'Buaya',
         'Kadal',
         'Kepiting',
         'Lemur',
         'Kera',
         'Kucing',
         'Anjing',
         'Kambing',
         'Sapi',
         'Rangda',
         'Kuntilanak',
         'Tuyul',
         'Sundel Bolong',
         'Pocong',
         'Genderuwo',
         'Buto Ijo',
         'Jelangkung',
         'Layangan',
         'Babi Ngepet',
         'Leak',
         'Gendruwo',
         'Sesat',
         'Tuyul Mangan',
         'Babon',
         'Santu Petruk',
         'Butek',
         'Buta Ijo',
         'Wewe Gombel',
         'Jin Kesurupan',
         'Sasaran',
         'Jin Kembang',
         'Buto Terong',
         'Jin Kafir',
         'Lembu Suro',
         'Sesembahan',
         'Wewe',
         'Ondel-ondel',
         'Setan Kober',
         'Jenglot',
         'Bajaj Pencari Parkiran',
         'Maling Sarden',
         'Tukang Cukur Jembut',
         'Pak Ogah',
         'Kuli Bangunan Nge-gym',
         'Begal Jalan Tikus',
         'Sopir Truk Bersuara Merdu',
         'Penjual Jamu Setan',
         'Pencuri Sandal Masjid',
         'Anak Mami Kangen Papinya',
         'Wibu Nolep',
         'Cabe Rawit',
         'Pencuri Ikan Koi Tetangga',
         'Tukang Maling Kabel Listrik',
         'Kuli Panggul Tari Saman',
         'Pengamen Bawa Gendang Betawi',
         'Kuli Bangunan Pake Lipstick',
         'Pak Ogah Jualan Gorengan',
         'Tukang Bubur Ayam Motoran',
         'Pencuri Ketupat Lebaran',
         'Cabe-cabean di Kampus',
         'Pencuri Jajan Pasar',
         'Begal Tobrut',
         'Penjual Gorengan Beraliran Muaitai',
         'Maling Kayu Jati',
         'Wibu Kecanduan',
         'Anak Mami'
      ];
      const randomKhodam = Math.floor(Math.random() * khodam.length);
      const resultText = `${nama.toUpperCase()} - Khodam Kamu ${khodam[randomKhodam]}`;
      
      // Update result element
      const resultElement = document.getElementById('result');
      resultElement.textContent = resultText;
      resultElement.style.color = 'white'; 
      resultElement.style.textShadow = 'black';
      resultElement.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 5)'; 

      
      document.getElementById('search').value = '';
   }
}

document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('khodamForm').addEventListener('submit', cekKhodam);
});
