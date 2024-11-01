import { scheduleDelete } from "../../services/schedules";

export function deleteScheduleHandler() {
  const buttonDelete = document.querySelectorAll('a[data-id]');
  
  buttonDelete.forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const scheduleId = button.dataset.id;
      console.log(scheduleId);
      try {
        if(scheduleId) {
          const isConfirm = confirm('Tem certeza que deseja excluir a agenda?');

          if(isConfirm) {
            await scheduleDelete({id: scheduleId});
            const lineElem = button.closest('.line');
            lineElem.remove();
          }
        }
      } catch (e) {
        alert('Erro ao excluir a agenda');
        return;
      }
    });
  });
}
