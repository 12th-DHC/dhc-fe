import { certificatedApi, api, deleteAuthTokens } from "./baseApi";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
    isLoggedIn: !!localStorage.getItem("accessToken"),

    login: () => set({ isLoggedIn: true }),

    logout: async () => {
        try {
            await certificatedApi.post("/users/logout");
        } finally {
            deleteAuthTokens();
            set({ isLoggedIn: false });
        }
    },
}));

export const userLogin = async (roomNumber: number, roomPassword: string) => {
    const response = await api.post("/auth/users/login", {
        roomNumber,
        roomPassword,
    });

    return response.data;
};