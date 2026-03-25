/*滚动至顶部*/
$(function() {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $("#back-to-top").fadeIn(500);
            } else {
                $("#back-to-top").fadeOut(500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置

        $("#back-to-top").click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1000);
            return false;
        });
    });
});

// document.onreadystatechange = completeLoading; //检测页面加载是否完毕

// function completeLoading() {
//     if (document.readyState == "complete") {
//         $("#loading").fadeOut(500);
//     }
// }

$(document).ready(function() {
    $("#draw-前言").click(function() {
        $('html, body').animate({
            scrollTop: $("#前言").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-正版获取及下载").click(function() {
        $('html, body').animate({
            scrollTop: $("#正版获取及下载").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-安装整合包").click(function() {
        $('html, body').animate({
            scrollTop: $("#安装整合包").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-安装Mod").click(function() {
        $('html, body').animate({
            scrollTop: $("#安装Mod").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-安装光影与材质").click(function() {
        $('html, body').animate({
            scrollTop: $("#安装光影与材质").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-多人联机").click(function() {
        $('html, body').animate({
            scrollTop: $("#多人联机").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-启动器下载区").click(function() {
        $('html, body').animate({
            scrollTop: $("#启动器下载区").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-Mod下载区").click(function() {
        $('html, body').animate({
            scrollTop: $("#Mod下载区").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-光影下载区").click(function() {
        $('html, body').animate({
            scrollTop: $("#光影下载区").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-材质包下载区").click(function() {
        $('html, body').animate({
            scrollTop: $("#材质包下载区").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-整合包下载区").click(function() {
        $('html, body').animate({
            scrollTop: $("#整合包下载区").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-联机下载区").click(function() {
        $('html, body').animate({
            scrollTop: $("#联机下载区").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-关于MC正版的那些事").click(function() {
        $('html, body').animate({
            scrollTop: $("#关于MC正版的那些事").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-Mod冲突解决方法").click(function() {
        $('html, body').animate({
            scrollTop: $("#Mod冲突解决方法").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-光影与材质基础概念").click(function() {
        $('html, body').animate({
            scrollTop: $("#光影与材质基础概念").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-联机与开服的细节").click(function() {
        $('html, body').animate({
            scrollTop: $("#联机与开服的细节").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#draw-评论区").click(function() {
        $('html, body').animate({
            scrollTop: $("#评论区").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    var imgsObj = $('.amplifyImg img'); //需要放大的图像
    if (imgsObj) {
        $.each(imgsObj, function() {
            $(this).click(function() {
                var currImg = $(this);
                coverLayer(1);
                var tempContainer = $('<div class=tempContainer></div>'); //图片容器
                with(tempContainer) { //width方法等同于$(this)
                    appendTo("body");
                    var windowWidth = $(window).width();
                    var windowHeight = $(window).height();
                    //获取图片原始宽度、高度
                    var orignImg = new Image();
                    orignImg.src = currImg.attr("src");
                    var currImgWidth = orignImg.width;
                    var currImgHeight = orignImg.height;
                    if (currImgWidth < windowWidth) { //为了让图片不失真，当图片宽度较小的时候，保留原图
                        if (currImgHeight < windowHeight) {
                            var topHeight = (windowHeight - currImgHeight) / 2;
                            if (topHeight > 35) { /*此处为了使图片高度上居中显示在整个手机屏幕中：因为在android,ios的微信中会有一个title导航，35为title导航的高度*/
                                topHeight = topHeight - 35;
                                css('top', topHeight);
                            } else {
                                css('top', 0);
                            }
                            html('<img border=0 src=' + currImg.attr('src') + '>');
                        } else {
                            css('top', 0);
                            html('<img border=0 src=' + currImg.attr('src') + ' height=' + windowHeight + '>');
                        }
                    } else {
                        var currImgChangeHeight = (currImgHeight * windowWidth) / currImgWidth;
                        if (currImgChangeHeight < windowHeight) {
                            var topHeight = (windowHeight - currImgChangeHeight) / 2;
                            if (topHeight > 35) {
                                topHeight = topHeight - 35;
                                css('top', topHeight);
                            } else {
                                css('top', 0);
                            }
                            html('<img border=0 src=' + currImg.attr('src') + ' width=' + windowWidth + ';>');
                        } else {
                            css('top', 0);
                            html('<img border=0 src=' + currImg.attr('src') + ' width=' + windowWidth + '; height=' + windowHeight + '>');
                        }
                    }
                }
                tempContainer.click(function() {
                    $(this).remove();
                    coverLayer(0);
                });
            });
        });
    } else {
        return false;
    }
    //使用禁用蒙层效果
    function coverLayer(tag) {
        with($('.over')) {
            if (tag == 1) {
                css('height', $(document).height());
                css('display', 'block');
                css('opacity', 1);
                css("background-color", "#FFFFFF");
                css("background-color", "rgba(0,0,0,0.7)"); //蒙层透明度
            } else {
                css('display', 'none');
            }
        }
    }
});