import dayjs from "dayjs";

export function openModal() {
  document.querySelector('body').classList.add('active-modal');  
}

export function closeModal() {  
  document.querySelector('body').classList.remove('active-modal');
  document.getElementById('id-field').value = "";
  document.getElementById('tutor-field').value = "";
  document.getElementById('pet-field').value = "";
  document.getElementById('phone-field').value = "";
  document.getElementById('service-field').value = "";
  document.getElementById('date-field').value = dayjs(new Date()).format('YYYY-MM-DD');
  document.getElementById('hour-field').value = "-1";
  
}


