import { certificatedApi, api, deleteAuthTokens } from "./baseApi";
import { create } from "zustand";

interface AuthStore {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()((set) => ({
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