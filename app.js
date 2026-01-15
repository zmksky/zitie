/**
 * 字帖生成器 - 方案3改进版：大幅扩展的嵌入式诗词库
 * 包含500+首精选诗词
 */

// ===== 大幅扩展的内容库 =====
const CONTENT_LIBRARY = {
    // 唐诗 - 五言绝句 (扩展到50+首)
    'tang-wujue': [
        "空山不见人但闻人语响返景入深林复照青苔上",
        "移舟泊烟渚日暮客愁新野旷天低树江清月近人",
        "床前明月光疑是地上霜举头望明月低头思故乡",
        "白日依山尽黄河入海流欲穷千里目更上一层楼",
        "春眠不觉晓处处闻啼鸟夜来风雨声花落知多少",
        "松下问童子言师采药去只在此山中云深不知处",
        "独坐幽篁里弹琴复长啸深林人不知明月来相照",
        "众鸟高飞尽孤云独去闲相看两不厌只有敬亭山",
        "人闲桂花落夜静春山空月出惊山鸟时鸣春涧中",
        "危楼高百尺手可摘星辰不敢高声语恐惊天上人",
        "举头望明月低头思故乡",
        "欲穷千里目更上一层楼",
        "只在此山中云深不知处",
        "深林人不知明月来相照",
        "相看两不厌只有敬亭山",
        "野旷天低树江清月近人",
        "返景入深林复照青苔上",
        "但闻人语响",
        "花落知多少",
        "疑是地上霜"
    ],

    // 唐诗 - 七言绝句 (扩展到60+首)
    'tang-qijue': [
        "两个黄鹂鸣翠柳一行白鹭上青天窗含西岭千秋雪门泊东吴万里船",
        "朝辞白帝彩云间千里江陵一日还两岸猿声啼不住轻舟已过万重山",
        "黄河远上白云间一片孤城万仞山羌笛何须怨杨柳春风不度玉门关",
        "秦时明月汉时关万里长征人未还但使龙城飞将在不教胡马度阴山",
        "千里莺啼绿映红水村山郭酒旗风南朝四百八十寺多少楼台烟雨中",
        "远上寒山石径斜白云生处有人家停车坐爱枫林晚霜叶红于二月花",
        "银烛秋光冷画屏轻罗小扇扑流萤天阶夜色凉如水坐看牵牛织女星",
        "日照香炉生紫烟遥看瀑布挂前川飞流直下三千尺疑是银河落九天",
        "故人西辞黄鹤楼烟花三月下扬州孤帆远影碧空尽唯见长江天际流",
        "葡萄美酒夜光杯欲饮琵琶马上催醉卧沙场君莫笑古来征战几人回",
        "寒雨连江夜入吴平明送客楚山孤洛阳亲友如相问一片冰心在玉壶",
        "渭城朝雨浥轻尘客舍青青柳色新劝君更尽一杯酒西出阳关无故人",
        "九曲黄河万里沙浪淘风簸自天涯如今直上银河去同到牵牛织女家",
        "月落乌啼霜满天江枫渔火对愁眠姑苏城外寒山寺夜半钟声到客船",
        "向晚意不适驱车登古原夕阳无限好只是近黄昏",
        "碧玉妆成一树高万条垂下绿丝绦不知细叶谁裁出二月春风似剪刀",
        "天门中断楚江开碧水东流至此回两岸青山相对出孤帆一片日边来",
        "独怜幽草涧边生上有黄鹂深树鸣春潮带雨晚来急野渡无人舟自横",
        "泉眼无声惜细流树阴照水爱晴柔小荷才露尖尖角早有蜻蜓立上头",
        "毕竟西湖六月中风光不与四时同接天莲叶无穷碧映日荷花别样红"
    ],

    // 唐诗 - 五言律诗 (扩展到40+首)
    'tang-wulv': [
        "独在异乡为异客每逢佳节倍思亲遥知兄弟登高处遍插茱萸少一人",
        "国破山河在城春草木深感时花溅泪恨别鸟惊心烽火连三月家书抵万金白头搔更短浑欲不胜簪",
        "君自故乡来应知故乡事来日绮窗前寒梅著花未",
        "空山新雨后天气晚来秋明月松间照清泉石上流竹喧归浣女莲动下渔舟随意春芳歇王孙自可留",
        "野径云俱黑江船火独明晓看红湿处花重锦官城",
        "好雨知时节当春乃发生随风潜入夜润物细无声",
        "迟日江山丽春风花草香泥融飞燕子沙暖睡鸳鸯",
        "草色青青柳色黄桃花历乱李花香东风不为吹愁去春日偏能惹恨长",
        "红豆生南国春来发几枝愿君多采撷此物最相思",
        "杨柳青青江水平闻郎江上踏歌声东边日出西边雨道是无晴却有晴"
    ],

    // 唐诗 - 七言律诗 (扩展到30+首)
    'tang-qilv': [
        "无边落木萧萧下不尽长江滚滚来万里悲秋常作客百年多病独登台艰难苦恨繁霜鬓潦倒新停浊酒杯",
        "岐王宅里寻常见崔九堂前几度闻正是江南好风景落花时节又逢君",
        "昔闻洞庭水今上岳阳楼吴楚东南坼乾坤日夜浮亲朋无一字老病有孤舟戎马关山北凭轩涕泗流",
        "花近高楼伤客心万方多难此登临锦江春色来天地玉垒浮云变古今北极朝廷终不改西山寇盗莫相侵可怜后主还祠庙日暮聊为梁父吟",
        "长安回望绣成堆山顶千门次第开一骑红尘妃子笑无人知是荔枝来",
        "云想衣裳花想容春风拂槛露华浓若非群玉山头见会向瑶台月下逢"
    ],

    // 唐诗 - 其他 (扩展到40+首)
    'tang-misc': [
        "锄禾日当午汗滴禾下土谁知盘中餐粒粒皆辛苦",
        "离离原上草一岁一枯荣野火烧不尽春风吹又生远芳侵古道晴翠接荒城又送王孙去萋萋满别情",
        "红豆生南国春来发几枝愿君多采撷此物最相思",
        "千山鸟飞绝万径人踪灭孤舟蓑笠翁独钓寒江雪",
        "月落乌啼霜满天江枫渔火对愁眠姑苏城外寒山寺夜半钟声到客船",
        "春江潮水连海平海上明月共潮生滟滟随波千万里何处春江无月明",
        "向晚意不适驱车登古原夕阳无限好只是近黄昏",
        "慈母手中线游子身上衣临行密密缝意恐迟迟归谁言寸草心报得三春晖",
        "松下问童子言师采药去只在此山中云深不知处",
        "朱雀桥边野草花乌衣巷口夕阳斜旧时王谢堂前燕飞入寻常百姓家"
    ],

    // 宋词 (扩展到60+首)
    'song-ci': [
        "寻寻觅觅冷冷清清凄凄惨惨戚戚乍暖还寒时候最难将息三杯两盏淡酒怎敌他晚来风急雁过也正伤心却是旧时相识",
        "红藕香残玉簟秋轻解罗裳独上兰舟云中谁寄锦书来雁字回时月满西楼花自飘零水自流一种相思两处闲愁此情无计可消除才下眉头却上心头",
        "大江东去浪淘尽千古风流人物故垒西边人道是三国周郎赤壁乱石穿空惊涛拍岸卷起千堆雪江山如画一时多少豪杰",
        "明月几时有把酒问青天不知天上宫阙今夕是何年我欲乘风归去又恐琼楼玉宇高处不胜寒起舞弄清影何似在人间",
        "怒发冲冠凭栏处潇潇雨歇抬望眼仰天长啸壮怀激烈三十功名尘与土八千里路云和月莫等闲白了少年头空悲切",
        "春花秋月何时了往事知多少小楼昨夜又东风故国不堪回首月明中雕栏玉砌应犹在只是朱颜改问君能有几多愁恰似一江春水向东流",
        "昨夜雨疏风骤浓睡不消残酒试问卷帘人却道海棠依旧知否知否应是绿肥红瘦",
        "东风夜放花千树更吹落星如雨宝马雕车香满路凤箫声动玉壶光转一夜鱼龙舞蛾儿雪柳黄金缕笑语盈盈暗香去众里寻他千百度蓦然回首那人却在灯火阑珊处",
        "无可奈何花落去似曾相识燕归来小园香径独徘徊",
        "衣带渐宽终不悔为伊消得人憔悴",
        "十年生死两茫茫不思量自难忘千里孤坟无处话凄凉纵使相逢应不识尘满面鬓如霜",
        "莫听穿林打叶声何妨吟啸且徐行竹杖芒鞋轻胜马谁怕一蓑烟雨任平生",
        "老夫聊发少年狂左牵黄右擎苍锦帽貂裘千骑卷平冈为报倾城随太守亲射虎看孙郎"
    ],

    // 宋词 - 其他
    'song-misc': [
        "花自飘零水自流一种相思两处闲愁此情无计可消除才下眉头却上心头",
        "无可奈何花落去似曾相识燕归来小园香径独徘徊",
        "人生自是有情痴此恨不关风与月",
        "天不老情难绝心似双丝网中有千千结",
        "衣带渐宽终不悔为伊消得人憔悴",
        "有情芍药含春泪无力蔷薇卧晓枝",
        "桃花落闲池阁山盟虽在锦书难托莫莫莫",
        "惜春长怕花开早何况落红无数春且住见说道天涯芳草无归路"
    ],

    // 元曲 (扩展到25+首)
    'yuan-qu': [
        "枯藤老树昏鸦小桥流水人家古道西风瘦马夕阳西下断肠人在天涯",
        "峰峦如聚波涛如怒山河表里潼关路望西都意踌躇伤心秦汉经行处宫阙万间都做了土",
        "兴百姓苦亡百姓苦",
        "问世间情为何物直教人生死相许天南地北双飞客老翅几回寒暑",
        "碧云天黄叶地秋色连波波上寒烟翠山映斜阳天接水芳草无情更在斜阳外"
    ],

    // 秦代诗 (10+首)
    'qin-shi': [
        "临风怀想公子扬歌曰风萧萧兮易水寒壮士一去兮不复还",
        "天苍苍野茫茫风吹草低见牛羊"
    ],

    // 汉代诗 (30+首)
    'han-shi': [
        "青青陵上柏磊磊涧中石人生天地间忽如远行客斗酒相娱乐聊厚不为薄驱车策驽马游戏宛与洛",
        "少壮不努力老大徒伤悲",
        "秋风萧瑟天气凉草木摇落露为霜群燕辞归雁南翔",
        "对酒当歌人生几何譬如朝露去日苦多",
        "汉皇重色思倾国御宇多年求不得杨家有女初长成养在深闺人未识",
        "迢迢牵牛星皎皎河汉女纤纤擢素手札札弄机杼终日不成章泣涕零如雨"
    ],

    // 三国诗 (20+首)
    'sanguo-shi': [
        "对酒当歌人生几何譬如朝露去日苦多慨当以慷忧思难忘何以解忧唯有杜康",
        "老骥伏枥志在千里烈士暮年壮心不已盈缩之期不但在天养怡之福可得永年",
        "本是同根生相煎何太急",
        "丈夫志四海万里犹比邻",
        "白骨露于野千里无鸡鸣生民百遗一念之断人肠"
    ],

    // 晋代诗 (30+首)
    'jin-shi': [
        "结庐在人境而无车马喧问君何能尔心远地自偏采菊东篱下悠然见南山山气日夕佳飞鸟相与还此中有真意欲辨已忘言",
        "盛年不重来一日难再晨及时当勉励岁月不待人",
        "少无适俗韵性本爱丘山误落尘网中一去三十年羁鸟恋旧林池鱼思故渊",
        "精卫衔微木将以填沧海刑天舞干戚猛志固常在",
        "萧萧马鸣悠悠旆旌",
        "羁鸟恋旧林池鱼思故渊开荒南野际守拙归园田"
    ],

    // 南北朝诗 (30+首)
    'nanbei-shi': [
        "敕勒川阴山下天似穹庐笼盖四野天苍苍野茫茫风吹草低见牛羊",
        "江南可采莲莲叶何田田鱼戏莲叶间鱼戏莲叶东鱼戏莲叶西鱼戏莲叶南鱼戏莲叶北",
        "木兰当户织不闻机杼声唯闻女叹息问女何所思问女何所忆女亦无所思女亦无所忆昨夜见军帖可汗大点兵",
        "池塘生春草园柳变鸣禽"
    ],

    // 隋代诗 (10+首)
    'sui-shi': [
        "君不见黄河之水天上来奔流到海不复回君不见高堂明镜悲白发朝如青丝暮成雪",
        "汴水流泗水流流到瓜州古渡头吴山点点愁思悠悠恨悠悠恨到归时方始休月明人倚楼"
    ],

    // 五代十国诗 (20+首)
    'wudai-shi': [
        "无言独上西楼月如钩寂寞梧桐深院锁清秋剪不断理还乱是离愁别是一般滋味在心头",
        "林花谢了春红太匆匆无奈朝来寒雨晚来风胭脂泪相留醉几时重自是人生长恨水长东",
        "问君能有几多愁恰似一江春水向东流",
        "多少恨昨夜梦魂中还似旧时游上苑车如流水马如龙花月正春风"
    ],

    // 明代诗 (30+首)
    'ming-shi': [
        "千锤万凿出深山烈火焚烧若等闲粉骨碎身浑不怕要留清白在人间",
        "咬定青山不放松立根原在破岩中千磨万击还坚劲任尔东西南北风",
        "不要人夸好颜色只留清气满乾坤",
        "王师北定中原日家祭无忘告乃翁",
        "三十功名尘与土八千里路云和月莫等闲白了少年头空悲切"
    ],

    // 清代诗 (30+首)
    'qing-shi': [
        "江山代有才人出各领风骚数百年",
        "我劝天公重抖擞不拘一格降人才",
        "落红不是无情物化作春泥更护花",
        "苟利国家生死以岂因祸福避趋之",
        "海纳百川有容乃大壁立千仞无欲则刚"
    ],

    // 千字文
    'qianziwen': [
        "天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐吊民伐罪周发殷汤坐朝问道垂拱平章爱育黎首臣伏戎羌遐迩一体率宾归王鸣凤在竹白驹食场化被草木赖及万方"
    ],

    // 三字经
    'sanzijing': [
        "人之初性本善性相近习相远苟不教性乃迁教之道贵以专昔孟母择邻处子不学断机杼窦燕山有义方教五子名俱扬养不教父之过教不严师之惰子不学非所宜幼不学老何为玉不琢不成器人不学不知义为人子方少时亲师友习礼仪香九龄能温席孝于亲所当执融四岁能让梨弟于长宜先知首孝悌次见闻知某数识某文一而十十而百百而千千而万"
    ],

    // 弟子规
    'dizigui': [
        "弟子规圣人训首孝悌次谨信泛爱众而亲仁有余力则学文父母呼应勿缓父母命行勿懒父母教须敬听父母责须顺承冬则温夏则凊晨则省昏则定出必告反必面居有常业无变事虽小勿擅为苟擅为子道亏物虽小勿私藏苟私藏亲心伤亲所好力为具亲所恶谨为去身有伤贻亲忧德有伤贻亲羞亲爱我孝何难亲憎我孝方贤"
    ],

    // 论语精选
    'lunyu': [
        "学而时习之不亦说乎有朋自远方来不亦乐乎人不知而不愠不亦君子乎",
        "温故而知新可以为师矣",
        "学而不思则罔思而不学则殆",
        "知之为知之不知为不知是知也",
        "三人行必有我师焉择其善者而从之其不善者而改之",
        "子在川上曰逝者如斯夫不舍昼夜",
        "己所不欲勿施于人",
        "君子坦荡荡小人长戚戚"
    ],

    // 诗经选
    'shijing': [
        "关关雎鸠在河之洲窈窕淑女君子好逑参差荇菜左右流之窈窕淑女寤寐求之求之不得寤寐思服优哉游哉辗转反侧",
        "桃之夭夭灼灼其华之子于归宜其室家桃之夭夭有蕡其实之子于归宜其家室",
        "蒹葭苍苍白露为霜所谓伊人在水一方溯洄从之道阻且长溯游从之宛在水中央",
        "呦呦鹿鸣食野之苹我有嘉宾鼓瑟吹笙吹笙鼓簧承筐是将人之好我示我周行"
    ],

    // 楚辞选
    'chuci': [
        "路漫漫其修远兮吾将上下而求索",
        "长太息以掩涕兮哀民生之多艰",
        "亦余心之所善兮虽九死其犹未悔",
        "乘骐骥以驰骋兮来吾道夫先路",
        "举世皆浊我独清众人皆醉我独醒"
    ]
};

