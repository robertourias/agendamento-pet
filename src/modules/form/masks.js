const fieldsMaskPhone = document.querySelectorAll('.mask-phone');

fieldsMaskPhone.forEach((field) => {
  field.addEventListener('input', (event) => {
    console.log(event.target.value);
    event.target.value = maskPhone(event.target.value);
  });
});

function maskPhone(phone) { 
  // Remove todos os caracteres não numéricos
  phone = phone.replace(/\D/g, '');

  // Verifica o comprimento do número
  if (phone.length <= 2) {
    phone = phone.replace(/(\d{2})/g, '($1)');
  } else if (phone.length <= 9) {
    phone = phone.replace(/(\d{2})(\d)/, '($1) $2');
  } else {
    phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  return phone;
}