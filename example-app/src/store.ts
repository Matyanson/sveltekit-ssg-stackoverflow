import { writable, Writable } from "svelte/store";


//https://stackoverflow.com/a/67609470/12518099
const wStorage = <T>(key: string, initValue: T): Writable<T> => {
    //should be possible without checking if code runs on client-side since code shoundn't be running on server. ssr: false globally.
    if (typeof window !== 'undefined'){
        const storedValueStr = localStorage.getItem(key);
        
        const storedValue: T | null = JSON.parse(storedValueStr);
    
        const value = writable(storedValue ?? initValue);
    
        value.subscribe((val) => {
            localStorage.setItem(key, JSON.stringify(val));
        })
    
        return value;
    }
}


export const username = wStorage<string>('username', '');