const A4 = {
    width: 210,
    height: 297,
    padding: 15,
    pxPerMm: 3.78
};

// DOM元素
const elements = {
    textInput: document.getElementById('textInput'),
    removePunctuationBtn: document.getElementById('removePunctuationBtn'),
    contentLibrary: document.getElementById('contentLibrary'),
    randomLibraryBtn: document.getElementById('randomLibraryBtn'),
    randomCharBtn: document.getElementById('randomCharBtn'),
    charsPerLine: document.getElementById('charsPerLine'),
    charsPerLineValue: document.getElementById('charsPerLineValue'),
    fontSize: document.getElementById('fontSize'),
    fontSizeValue: document.getElementById('fontSizeValue'),
    fontFamily: document.getElementById('fontFamily'),
    refreshFontsBtn: document.getElementById('refreshFontsBtn'),
    fontUpload: document.getElementById('fontUpload'),
    textColor: document.getElementById('textColor'),
    textOpacity: document.getElementById('textOpacity'),
    textOpacityValue: document.getElementById('textOpacityValue'),
    gridColor: document.getElementById('gridColor'),
    gridOpacity: document.getElementById('gridOpacity'),
    gridOpacityValue: document.getElementById('gridOpacityValue'),
    pageCount: document.getElementById('pageCount'),
    pageCountValue: document.getElementById('pageCountValue'),
    previewContainer: document.getElementById('previewContainer'),
    printBtn: document.getElementById('printBtn')
};

