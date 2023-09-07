import axios from "axios";

const BASE_URL = 'http://127.0.0.1:5000/psomain';

export const postData = async (params) => {
    // Convertir los parámetros a formato x-www-form-urlencoded
    const formData = new URLSearchParams(params).toString();

    try {
        const response = await axios.post(BASE_URL, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Ocurrio un error", error);
        throw error;
    }
};
