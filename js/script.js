//提交到数据库（leancloud）
AV.init({
    appId: "SdXtqoa4Yd4znA5MwlFQYyXG-gzGzoHsz",
    appKey: "wwggQgtDEa9EG49u9dtcV5WR",
    serverURL: "https://sdxtqoa4.lc-cn-n1-shared.com"
});
//报名表
document.querySelector("#btn").addEventListener("click", btn);

function btn() {
    // 声明 class
    const Todo = AV.Object.extend('Todo');

    // 构建对象
    const todo = new Todo();

    // 为属性赋值
    todo.set('name', document.getElementById("i_name").value);
    todo.set('age', document.getElementById("i_age").value);
    todo.set('number', document.getElementById("i_Num").value);
    todo.set('VX', document.getElementById("i_VX").value);
    todo.set('email', document.getElementById("i_email").value);
    todo.set('origin', document.getElementById("i_JG").value);
    todo.set('Address', document.getElementById("i_ZZ").value);
    todo.set('idNumber', document.getElementById("i_ID").value);
    todo.set('Parent', document.getElementById("i_JZ_Name").value);
    todo.set('ParentNumber', document.getElementById("i_JZ_Number").value);

    //性别（男女）
    let value = "";
    var item = null;
    var obj = document.getElementsByName("1")
    for (var i = 0; i < obj.length; i++) { //遍历Radio
        if (obj[i].checked) {
            item = i;
        }
    }
    if (item == 0) {
        value = "男"
    } else {
        value = "女"
    }
    // }
    todo.set('Gender', value);

    //留言
    var text = document.getElementById('i_liuYan').innerHTML;
    var text = $("#i_liuYan").val();
    todo.set('Message', text);

    //问题
    var question = document.getElementById('i_question').innerHTML;
    var question = $("#i_question").val();
    todo.set('question', question);

    //问题1
    var question_1 = document.getElementById('i_question_1').innerHTML;
    var question_1 = $("#i_question_1").val();
    todo.set('question1', question_1);

    //问题2
    var question_2 = document.getElementById('i_question_2').innerHTML;
    var question_2 = $("#i_question_2").val();
    todo.set('question2', question_2);

    //面试方式
    let value_mode = "";
    var item_mode = null;
    var obj_mode = document.getElementsByName("mode")
    for (var j = 0; j < obj_mode.length; j++) { //遍历Radio
        if (obj_mode[j].checked) {
            item_mode = j;
        }
    }
    if (item_mode == 0) {
        value_mode = "线下面试"
    } else {
        value_mode = "视频面试"
    }
    todo.set('Mode', value_mode);

    // 将对象保存到云端
    todo.save().then((todo) => {
        // 成功保存之后，执行其他逻辑
        console.log(`保存成功。objectId：${todo.id}`);
    }, (error) => {
        // 异常处理
        console.log("失败");
    });
}
//活动报名表
document.querySelector("#btn_2").addEventListener("click", btn_2);

function btn_2() {
    // 声明 class
    const HuoDong_2 = AV.Object.extend('HuoDong_2');
    // 构建对象
    const huoDong_2 = new HuoDong_2();

    // 为属性赋值
    huoDong_2.set('name', document.getElementById("i_name").value);
    huoDong_2.set('age', document.getElementById("i_age").value);
    huoDong_2.set('number', document.getElementById("i_Num").value);
    huoDong_2.set('VX', document.getElementById("i_VX").value);
    huoDong_2.set('email', document.getElementById("i_email").value);
    huoDong_2.set('Address', document.getElementById("i_ZZ").value);
    //性别（男女）
    let value = "";
    var item = null;
    var obj = document.getElementsByName("1")
    for (var i = 0; i < obj.length; i++) { //遍历Radio
        if (obj[i].checked) {
            item = i;
        }
    }
    if (item == 0) {
        value = "男"
    } else {
        value = "女"
    }
    // }
    huoDong_2.set('Gender', value);

    //留言
    var text = document.getElementById('i_liuYan').innerHTML;
    var text = $("#i_liuYan").val();
    huoDong_2.set('Message', text);

    // 将对象保存到云端
    huoDong_2.save().then((huoDong_2) => {
        // 成功保存之后，执行其他逻辑
        console.log(`保存成功。objectId：${huoDong_2.id}`);
    }, (error) => {
        // 异常处理
        console.log("失败");
    });
}

