import { openingHours } from '../../util/opening-hours';

export function availableHours(scheduleDay) {
  const hourField = document.getElementById('hour-field');
  hourField.innerHTML = '';

 const availableHours = openingHours.filter(hour => {
  return !scheduleDay.includes(hour);
 });

 console.log("availableHours", availableHours);

 availableHours.forEach(hour => {
  const option = document.createElement('option');
  option.value = hour;
  option.textContent = hour;
  hourField.appendChild(option);
 });
}
