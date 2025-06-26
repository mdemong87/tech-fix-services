

function getRouteSideId(req) {
    const queryurl = req.url;
    const url = queryurl.split('/');
    const finalUrl = url[url.length - 1];
    return finalUrl;

}

export default getRouteSideId;