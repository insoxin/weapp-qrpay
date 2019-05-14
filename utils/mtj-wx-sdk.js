!function(e) {
    var t, n = "1.6.2", r = {
        wx: null,
        boxjs: null
    }, a = {}, o = {
        aso: {}
    }, i = {
        logServerUrl: "https://hmma.baidu.com/mini.gif",
        maxRequestRetryCount: 5,
        requestRetryFirstDelay: 1e3,
        requestRetryMultiple: 4,
        maxRequestDataLength: 204800,
        maxUint8: 255,
        maxUint32: 4294967295,
        enabledEvents: {
            app: [ "show", "hide", "error" ],
            page: [ "show", "hide" ],
            share: [ "action", "success", "fail" ],
            event: "*"
        },
        storageKeys: {
            appId: "mtj_appid",
            key: "mtj_key",
            uuid: "mtj_uuid",
            shareCount: "mtj_scnt"
        }
    }, s = function() {
        return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * i.maxUint32);
    }, c = function(e, t) {
        return "[object " + t + "]" === {}.toString.call(e);
    }, u = function e(t) {
        return (c(t, "Object") || c(t, "Array")) && Object.keys(t).forEach(function(n) {
            var r = t[n];
            c(r, "Object") || c(r, "Array") ? t[n] = e(r) : t[n] = "" + r;
        }), t;
    }, f = 0, l = {
        sendRequest: function(e) {
            if (e.data = e.data || {}, e.data.v = n, e.data.rqc = ++f, t = e.data, !(JSON.stringify(t).length <= i.maxRequestDataLength)) return f--, 
            void (e.fail && e.fail(new Error("invalid data")));
            var t;
            (r.wx ? function e(t) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : i.requestRetryFirstDelay;
                return r.wx.request({
                    url: t.url,
                    data: t.data,
                    header: Object.assign({
                        "content-type": "application/json"
                    }, t.header),
                    method: t.method || "POST",
                    dataType: t.dataType || "json",
                    success: function(e) {
                        delete t.data.rtc, t.success && t.success(e);
                    },
                    fail: function(r) {
                        t.data.rtc = (t.data.rtc || 0) + 1, t.data.rtc <= i.maxRequestRetryCount ? setTimeout(function() {
                            return e(t, n * i.requestRetryMultiple);
                        }, n) : (delete t.data.rtc, t.fail && t.fail(r));
                    }
                });
            } : function e(t) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : i.requestRetryFirstDelay, a = "_mtj_swan_sdk_request_cb_" + s();
                global[a] = function(r) {
                    delete global[a];
                    var o = JSON.parse(r);
                    if (0 == +o.status) {
                        delete t.data.rtc;
                        var s = JSON.parse(decodeURIComponent(o.data)).data;
                        t.success && t.success(s);
                    } else t.data.rtc = (t.data.rtc || 0) + 1, t.data.rtc <= i.maxRequestRetryCount ? global.setTimeout(function() {
                        return e(t, n * i.requestRetryMultiple);
                    }, n) : (delete t.data.rtc, t.fail && t.fail(o));
                }, r.boxjs.net.request({
                    cancelNumTostr: !0,
                    url: t.url,
                    data: t.data,
                    header: Object.assign({
                        "content-type": "application/json"
                    }, t.header),
                    method: t.method || "POST",
                    dataType: t.dataType || "json",
                    cb: a
                });
            })(e);
        },
        trackEvent: function(e) {
            var t = this;
            if (!("*" !== i.enabledEvents[e.et] && i.enabledEvents[e.et].indexOf(e.en) < 0)) {
                e.rid = s(), e.aso = e.aso || {};
                var n = {
                    url: i.logServerUrl,
                    dataType: "string",
                    data: Object.assign({}, a, e),
                    fail: function(e) {
                        return t.trackError("sendRequest", e);
                    }
                };
                this.sendRequest(n);
            }
        },
        trackError: function(e, t) {
            var n = c(t, "Object") ? JSON.stringify(t) : "" + t;
            this.sendRequest({
                url: i.logServerUrl,
                dataType: "string",
                data: Object.assign({}, a, {
                    et: "error",
                    en: e,
                    ep: {
                        ex: n
                    },
                    rid: s()
                })
            });
        }
    }, d = function(e) {
        try {
            return r.wx.getStorageSync(e);
        } catch (e) {
            l.trackError("getStorageSync", e);
        }
    }, h = function(e, t) {
        try {
            r.wx.setStorageSync(e, t);
        } catch (e) {
            l.trackError("setStorageSync", e);
        }
    }, p = function() {
        return Promise.resolve().then(function() {
            return new Promise(function(e, t) {
                var n = d(i.storageKeys.uuid);
                if (c(n, "String") && 32 === n.length) return e(n);
                n = ([ 1e7 ] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function(e) {
                    return (e ^ ("undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.floor(Math.random() * i.maxUint8)) & 15 >> e / 4).toString(16);
                }), h(i.storageKeys.uuid, n), e(n);
            });
        });
    }, g = function(e) {
        return Promise.resolve().then(function() {
            return new Promise(function(t, n) {
                if (!e) return t();
                try {
                    r.wx.getShareInfo({
                        shareTicket: e,
                        success: function(e) {
                            delete e.errMsg, t(e);
                        },
                        fail: function(e) {
                            t({});
                        }
                    });
                } catch (n) {
                    l.trackError("getShareInfo", n), t({});
                }
            });
        });
    }, y = function() {
        if (t) return t;
        var e;
        try {
            e = require("./mtj-wx-sdk.config");
        } catch (e) {
            return console.error("请把mtj-wx-sdk.config.js文件拷贝到utils目录中"), new Promise(function(e) {
                return 0;
            });
        }
        return e && e.appKey ? (a.key = e.appKey, a.sid = s(), a.rqc = 0, t = Promise.all([ p(), Promise.resolve().then(function() {
            return new Promise(function(e, t) {
                try {
                    r.wx.getSetting({
                        success: function(t) {
                            t.authSetting && t.authSetting["scope.userInfo"] ? r.wx.checkSession({
                                success: function(t) {
                                    t && !1 === t.result ? e({}) : r.wx.getUserInfo({
                                        success: function(t) {
                                            delete t.userInfo.errMsg, e(t.userInfo);
                                        },
                                        fail: function() {
                                            e({});
                                        }
                                    });
                                },
                                fail: function() {
                                    e({});
                                }
                            }) : e({});
                        },
                        fail: function() {
                            e({});
                        }
                    });
                } catch (t) {
                    l.trackError("getUserInfo", t), e({});
                }
            });
        }), Promise.resolve().then(function() {
            return new Promise(function(e, t) {
                try {
                    r.wx.getSystemInfo({
                        success: function(t) {
                            delete t.errMsg, e(t);
                        },
                        fail: function(t) {
                            e({});
                        }
                    });
                } catch (t) {
                    l.trackError("getSystemInfo", t), e({});
                }
            });
        }), Promise.resolve().then(function() {
            return new Promise(function(e, t) {
                try {
                    r.wx.getNetworkType({
                        success: function(t) {
                            delete t.errMsg, e(t);
                        },
                        fail: function(t) {
                            e({});
                        }
                    });
                } catch (t) {
                    l.trackError("getNetworkType", t), e({});
                }
            });
        }), e.getLocation ? Promise.resolve().then(function() {
            return new Promise(function(e, t) {
                try {
                    r.wx.getLocation({
                        type: "wgs84",
                        success: function(t) {
                            delete t.errMsg, e(t);
                        },
                        fail: function(t) {
                            e({});
                        }
                    });
                } catch (t) {
                    l.trackError("getLocation", t), e({});
                }
            });
        }) : Promise.resolve() ]).then(function(e) {
            a.uuid = e[0], o.user = u(e[1]), o.system = u(e[2]), o.network = u(e[3]), e[4] && (o.location = u(e[4])), 
            "devtools" === o.system.platform && i.latestVersion && function(e, t) {
                for (var n = e.split("."), r = t.split("."), a = 0; a < 3; a++) {
                    var o = +n[a] || 0, i = +r[a] || 0;
                    if (i < o) return 1;
                    if (o < i) return -1;
                }
                return 0;
            }(n, i.latestVersion) < 0 && console.warn("百度移动统计微信小程序SDK已更新，为不影响您的正常使用，请到SDK下载中心（https://mtj.baidu.com/web/sdk/index）下载最新版本");
        })) : (console.error("请设置mtj-wx-sdk.config.js文件中的appKey字段"), new Promise(function(e) {
            return 0;
        }));
    }, m = {
        onLaunch: function() {
            l.trackEvent({
                et: "app",
                en: "launch"
            });
        },
        onShow: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return o.aso.scene = "" + (e.scene || ""), e.referrerInfo && e.referrerInfo.appId ? o.aso.referrerInfo = e.referrerInfo : delete o.aso.referrerInfo, 
            o.aso.path = e.path || "", o.aso.query = Object.keys(e.query || {}).map(function(t) {
                return {
                    key: t,
                    value: e.query[t]
                };
            }), y().then(function() {
                return g(e.shareTicket);
            }).then(function(e) {
                e ? o.aso.shareInfo = e : delete o.aso.shareInfo, l.trackEvent(Object.assign({
                    et: "app",
                    en: "show"
                }, o));
            });
        },
        onHide: function() {
            l.trackEvent({
                et: "app",
                en: "hide"
            });
        },
        onError: function(e) {
            var t = c(e, "Object") ? JSON.stringify(u(e)) : "" + e;
            l.trackEvent({
                et: "app",
                en: "error",
                ep: {
                    ex: t
                }
            });
        }
    }, v = function(e, t) {
        return y().then(function() {
            return l.trackEvent({
                et: "page",
                en: e,
                ep: t
            });
        });
    }, k = {
        onLoad: function() {
            v("load");
        },
        onShow: function() {
            var e = getCurrentPages(), t = e[e.length - 1];
            return a.path = t.route, a.query = Object.keys(t.options).map(function(e) {
                return {
                    key: e,
                    value: t.options[e]
                };
            }).filter(function(e) {
                return "mtj_qrid" !== e.key && "mtj_lkid" !== e.key && "mtj_shuuid" !== e.key;
            }), y().then(function() {
                l.trackEvent(Object.assign({
                    et: "page",
                    en: "show"
                }, o));
            });
        },
        onReady: function() {
            v("ready");
        },
        onHide: function() {
            v("hide");
        },
        onUnload: function() {
            v("unload");
        },
        onPullDownRefresh: function() {
            v("pullDownRefresh");
        },
        onReachBottom: function() {
            v("reachBottom");
        },
        onPageScroll: function() {
            v("pageScroll");
        },
        onTabItemTap: function(e) {
            v("tabItemTap", e);
        },
        onShareAppMessage: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = d(i.storageKeys.shareCount);
            n = (Number.isInteger(n) ? n : 0) + 1, h(i.storageKeys.shareCount, n);
            var r = {
                cnt: n,
                from: e.from,
                path: t.path || ""
            };
            t.title && (r.title = "" + t.title), e.target && (r.target = JSON.stringify(e.target)), 
            l.trackEvent(Object.assign({
                et: "share",
                en: "action",
                ep: r
            }, o));
            var s = o.aso.query.filter(function(e) {
                return "mtj_shuuid" === e.key;
            }), c = s[0] ? s[0].value.split("_") : [];
            a.uuid !== c[c.length - 1] && c.push(a.uuid);
            var u, f, p, g, y = c.slice(Math.max(0, c.length - 3)).join("_");
            t.path = (u = t.path || a.path, f = "mtj_shuuid", p = y, g = 0 < (u = u.replace(new RegExp(f + "=[^&]*", "g"), "").replace(/(\?|&)&/g, "$1").replace(/(\?|&)$/g, "")).indexOf("?") ? "&" : "?", 
            u + g + f + "=" + encodeURIComponent(p));
            var m = t.success;
            t.success = function(e) {
                k.shareSuccess(e), m && m(e);
            };
            var v = t.fail;
            return t.fail = function(e) {
                k.shareFail(e), v && v(e);
            }, t;
        },
        shareSuccess: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = [].concat(e.shareTickets);
            Promise.all(t.map(function(e) {
                return g(e);
            })).then(function(e) {
                e && e[0] || (e = []), l.trackEvent({
                    et: "share",
                    en: "success",
                    ep: {
                        shareInfo: e
                    }
                });
            });
        },
        shareFail: function(e) {
            l.trackEvent({
                et: "share",
                en: "fail",
                ep: {
                    ex: JSON.stringify(e)
                }
            });
        }
    }, S = function(e) {
        if (t = e.reportName, c(t, "String") && /^[a-z][a-z0-9_]{0,31}$/.test(t)) {
            var t, n = e.reportParams || {}, r = Object.keys(n).filter(function(e) {
                return c(r = e, "String") && /^[a-z0-9_]{1,32}$/.test(r) && (t = n[e], c(t, "String") || c(t, "Number"));
                var t, r;
            }).map(function(e) {
                return {
                    key: "" + e,
                    value: "" + n[e],
                    type: c(n[e], "String") ? "string" : "number"
                };
            });
            return y().then(function() {
                l.trackEvent(Object.assign({
                    et: "event",
                    en: "" + e.reportName,
                    ep: {
                        data: r
                    }
                }, o));
            });
        }
    }, w = function(e, t, n) {
        var r = t[e];
        t[e] = function(e) {
            n.call(this, e), r && r.call(this, e);
        };
    }, j = function() {
        a.type = 1, r.wx = wx;
        var e = App;
        App = function(t) {
            [ "onLaunch", "onShow", "onHide", "onError" ].forEach(function(e) {
                w(e, t, m[e]);
            }), t.mtj = {
                trackEvent: function(e, t) {
                    S({
                        reportName: e,
                        reportParams: t
                    });
                }
            }, e(t);
        };
        var t = Page;
        Page = function(e) {
            [ "onLoad", "onShow", "onHide", "onReady" ].forEach(function(t) {
                w(t, e, k[t]);
            }), [ "onShareAppMessage" ].forEach(function(t) {
                var n, r, a, o;
                r = e, a = k[n = t], o = r[n], r[n] = function(e) {
                    var t = o && o.call(this, e);
                    return a.call(this, e, t);
                };
            }), t(e);
        };
    };
    j(), e.init = j;
}({});