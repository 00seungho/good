const dayjs = require('dayjs');


/**
 * test 함수
 * @param {number} id - 아이디
 * @param {string} name - 이름
 * @return {string} 아이디+이름
 */
const test = (id, name) => {
    return `${id}${name}`;
}

module.exports = {
    test
}

