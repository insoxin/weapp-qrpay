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

var a = [
//图片
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
        var a = this, n = i[this.data.selectedCardId], r = "https://api.isoyu.com/qr/qr.jsp?alipay=" + e(this.data.aliLink) + "&vxpay=" + e(this.data.wechatLink) + "&qqpay=" + e(this.data.qqLink) + "&uin=" + this.data.qq, s = "https://qrpay.isoyu.com/" + n.tpl_src, g = n.tpl_w < 720 ? 1 : 720 / n.tpl_w;
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
