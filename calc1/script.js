function performOperation(operation) {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var resultElement = document.getElementById('result');
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = 'Düzgün daxil edilməmiş ədəd';
    return;
  }
  switch (operation) {
    case 'add':
      resultElement.textContent = 'Nəticə: ' + (num1 + num2);
      break;
    case 'subtract':
      resultElement.textContent = 'Nəticə: ' + (num1 - num2);
      break;
    case 'multiply':
      resultElement.textContent = 'Nəticə: ' + (num1 * num2);
      break;
    case 'divide':
      if (num2 !== 0) {
        resultElement.textContent = 'Nəticə: ' + (num1 / num2);
      } else {
        resultElement.textContent = '0-a bölmək mümkün deyil';
      }
      break;
    default:
      resultElement.textContent = 'Yanlış əməliyyat';
  }
}
  function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = 'Result: ';
  }
 