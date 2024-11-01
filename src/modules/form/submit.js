import dayjs from "dayjs";

import { closeModal } from "../../util/modal.js";
import { schedulePost, schedulePut } from "../../services/schedules.js";
import { schedulesDay } from "../schedules/schedulesDay";

const formSchedule = document.getElementById("form-schedule");

formSchedule.onsubmit = async function (e) {
  e.preventDefault();

  const id = document.getElementById('id-field').value;
  const tutor = document.getElementById('tutor-field').value;
  const pet = document.getElementById('pet-field').value;
  const phone = document.getElementById('phone-field').value;
  const service = document.getElementById('service-field').value;
  const date = dayjs(document.getElementById('date-field').value);
  const hour = document.getElementById('hour-field').value.split(":")[0];
  const minute = document.getElementById('hour-field').value.split(":")[1];
  const when = dayjs(date.format('YYYY-MM-DD')).hour(hour).minute(minute).format();
  
  const payload = { id, tutor, when, pet, phone, service }
  console.log(payload);

  if (id == 0) {
    await schedulePost(payload);
    schedulesDay();
  } else {
    await schedulePut(payload);
    schedulesDay();
  }

  closeModal();
}