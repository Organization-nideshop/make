Page({
    data:{
        result:'',
        _result:'',
        psw:'',
        cpsw:''
    },
    backToPage:function () {
        wx.navigateBack({
            delta:1
        })
    },
    setPsw:function (e) {
        var psw = e.detail.value;
        // console.log(psw.matches("[0-9]+"));
        var regNum = new RegExp('[0-9]','g');//判断用户输入的是否为数字
        var res = regNum.exec(psw);
        var result = '';
        if(!res && typeof(res)!="undefined" && res!=0){
            result = false;
        }else{
            result = true;
        }
        this.setData({
            result:result,
            psw:psw
        })
    },
    confirmPsw:function (e) {
        var cpsw = e.detail.value;
        var _regNum = new RegExp('[0-9]','g');//判断用户输入的是否为数字
        var _res = _regNum.exec(cpsw);
        var _result = '';
        if(!_res && typeof(_res)!="undefined" && _res!=0){
            _result = false;
        }else{
            _result = true;
        }
        this.setData({
            _result:_result,
            cpsw:cpsw
        })
    },
    checkPsw:function () {
        var res1 = this.data.result;
        var res2 = this.data._result;
        var psw = this.data.psw;
        var cpsw = this.data.cpsw;
        console.log("res1:"+res1);
        console.log("res2:"+res2);
        console.log("psw:"+psw);
        console.log("cpsw:"+cpsw);

        if (psw == ''||cpsw == ''){
            wx.showToast({title: '必填项不得为空', icon: 'none'})
        }else if(res1==false){
            wx.showToast({title: '请输入6位数字密码', icon: 'none'})
        }else if(res2==false){
            wx.showToast({title: '请输入6位数字密码', icon: 'none'})
        }else if(psw!=cpsw){
            wx.showToast({title: '确认密码不正确', icon: 'none'})
        }
    }
})