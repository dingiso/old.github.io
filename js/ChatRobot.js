var botui = new BotUI("hello-mashiro");
var loadingMsgIndex;

function sendXHR(PostMessage, cb) {
    var API = 'https://api.ownthink.com/bot?appid=7aa791d834f9f38305a05bfdf7ea9d79&userid=user&spoken=';
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('GET', API + PostMessage);
    xhr.onload = function () {
      var res = JSON.parse(xhr.responseText)
      cb(res.data.info.text);
    }
    xhr.send();
  }

function showText(Texts) {
    botui.message
    .update(loadingMsgIndex, {
        content: Texts
    })
    .then(bot_ui_ini); // ask again for repo. Keep in loop.
}

function bot_ui_ini() {
    botui.message.add({
        delay: 1000,
        content: "Hi, there👋"
    }).then(function() {
        botui.message.add({
            delay: 1000,
            content: '请问您有什么问题?'
          });
    }).then(function() {    
        return botui.action.text({
            delay: 1000,
            action: {
              value: '请问..?',
              placeholder: '你的问题？'
            }
          });
    }).then(function (res) {
        loadingMsgIndex = botui.message.bot({
            delay: 200,
            loading: true
          }).then(function (index) {
            loadingMsgIndex = index;
            sendXHR(res.value, showText)
          });
    }).then(function() {
        botui.message.add({
            delay: 1100,
            content: "一个可爱的男孩子~"
        }).then(function() {
            botui.action.button({
                delay: 1600,
                action: [{
                    text: "然后呢？ 😃",
                    value: "sure"
                },
                {
                    text: "少废话！ 🙄",
                    value: "skip"
                }]
            }).then(function(a) {
                "sure" == a.value && sure();
                "skip" == a.value && end()
            })
        })
    });
    var sure = function() {
        botui.message.add({
            delay: 600,
            content: "😘"
        }).then(function() {
            secondpart()
        })
    },
    end = function() {
        botui.message.add({
            delay: 600,
            content: "![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)"
        })
    },
    secondpart = function() {
        botui.message.add({
            delay: 1500,
            content: "就读于大连理工大学"
        }).then(function() {
            botui.message.add({
                delay: 1500,
                content: "是在软件工程专业学网络安全的程序猿"
            }).then(function() {
                botui.message.add({
                    delay: 1200,
                    content: "将敲代码看成一种快乐"
                }).then(function() {
                    botui.message.add({
                        delay: 1500,
                        content: "主修OS，Rust等，对系统底层比较感兴趣"
                    }).then(function() {
                        botui.message.add({
                            delay: 1500,
                            content: "专业方向，物联网安全(IoT Security)及系统安全(System Security)"
                        }).then(function() {
                            botui.message.add({
                                delay: 1800,
                                content: "喜欢打游戏和折腾"
                            }).then(function() {
                                botui.action.button({
                                    delay: 1100,
                                    action: [{
                                        text: "为什么叫Dingisoul呢？🤔",
                                        value: "why-mashiro"
                                    }]
                                }).then(function(a) {
                                    thirdpart()
                                })
                            })
                        })
                    })
                })
            })
        })
    },
    thirdpart = function() {
        botui.message.add({
            delay: 1e3,
            content: "Dingisoul是dingiso 和 soul 的合体。"
        }).then(function() {
            botui.action.button({
                delay: 1500,
                action: [{
                    text: "为什么叫Dingiso呢？",
                    value: "why-cat"
                }]
            }).then(function(a) {
                fourthpart()
            })
        })
    },
    fourthpart = function() {
        botui.message.add({
            delay: 1e3,
            content: "那是一只可爱的白腹树袋熊 "
        }).then(function() {
            botui.message.add({
                delay: 1100,
                content: "希望自己能好吃懒做还有钱挣吧"
            }).then(function() {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "域名有什么含义吗？",
                        value: "why-domain"
                    }]
                }).then(function(a) {
                    fifthpart()
                })
            })
        })
    },
    fifthpart = function() {
        botui.message.add({
            delay: 1e3,
            content: "emmmm,csdn,github,都是Dingiso哦"
        }).then(function() {
            botui.message.add({
                delay: 1600,
                content: "那么，相遇就是缘分，赏个赞吧 ^_^"
            })
        })
    }
}
//rebuild by neat