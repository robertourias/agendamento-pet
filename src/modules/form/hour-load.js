import { openingHours } from '../../util/opening-hours';

const hourField = document.getElementById('hour-field');

export function availableHours(scheduleDay) {
 const availableHours = openingHours.filter(hour => {
  return !scheduleDay.includes(hour);
 });

 availableHours.forEach(hour => {
  const option = document.createElement('option');
  option.value = hour;
  option.textContent = hour;
  hourField.appendChild(option);
 });
}
