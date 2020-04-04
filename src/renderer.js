const Time = require('./src/time.js');
const Event = require('./src/event.js');
const { remote } = require('electron');

// 创建并添加一些事件
let arrEvent = []
{
arrEvent.push(new Event(0, -13800000000, 1, 1, 'The Big Bang', 
'目前最可靠的宇宙大爆炸发生的时间。科学家认为，时间与空间是在此刻形成的。', 10));

arrEvent.push(new Event(1, 1945, 9, 1, '第二次世界大战开始', 
'纳粹德国不管欧洲各国的警告，突袭波兰', 8));

arrEvent.push(new Event(2, 1949, 10, 1, '新中国成立', 
'国民党逃至台湾省后，中国共产党在北京天安门广场宣布成立新中国，名为中华人民共和国。', 10));

arrEvent.push(new Event(10, 1999, 3, 13, 'The Birth of Donny Chan',
'Luu Lay Kim gives birth to Donny Tran (lated renamed to Donny Chan) in a hospital in Arendal in Norway, East-Agder (translated from Ost-Agder, later renamed to Agder), 然后我乱添加一些文字为了测试我的layout他，按时豆腐花生豆腐花奥斯陆顿饭阿斯蒂芬就奥斯陆京东方拉法兰阀ofo爱打架哦as到啊世纪东方拉萨激发四六级分欧萨楼房间爱福家啊两句话万恶浪费哈三联快递费就会回复让我人劳科我看他几十块地方就离开现在凌晨v曾令旭女孩子我去玩呢利润情况杰威尔情况稳定辣三丁欧辰胡正先材料款金正男林纳斯客都汇阿斯利康京东方',
10));

arrEvent.push(new Event(10, 1999, 3, 13, 'The Birth of Donny Chan',
'Luu Lay Kim gives birth to Donny Tran (lated renamed to Donny Chan) in a hospital in Arendal in Norway, East-Agder (translated from Ost-Agder, later renamed to Agder), 然后我乱添加一些文字为了测试我的layout他，按时豆腐花生豆腐花奥斯陆顿饭阿斯蒂芬就奥斯陆京东方拉法兰阀ofo爱打架哦as到啊世纪东方拉萨激发四六级分欧萨楼房间爱福家啊两句话万恶浪费哈三联快递费就会回复让我人劳科我看他几十块地方就离开现在凌晨v曾令旭女孩子我去玩呢利润情况杰威尔情况稳定辣三丁欧辰胡正先材料款金正男林纳斯客都汇阿斯利康京东方',
10));

arrEvent.push(new Event(10, 1999, 3, 13, 'The Birth of Donny Chan',
'Luu Lay Kim gives birth to Donny Tran (lated renamed to Donny Chan) in a hospital in Arendal in Norway, East-Agder (translated from Ost-Agder, later renamed to Agder), 然后我乱添加一些文字为了测试我的layout他，按时豆腐花生豆腐花奥斯陆顿饭阿斯蒂芬就奥斯陆京东方拉法兰阀ofo爱打架哦as到啊世纪东方拉萨激发四六级分欧萨楼房间爱福家啊两句话万恶浪费哈三联快递费就会回复让我人劳科我看他几十块地方就离开现在凌晨v曾令旭女孩子我去玩呢利润情况杰威尔情况稳定辣三丁欧辰胡正先材料款金正男林纳斯客都汇阿斯利康京东方',
10));

arrEvent.push(new Event(7, 2020, 12, 20, '首例新冠状病毒',
'中国迅速确认病毒的基因并向WHO报告，但是疫情仍然扩散极快', 1));

arrEvent.push(new Event(4, 2020, 4, 4, '现在',
'花了很长时间还没写完这么容易的一个app，我真的是太菜了', 1));
}

// 整个app
var app = new Vue({
    el: '#app',
    data: {
        curTime: new Time(2020, 1, 1), // 视图目前显示的时间
        scrollPosY: 0, // 视图目前所在位置坐标（默认初始位置为原点）
        arrEvent: arrEvent, // 所有事件
        isAddingEvent: false, // 是否正在添加事件
    },
    computed: {
        getIsAddingEvent: function(){
            return this.isAddingEvent;
        },
    },
    created: function() { // app创建时调用，目前没用
        console.log("created()"); 
    },
    methods: {
        newTimeline: function() {
            // 创建新的timeline，目前没用
            console.log("new timeline");
        },
        addEvent: function() {
            // 跳出添加事件窗口
            console.log("clicked add event");
            this.isAddingEvent = true;
        },
        cancelAddEvent: function() {
            // 取消添加事件
            console.log("cancel add event");
            this.isAddingEvent = false;
        },
        confirmAddEvent: function() {
            // 确定添加事件
            console.log("confirm add event");
        },
        closeBtnClicked: function(event) { 
            // 退出程序
            var window = remote.getCurrentWindow();
            window.close();
        },
    }
})

// 当用户在event board中滚动滚轮，往上（下）翻
function eventBoardScroll(){
    console.log("scrolling event board");
    if (event.deltaY > 0) { // scroll up
        app.curTime.incrementDay();
        app.scrollPosY++;
    } else {
        app.curTime.decrementDay();
        app.scrollPosY--;
    }

    app.curTime.read();
}