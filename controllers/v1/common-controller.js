const CommonService = require('../../services/v1/common-service');
const RegisterService = require('../../services/v1/register-service');
const axios = require('axios');

exports.Con_getBusMap = async (req, res, next) => {
    try {
        // const {  } = req.query;

        // let result = await CommonService.Ser_getBusMap;

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://openapi.seoul.go.kr:8088/74776a5341746d6439394a57735854/json/subwayStationMaster/1/999/',
            headers: { }
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            
            return res.status(200).json({
                code: 200000, // 응답코드 200 지금은 200이 하나지만 200요청이 여러개일땐 200100, 200101등 자신만의 코드로 분류해야함
                msg: '정상적으로 출력됬습니다', // 받을 메시지
                data: response.data // 실제로 받는 데이터
            })
        })
        .catch((error) => {
            console.log(error);
        });

        // return res.status(200).json({
        //     test: 'hello'
        // })
    } catch (err) {
        console.log('err', err)
        return res.status(500).json(err)
    }
}