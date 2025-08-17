const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    source1: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源站',
    },
    source2: {
        api: 'https://example.com/api.php/provide/vod',
        name: '示例资源站',
        adult: false
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