//学堂新生报名表
document.querySelector("#kido_BMB").addEventListener("click", new_kido);

function new_kido() {
    //修稿表单标题内容
    let text = document.querySelector("h1").innerText = '学堂新生预报名表';
    let liu_jiao = document.querySelector("#liuYan_jingLi").innerText = '教育经历';

    var x = document.querySelectorAll("#JG,#ID,#JHR,#WT");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'inline';
    }

}


//活动报名表
document.querySelector("#huaDong_BMB").addEventListener("click", huoDong);

function huoDong() {
    document.getElementById("btn").style.display = "none";
    document.getElementById("btn_2").style.display = "";
    document.querySelector("h1").innerText = '活动报名表';
    var x = document.querySelectorAll("#JG,#ID,#JHR,#WT");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}

//报名表
document.querySelector("#baoMing").addEventListener("click", BaoMing);

function BaoMing() {
    document.getElementById("btn_2").style.display = "none";
    document.getElementById("btn").style.display = "";
}



//表单验证
//姓名验证
let name_x = document.getElementById("i_name");
let span_text = document.getElementById("name_span");
name_x.onblur = function() {
    let username = document.getElementById("i_name").value;
    if (username.length > 0 && username.length <= 4) {
        span_text.innerHTML = "√";
        span_text.style.color = "green";
    } else {
        span_text.innerHTML = "×";
        span_text.style.color = "red";
    }
}

//验证年龄
let panDuan = /[0-9]{1,4}/;
let age = document.getElementById("i_age");
let age_span_text = document.getElementById("age_span");
age.onblur = function() {
    var age_value = document.getElementById("i_age").value;
    if (panDuan.test(age_value)) {
        age_span_text.innerHTML = "√";
        age_span_text.style.color = "green";
    } else {
        age_span_text.innerHTML = "×";
        age_span_text.style.color = "red";
    }
}

//手号码验证  
let phone = /^1\d{10}$/;
let phone_nuber = document.getElementById("i_Num");
let phone_text = document.getElementById("phone_text_span");
phone_nuber.onblur = function() {
    let phone_vlaue = document.getElementById("i_Num").value;
    if (phone.test(phone_vlaue)) {
        phone_text.innerHTML = "√";
        phone_text.style.color = "green";
    } else {
        phone_text.innerHTML = "×";
        phone_text.style.color = "red";
    }
}


//邮箱验证
let email_ZZ = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
let email_number = document.getElementById("i_email");
let email_text = document.getElementById("email_text_span");
email_number.onblur = function() {
    let email_value = document.getElementById("i_email").value;
    if (email_ZZ.test(email_value)) {
        email_text.innerHTML = "√";
        email_text.style.color = "green";
    } else {
        email_text.innerHTML = "×";
        email_text.style.color = "red";
    }
}

//身份证号码验
let ID_ZZ = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
let ID_Number = document.getElementById("i_ID");
let ID_Text = document.getElementById("i_ID_text_span");
ID_Number.onblur = function() {
    let ID_value = document.getElementById("i_ID").value;
    if (ID_ZZ.test(ID_value)) {
        ID_Text.innerHTML = "√";
        ID_Text.style.color = "green";
    } else {
        ID_Text.innerHTML = "×";
        ID_Text.style.color = "red";
    }
}

//监护人手机号
let J_Phone_ZZ = /^1\d{10}$/;
let J_Phone_Numer = document.getElementById("i_JZ_Number");
let J_Phone_Num_Text = document.getElementById("J_phone_num_span");
J_Phone_Numer.onblur = function() {
    let J_Phone_vlaue = document.getElementById("i_JZ_Number").value;
    if (J_Phone_ZZ.test(J_Phone_vlaue)) {
        J_Phone_Num_Text.innerHTML = "√";
        J_Phone_Num_Text.style.color = "green";
    } else {
        J_Phone_Num_Text.innerHTML = "×";
        J_Phone_Num_Text.style.color = "red";
    }
}