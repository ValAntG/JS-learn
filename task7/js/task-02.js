const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientList = document.getElementById('ingredients');

ingredients.forEach(function (ingredient) {
  const li = document.createElement('li');
  li.innerHTML = ingredient;
  ingredientList.appendChild(li);
});
