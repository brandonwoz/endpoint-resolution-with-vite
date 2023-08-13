export const fetchUser = async () => {
    const url = import.meta.env.VITE_API_URL;
    const res = await fetch(url);
    const data = await res.json();
    return data;
};
