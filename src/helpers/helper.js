export function sortPosts(sortBy, data, defaultData) {
    const sortData = [...data];
    const sortDefaultData = [...defaultData];
    let sortedData = [];
    switch (sortBy) {
        case 'dateAsc':
            sortedData = [...sortData.sort((a, b) => a["dateCreated"] > b["dateCreated"] ? 1 : -1)];
            break;
        case 'dateDesc':
            sortedData = [...sortData.sort((a, b) => a["dateCreated"] < b["dateCreated"] ? 1 : -1)];
            break;
        case 'alphaAsc':
            sortedData = [...sortData.sort((a, b) => a["title"] > b["title"] ? 1 : -1)];
            break;
        case 'alphaDesc':
            sortedData = [...sortData.sort((a, b) => a["title"] < b["title"] ? 1 : -1)];
            break;
        default:
            sortedData = [...sortDefaultData];
            break;
    }
    return sortedData;
}

export function getFilteredPosts(key = 'id', value, defaultData) {
    return [...defaultData].filter(item => item[key] === value);
}

export function toggleActive(element) {
    element.classList.toggle('active');
}

export function toggleDarkMode(e) {
    const element = e.currentTarget;
    const { body } = document;
    toggleActive(element);
    body.classList.toggle('dark-theme');
}

export function randomPosts(arr = [], size = 0) {
    if (arr.length < 1) { return; }
    let new_ar = [...arr];
    new_ar.splice(Math.floor(Math.random()*arr.length),1);
    return arr.length <= (size+1) ? new_ar : randomPosts(new_ar, size);
}

export function randomItem(arr = [], size = 0) {
    if (arr.length < 1) { return; }
    let new_ar = [...arr];
    new_ar.splice(Math.floor(Math.random()*arr.length),1);
    return arr.length <= (size+1) ? new_ar : randomPosts(new_ar, size);
}
