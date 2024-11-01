import dayjs from "dayjs";
import { openModal, closeModal } from "../util/modal.js";
import { schedulesDay } from "./schedules/schedulesDay.js"


document.addEventListener("DOMContentLoaded", function () {
    // Carregar combobox de filtro de datas
    const today = dayjs(new Date()).format('YYYY-MM-DD');    

    const inputFilterDate = document.getElementById("day-list");
    inputFilterDate.value = today;
    inputFilterDate.min = today;

    const inputModalDate = document.getElementById("date-field");
    inputModalDate.min = today;

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