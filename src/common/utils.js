const getIdFromUrl = () => {
    const url = window.location.href.split('/');
    return url[url.length - 1];
}

export default getIdFromUrl;


