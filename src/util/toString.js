export default function toString(obj) {
    let result = JSON.stringify(obj, function(key, val) {
        if (typeof val === 'function') {
            return `~--demo--~${val}~--demo--~`;
        }
        return val;
    });
    do {
        //最后一个replace将release模式中莫名生成的 \" 转换成 "
        result = result.replace('\"~--demo--~', '').replace('~--demo--~\"', '').replace(/\\n/g, '').replace(/\\\"/g,"\"");
    } while (result.indexOf('~--demo--~') > -1);
    // 添加此行把unicode转为中文，目前最省心的方法，其他方法稍麻烦
    result = unescape(result.replace(/\\u/g, "%u"));
    return result;
}