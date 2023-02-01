const { CustomAPIError } = require('../errors/custom-error')

const errorHandlerMidlleware = (err, req, res, next) => {
    //  console.log(err);
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })

    }
    return res.status(500).json({ msg: `Something went wrong.Try Again .` })
    //  return res.status(err.status).json({ msg: err.message })

}
module.exports = errorHandlerMidlleware