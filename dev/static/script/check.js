$(function() {
    var CHECK = {
        init: function() {
            CHECK.isLogin();
        },
        isLogin: function() {
            $.ajax({
                url: BASEURL + '/isLogin',
                dataType: "json",
                type: "post",
                data: {
                    
                },
                success:function(data) {
                    var navUL = $('.header .nav ul');

                    if(data.code == 10003) {
                        if(requireLogin) {
                            window.location.href = './login.html?redirecturl=' + window.location.href;
                        } else {
                            navUL.prepend('<li><a href="./login.html">登录 / 注册</a></li>');
                        }
                    } else if(data.code == 0) {
                        var str = '';

                        str += '<li>';
                        str += '<a href="javascript:void(0);" class="subnav">'+ localStorage.getItem('mobile') +'</a>';
                        str += '<ol>';
                        str += '<li><a href="./order.html">我的订单</a></li>';
                        str += '<li><a href="javascript:void(0);" class="btn-logout">退出</a></li>';
                        str += '</ol>';
                        str += '</li>';

                        navUL.prepend(str);

                        // CHECK.subnavBind();
                        CHECK.logoutBind();
                    } else {
                        CHECK.isLogin();
                    }
                },
                error: function() {
                    CHECK.isLogin();
                }
            });
        },
        subnavBind: function() {
            var subnav = $('.header .subnav');

            subnav.on('click', function() {
                $(this).parent().find('ol').slideToggle(300);
            });
        },
        logoutBind: function() {
            $('.btn-logout').on('click', function() {
                $.ajax({
                    url: BASEURL + '/logout',
                    dataType: "json",
                    type: "post",
                    data: {
                        
                    },
                    success:function(data) {
                        if(data.code == 0) {
                            alert('退出登录成功');
                            window.location.href = './index.html';
                        } else {
                            alert('退出登录失败，请重试');
                        }
                    },
                    error: function() {
                        alert('退出登录失败，请重试');
                    }
                });
            });
        }
    };

    CHECK.init();
});