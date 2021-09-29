const categorie = document.getElementById('categories');
console.log(`В списке ${categorie.children.length} категории.`);

for (let child of categorie.children) {
  console.log(`Категория ${child.querySelector('h2').innerHTML}`);
  console.log(`Количество элементов: ${child.querySelectorAll('li').length}`);
}
