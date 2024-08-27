async function apiRequester<T>(method: string, url: string, data?: any): Promise<T> {
    let options: RequestInit = {
        method,
    }

    if (data !== undefined) {
        options.headers = {
            ['Content-type']: 'application/json'
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