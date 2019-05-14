function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

function e(t) {
    return encodeURIComponent(t).replace(/'/g, "%27").replace(/"/g, "%22");
}

var a = [ {
  url: "img/1.jpg",
    id: "1",
    name: "纯黄模板"
}, {
    url: "https://wx2.sinaimg.cn/large/005zWjpngy1fvajrc68gqj30tv10idpc.jpg",
    id: "2",
    name: "蓝白款式"
}, {
    url: "https://wx2.sinaimg.cn/large/005zWjpngy1fvajrd25lcj31gh21te81.jpg",
    id: "3",
    name: "纯蓝款式"
}, {
    url: "https://wx2.sinaimg.cn/large/005zWjpngy1fvajrcqedvj30u01bs0zc.jpg",
    id: "4",
    name: "白灰打印"
}, {
    url: "https://wx2.sinaimg.cn/large/005zWjpngy1fvajrcx37dj30u01eegvl.jpg",
    id: "5",
    name: "红包款式"
}, {
    url: "https://wx2.sinaimg.cn/large/005zWjpngy1fvajrd816rj30m80dwdiq.jpg",
    id: "6",
    name: "摔钱款式"
}, {
    url: "https://wx2.sinaimg.cn/large/005zWjpngy1fvajrdff22j31b80xw479.jpg",
    id: "7",
    name: "绿色横版"
}, {
    url: "https://wx2.sinaimg.cn/large/005zWjpngy1fvajrdnla1j30u01hcn62.jpg",
    id: "8",
    name: "蓝白款式"
}, {
    url: "https://wx2.sinaimg.cn/large/005zWjpngy1fvajre8ccoj31z4140tok.jpg",
    id: "9",
    name: "卡片板式"
}, {
    url: "https://wx2.sinaimg.cn/large/005zWjpngy1fvajrgt7rdj32qj3ncu10.jpg",
    id: "10",
    name: "快捷支付"
}, {
    url: "https://wx2.sinaimg.cn/large/005BYqpggy1fvlt1clnj4j30u01hctlr.jpg",
    id: "11",
    name: "九月开学"
}, {
    url: "https://wx2.sinaimg.cn/large/005BYqpggy1fvsp7z9v49j30fr0nodr1.jpg",
    id: "12",
    name: "十月国庆"
}, {
    url: "https://wx2.sinaimg.cn/large/005BYqpggy1fvzkqel0hqj30u015f79x.jpg",
    id: "13",
    name: "蓝底白版"
}, {
    url: "https://wx2.sinaimg.cn/large/005BYqpggy1fwdt2xqxgvj30qz16ddmv.jpg",
    id: "14",
    name: "招财猫版"
}, {
    url: "https://wx2.sinaimg.cn/large/005BYqpggy1fwdt2tnfgwj30u019tn2b.jpg",
    id: "15",
    name: "白灰款式"
}, {
    url: "https://wx2.sinaimg.cn/large/005BYqpgly1fwdt2x8c3vj30u01hcgtu.jpg",
    id: "16",
    name: "指纹红包"
}, {
    url: "https://wx2.sinaimg.cn/large/005BYqpgly1fwdt2w8yjgj30u01hcjxl.jpg",
    id: "17",
    name: "白绿饭团"
}, {
    url: "https://wx2.sinaimg.cn/large/005BYqpggy1fwtxjmhce7j30pg15fwlc.jpg",
    id: "19",
    name: "小程序码"
} ], i = {
    1: {
        tpl_w: 800,
        tel_h: 1200,
      tpl_src: "img/1.jpg",
        qr_x: 120,
        qr_y: 120,
        qrsize: 560
    },
    2: {
        tpl_w: 1075,
        tel_h: 1314,
        tpl_src: "img/2.jpg",
        qr_x: 327,
        qr_y: 344,
        qrsize: 429
    },
    3: {
        tpl_w: 1889,
        tel_h: 2657,
        tpl_src: "img/3.jpg",
        qr_x: 530,
        qr_y: 440,
        qrsize: 834
    },
    4: {
        tpl_w: 1080,
        tel_h: 1720,
        tpl_src: "img/4.jpg",
        qr_x: 218,
        qr_y: 448,
        qrsize: 640
    },
    5: {
        tpl_w: 1080,
        tel_h: 1720,
        tpl_src: "img/5.jpg",
        qr_x: 370,
        qr_y: 585,
        qrsize: 340
    },
    6: {
        tpl_w: 800,
        tel_h: 500,
        tpl_src: "img/6.jpg",
        qr_x: 65,
        qr_y: 130,
        qrsize: 255
    },
    7: {
        tpl_w: 1700,
        tel_h: 1220,
        tpl_src: "img/7.jpg",
        qr_x: 1215,
        qr_y: 340,
        qrsize: 220
    },
    8: {
        tpl_w: 1080,
        tel_h: 1920,
        tpl_src: "img/8.jpg",
        qr_x: 210,
        qr_y: 625,
        qrsize: 660
    },
    9: {
        tpl_w: 2560,
        tel_h: 1440,
        tpl_src: "img/9.jpg",
        qr_x: 1720,
        qr_y: 405,
        qrsize: 340
    },
    10: {
        tpl_w: 4961,
        tel_h: 6613,
        tpl_src: "img/10.jpg",
        qr_x: 1717,
        qr_y: 2311,
        qrsize: 1537
    },
    11: {
        tpl_w: 1080,
        tel_h: 1920,
        tpl_src: "img/11.jpg",
        qr_x: 340,
        qr_y: 1215,
        qrsize: 400
    },
    12: {
        tpl_w: 567,
        tel_h: 852,
        tpl_src: "img/12.jpg",
        qr_x: 163,
        qr_y: 348,
        qrsize: 246
    },
    13: {
        tpl_w: 1080,
        tel_h: 1491,
        tpl_src: "img/13.jpg",
        qr_x: 370,
        qr_y: 480,
        qrsize: 340
    },
    14: {
        tpl_w: 970,
        tel_h: 1525,
        tpl_src: "img/14.jpg",
        qr_x: 362,
        qr_y: 674,
        qrsize: 250
    },
    15: {
        tpl_w: 1080,
        tel_h: 1649,
        tpl_src: "img/15.jpg",
        qr_x: 340,
        qr_y: 610,
        qrsize: 400
    },
    16: {
        tpl_w: 1080,
        tel_h: 1920,
        tpl_src: "img/16.jpg",
        qr_x: 240,
        qr_y: 950,
        qrsize: 600
    },
    17: {
        tpl_w: 1080,
        tel_h: 1920,
        tpl_src: "img/17.jpg",
        qr_x: 240,
        qr_y: 900,
        qrsize: 600
    },
    19: {
        tpl_w: 916,
        tel_h: 1491,
        tpl_src: "img/19.jpg",
        qr_x: 302,
        qr_y: 395,
        qrsize: 312
    }
};

Page({
    data: {
        cardList: a,
        selectedCardId: a[0].id,
        qq: "",
        aliLink: "",
        wechatLink: "",
        qqLink: "",
        codeImgSrc: "",
        canvasWidth: 0,
        canvasHeight: 0,
        showCodeImg: !1
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    scan: function(e) {
        var a = this, i = e.currentTarget.dataset.prop;
        wx.scanCode({
            scanType: [ "qrCode" ],
            success: function(e) {
                a.setData(t({}, i, e.result));
            },
            fail: function(t) {
                console.log(t), t.errMsg.indexOf("cancel") > -1 || wx.showToast({
                    icon: "none",
                    title: "扫描失败"
                });
            }
        });
    },
    selectCard: function(t) {
        var e = t.detail.value;
        this.setData({
            selectedCardId: e
        });
    },
    inputLink: function(e) {
        var a = e.detail.value, i = e.currentTarget.dataset.prop;
        this.setData(t({}, i, a));
    },
    generateCode: function(t) {
        var a = this, n = i[this.data.selectedCardId], r = "https://api.isoyu.com/qr/qr.php?alipay=" + e(this.data.aliLink) + "&vxpay=" + e(this.data.wechatLink) + "&qqpay=" + e(this.data.qqLink) + "&uin=" + this.data.qq, s = "https://qrpay.isoyu.com/" + n.tpl_src, g = n.tpl_w < 720 ? 1 : 720 / n.tpl_w;
        a.setData({
            canvasWidth: n.tpl_w * g,
            canvasHeight: n.tel_h * g
        }), wx.showLoading({
            title: "加载中,请稍候！"
        }), wx.getImageInfo({
            src: s,
            success: function(t) {
                var e = t.path, i = wx.createCanvasContext("compositeCode", a);
                i.restore(), i.drawImage(e, 0, 0, n.tpl_w * g, n.tel_h * g), wx.getImageInfo({
                    src: r,
                    success: function(t) {
                        var e = t.path;
                        i.restore(), i.drawImage(e, n.qr_x * g, n.qr_y * g, n.qrsize * g, n.qrsize * g), 
                        i.draw(!0, function(t) {
                            "drawCanvas:ok" === t.errMsg ? wx.canvasToTempFilePath({
                                canvasId: "compositeCode",
                                success: function(t) {
                                    a.setData({
                                        codeImgSrc: t.tempFilePath,
                                        showCodeImg: !0
                                    }), wx.showToast({
                                        icon: "none",
                                        title: "长按保存图片",
                                        duration: 3e3
                                    });
                                },
                                fail: a.generateFail,
                                complete: a.hideLoading
                            }) : a.generateFail(t);
                        });
                    },
                    fail: a.generateFail,
                    complete: a.hideLoading
                });
            },
            fail: a.generateFail,
            complete: a.hideLoading
        });
    },
    saveCode: function(t) {
        wx.canvasToTempFilePath({
            canvasId: "compositeCode",
            success: function(t) {
                wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function() {
                        wx.showToast({
                            title: "保存成功！"
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }, this);
    },
    generateFail: function(t) {
        wx.hideLoading(), wx.showToast({
            icon: "none",
            title: "生成图片失败"
        });
    },
    hideLoading: function() {
        wx.hideLoading();
    }
});