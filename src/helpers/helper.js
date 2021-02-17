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
