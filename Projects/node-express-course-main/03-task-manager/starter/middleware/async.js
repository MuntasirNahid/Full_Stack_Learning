const asyncWrapper = (fn) => { // fn -function
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = asyncWrapper