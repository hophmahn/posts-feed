import { getUsers } from "@/services/UserService";

const usersModule = {
  state: { users: [] },
  mutations: {
    setUsers(state, payload) {
      state.users = [...payload];
    }
  },
  getters: {
    users(state) {
      return state.users;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const users = await getUsers();
      commit("setUsers", users);
    }
  }
};

export default usersModule;
