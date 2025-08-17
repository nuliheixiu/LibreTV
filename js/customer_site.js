const CUSTOMER_SITES = {
    "source1": {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源站',
    },
    "source2": {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子',
        adult: false
    },
    "source3": {
        api: 'http://ffzy.tv/api.php/provide/vod',
        name: '非凡',
        adult: false
    },
    "source4": {
        api: 'https://suoniapi.com/api.php/provide/vod/at/xml',
        name: '索尼',
        adult: false
    },
    "source5": {
        api: 'https://wolongzyw.com/api.php/provide/vod/?ac=list',
        name: '卧龙',
        adult: false
    },
    "source6": {
        api: 'https://www.ikunzy.com/api.php/provide/vod',
        name: 'iKun',
        adult: false
    },
    "source7": {
        api: 'https://api.ukuapi.com/api.php/provide/vod/?ac=list',
        name: '尤酷',
        adult: false
    },
    "source8": {
        api: 'https://jszyapi.com/api.php/provide/vod/?ac=list',
        name: '极速',
        adult: false
    },
    "source9": {
        api: 'https://suoniapi.com/api.php/provide/vod/?ac=list',
        name: '率率',
        adult: false
    },
    "source10": {
        api: 'https://api.apibdzy.com/api.php/provide/vod?ac=list',
        name: '百度',
        adult: false
    },
    "source11": {
        api: 'https://bfzyapi.com/api.php/provide/vod/?ac=list',
        name: '暴风',
        adult: false
    }.
    "dyttzy": {
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
      "name": "电影天堂资源",
      "detail": "http://caiji.dyttzyapi.com"
    },
    "heimuer": {
      "api": "https://json.heimuer.xyz/api.php/provide/vod",
      "name": "黑木耳",
      "detail": "https://heimuer.tv"
    },
    "ruyi": {
      "api": "http://cj.rycjapi.com/api.php/provide/vod",
      "name": "如意资源"
    },
    "bfzy": {
      "api": "https://bfzyapi.com/api.php/provide/vod",
      "name": "暴风资源"
    },
    "tyyszy": {
      "api": "https://tyyszy.com/api.php/provide/vod",
      "name": "天涯资源"
    },
    "ffzy": {
      "api": "http://ffzy5.tv/api.php/provide/vod",
      "name": "非凡影视",
      "detail": "http://ffzy5.tv"
    },
    "zy360": {
      "api": "https://360zy.com/api.php/provide/vod",
      "name": "360资源"
    },
    "maotaizy": {
      "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
      "name": "茅台资源"
    },
    "wolong": {
      "api": "https://wolongzyw.com/api.php/provide/vod",
      "name": "卧龙资源"
    },
    "jisu": {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "极速资源",
      "detail": "https://jszyapi.com"
    },
    "dbzy": {
      "api": "https://dbzy.tv/api.php/provide/vod",
      "name": "豆瓣资源"
    },
    "mozhua": {
      "api": "https://mozhuazy.com/api.php/provide/vod",
      "name": "魔爪资源"
    },
    "mdzy": {
      "api": "https://www.mdzyapi.com/api.php/provide/vod",
      "name": "魔都资源"
    },
    "zuid": {
      "api": "https://api.zuidapi.com/api.php/provide/vod",
      "name": "最大资源"
    },
    "yinghua": {
      "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
      "name": "樱花资源"
    },
    "wujin": {
      "api": "https://api.wujinapi.me/api.php/provide/vod",
      "name": "无尽资源"
    },
    "wwzy": {
      "api": "https://wwzy.tv/api.php/provide/vod",
      "name": "旺旺短剧"
    },
    "ikun": {
      "api": "https://ikunzyapi.com/api.php/provide/vod",
      "name": "iKun资源"
    },
    "lzi": {
      "api": "https://cj.lziapi.com/api.php/provide/vod",
      "name": "量子资源站"
    },
    "xiaomaomi": {
      "api": "https://zy.xmm.hk/api.php/provide/vod",
      "name": "小猫咪资源"
    }
  }

};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
