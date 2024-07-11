import { CustomError } from "../utils";

const fetcher = async <T>(url: string, onSuccessFetch: (data: T) => void = () => {}): Promise<T> => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new CustomError(response.statusText, response.status);
    }

    const data = await response.json();
    onSuccessFetch(data)

    return data
};

export { fetcher }