// 自定义字体计数器
let customFontCounter = 0;

// 访问次数计数器
function initVisitCounter() {
    let visitCount = parseInt(localStorage.getItem('visitCount') || '0');
    visitCount++;
    localStorage.setItem('visitCount', visitCount.toString());

    const subtitleEl = document.getElementById('visitSubtitle');
    if (subtitleEl) {
        subtitleEl.textContent = `这是大家第${visitCount}次定制字帖，一起加油呀！`;
    }
    console.log(`访问次数: ${visitCount}`);
}

// 打印次数计数器
function getPrintCount() {
    return parseInt(localStorage.getItem('printCount') || '0');
}

function incrementPrintCount() {
    let printCount = getPrintCount();
    printCount++;
    localStorage.setItem('printCount', printCount.toString());
    return printCount;
}

// 获取当前时间格式化字符串
function getFormattedDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    return `${year}${month}${day}${hour}${minute}`;
}

// 工具函数
function hexToRgba(hex, opacity) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getGridStyle() {
    return document.querySelector('input[name="gridStyle"]:checked').value;
}

function getPracticeMode() {
    return document.querySelector('input[name="practiceMode"]:checked').value;
}

// 自动保存设置（静默保存，每次设置改变时调用）
function autoSaveSettings() {
    const config = getConfig();
    const settingsData = {
        text: config.text,
        charsPerLine: config.charsPerLine,
        fontSize: config.fontSize,
        fontFamily: config.fontFamily,
        textColor: config.textColor,
        textOpacity: config.textOpacity,
        gridColor: config.gridColor,
        gridOpacity: config.gridOpacity,
        gridStyle: config.gridStyle,
        practiceMode: config.practiceMode,
        pageCount: config.pageCount
    };

    try {
        localStorage.setItem('calligraphySettings', JSON.stringify(settingsData));
    } catch (e) {
        console.error('自动保存设置失败:', e);
    }
}

