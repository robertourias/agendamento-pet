import dayjs from "dayjs";
import { openModal, closeModal } from "../util/modal.js";
import { schedulesDay } from "./schedules/schedulesDay.js"


document.addEventListener("DOMContentLoaded", function () {
    // Carregar combobox de filtro de datas
    const inputFilterDate = document.getElementById("day-list");
    const today = dayjs(new Date()).format('YYYY-MM-DD');    
    inputFilterDate.value = today;
    inputFilterDate.min = today;

    const btnAddSchedule = document.getElementById('btn-modal');
    btnAddSchedule.addEventListener('click', function() {
        openModal();
    });

    const btnCloseModal = document.getElementById('btn-close-modal');
    btnCloseModal.addEventListener('click', function() {
        closeModal();
    });

    // Carregar agendas do dia com os agendamentos 
    schedulesDay();
})