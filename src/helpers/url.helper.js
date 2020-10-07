export function getUrlAsObj(urlString) {
    const arrBaseParams = urlString.split('?');
    const params = arrBaseParams[1].split('&');
    let limit, offset;
    
    const firstParam = params[0].split('=');
    const secondParam = params[1].split('=');
    
    if (firstParam[0] === 'limit') {
        limit = firstParam[1];
        offset = secondParam[1];
    } else {
        limit = secondParam[1];
        offset = firstParam[1];
    }

    return {
        base: arrBaseParams[0],
        limit,
        offset
    }
}