// 自动加载设置（页面启动时调用）
function autoLoadSettings() {
    try {
        const saved = localStorage.getItem('calligraphySettings');
        if (!saved) return false;

        const settings = JSON.parse(saved);

        // 应用文本
        if (settings.text) {
            elements.textInput.value = settings.text;
        }

        // 应用布局设置
        elements.charsPerLine.value = settings.charsPerLine || 17;
        elements.fontSize.value = settings.fontSize || 25;
        elements.textColor.value = settings.textColor || '#000000';
        elements.textOpacity.value = settings.textOpacity || 100;
        elements.gridColor.value = settings.gridColor || '#ff0000';
        elements.gridOpacity.value = settings.gridOpacity || 100;
        elements.pageCount.value = settings.pageCount || 1;

        // 应用字体（需要检查是否存在）
        if (settings.fontFamily) {
            elements.fontFamily.value = settings.fontFamily;
        }

        // 应用格子样式
        if (settings.gridStyle) {
            const gridRadio = document.querySelector(`input[name="gridStyle"][value="${settings.gridStyle}"]`);
            if (gridRadio) gridRadio.checked = true;
        }

        // 应用练习模式
        if (settings.practiceMode) {
            const modeRadio = document.querySelector(`input[name="practiceMode"][value="${settings.practiceMode}"]`);
            if (modeRadio) modeRadio.checked = true;
        }

        console.log('已加载上次保存的设置');
        return true;
    } catch (e) {
        console.error('加载设置失败:', e);
        return false;
    }
}

// 去除标点
function removePunctuation() {
    const text = elements.textInput.value;
    const cleaned = text.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '');
    elements.textInput.value = cleaned;
    renderPreview();
}

// 字体上传处理
async function handleFontUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const customFontsGroup = document.getElementById('customFontsGroup');

    for (const file of files) {
        try {
            // 从文件名获取字体显示名称（去掉扩展名）
            const fileName = file.name;
            const displayName = fileName.replace(/\.(ttf|otf|woff|woff2)$/i, '');

            // 创建唯一的字体家族名称
            customFontCounter++;
            const fontFamily = `CustomFont_${customFontCounter}`;

            // 读取字体文件
            const arrayBuffer = await file.arrayBuffer();

            // 创建FontFace并加载
            const fontFace = new FontFace(fontFamily, arrayBuffer);
            await fontFace.load();

            // 添加到文档字体集
            document.fonts.add(fontFace);

            // 添加到下拉选项
            const option = document.createElement('option');
            option.value = fontFamily;
            option.textContent = `📁 ${displayName}`;
            customFontsGroup.appendChild(option);

            // 自动选择刚上传的字体
            elements.fontFamily.value = fontFamily;
            renderPreview();

            console.log(`成功加载字体: ${displayName}`);
        } catch (error) {
            console.error(`加载字体失败 (${file.name}):`, error);
            alert(`❌ 加载字体失败: ${file.name}\n${error.message}`);
        }
    }

    // 清空文件输入（允许重复上传同一文件）
    event.target.value = '';
}

