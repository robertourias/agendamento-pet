import dayjs from "dayjs";
import { schedulesByDay } from "../../services/schedules.js";
import { deleteScheduleHandler } from "../schedules/delete.js";
import { editOpenModalScheduleHandler } from "../schedules/edit.js";

export async function schedulesDay() {
  // Captura a data
  const date = document.getElementById('day-list').value;
  const dailySchedules = await schedulesByDay({ date });
  
  // Obtem campos e Limpa os horários
  const morningElem = document.getElementById('morning');
  const afternoonElem = document.getElementById('afternoon');
  const eveningElem = document.getElementById('evening');

  morningElem.innerHTML = '';
  afternoonElem.innerHTML = '';
  eveningElem.innerHTML = '';

  // Preencher listagem
  dailySchedules.forEach((schedule) => {   
    try {
      const hour = dayjs(schedule.when).format("HH:mm");

      const lineElem = document.createElement("div");
      const hourElem = document.createElement("div");
      const tutorElem = document.createElement("small");
      const whoElem = document.createElement("div");
      const serviceElem = document.createElement("div");
      const controlElem = document.createElement("div");
      const linkDelete = document.createElement("a");
      const linkEdit = document.createElement("a");
      
      lineElem.classList.add("line");
      hourElem.classList.add("col-hour");    
      whoElem.classList.add("col-who");
      serviceElem.classList.add("col-service");
      controlElem.classList.add("col-control");
      linkDelete.setAttribute("href", "#")
      linkDelete.setAttribute("data-id", schedule.id);      
      linkDelete.classList.add('btn-trash');
      linkEdit.setAttribute("href", "#")
      linkEdit.setAttribute("data-id", schedule.id);      
      linkEdit.classList.add('btn-edit');
      
      hourElem.textContent = hour;
      tutorElem.textContent = schedule.tutor;
      whoElem.textContent = schedule.pet + " / ";
      serviceElem.textContent = schedule.service;
      
      // Adicionando tags na div linha
      lineElem.appendChild(hourElem);
      lineElem.appendChild(whoElem);
      lineElem.appendChild(serviceElem);
      lineElem.appendChild(controlElem);
      whoElem.appendChild(tutorElem);
      controlElem.append(linkEdit, linkDelete);

      const hourParsed = parseInt(hour.substring(0,2));

      if (hourParsed <= 12) {
        morningElem.appendChild(lineElem);
      } else if (hourParsed > 12 && hourParsed <= 18) {
        afternoonElem.appendChild(lineElem);      
      } else {
        eveningElem.appendChild(lineElem);
      }
    } catch (err) {
      console.log(err);
    }
  }); 
  
  // Adiciona método de edit e delete aos links
  deleteScheduleHandler();
  editOpenModalScheduleHandler();
}

