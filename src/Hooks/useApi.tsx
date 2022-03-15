import axios from "axios";

const api = axios.create({
    baseURL: 'https://chronos.compraqui.app/api'
});

export const useApi = ()=>({
    getTasks: async () => {
        const response = await api.get('/tasks');
        return response.data;
    },
    newTask: async (title: string, description: string) => {
        const response = await api.post('/tasks', {title, description});
    },
    removeTask: async (id: string) => {
        const response = await api.delete(`/tasks/${id}`)
    },
    updateTask: async (id: string, title: string, description: string, situation: string) =>{
        const response = await api.put('/tasks', {guid: id, title, description, situation});
    },
    getTaskById: async (id: string) => {
        const response = await api.get(`/tasks/${id}`);
        return response.data;
    },
    updateStatus: async (id: string) => {
        const response = await api.patch(`/tasks/${id}`);
    }
})