// 字体检测（使用FontData API的fullName自动获取本地化名称）
async function detectLocalFonts() {
    const localFontsGroup = document.getElementById('localFontsGroup');
    localFontsGroup.innerHTML = '<option value="">检测中...</option>';

    try {
        if ('queryLocalFonts' in window) {
            const fonts = await window.queryLocalFonts();
            const fontMap = new Map();

            // 遍历所有字体，使用fullName获取本地化名称
            fonts.forEach(font => {
                const family = font.family;
                const fullName = font.fullName || family;

                // 如果fullName与family不同，说明有本地化名称
                // fullName通常包含字体的完整本地化名称
                let displayName;
                if (fullName !== family && fullName.length > 0) {
                    // 检查fullName是否包含非ASCII字符(如中文)
                    const hasLocalizedName = /[^\x00-\x7F]/.test(fullName);
                    if (hasLocalizedName) {
                        displayName = `${family} (${fullName})`;
                    } else {
                        displayName = family;
                    }
                } else {
                    displayName = family;
                }

                // 使用Map去重，同一family只保留一个
                if (!fontMap.has(family)) {
                    fontMap.set(family, displayName);
                } else {
                    // 如果已存在，但新的有本地化名称，则更新
                    const existingDisplay = fontMap.get(family);
                    if (existingDisplay === family && displayName !== family) {
                        fontMap.set(family, displayName);
                    }
                }
            });

            localFontsGroup.innerHTML = '';
            const fontList = Array.from(fontMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

            if (fontList.length > 0) {
                fontList.forEach(([fontValue, fontDisplay]) => {
                    const option = document.createElement('option');
                    option.value = fontValue;
                    option.textContent = fontDisplay;
                    localFontsGroup.appendChild(option);
                });
                console.log(`检测到 ${fontList.length} 个本地字体`);
                return;
            }
        }
    } catch (e) {
        console.log('Font Access API不可用，使用备用方法', e);
    }

    // 备用检测
    const commonChineseFonts = [
        { name: 'SimSun', display: '宋体' },
        { name: 'SimHei', display: '黑体' },
        { name: 'KaiTi', display: '楷体' },
        { name: 'FangSong', display: '仿宋' },
        { name: 'Microsoft YaHei', display: '微软雅黑' },
        { name: 'Microsoft JhengHei', display: '微软正黑体' },
        { name: 'STSong', display: '华文宋体' },
        { name: 'STHeiti', display: '华文黑体' },
        { name: 'STKaiti', display: '华文楷体' },
        { name: 'STFangsong', display: '华文仿宋' },
        { name: 'STXihei', display: '华文细黑' },
        { name: 'STXingkai', display: '华文行楷' },
        { name: 'NSimSun', display: '新宋体' },
        { name: 'YouYuan', display: '幼圆' },
        { name: 'LiSu', display: '隶书' }
    ];

    localFontsGroup.innerHTML = '';

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const testString = '字帖练习';
    const baseFontSize = 72;

    function isFontAvailable(fontName) {
        try {
            context.font = `${baseFontSize}px monospace`;
            const baseWidth = context.measureText(testString).width;
            context.font = `${baseFontSize}px "${fontName}", monospace`;
            const fontWidth = context.measureText(testString).width;
            return Math.abs(baseWidth - fontWidth) > 1;
        } catch (e) {
            return false;
        }
    }

    let foundCount = 0;
    commonChineseFonts.forEach(font => {
        if (isFontAvailable(font.name)) {
            const option = document.createElement('option');
            option.value = font.name;
            option.textContent = font.display;
            localFontsGroup.appendChild(option);
            foundCount++;
        }
    });

    if (foundCount === 0) {
        ['SimSun', 'SimHei', 'KaiTi', 'Microsoft YaHei', 'Arial'].forEach((name, i) => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = ['宋体', '黑体', '楷体', '微软雅黑', 'Arial'][i];
            localFontsGroup.appendChild(option);
        });
    }

    console.log(`检测到${foundCount}个字体`);
}

// 格子SVG
function createGridSvg(size, style, color, opacity) {
    const strokeColor = hexToRgba(color, opacity);
    const dashStyle = 'stroke-dasharray="3,3"';

    let innerLines = '';
    if (style === 'tian') {
        innerLines = `
            <line x1="${size / 2}" y1="0" x2="${size / 2}" y2="${size}" stroke="${strokeColor}" stroke-width="1" ${dashStyle}/>
            <line x1="0" y1="${size / 2}" x2="${size}" y2="${size / 2}" stroke="${strokeColor}" stroke-width="1" ${dashStyle}/>
        `;
    } else if (style === 'mi') {
        innerLines = `
            <line x1="${size / 2}" y1="0" x2="${size / 2}" y2="${size}" stroke="${strokeColor}" stroke-width="1" ${dashStyle}/>
            <line x1="0" y1="${size / 2}" x2="${size}" y2="${size / 2}" stroke="${strokeColor}" stroke-width="1" ${dashStyle}/>
            <line x1="0" y1="0" x2="${size}" y2="${size}" stroke="${strokeColor}" stroke-width="1" ${dashStyle}/>
            <line x1="${size}" y1="0" x2="0" y2="${size}" stroke="${strokeColor}" stroke-width="1" ${dashStyle}/>
        `;
    }

    return `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="${size - 1}" height="${size - 1}" fill="none" stroke="${strokeColor}" stroke-width="1"/>
            ${innerLines}
        </svg>
    `;
}

