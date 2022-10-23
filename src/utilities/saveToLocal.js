
const saveToLocal = (key, value, saveItem, local) => {
    const newItem = {
        ...local,
        [key]: value
    }
    saveItem(newItem);
};

export { saveToLocal };