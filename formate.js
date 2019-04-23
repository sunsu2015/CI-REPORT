var formate = {
    amount: function(val) {
        if (typeof val !== 'undefined' && val !== null && val !== '') {
            if (Number.isNaN(Number(val))) {
                return val;
            }
            const str = Number(val).toFixed(2);
            const intSum = str.substring(0, str.indexOf('.')).replace(/\B(?=(?:\d{3})+$)/g, ','); // 取到整数部分
            const dot = str.substring(str.length, str.indexOf('.')) // 取到小数部分搜索
            const ret = intSum + dot;
            return ret;
        } else {
            return '';
        }
    }
}