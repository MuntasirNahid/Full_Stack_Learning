const authorize = (req, res, next) => {
    // console.log("authorize");
    // next();
    const { user } = req.query
    if (user == 'nahid') {
        req.user = { name: 'nahid', id: 3 }
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}
module.exports = authorize