// script.js
function cekKhodam(event) {
   event.preventDefault();
   const nama = document.getElementById('search').value;
   if (nama === '') {
       alert('Nama kisanak tidak boleh kosong!');
   } else {
      // const status = ['isi', 'kosong'];
      // const randomStatus = Math.floor(Math.random() * status.length);
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
          'Sapi'
      ];
      const randomKhodam = Math.floor(Math.random() * khodam.length);
      const resultText = `${nama.toUpperCase()} - Khodam Kamu ${khodam[randomKhodam]}`
      // const resultText = randomStatus === 0 
      //     ? `${nama.toUpperCase()} - Khodam Kamu ${khodam[randomKhodam]}`
      //     : `${nama.toUpperCase()} - Kamu tidak memiliki Khodam`;
      
      document.getElementById('result').innerHTML = resultText;
      document.getElementById('search').value = '';
      
   }
}

document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('khodamForm').addEventListener('submit', cekKhodam);
});
