import dayjs from "dayjs";
import { schedulesByDay } from "../../services/schedules.js";

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
    console.log(schedule.name, schedule.when);
    console.log(dayjs(schedule.when).hour());

    const lineElem = document.createElement('div').setAttribute('class', 'line');
    const hourElem = document.createElement('div').setAttribute('class', 'col-hour');
    const whoElem = document.createElement('div').setAttribute('class', 'col-who');
    const serviceElem = document.createElement('div').setAttribute('class', 'col-service');
    const controlElem = document.createElement('div').setAttribute('class', 'col-control');
  });

  

    
  
}

