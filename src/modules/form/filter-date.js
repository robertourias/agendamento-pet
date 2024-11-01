import { schedulesDay } from "../schedules/schedulesDay";

const dateField = document.getElementById('day-list');

dateField.addEventListener('change', function() {
  schedulesDay();
});