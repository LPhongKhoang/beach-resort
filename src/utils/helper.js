export const getUniqueValues = (items, prop) => {
    return [...new Set(items.map(item => item[prop]))];
};

export const getMaxValue = (items, prop) => {
    return Math.max(...items.map(item => item[prop]));
};

export const getMinValue = (items, prop) => {
    return Math.min(...items.map(item => item[prop]));
};
