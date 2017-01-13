const getIdFromUrl = () => {
    const url = window.location.href.split('/');
    return url[url.length - 1] !== 'main' ? url[url.length - 1] : 'uncategorised';
}

export default getIdFromUrl;


