import dayjs from 'dayjs';

import { openModal } from '../../util/modal.js';
import { schedulePut, schedulesByID } from "../../services/schedules";

export function editOpenModalScheduleHandler() {
  const buttonEdit = document.querySelectorAll('.btn-edit');
  
  buttonEdit.forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const scheduleId = button.dataset.id;      
      try {
        if(scheduleId) {
          await openModal();
          const schedule = await schedulesByID({ id: scheduleId });
          document.getElementById('id-field').value = schedule.id;
          document.getElementById('tutor-field').value = schedule.tutor;
          document.getElementById('pet-field').value = schedule.pet;
          document.getElementById('phone-field').value = schedule.phone;
          document.getElementById('service-field').value = schedule.service;
          document.getElementById('date-field').value = dayjs(schedule.when).format('YYYY-MM-DD');
          console.log(dayjs(schedule.when).format('HH:mm'));
          const btnForm = document.getElementById('btn-form');

          
        }
      } catch (e) {
        alert('Erro para editar a agenda');
        return;
      }
    });
  });
}
