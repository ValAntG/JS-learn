const output = document.getElementById('name-output');

document.getElementById('name-input').addEventListener('input', function () {
  const value = this.value;

  if (value == '') {
    output.textContent = 'незнакомец';
  } else {
    output.textContent = value;
  }
});
