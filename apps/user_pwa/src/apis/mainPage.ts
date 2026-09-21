import { certificatedApi } from "./baseApi";

function getTodayDateString() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

export const getUserInfo = async () => {
    const response = await certificatedApi.get("/users/info");

    return response.data;
};

export const getTodayResult = async () => {
    const params = new URLSearchParams();
    params.append("date", getTodayDateString());

    const response = await certificatedApi.get(`/users/search?${params}`);

    return response.data;
};