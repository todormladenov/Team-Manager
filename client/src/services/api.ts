import { getAccessToken } from "../utils/sesionTokenUtil";

async function apiRequester<T>(method: string, url: string, data?: any): Promise<T> {
    let options: RequestInit = {
        method,
        headers: {}
    }

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers = {
            ...options.headers,
            ['X-Authorization']: accessToken,
        }
    }

    if (data !== undefined) {
        options.headers = {
            ...options.headers,
            ['Content-type']: 'application/json',
        }
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.json();
    } catch (error: any) {
        throw new Error(error);
    }

}

export const get = <T>(url: string): Promise<T> => apiRequester('GET', url);
export const post = <T>(url: string, data: any): Promise<T> => apiRequester('POST', url, data);
export const put = <T>(url: string, data: any): Promise<T> => apiRequester('PUT', url, data);
export const deleteReq = <T>(url: string): Promise<T> => apiRequester('DELETE', url);