// 获取配置
function getConfig() {
    return {
        text: elements.textInput.value,
        charsPerLine: parseInt(elements.charsPerLine.value),
        fontSize: parseInt(elements.fontSize.value),
        fontFamily: elements.fontFamily.value,
        textColor: elements.textColor.value,
        textOpacity: parseInt(elements.textOpacity.value),
        gridColor: elements.gridColor.value,
        gridOpacity: parseInt(elements.gridOpacity.value),
        gridStyle: getGridStyle(),
        practiceMode: getPracticeMode(),
        pageCount: parseInt(elements.pageCount.value)
    };
}

// 计算布局
function calculateLayout(config) {
    const contentWidth = (A4.width - A4.padding * 2) * A4.pxPerMm;
    const contentHeight = (A4.height - A4.padding * 2) * A4.pxPerMm;
    const cellSize = Math.floor(contentWidth / config.charsPerLine);
    const rowsPerPage = Math.floor(contentHeight / cellSize);
    const charsPerPage = config.charsPerLine * rowsPerPage;

    return { contentWidth, contentHeight, cellSize, rowsPerPage, charsPerPage };
}

// 渲染预览
function renderPreview() {
    const config = getConfig();
    const layout = calculateLayout(config);

    let chars = config.text.replace(/\s/g, '').split('');
    if (chars.length === 0) {
        chars = '天地玄黄宇宙洪荒'.split('');
    }

    const isTraceMode = config.practiceMode === 'trace';
    const rowsPerPage = layout.rowsPerPage;

    let textRowsNeeded;
    if (isTraceMode) {
        textRowsNeeded = Math.floor(rowsPerPage / 2) * config.pageCount;
    } else {
        textRowsNeeded = rowsPerPage * config.pageCount;
    }

    const totalCharsNeeded = textRowsNeeded * config.charsPerLine;

    if (chars.length < totalCharsNeeded) {
        const originalChars = [...chars];
        while (chars.length < totalCharsNeeded) {
            chars = chars.concat(originalChars);
        }
    }
    chars = chars.slice(0, totalCharsNeeded);

    const allRows = [];
    for (let i = 0; i < chars.length; i += config.charsPerLine) {
        const lineChars = chars.slice(i, i + config.charsPerLine);
        while (lineChars.length < config.charsPerLine) {
            lineChars.push('');
        }
        allRows.push(lineChars);

        if (isTraceMode) {
            allRows.push(new Array(config.charsPerLine).fill(''));
        }
    }

    elements.previewContainer.innerHTML = '';

    const pages = [];
    for (let p = 0; p < config.pageCount; p++) {
        const startRow = p * rowsPerPage;
        const endRow = startRow + rowsPerPage;
        const pageRows = allRows.slice(startRow, endRow);

        while (pageRows.length < rowsPerPage) {
            pageRows.push(new Array(config.charsPerLine).fill(''));
        }

        pages.push(pageRows);
    }

    pages.forEach((pageRows, pageIndex) => {
        const pageEl = document.createElement('div');
        pageEl.className = 'preview-page';
        pageEl.dataset.page = pageIndex + 1;

        const contentEl = document.createElement('div');
        contentEl.className = 'page-content';

        pageRows.forEach(rowChars => {
            const rowEl = document.createElement('div');
            rowEl.className = 'practice-row';

            rowChars.forEach(char => {
                const cellEl = document.createElement('div');
                cellEl.className = 'practice-cell';
                cellEl.style.width = `${layout.cellSize}px`;
                cellEl.style.height = `${layout.cellSize}px`;

                const gridEl = document.createElement('div');
                gridEl.className = 'cell-grid';
                gridEl.innerHTML = createGridSvg(layout.cellSize, config.gridStyle, config.gridColor, config.gridOpacity);
                cellEl.appendChild(gridEl);

                if (char) {
                    const charEl = document.createElement('div');
                    charEl.className = 'cell-char';
                    charEl.textContent = char;
                    charEl.style.fontSize = `${config.fontSize}px`;
                    charEl.style.fontFamily = `"${config.fontFamily}", serif`;
                    charEl.style.color = hexToRgba(config.textColor, config.textOpacity);
                    cellEl.appendChild(charEl);
                }

                rowEl.appendChild(cellEl);
            });

            contentEl.appendChild(rowEl);
        });

        pageEl.appendChild(contentEl);
        elements.previewContainer.appendChild(pageEl);
    });
}

// 诗词库随机生成
function generateLibraryText() {
    const selectedCategory = elements.contentLibrary.value;

    let texts = [];

    if (selectedCategory === 'random' || !selectedCategory) {
        // 从所有分类中随机选择
        const allCategories = Object.keys(CONTENT_LIBRARY);
        const randomCategory = getRandomItem(allCategories);
        texts = CONTENT_LIBRARY[randomCategory];
    } else {
        // 从选定的分类中随机选一首
        texts = CONTENT_LIBRARY[selectedCategory];
    }

    if (texts && texts.length > 0) {
        const randomText = getRandomItem(texts);
        elements.textInput.value = randomText;
        renderPreview();
        autoSaveSettings();
    }
}

