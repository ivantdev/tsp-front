import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
    const [ local, setItem ] = useState(initialValue);

    useEffect(() => {
        try {
            let parsedItem;
            const localStorageItem = window.localStorage.getItem(itemName);
            if( !localStorageItem ) {
                window.localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = [];
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
        } catch {}
    }, []);

    const saveItem = (newItem) => {
        try {
            const stringifyItem = JSON.stringify(newItem);
            window.localStorage.setItem(itemName, stringifyItem);
            setItem(newItem);
        } catch{
            console.error("localStorage Error");
        }
    };

    return({
        local,
        saveItem,
    })
};

export { useLocalStorage };