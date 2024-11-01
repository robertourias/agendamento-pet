import dayjs from "dayjs";
import { schedulesDay } from "./schedules/schedulesDay.js"


document.addEventListener("DOMContentLoaded", function () {
    // Carregar combobox de filtro de datas
    const inputFilterDate = document.getElementById("day-list");
    const today = dayjs(new Date()).format('YYYY-MM-DD');    
    inputFilterDate.value = today;
    inputFilterDate.min = today;

    // Carregar agendas do dia com os agendamentos 
    schedulesDay();
})