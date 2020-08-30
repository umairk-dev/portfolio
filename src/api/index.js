import axios from 'axios'

//'http://206.189.148.177:4000/api'
const api = axios.create({
    baseURL :  'http://localhost:4000/api'
})


export const insertProject = payload => api.post(`project`, payload)
export const getAllProjects = () => api.get(`projects`)
export const updateProjectById = (id, payload) => api.put(`project/${id}`, payload)
export const deleteProjectById = id => api.delete(`project/${id}`)
export const getProjectById = id => api.get(`project/${id}`)

const apis = {
    insertProject,
    getAllProjects,
    updateProjectById,
    deleteProjectById,
    getProjectById
}

export default apis