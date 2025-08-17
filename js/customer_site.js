const CUSTOMER_SITES = {
    source1: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源站',
    },
    source2: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子',
        adult: false
    },
    source3: {
        api: 'http://ffzy.tv/api.php/provide/vod',
        name: '非凡',
        adult: false
    },
    source4: {
        api: 'https://suoniapi.com/api.php/provide/vod/at/xml',
        name: '索尼',
        adult: false
    },
    source5: {
        api: 'https://wolongzyw.com/api.php/provide/vod/?ac=list',
        name: '卧龙',
        adult: false
    },
    source6: {
        api: 'https://www.ikunzy.com/api.php/provide/vod',
        name: 'iKun',
        adult: false
    },
    source7: {
        api: 'https://api.ukuapi.com/api.php/provide/vod/?ac=list',
        name: '尤酷',
        adult: false
    },
    source8: {
        api: 'https://jszyapi.com/api.php/provide/vod/?ac=list',
        name: '极速',
        adult: false
    },
    source9: {
        api: 'https://suoniapi.com/api.php/provide/vod/?ac=list',
        name: '率率',
        adult: false
    },
    source10: {
        api: 'https://api.apibdzy.com/api.php/provide/vod?ac=list',
        name: '百度',
        adult: false
    },
    source11: {
        api: 'https://bfzyapi.com/api.php/provide/vod/?ac=list',
        name: '暴风',
        adult: false
    }

};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
