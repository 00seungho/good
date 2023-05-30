const CommonService = require('../../services/v1/common-service');
const RegisterService = require('../../services/v1/register-service');

exports.Con_getBusMap = async (req, res, next) => {
    try {
        // const {  } = req.query;

        // let result = await CommonService.Ser_getBusMap();

        return res.status(200).json({
            test: 'hello'
        })
    } catch (err) {
        console.log('err', err)
        return res.status(500).json(err)
    }
}