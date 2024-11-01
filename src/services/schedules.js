import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function schedulesByDay({ date }) {
  try {
    const result = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await result.json();
    const dailySchedules = data.filter(schedule => dayjs(date).isSame(schedule.when, "day"));

    return dailySchedules;
  } catch (e) {
    alert('Erro para carregar as agendas');
    return null;
  }
}

export async function schedulesByID({ id }) {
  console.log("ID da agenda", id)
  try {
    const result = await fetch(`${apiConfig.baseURL}/schedules/${id}`);
    const data = await result.json();
    return data;
  } catch (e) {
    alert('Erro para carregar a agenda');
    return null;
  }
}

export async function schedulePost({ tutor, when, pet, service, phone }) {
  try {
    const id = dayjs(new Date()).format();
    const result = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, tutor, when, pet, service, phone }),
    });
    
    console.log("result", result);
    
  } catch (e) {
    console.log(e)
    alert('Erro para cadastrar nova agenda');    
  }
}

export async function schedulePut({ id, tutor, when, pet, service, phone }) {
  try {    
    console.log({ id, tutor, when, pet, service, phone });
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tutor, when, pet, service, phone }),
    });
    
  } catch (e) {
    console.log(e)
    alert('Erro para alterar agenda');    
  }
}

export async function scheduleDelete({ id }) {
  try {    
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE"
    });
    
  } catch (e) {
    console.log(e)
    alert('Erro para alterar agenda');    
  }
}


