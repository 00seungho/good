const express = require('express');
const router = express.Router();
var os = require('os');
router.get('/', (req, res) => {
    res.send('Api Test OK!');
});


router.get('/testip', (req, res) => {
    console.log(getServerIp());
    res.send('route test!! Test OK!'+getServerIp());
});


function getServerIp() {
    var ifaces = os.networkInterfaces();
    var result = '';
    for (var dev in ifaces) {
        var alias = 0;
        ifaces[dev].forEach(function(details) {
            if (details.family == 'IPv4' && details.internal === false) {
                result = details.address;
                ++alias;
            }
        });
    }

    return result;

}


module.exports = router;