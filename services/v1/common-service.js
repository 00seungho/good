const pool = require('../../database/connectionPool');
const CommonQuery = require('../../queries/v1/common-query');
const dayjs = require("dayjs");
const { options } = require('../../routes');

exports.Ser_getBusMap = async (options) => {
    try {
        
        // db query 파트
        // let data = await pool.queryParam(CommonQuery.getBusMap, [option]);
        
        return data?.[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}