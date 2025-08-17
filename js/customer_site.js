const CUSTOMER_SITES = {

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
    },
    dyttzy: {
        api: "http://caiji.dyttzyapi.com/api.php/provide/vod",
        name: "电影天堂资源",
        adult: false
    },
    heimuer: {
        api: "https://json.heimuer.xyz/api.php/provide/vod",
        name: "黑木耳",
        detail: "https://heimuer.tv"
    },
    ruyi: {
        api: "http://cj.rycjapi.com/api.php/provide/vod",
        name: "如意资源"
    },
    bfzy: {
        api: "https://bfzyapi.com/api.php/provide/vod",
        name: "暴风资源"
   },
    tyyszy: {
        api: "https://tyyszy.com/api.php/provide/vod",
        name: "天涯资源"
    },
    ffzy: {
        api: "http://ffzy5.tv/api.php/provide/vod",
        name: "非凡影视",
        detail: "http://ffzy5.tv"
    },
    zy360: {
        api: "https://360zy.com/api.php/provide/vod",
        name: "360资源"
    },
    maotaizy: {
        api: "https://caiji.maotaizy.cc/api.php/provide/vod",
        name: "茅台资源"
    },
    wolong: {
        api: "https://wolongzyw.com/api.php/provide/vod",
        name: "卧龙资源"
    },
    jisu: {
        api: "https://jszyapi.com/api.php/provide/vod",
        name: "极速资源",
        detail: "https://jszyapi.com"
    },
    dbzy: {
        api: "https://dbzy.tv/api.php/provide/vod",
        name: "豆瓣资源"
    },
    mozhua: {
       api: "https://mozhuazy.com/api.php/provide/vod",
       name: "魔爪资源"
    },
    mdzy: {
        api: "https://www.mdzyapi.com/api.php/provide/vod",
        name: "魔都资源"
    },
    zuid: {
        api: "https://api.zuidapi.com/api.php/provide/vod",
        name: "最大资源"
    },
    yinghua: {
        api: "https://m3u8.apiyhzy.com/api.php/provide/vod",
        name: "樱花资源"
    },
    wujin: {
        api: "https://api.wujinapi.me/api.php/provide/vod",
        name: "无尽资源"
    },
    wwzy: {
        api: "https://wwzy.tv/api.php/provide/vod",
        name: "旺旺短剧"
    },
    ikun: {
        api: "https://ikunzyapi.com/api.php/provide/vod",
        name: "iKun资源"
    },
    lzi: {
        api: "https://cj.lziapi.com/api.php/provide/vod",
        name: "量子资源站"
    },
    xiaomaomi: {
        api: "https://zy.xmm.hk/api.php/provide/vod",
        name: "小猫咪资源"
    },
    
    "kuaiboyun": {
        api: "http://www.kuaibozy.com/api.php/provide/vod/at/xml/",
        name: "快播云",
        adult: false
    },
    "fox": {
        api: "https://api.foxzyapi.com/api.php/provide/vod/",
        name: "FOX资源",
        adult: false
    },
    "jindouyun": {
        api: "https://tv.jindcloud.com/api.php/provide/vod/",
        name: "筋斗云",
        adult: false
    },
    "xinlang": {
        api: "http://api.xinlangapi.com/xinlangapi.php/provide/vod/",
        name: "新浪资源",
        adult: false
    },
    "sanjiu": {
        api: "https://www.39kan.com/api.php/provide/vod/",
        name: "39影视",
        adult: false
    },
    "kumaoyingshi": {
        api: "https://www.pgcms10.com/api.php/provide/vod/",
        name: "酷猫影视",
        adult: false
    },
    "naifeimi": {
        api: "https://app.netflixmi.com/ruifenglb_api.php/provide/vod/",
        name: "奈菲迷",
        adult: false
    },
    "yananfei": {
        api: "http://newtv.yanaifei.cn/api.php/provide/vod/",
        name: "鸭奈飞",
        adult: false
    },
    "m3u8tv": {
        api: "http://www.zycaiji.net:7788/api.php/provide/vod/at/xml",
        name: "M3U8TV资源",
        adult: false
    },
    "balingling": {
        api: "http://zy.yilans.net:8090/api.php/provide/vod/at/xml",
        name: "8090",
        adult: false
    },
    "tiantang": {
        api: "http://vipmv.cc/api.php/provide/vod/",
        name: "天堂资源",
        adult: false
    },
    "qilin": {
        api: "http://www.qilinzyz.com/api.php/provide/vod/",
        name: "麒麟资源",
        adult: false
    },
    "nuoxun": {
        api: "http://caiji.nxflv.com/api.php/provide/vod/",
        name: "诺讯资源",
        adult: false
    },
    "yinghuang": {
        api: "https://apicdn.vipm3u8.com/xml",
        name: "英皇官采",
        adult: false
    },
    "jiangnan": {
        api: "https://gfzycj.hnmj.vip/api.php/provide/vod/",
        name: "江南资源",
        adult: false
    },
    "xingyi": {
        api: "https://gcku.suboyun.vip/api.php/provide/vod/",
        name: "星一官采",
        adult: false
    },
    "wabc": {
        api: "https://wabc.ml/mao/1.php/provide/vod/",
        name: "wabc(腾讯直采)",
        adult: false
    },
    "kanmao": {
        api: "http://124.222.83.15:88/api.php/provide/vod/",
        name: "看猫",
        adult: false
    },
    "yimeng": {
        api: "http://anltv.cn/api.php/provide/vod/",
        name: "忆梦",
        adult: false
    },
    "shoutu": {
        api: "http://zy.ishoutu.com/api.php/provide/vod/",
        name: "首涂官采",
        adult: false
    },
    "aoteman": {
        api: "https://aotemanzy.com/api.php/provide/vod/",
        name: "奥特曼资源",
        adult: false
    },
    "xueren": {
        api: "https://zl.chinafix.wang/api.php/provide/vod/",
        name: "雪人官采",
        adult: false
    },
    "muzikanju": {
        api: "https://mzkj.maccms.cf/api.php/provide/vod/",
        name: "木子看剧",
        adult: false
    },
    "kuaiche": {
        api: "https://caiji.kczyapi.com/api.php/provide/vod/",
        name: "快车资源",
        adult: false
    },
    "songshu": {
        api: "https://m3u8.songshuzy.com/api.php/provide/vod/",
        name: "松鼠资源",
        adult: false
    },
    "shensu": {
        api: "https://api.sszyapi.com/api.php/provide/vod/",
        name: "神速资源",
        adult: false
    },
    "fanqie": {
        api: "http://api.fqzy.cc/api.php/provide/vod/",
        name: "番茄资源",
        adult: false
    },
    "xiangkan": {
        api: "https://m3u8.xiangkanapi.com/api.php/provide/vod/",
        name: "想看资源",
        adult: false
    },
    "kudian": {
        api: "https://kudianzy.com/api.php/provide/vod/",
        name: "酷点资源",
        adult: false
    },
    "sugeng": {
        api: "https://sugengzy.cn/api.php/provide/vod/",
        name: "速更资源",
        adult: false
    },
    "shandian": {
        api: "http://sdzyapi.com/api.php/provide/vod/",
        name: "闪电资源",
        adult: false
    },
    "guangsu": {
        api: "https://api.guangsuapi.com/api.php/provide/vod/",
        name: "光速资源",
        adult: false
    },
    "yule": {
        api: "https://api.ylzy1.com/api.php/provide/vod/",
        name: "鱼乐资源",
        adult: false
    },
    "hongniu": {
        api: "https://www.hongniuzy1.com/inc/api.php",
        name: "红牛资源",
        adult: false
    },
    "laoya": {
        api: "https://api.apilyzy.com/api.php/provide/vod/?ac=list",
        name: "老鸭资源",
        adult: true
    },
    "sewo": {
        api: "https://sewozyapi.com/api.php/provide/vod/?ac=list",
        name: "色窝资源",
        adult: true
    },
    "javmingyou": {
        api: "http://mygzycj.com/sapi.php",
        name: "JAV名优资源",
        adult: true
    },
    "senlin": {
        api: "https://slapibf.com/api.php/provide/vod/?ac=list",
        name: "森林资源(探花类)",
        adult: true
    },
    "xiuse": {
        api: "https://api.xiuseapi.com/api.php/provide/vod/from/xiuse/at/xml/",
        name: "秀色资源网(番号类)",
        adult: true
    },
    "naicha": {
        api: "https://caiji.naichaapi.com/inc/api.php",
        name: "奶茶资源(国产自拍)",
        adult: true
    },
    "tantan": {
        api: "https://apittzy.com/api.php/provide/vod/?ac=list",
        name: "探探资源（散装AV）",
        adult: true
    },
    "wuer": {
        api: "https://caiji.523zyw.com/inc/api.php",
        name: "523資源（散装）",
        adult: true
    },
    "lajiao": {
        api: "https://apilj.com/api.php/provide/vod/at/xml/",
        name: "辣椒资源",
        adult: true
    },
    "dadi": {
        api: "https://dadiapi.com/api.php",
        name: "大地资源",
        adult: true
    },
    "fuerdai": {
        api: "http://f2dcj6.com/sapi",
        name: "富二代在线采集",
        adult: true
    },
    "lilai": {
        api: "http://llzxcj.com/inc/sck.php",
        name: "利来在线采集",
        adult: true
    },
    "langshaonian": {
        api: "http://cjmygzy.com/inc/sapi.php",
        name: "狼少年猎奇",
        adult: true
    },
    "jiujiu": {
        api: "http://99zywcj.com/inc/sck.php",
        name: "玖玖在线采集",
        adult: true
    },
    "mangguo": {
        api: "https://mgzyz1.com/api.php/provide/vod/?ac=list",
        name: "芒果资源",
        adult: true
    },
    "sese": {
        api: "http://secj8.com/inc/sapi.php",
        name: "色色资源站",
        adult: true
    },
    "zimu": {
        api: "http://zmcj88.com/sapi",
        name: "字幕网资源站",
        adult: true
    },
    "jiucao": {
        api: "http://jcspcj8.com/sapi",
        name: "久草资源站",
        adult: true
    },
    "lebo": {
        api: "https://lbapi9.com/api.php/provide/vod/at/xml/",
        name: "乐播视频资源",
        adult: true
    },
    "semao": {
        api: "https://semaozy6.com/inc/api.php",
        name: "色猫资源网(視頻)（动漫）",
        adult: true
    },
    "xxibao": {
        api: "https://www.xxibaozyw.com/api.php/provide/vod/?ac=list",
        name: "X细胞资源网",
        adult: true
    },
    "feisu": {
        api: "https://feisuzyapi.com/api.php/provide/vod/",
        name: "飞速资源",
        adult: false
    },
    "hongniu2": {
        api: "https://www.hongniuzy2.com/api.php/provide/vod/",
        name: "红牛资源",
        adult: false
    },
    "tiankong": {
        api: "https://api.tiankongapi.com/api.php/provide/vod/",
        name: "天空资源",
        adult: false
    },
    "yilingbaling": {
        api: "https://1080zyk.com/api.php/provide/vod/",
        name: "1080zyk优质资源",
        adult: false
    },
    "jinying": {
        api: "https://jyzyapi.com/api.php/provide/vod/",
        name: "金鹰资源",
        adult: false
    },
    "aosika": {
        api: "https://aosikazy.com/api.php/provide/vod/",
        name: "奥斯卡资源",
        adult: false

    "taopian": {
        api: "https://api.taopianapi.com/api.php/provide/vod/",
        name: "淘片资源",
        adult: false
    },
    "tom": {
        api: "https://api.tomzhibo.com/api.php/provide/vod/",
        name: "tom资源",
        adult: false
    },
    "sanling": {
        api: "https://000zy.com/api.php/provide/vod/",
        name: "三零资源",
        adult: false
    },
    "yangguang": {
        api: "https://api.xxzyapi.com/api.php/provide/vod/",
        name: "阳光资源",
        adult: false
    },
    "yiren": {
        api: "https://yrzyz.com/api.php/provide/vod/",
        name: "伊人资源",
        adult: false
    },
    "tianmao": {
        api: "https://api.tmapi.top/api.php/provide/vod/",
        name: "天猫资源",
        adult: false
    },
    "haiwaikan": {
        api: "https://api.haiwaikan.com/v1/provide/vod/",
        name: "海外看资源",
        adult: false
    }

};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
