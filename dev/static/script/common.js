// window.BASEURL = 'http://wwwdev.ohmycar.com/privateapi';
window.BASEURL = 'http://www.ohmycar.cn';

window.COMMON = {
    init: function() {

    },
    prodList: [
        {
            'id': 1,
            'name': '悬挂式智能后视镜',
            'price': 1999,
            'thumb': './static/images/product_EH330_01.png',
            'url': './EH330.html'
        },
        {
            'id': 2,
            'name': '通用型智能后视镜',
            'price': 1999,
            'thumb': './static/images/product_M6P_01.png',
            'url': './M6P.html'
        },
        {
            'id': 3,
            'name': '流媒体智能后视镜',
            'price': 1999,
            'thumb': './static/images/product_V92.png',
            'url': './V92.html'
        },
        {
            'id': 4,
            'name': '便捷式智能后视镜',
            'price': 1999,
            'thumb': './static/images/product_YJ801.png',
            'url': './YJ801.html'
        }
    ],
    validate: {
        checkNull: function(value) {
            if (value == '' || value == undefined || value == null) {
                return false;
            } else {
                return true;
            }
        },

        checkMobile: function(mobile) {
            var re = /^((13[0-9])|(14[57])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
            if (re.test(mobile)) {
                return true;
            } else {
                return false;
            }
        },
        checkPass: function(password) {
            var pass = /^.{6,16}$/;
            if (pass.test(password)) {
                return true;
            } else {
                return false;
            }
        }
    },
    getQueryString: function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
};

COMMON.init();
