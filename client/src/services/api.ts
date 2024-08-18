async function apiRequester<T>(method: string, url: string, data?: T): Promise<T> {
    let options: RequestInit = {
        method,
        headers: {},
    }

    if (data !== undefined) {
        options.headers ? ['Content-type'] : 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error);
        }

        return response.json();
    } catch (error: any) {
        throw new Error(error);
    }

}

export const get = <T>(url: string): Promise<T> => apiRequester('GET', url);
export const post = <T>(url: string): Promise<T> => apiRequester('POST', url);
export const put = <T>(url: string): Promise<T> => apiRequester('PUT', url);
export const deleteReq = <T>(url: string): Promise<T> => apiRequester('DELETE', url);