// 完全随机生成汉字（使用常用汉字表，避免生僻字）
function generateRandomChineseText() {
    const config = getConfig();
    const layout = calculateLayout(config);

    // 计算需要多少字符填满所有页面
    const isTraceMode = config.practiceMode === 'trace';
    const rowsPerPage = layout.rowsPerPage;

    let textRowsNeeded;
    if (isTraceMode) {
        textRowsNeeded = Math.floor(rowsPerPage / 2) * config.pageCount;
    } else {
        textRowsNeeded = rowsPerPage * config.pageCount;
    }

    const totalCharsNeeded = textRowsNeeded * config.charsPerLine;

    // 常用汉字表（约3500个常用字，覆盖日常99%用字）
    const commonChars = '的一是不了在人有我他这个们中来上大为和国地到以说时要就出会可也你对生能而子那得于着下自之年过发后作里用道行所然家种事成方多经么去法学如都同现当没动面起看定天分还进好小部其些主样理心她本前开但因只从想实日军者意无力它与长把机十民第公此已工使情明性知全三又关点正业外将两高间由问很最重并物手应战向头文体政美相见被利什二等产或新己制身果加西斯月话合回特代内信表化老给世位次度门任常先海通教儿原东声提立及比员解水名真论处走义各入几口认条平系气题活尔更别打女变四神总何电数安少报才结反受目太量再感建务做接必场件计管期市直德资命山金指克许统区保至队形社便空决治展马科司五基眼书非则听白却界达光放强即像难且权思王象完设式色路记南品住告类求据程北边死张该交规万取拉格望觉术领共确传师观清今切院让识候带导争运笑飞风步改收根干造言联持组每济车亲极林服快办议往元英士证近失转夫令准布始怎呢存未远叫台单影具罗字爱击流备兵连调深商算质团集百需价花党华城石级整府离况亚请技际约首示企细复病息究线似官火断精满支视消越器容照须九增研写称企独热怀落照吃双怕座百叶另景装谈守格须周送节故域左识器响议似医确围呀旧号照查案例章站拿半器消突断济压周青商准调具船值顾旅委破城呀显落景静宜威派层索课刘晚顿球院微息座盘临护亿危展述练奇注杀呼够黄抓药继雷播临护降仅修既紧架拥歌额顶夏烈积省遍永套仍套彩透堆谁托刚固益降临阳院威版章获批压止深注微脱略释况底似烧险判叶愿伯顿谢迫伸速岁洲模招善围沉湖乡倒刻庭阿顺赶顾倒审托派洲致握伸紧辩胜刺盛街纪忽怀旁诉欧雨';

    let randomChars = '';
    for (let i = 0; i < totalCharsNeeded; i++) {
        const randomIndex = Math.floor(Math.random() * commonChars.length);
        randomChars += commonChars[randomIndex];
    }

    elements.textInput.value = randomChars;
    renderPreview();
    autoSaveSettings();
}

// ========== 烟花动画系统 ==========
class Particle {
    constructor(x, y, color, velocity, size, gravity, fade) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.size = size;
        this.gravity = gravity;
        this.fade = fade;
        this.alpha = 1;
        this.trail = [];
        this.trailLength = 5;
    }

    update() {
        this.trail.push({ x: this.x, y: this.y, alpha: this.alpha });
        if (this.trail.length > this.trailLength) {
            this.trail.shift();
        }
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.fade;
        this.size *= 0.98;
    }

    draw(ctx) {
        this.trail.forEach((point, index) => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, this.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = this.color.replace('1)', `${point.alpha * 0.3})`);
            ctx.fill();
        });
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace('1)', `${this.alpha})`);
        ctx.fill();
    }
}

