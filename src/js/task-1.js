// 1. ul#categories elementini seç
const categories = document.querySelector('#categories');

// 2. Tüm kategori öğelerini seç (li.item)
const items = categories.querySelectorAll('.item');

// Kategori sayısını yazdır
console.log(`Number of categories: ${items.length}`);

// 3. Her kategori için döngü
items.forEach(item => {
  // Kategori başlığı (h2)
  const title = item.querySelector('h2').textContent;

  // Altındaki li sayısı
  const elements = item.querySelectorAll('ul li').length;

  // Konsola yazdır
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});