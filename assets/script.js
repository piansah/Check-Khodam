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
          'Sapi'
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
