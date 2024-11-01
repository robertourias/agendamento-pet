import dayjs from "dayjs";
import { schedulesByDay } from "../../services/schedules.js";
import { availableHours } from "./hour-load.js";

const dateSelected = document.getElementById("date-field");

dateSelected.addEventListener('input', async (event) => {  
  const date = dayjs(event.target.value).format()
  const dailySchedules = await schedulesByDay({ date });  
  const scheduleHours = dailySchedules.map((schedule) => {
    return dayjs(schedule.when).format('HH:mm');
  });

  console.log("scheduleHours", scheduleHours)

  await availableHours(scheduleHours);
  
});
