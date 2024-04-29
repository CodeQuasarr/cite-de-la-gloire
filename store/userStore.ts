export const useUserStore = defineStore('user', {
    state: () => ({
        user: {} as IUser,
    }),
    actions: {
        setUser(user: IUser) {
            this.user = user;
        }

    },
    getters: {
        fullName(state): string {
            return state.user.first_name + ' ' + state.user.last_name;
        },

        role(state): string {
            return state.user.role;
        }
    },
    persist: true,
});
