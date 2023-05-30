const { url } = require('inspector');
const CommonService = require('../../services/v1/common-service');
const RegisterService = require('../../services/v1/register-service');
const axios = require('axios');


exports.Con_get_bus = async (req, res, next) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");
        const { stid, serverkey } = req.query;
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://ws.bus.go.kr/api/rest/arrive/getLowArrInfoByStId?serviceKey=${serverkey}stld&${stid}`,
          headers: {}
        };
        
        axios.request(config)
        .then((response) => {
            return res.status(200).xml(
                response.data
        )
        })
        .catch((error) => {
          console.log(error);
        });
        

    } catch (err) {
        console.log('err', err)
        return res.status(500).json(err)
    }
}

exports.Con_sub_master = async (req, res, next) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");

        const { startIndex, endIndex } = req.query;

        var url = `http://openapi.seoul.go.kr:8088/74776a5341746d6439394a57735854/json/SeoulMetroFaciInfo/${startIndex}/${endIndex}/`
        
        const axios = require('axios');
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: url,
          headers: {}
        };
        
        axios.request(config)
        .then((response) => {
            console.log('resData', response.data);
            return res.status(200).json(
            response.data
            )
          })
        .catch((error) => {
          console.log(error);
        });
        

    } catch (err) {
        console.log('err', err)
        return res.status(500).json(err)
    }
}

exports. Con_get_sub_ev = async (req, res, next) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");


        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://openapi.seoul.go.kr:8088/74776a5341746d6439394a57735854/json/subwayStationMaster/1/999/',
          headers: {}
        };
        
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
            return res.status(200).json(
               response.data
        )
        })
        .catch((error) => {
          console.log(error);
        });
        

    } catch (err) {
        console.log('err', err)
        return res.status(500).json(err)
    }
}
