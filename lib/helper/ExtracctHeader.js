
function ExtractHeader(req) {
    // Extract headers from the request
    const authHeader = req.headers.get('authorization') || '';
    const sessionToken = authHeader.replace('Bearer ', '');
    return sessionToken;
}

export default ExtractHeader;