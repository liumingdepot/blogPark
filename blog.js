$.awesCnb({
    //主题
    theme: {
        name: 'reacg',
        color: '#409EFF',
        title: '刘铭的博客',
        avatar: 'http://img5.imgtn.bdimg.com/it/u=3103931304,1835423043&fm=26&gp=0.jpg',
        headerBackground: 'https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg',
        contentSize: 'max'
    },
    // 照片
    imagebox: {
        enable: true,
    },
    // 暗黑模式
    darkMode: {
        enable: true,
        autoDark: false,
        autoLight: false
    },
    //签名
    signature: {
        enable: false,
        contents: [
            '所爱隔山海，山海不可平',
            '海上月是天上月，眼前人是心上人'
        ],
    },
    //二维码
    qrcode: {
        enable: true,
        img: '',
        desc: '微信号',
    },
    //背景
    bodyBackground: {
        enable: false,
        type: 'img', //'color' 'img'
        value: 'https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg',
        opacity: 1,
        repeat: false,
    },
    //首页列表图片
    indexListImg: {
        enable: true,
        imgs: [],
    },
    //文章头图
    postTopimage: {
        enable: true,
        imgs: [],
    },
    //文章尾图
    postBottomimage: {
        enable: false,
        img: '',
        height: ''
    },
    //同志
    notice: {
        enable: true,
        text: ['🔯双击导航条锁屏', '🙃快去自定义通知吧'],
    },
    //锁屏
    lock: {
        enable: true,
        background: '',
        strings: [
            '<i>Powered by</i> webpack.',
            '&amp; Theme in awescnb',
            '快去自定义你的个性签名吧~',
        ],
    },
    //模型
    live2d: {
        enable: true,
        page: 'all',
        agent: 'pc',
        model: 'haru-01',
        width: 150,
        height: 200,
        position: 'left',
        gap: 'default', // 边距
    },
    //点击特效
    click: {
        enable: true,
        auto: false,
        colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
        size: 30,
        maxCount: 50,
    },
    //头部进度条
    topProgress: {
        enable: false,
        page: 'all',
        agent: 'pc',
        background: '#409EFF',
        height: '5px',
    },
    // GitHub
    github: {
        enable: true,
        color: '#ffb3cc',
        url: 'https://github.com/liumingdepot',
    },
    gitee: {
        enable: true,
        color: '#C71D23',
        url: 'https://gitee.com/www_liuming',
    },
    //代码高亮
    highLight: {
        type: 'atomOneDark',
    },
    lineNumbers: {
        enable: true,
    },
    //文章目录
    catalog: {
        enable: true,
        position: 'left',
    },
    //返回顶部
    back2top: {
        enable: true,
        type: 'complex',
    },
    //按钮工具
    tools: {
        enable: true,
        initialOpen: true,
        draggable: false,
    },
    // 打赏
    donation: {
        enable: true,
        qrcodes: [],
    },
    //弹幕
    barrage: {
        enable: true,
        opacity: 0.6,
        colors: [
            '#FE0302',
            '#FF7204',
            '#FFAA02',
            '#FFD302',
            '#FFFF00',
            '#A0EE00',
            '#00CD00',
            '#019899',
            '#4266BE',
            '#89D5FF',
            '#CC0273',
            '#CC0273',
        ],
        barrages: [],//全局弹幕
        indexBarrages: [],//首页弹幕
        postPageBarrages: [],//随笔页弹幕
    },
    //底部链接
    links: [
        {
            name: 'awescnb',
            link: 'https://gitee.com/guangzan/awescnb',
        },
    ],
});