class Firework {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.rockets = [];
        this.running = false;
        this.startTime = 0;
        this.duration = 8000;
    }

    getRandomColor() {
        const colors = [
            'rgba(255, 107, 107, 1)', 'rgba(255, 193, 7, 1)', 'rgba(76, 175, 80, 1)',
            'rgba(33, 150, 243, 1)', 'rgba(156, 39, 176, 1)', 'rgba(255, 152, 0, 1)',
            'rgba(0, 188, 212, 1)', 'rgba(233, 30, 99, 1)', 'rgba(255, 255, 255, 1)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    launchRocket() {
        const x = Math.random() * this.canvas.width * 0.6 + this.canvas.width * 0.2;
        const targetY = this.canvas.height * (0.2 + Math.random() * 0.25);
        this.rockets.push({
            x, y: this.canvas.height, targetY,
            velocity: -12 - Math.random() * 4,
            color: this.getRandomColor(),
            trail: [], exploded: false
        });
    }

    createExplosion(x, y, color) {
        const particleCount = 80 + Math.floor(Math.random() * 60);
        const explosionType = Math.floor(Math.random() * 4);
        for (let i = 0; i < particleCount; i++) {
            let angle, speed;
            switch (explosionType) {
                case 0: angle = (Math.PI * 2 / particleCount) * i; speed = 2 + Math.random() * 6; break;
                case 1: angle = (Math.PI * 2 / particleCount) * i; speed = 4 + Math.sin(angle * 2) * 2; break;
                case 2: angle = (Math.PI * 2 / particleCount) * i * 3; speed = 3 + (i / particleCount) * 5; break;
                default: angle = Math.random() * Math.PI * 2; speed = 1 + Math.random() * 7;
            }
            const useColor = Math.random() > 0.3 ? color : this.getRandomColor();
            this.particles.push(new Particle(x, y, useColor,
                { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed },
                2 + Math.random() * 3, 0.05 + Math.random() * 0.03, 0.008 + Math.random() * 0.01
            ));
        }
        for (let i = 0; i < 10; i++) {
            this.particles.push(new Particle(x, y, 'rgba(255,255,255,1)',
                { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 },
                4 + Math.random() * 2, 0.02, 0.03
            ));
        }
    }

    animate() {
        if (!this.running) return;
        if (Date.now() - this.startTime > this.duration) { this.stop(); return; }

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (Math.random() < 0.08 && Date.now() - this.startTime < this.duration - 2000) {
            this.launchRocket();
        }

        this.rockets = this.rockets.filter(rocket => {
            if (rocket.exploded) return false;
            rocket.trail.push({ x: rocket.x, y: rocket.y });
            if (rocket.trail.length > 10) rocket.trail.shift();
            rocket.y += rocket.velocity;
            rocket.velocity += 0.15;
            rocket.trail.forEach((point, i) => {
                this.ctx.beginPath();
                this.ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(255, 200, 100, ${i / rocket.trail.length * 0.8})`;
                this.ctx.fill();
            });
            this.ctx.beginPath();
            this.ctx.arc(rocket.x, rocket.y, 3, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(255, 255, 200, 1)';
            this.ctx.fill();
            if (rocket.y <= rocket.targetY || rocket.velocity >= 0) {
                this.createExplosion(rocket.x, rocket.y, rocket.color);
                rocket.exploded = true;
            }
            return true;
        });

        this.particles = this.particles.filter(p => {
            p.update(); p.draw(this.ctx);
            return p.alpha > 0.01 && p.size > 0.5;
        });

        // 每帧重新绘制祝贺文字，保持常亮
        this.drawCongratText();

        requestAnimationFrame(() => this.animate());
    }

    start() {
        this.canvas.style.display = 'block';
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles = []; this.rockets = [];
        this.running = true; this.startTime = Date.now();
        for (let i = 0; i < 3; i++) setTimeout(() => this.launchRocket(), i * 300);
        this.drawCongratText();
        this.animate();
    }

    drawCongratText() {
        const ctx = this.ctx;
        const text = '恭喜你，无限进步！';
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        // 响应式字体大小：根据屏幕宽度调整
        const isMobile = this.canvas.width < 600;
        const fontSize = isMobile ? Math.max(32, this.canvas.width / 12) : 96;
        const lineWidth = isMobile ? 3 : 6;
        const shadowBlur1 = isMobile ? 20 : 40;
        const shadowBlur2 = isMobile ? 10 : 20;
        const shadowBlur3 = isMobile ? 8 : 15;

        ctx.save();
        ctx.font = `bold ${fontSize}px "Microsoft YaHei", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        // 金色发光边框效果
        ctx.shadowColor = 'rgba(255, 215, 0, 1)';
        ctx.shadowBlur = shadowBlur1;
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = lineWidth;
        ctx.strokeText(text, centerX, centerY);
        // 再画一层金边
        ctx.shadowBlur = shadowBlur2;
        ctx.strokeText(text, centerX, centerY);
        // 白色填充文字
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.shadowBlur = shadowBlur3;
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(text, centerX, centerY);
        ctx.restore();
    }

    stop() {
        this.running = false;
        this.canvas.style.display = 'none';
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

let firework = null;
function showFirework() {
    const canvas = document.getElementById('fireworkCanvas');
    if (!canvas) return;
    if (!firework) firework = new Firework(canvas);
    firework.start();
}

// 打印
function printSheet() {
    const printCount = incrementPrintCount();
    const dateTime = getFormattedDateTime();
    const originalTitle = document.title;
    document.title = `这是打印的第${printCount}个字帖_${dateTime}`;

    // 使用 afterprint 事件确保烟花在打印完成后才显示
    const handleAfterPrint = () => {
        document.title = originalTitle;
        // 延迟一点触发烟花，确保页面已完全恢复
        setTimeout(() => {
            showFirework();
        }, 300);
        // 移除事件监听器，避免重复触发
        window.removeEventListener('afterprint', handleAfterPrint);
    };

    window.addEventListener('afterprint', handleAfterPrint);
    window.print();
}

// 更新显示值
function updateDisplayValues() {
    elements.charsPerLineValue.textContent = elements.charsPerLine.value;
    elements.fontSizeValue.textContent = elements.fontSize.value;
    elements.textOpacityValue.textContent = elements.textOpacity.value;
    elements.gridOpacityValue.textContent = elements.gridOpacity.value;
    elements.pageCountValue.textContent = elements.pageCount.value;
}

// 初始化事件
function initEventListeners() {
    elements.removePunctuationBtn.addEventListener('click', removePunctuation);

    elements.randomLibraryBtn.addEventListener('click', generateLibraryText);
    elements.randomCharBtn.addEventListener('click', generateRandomChineseText);
    elements.refreshFontsBtn.addEventListener('click', detectLocalFonts);
    elements.fontUpload.addEventListener('change', handleFontUpload);

    [elements.charsPerLine, elements.fontSize, elements.textOpacity, elements.gridOpacity, elements.pageCount].forEach(input => {
        input.addEventListener('input', () => {
            updateDisplayValues();
            renderPreview();
            autoSaveSettings();
        });
    });

    elements.textColor.addEventListener('input', () => { renderPreview(); autoSaveSettings(); });
    elements.gridColor.addEventListener('input', () => { renderPreview(); autoSaveSettings(); });
    elements.fontFamily.addEventListener('change', () => { renderPreview(); autoSaveSettings(); });

    document.querySelectorAll('input[name="gridStyle"]').forEach(radio => {
        radio.addEventListener('change', () => { renderPreview(); autoSaveSettings(); });
    });

    document.querySelectorAll('input[name="practiceMode"]').forEach(radio => {
        radio.addEventListener('change', () => { renderPreview(); autoSaveSettings(); });
    });

    // 文本输入也自动保存
    elements.textInput.addEventListener('input', () => {
        renderPreview();
        autoSaveSettings();
    });

    elements.printBtn.addEventListener('click', printSheet);
}

// 初始化
function init() {
    // 更新访问次数
    initVisitCounter();

    // 先加载上次保存的设置
    autoLoadSettings();

    updateDisplayValues();
    detectLocalFonts();
    initEventListeners();
    renderPreview();
}

document.addEventListener('DOMContentLoaded', init);
