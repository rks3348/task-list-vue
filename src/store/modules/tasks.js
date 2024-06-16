import  { uniqueId }  from './../../utilities/helper';
const defaultsTask =
    [
        {
            id: 1,
            title: "Task 1",
        },
        {
            id: 2,
            title: "Task 2",
        },
        {
            id: 3,
            title: "Task 3",
        },
        {
            id: 4,
            title: "Task 4",
        },
    ];
const state = () => ({
    all: JSON.parse(localStorage.getItem('tasks')) && JSON.parse(localStorage.getItem('tasks')).length > 0 ? JSON.parse(localStorage.getItem('tasks')) : defaultsTask,
});

const getters = {};

const actions = {};

const mutations = {
    createTask(state, payload) {
        const id = uniqueId(3);
        state.all.push({ id: id, title: payload.task });
        localStorage.setItem('tasks', JSON.stringify(state.all));
    },
    deleteTask(state, payload) {
        const tasks = state.all.filter((task) => task.id !== payload.id);
        state.all = tasks;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
