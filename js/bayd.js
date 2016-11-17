/**
 * Created by Administrator on 2016/8/12 0012.
 */
$(function(){
    //判断浏览器是否支持placeholder属性
    supportPlaceholder='placeholder'in document.createElement('input');

    placeholder=function(input){

        var text = input.attr('placeholder'),
            defaultValue = input.defaultValue;

        if(!defaultValue){

            input.val(text).addClass("bbs");
        }

        input.focus(function(){

            if(input.val() == text){

                $(this).val("");
            }
        });


        input.blur(function(){

            if(input.val() == ""){

                $(this).val(text).addClass("bbs");
            }
        });

        //输入的字符不为灰色
        input.keydown(function(){

            $(this).removeClass("bbs");
        });
    };

    //当浏览器不支持placeholder属性时，调用placeholder函数
    if(!supportPlaceholder){

        $('input').each(function(){

            text = $(this).attr("placeholder");

            if($(this).attr("type") == "text"){

                placeholder($(this));
            };

            if($(this).attr("type") == "password"){

                placeholder($(this));
            }
        });
    }

});
