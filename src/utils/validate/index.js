const reg_plateNo = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/

const validLength = (label, value, min, max) => {
    const length = value.length

    if (min === max && min !== undefined) {
        return `${label}的长度是 ${min} 个字符`
    } else if (min !== undefined && length < min) {
        return `${label}的长度不小于 ${min} 个字符`
    } else if (max !== undefined && length > max) {
        return `${label}的长度不大于 ${max} 个字符`
    } else {
        return null
    }
}

const trim = (val, side = 'both') => {
    val = String(val)
    if (side === 'left' || side === -1 || side === 'l') {
        return val.replace(/^[\r\n\t \b]+/, '')
    } else if (side === 'right' || side === 1 || side === 'r') {
        return val.replace(/[\r\n\t \b]+$/, '')
    } else {
        return val.replace(/^[\r\n\t \b]+|[\r\n\t \b]+$/g, '')
    }
}
const triml = (val) => {
    return trim(val, 'left')
}
const trimr = (val) => {
    return trim(val, 'right')
}

export default {
    plateNo:{
        validator: (rule, value, callback) => {
            const label = label || '车牌号'
            const lenmsg = validLength(label, value, rule.min || 7, rule.max || 8)
            if (lenmsg) {
                return callback(new Error(lenmsg));
            } else if ((/a-z/).test(value)) {
                return callback(new Error("车牌号中的字母需要大写"));
            } else if (!reg_plateNo.test(value)) {
                return callback(new Error("请输入正确的车牌号"));
            }
            callback();
        },
    },
    plateNoMulti: {
        validator: (rule, value, callback) => {
            const val = String(value).replace(/[,；] ?/g, ';')
            if (val.length === '') {
                if (rule.required) {
                    return callback(new Error('车牌号不能为空'))
                }
                callback()
            }

            if (val.indexOf(';') === -1) {
                if (val.length > 8) {
                    return callback(new Error("车牌号格式不正确。多个车牌号请以分号(;)隔开"));
                }
                if (!reg_plateNo.test(val)) {
                    return callback(new Error("请输入正确的车牌号。号牌中的字母需要大写。"));
                }
            } else {
                const plist = val.split(';')
                let error = []
                plist.forEach(item => {
                    if (!reg_plateNo.test(item)) {
                        error.push(item)
                    }
                })
                if (error.length > 0) {
                    return callback(new Error("车牌号不正确: \n" + error.join('\n')));
                }

            }
            callback()
        },
    },
    vin: {
        validator: (rule, value, callback) => {
            if (!(/^[a-z0-9]+$/i).test(value)) {
                return callback(new Error("车架号只能是字母和数字组合"));
            }
            if (value.length !== 17) {
                return callback(new Error('车架号长度是17位'))
            }
            callback();
        },
        // message: "车架号是长度为17个字符的字母与数字组合",
        trigger: 'blur'
    },
    number: {
        validator: (rule, value, callback) => {
            const label = rule.label || '数值'
            const val = trim(value)
            const num = parseFloat(val)
            if (!(/^-?\d+(\.\d+)?$/).test(val)) {
                return callback(new Error(`${label} 必须是有效的数字`))
            }
            if (rule.greaterThan !== undefined && num <= rule.greaterThan) {
                return callback(new Error(`${label} 必须大于 ${rule.greaterThan}`))
            }
            if (rule.lessThan !== undefined && num >= rule.lessThan) {
                return callback(new Error(`${label} 必须小于 ${rule.lessThan}`))
            }
            callback()
        }
    },
    positiveNumber: {
        pattern: /^\+?\d+(\.\d+)?$/,
        message: "请输入正数"
    },
    negaviteNumber: {
        pattern: /^\-\d+(\.\d+)?$/,
        message: "请输入负数"
    },
    float: {
        pattern: /^[+-]?\d+(\.\d+)?$/,
        message: "请输入数字"
    },
    price: {
        // pattern: /^\+?\d+(\.\d{0,2})?$/,
        validator: (rule, value, callback) => {
            const label = rule.label || '价格'
            if (value === '') {
                return callback(new Error(`请输入${label}`))
            } else if (value === '0') {
                return callback(new Error(`${label}必须大于0`))
            } else if (!(/^\d+\.?\d{0,2}$/).test(value)) {
                return callback(new Error(`${label}必须是有效数值，保留2位小数`));
            } else if ((/^-\d+(\.\d{0,2})?$/).test(value)) {
                return callback(new Error(`${label}不能小于0`))
            }
            if (rule.max && value > rule.max) {
                return callback(new Error(`${label}不能超过 ${rule.max}`))
            }
            callback()
        }
    },
    discount: {
        pattern: /^[+-]?\d+$/,
        message: "请输入整数"
    },
    mobile: {
        pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
        message: '请输入中国大陆的手机号码'
    },
    username: {
        pattern: /^\w[\w\d]{5,32}$/,
        message: '用户名只能是英文和数字, 长度为6到32字符.'
    },
    realname: {
        validator: (rule, value, callback) => {
            const label = rule.label || '姓名'
            let message = `${label}只能包含中文或英文字符, 中文${label}不能使用空格`
            if (rule.required && value === '') {
                return callback(new Error(`${label}不能为空`))
            }
            if ((/^[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b！＠＃￥％＾＆×（）＿＋｜￣１２３４５６７８９０－＝＼｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ｛｝｝［］：＂；＇＜＞，．？／]+$/).test(value)) {
                if (value.length < 2 || value.length > 16) {
                    message = `中文${label}为2-16的字符`
                } else {
                    message = null
                }
            }
            if ((/^\w[\w ]+$/).test(value)) {
                if (value.length < 2 || value.length > 128) {
                    message = `英文${label}为2-64的字符`
                } else {
                    message = null
                }
            }

            if (message === null) {
                callback();
            } else {
                return callback(new Error(message));
            }
        },
        trigger: 'blur'
    },
    department: {
        pattern: /^[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b！＠＃￥％＾＆×（）＿＋｜￣１２３４５６７８９０－＝＼｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ｛｝｝［］：＂；＇＜＞，．？／\w\d ]{2,128}$/,
        message: '请输入部门名称。部门名称只能是中文、英文和数字'
    },
    address: {
        validator: (rule, value, callback) => {
            const label = rule.label || '地址'
            const min = rule.min || 5
            const max = rule.max || 32
            if (value.length < min) {
                return callback(new Error(`${label} 必须大于${min}个字符`));
            } else if (value.length > max) {
                return callback(new Error(`${label} 不能超过${max}个字符`));
            } else if (!/^[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b！＠＃￥％＾＆×（）＿＋｜￣１２３４５６７８９０－＝＼｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ｛｝｝［］：＂；＇＜＞，．？／\w\d# \-]+$/.test(value)) {
                return callback(new Error(`${label}只能包含中文,字母,连字符(-),井号(#),空格`));
            }
            callback();
        },
        trigger: 'blur'
    },
    vehicleModel: {
        validator: (rule, value, callback) => {
            const label = rule.label || '车型'
            const min = rule.min || 2
            const max = rule.max || 24
            if (value.length < min) {
                return callback(new Error(`${label} 必须大于 ${min} 个字符`));
            } else if (value.length > max) {
                return callback(new Error(`${label} 必须小于 ${max} 个字符`));
            } else if (!/^[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b！＠＃￥％＾＆×（）＿＋｜￣１２３４５６７８９０－＝＼｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ｛｝｝［］：＂；＇＜＞，．？／\w\d-]+$/.test(value)) {
                return callback(new Error(`${label}只能包含中文,字母,连字符(-)`));
            }
            callback();
        },
    },
    serialNumber: {
        pattern: /^[\w\d-]{6,32}$/,
        message: '请输序列号'
    },
    email: {
        pattern: /^([A-Za-z0-9_\-\.\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b！＠＃￥％＾＆×（）＿＋｜￣１２３４５６７８９０－＝＼｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ｛｝｝［］：＂；＇＜＞，．？／])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/,
        message: '请输入正确的电子邮箱地址'
    },
    speed: {
        trigger: 'blur',
        validator: (rule, value, callback) => {
            if (value.length === 0) {
                return callback(new Error("速度不能为空"));
            } else if (value === '0') {
                return callback(new Error("车速不能为0"));
            } else if (/[^\d]/.test(value)) {
                return callback(new Error("车速只能包含数字"));
            } else if (!(/^\d{1,3}$/).test(value)) {
                return callback(new Error("请输入合理的车速"));
            }
            callback();
        },
    },
    // 基础文本输入,
    // 中英文, 连字符号, 井呈
    baseText: {
        trigger: 'blur',
        validator: (rule, value, callback) => {
            const reg = /^[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b！＠＃￥％＾＆×（）＿＋｜￣１２３４５６７８９０－＝＼｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ｛｝｝［］：＂；＇＜＞，．？／\w\d-#]+$/
            if (!reg.test(value)) {
                return callback(new Error(`${rule.label || ''}只能包含中文,字母,连字符(-),井号(#)`))
            }
            const lenMatch = validLength(rule.label || '字段', value, rule.min, rule.max)
            if (lenMath) {
                return callback(new Error(lenMatch))
            } else {
                callback();
            }
        },
    },
    textWithSpace: {
        trigger: 'blur',
        validator: (rule, value, callback) => {
            const reg = /^[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b！＠＃￥％＾＆×（）＿＋｜￣１２３４５６７８９０－＝＼｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ｛｝｝［］：＂；＇＜＞，．？／\w\d-# ]+$/
            if (!reg.test(value)) {
                return callback(new Error(`${rule.label || ''}只能包含中文,字母,连字符(-),井号(#),空格`))
            }
            const lenMatch = validLength(rule.label || '字段', value, rule.min, rule.max)
            if (lenMath) {
                return callback(new Error(lenMatch))
            } else {
                callback();
            }
        },
    },
    paragraph: {
        trigger: 'blur',
        validator: (rule, value, callback) => {
            const reg = /^[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b！＠＃￥％＾＆×（）＿＋｜￣１２３４５６７８９０－＝＼｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ｛｝｝［］：＂；＇＜＞，．？／\w\d-# ,.!()\+=_;:'"<>\?@#$%^&*|\\\/]+$/
            if (!reg.test(value)) {
                return callback(new Error(`${rule.label || ''}只能包含中文,字母,连字符(-),井号(#),空格`))
            }
            const lenMatch = validLength(rule.label || '字段', value, rule.min, rule.max || 128)
            if (lenMath) {
                return callback(new Error(lenMatch))
            } else {
                callback();
            }
        },
    },
    //
    cnCharsOnly: {
        trigger: 'blur',
        validator: (rule, value, callback) => {
            const reg = /^[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b！＠＃￥％＾＆×（）＿＋｜￣１２３４５６７８９０－＝＼｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ｛｝｝［］：＂；＇＜＞，．？／]+$/
            if (!reg.test(value)) {
                return callback(new Error(`${rule.label || ''}只能包含中文字符`))
            }
            const lenMatch = validLength(rule.label || '字段', value, rule.min, rule.max)
            if (lenMath) {
                return callback(new Error(lenMatch))
            } else {
                callback();
            }
        },
    },
    enCharsOnly: {
        trigger: 'blur',
        validator: (rule, value, callback) => {
            const reg = /^[a-z]+$/i
            if (!reg.test(value)) {
                return callback(new Error(`${rule.label || ''}只能包含英文字符`))
            }
            const lenMatch = validLength(rule.label || '字段', value, rule.min, rule.max)
            if (lenMath) {
                return callback(new Error(lenMatch))
            } else {
                callback();
            }
        },
    },
    cnEnChars: {
        trigger: 'blur',
        validator: (rule, value, callback) => {
            const reg = /^[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b！＠＃￥％＾＆×（）＿＋｜￣１２３４５６７８９０－＝＼｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ｛｝｝［］：＂；＇＜＞，．？／a-z]+$/i
            if (!reg.test(value)) {
                return callback(new Error(`${rule.label || ''}只能包含中文,字母`))
            }
            const lenMatch = validLength(rule.label || '字段', value, rule.min, rule.max)
            if (lenMath) {
                return callback(new Error(lenMatch))
            } else {
                callback();
            }
        },
    }
}
