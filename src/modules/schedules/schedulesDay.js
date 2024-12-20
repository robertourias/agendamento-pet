import dayjs from "dayjs";
import { availableHours } from "../form/hour-load.js";
import { schedulesByDay } from "../../services/schedules.js";
import { deleteScheduleHandler } from "../schedules/delete.js";
import { editOpenModalScheduleHandler } from "../schedules/edit.js";
import { showScheduleUI } from "../schedules/show.js";

export async function schedulesDay() {
  // Captura a data e agendas
  const date = document.getElementById('day-list').value;
  const dailySchedules = await schedulesByDay({ date });
  dailySchedules.sort((a, b) => {
    return dayjs(a.when).format("HH") - dayjs(b.when).format("HH");
  });
  
  // Carregamento das agendas no HTML
  const scheduleHours = await showScheduleUI(dailySchedules); 
  
  // Adiciona método de edit e delete aos links
  await deleteScheduleHandler();
  await editOpenModalScheduleHandler();

  // Preenche novos horários disponíveis
  console.log("scheduleHours", scheduleHours);
  await availableHours(scheduleHours);

}

