// 分類與 emoji 對照表
const categoryEmojis = {
    "豬肉類": "🐷",
    "雞肉類": "🐔",
    "牛肉類": "🐂",
    "海鮮類": "🐟",
    "餅.pizza.麵包": "🥯",
    "餃類": "🥟",
    "鐵板麵": "🍝",
    "飲品": "🥤",
    "奶製品": "🥛",
    "熱門商品": "🔥",
    "果醬": "🍯",
    "堅果": "🥜",
};

const items = [
    {
        category: ["豬肉類"],
        model: "1-00001",
        name: "鮮到味漢堡肉20粒",
        unit: "盒",
        groupPrice: 155,
        retailPrice: 170,
        storage: "冷凍",
        photo: "https://i.postimg.cc/kXQJtzF4/image.jpg"
    },
    {
        category: ["牛肉類"],
        model: "1-00002",
        name: "正點牛肉堡10片",
        unit: "包",
        groupPrice: 205,
        retailPrice: 225,
        storage: "冷凍",
        photo: "https://i.postimg.cc/Kjy0RC9b/image.jpg"
    },
    {
        category: ["豬肉類", "熱門商品"],
        model: "1-00003",
        name: "鮮到味原味豬排1kg",
        unit: "盒",
        groupPrice: 255,
        retailPrice: 280,
        storage: "冷凍",
        photo: "https://i.postimg.cc/KjH49hdS/image.png"
    },
    {
        category: ["豬肉類"],
        model: "1-00006",
        name: "東芳全肉火腿3kg",
        unit: "條",
        groupPrice: 765,
        retailPrice: 835,
        storage: "冷凍",
        photo: "https://i.postimg.cc/XY21QHvK/image.jpg"
    },
    {
        category: ["豬肉類"],
        model: "1-00007",
        name: "東芳大火腿3kg",
        unit: "條",
        groupPrice: 500,
        retailPrice: 525,
        storage: "冷凍",
        photo: "https://i.postimg.cc/XY21QHvK/image.jpg"
    },
    {
        category: ["豬肉類"],
        model: "1-00008",
        name: "東芳小火腿1.8kg",
        unit: "條",
        groupPrice: 285,
        retailPrice: 305,
        storage: "冷凍",
        photo: "https://i.postimg.cc/XY21QHvK/image.jpg"
    },
    {
        category: ["豬肉類"],
        model: "1-00009",
        name: "東芳熱狗9mm/100入",
        unit: "包",
        groupPrice: 305,
        retailPrice: 335,
        storage: "冷凍",
        photo: "https://i.postimg.cc/W4GFsKJg/image.jpg"
    },
    {
        category: ["豬肉類"],
        model: "1-00010",
        name: "東芳培根0.6kg",
        unit: "包",
        groupPrice: 215,
        retailPrice: 235,
        storage: "冷凍",
        photo: "https://i.postimg.cc/pTvj8xts/image.jpg"
    },
    {
        category: ["海鮮類"],
        model: "1-00015",
        name: "鮮蝦排10片",
        unit: "包",
        groupPrice: 150,
        retailPrice: 165,
        storage: "冷凍",
        photo: "https://i.postimg.cc/26H56fjb/鮮蝦.jpg"
    },
    {
        category: ["海鮮類"],
        model: "1-00016",
        name: "花枝排10片",
        unit: "包",
        groupPrice: 150,
        retailPrice: 165,
        storage: "冷凍",
        photo: "https://i.postimg.cc/c1mRRKCw/image.jpg"
    },
    {
        category: ["海鮮類"],
        model: "1-00017",
        name: "魚排堡20片",
        unit: "盒",
        groupPrice: 260,
        retailPrice: 285,
        storage: "冷凍",
        photo: "https://i.postimg.cc/ncWQ2qJj/魚.jpg"
    },
    {
        category: ["雞肉類"],
        model: "1-00018",
        name: "雞腿排1kg",
        unit: "包",
        groupPrice: 295,
        retailPrice: 325,
        storage: "冷凍",
        photo: "https://i.postimg.cc/SKdSTpMT/雞腿排1.jpg"
    },
    {
        category: ["雞肉類"],
        model: "1-00019",
        name: "正點燻雞肉絲1kg",
        unit: "包",
        groupPrice: 270,
        retailPrice: 305,
        storage: "冷凍",
        photo: "https://i.postimg.cc/wMKz1Q1L/image.png"
    },
    {
        category: ["雞肉類"],
        model: "1-00020",
        name: "菲力雞排14片",
        unit: "盒",
        groupPrice: 250,
        retailPrice: 275,
        storage: "冷凍",
        photo: "https://i.postimg.cc/2j2WqP9x/image.jpg"
    },
    {
        category: ["雞肉類", "熱門商品"],
        model: "1-00023",
        name: "紐奧良雞腿排10入",
        unit: "包",
        groupPrice: 235,
        retailPrice: 250,
        storage: "冷凍",
        photo: "https://i.postimg.cc/NMYpJy2m/image.png"
    },
    {
        category: ["雞肉類"],
        model: "1-00024",
        name: "韓式雞腿12入",
        unit: "包",
        groupPrice: 290,
        retailPrice: 315,
        storage: "冷凍",
        photo: "https://i.postimg.cc/mryDvH0S/韓_式.jpg"
    },
    {
        category: ["雞肉類", "熱門商品"],
        model: "1-00026",
        name: "(原)卡啦雞腿10入",
        unit: "包",
        groupPrice: 255,
        retailPrice: 270,
        storage: "冷凍",
        photo: "https://i.postimg.cc/15W28KnT/2.jpg"
    },
    {
        category: ["雞肉類"],
        model: "1-00027",
        name: "(辣)卡啦雞腿10入",
        unit: "包",
        groupPrice: 255,
        retailPrice: 270,
        storage: "冷凍",
        photo: "https://i.postimg.cc/15W28KnT/2.jpg"
    },
    {
        category: ["雞肉類", "熱門商品"],
        model: "1-00087",
        name: "銷魂雞塊1kg",
        unit: "包",
        groupPrice: 190,
        retailPrice: 260,
        storage: "冷凍",
        photo: "https://i.postimg.cc/NfKKKLHg/image.png"
    },
    {
        category: ["雞肉類"],
        model: "1-00040",
        name: "卜蜂無骨雞米花1kg",
        unit: "包",
        groupPrice: 240,
        retailPrice: 260,
        storage: "冷凍",
        photo: "https://i.postimg.cc/kgrgDsCc/雞米花.jpg"
    },
    {
        category: ["雞肉類"],
        model: "1-00041",
        name: "紅龍檸檬雞柳1kg",
        unit: "包",
        groupPrice: 185,
        retailPrice: 200,
        storage: "冷凍",
        photo: "https://i.postimg.cc/g22CkTg1/1.jpg"
    },
    {
        category: ["雞肉類"],
        model: "1-00042",
        name: "正點雞球1kg",
        unit: "包",
        groupPrice: 185,
        retailPrice: 200,
        storage: "冷凍",
        photo: "https://i.postimg.cc/Hn5pzPq6/image.png"
    },
    {
        category: ["雞肉類"],
        model: "1-00043",
        name: "正點香香雞1kg",
        unit: "包",
        groupPrice: 220,
        retailPrice: 240,
        storage: "冷凍",
        photo: "https://i.postimg.cc/7ZCSrmVn/香香雞.jpg"
    },
    {
        category: ["餅.pizza.麵包", "熱門商品"],
        model: "1-00011",
        name: "鮮到味蛋餅皮(原味)30片",
        unit: "包",
        groupPrice: 105,
        retailPrice: 110,
        storage: "冷凍",
        photo: "https://i.postimg.cc/HnZ8fy8N/2.jpg"
    },
    {
        category: ["餅.pizza.麵包", "熱門商品"],
        model: "1-00012",
        name: "鮮到味蛋餅皮(青蔥)30片",
        unit: "包",
        groupPrice: 105,
        retailPrice: 110,
        storage: "冷凍",
        photo: "https://i.postimg.cc/HnZ8fy8N/2.jpg"
    },
    {
        category: ["餅.pizza.麵包", "熱門商品"],
        model: "1-00012-1",
        name: "鮮到味蛋餅皮(原味)10片",
        unit: "包",
        groupPrice: 39,
        retailPrice: 49,
        storage: "冷凍",
        photo: "https://i.postimg.cc/HnZ8fy8N/2.jpg"
    },
    {
        category: ["餅.pizza.麵包", "熱門商品"],
        model: "1-00012-2",
        name: "鮮到味蛋餅皮(青蔥)10片",
        unit: "包",
        groupPrice: 39,
        retailPrice: 49,
        storage: "冷凍",
        photo: "https://i.postimg.cc/HnZ8fy8N/2.jpg"
    },
    {
        category: ["餅.pizza.麵包", "熱門商品"],
        model: "1-00030",
        name: "(鮮)蔥酥餅10片",
        unit: "包",
        groupPrice: 105,
        retailPrice: 115,
        storage: "冷凍",
        photo: "https://i.postimg.cc/dVJqR649/image.jpg"
    },
    {
        category: ["餅.pizza.麵包", "熱門商品"],
        model: "1-00031",
        name: "千層三星蔥餅5片",
        unit: "包",
        groupPrice: 115,
        retailPrice: 115,
        storage: "冷凍",
        photo: "https://i.postimg.cc/GpH7NFBW/image.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00032",
        name: "地瓜拉餅5片",
        unit: "包",
        groupPrice: 105,
        retailPrice: 115,
        storage: "冷凍",
        photo: "https://i.postimg.cc/PJhMtYxr/1.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00033",
        name: "蔥肉拉餅5片",
        unit: "包",
        groupPrice: 115,
        retailPrice: 115,
        storage: "冷凍",
        photo: "https://i.postimg.cc/qRQN33w7/image.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00065",
        name: "紅豆甩餅4片",
        unit: "包",
        groupPrice: 100,
        retailPrice: 110,
        storage: "冷凍",
        photo: "https://i.postimg.cc/yY8FvV35/image.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00034",
        name: "(夏威夷)披薩",
        unit: "個",
        groupPrice: 32,
        retailPrice: 35,
        storage: "冷凍",
        photo: "https://i.postimg.cc/Fz9jtvWY/image.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00035",
        name: "(總匯)披薩",
        unit: "個",
        groupPrice: 32,
        retailPrice: 35,
        storage: "冷凍",
        photo: "https://i.postimg.cc/Fz9jtvWY/image.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00036",
        name: "美國細薯2kg",
        unit: "包",
        groupPrice: 250,
        retailPrice: 280,
        storage: "冷凍",
        photo: "https://i.postimg.cc/qBbtB2gb/image.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00037",
        name: "新脆薯(粗)2kg",
        unit: "包",
        groupPrice: 255,
        retailPrice: 280,
        storage: "冷凍",
        photo: "https://i.postimg.cc/d3zYTmDG/image.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00085",
        name: "美國薯餅",
        unit: "條",
        groupPrice: 190,
        retailPrice: 200,
        storage: "冷凍",
        photo: "https://i.postimg.cc/Xvbq18DJ/1.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00047",
        name: "可頌堡",
        unit: "個",
        groupPrice: 15,
        retailPrice: 17,
        storage: "冷凍",
        photo: "https://i.postimg.cc/vmJzNpwn/image.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00048",
        name: "乳酪餅15片",
        unit: "包",
        groupPrice: 130,
        retailPrice: 140,
        storage: "冷凍",
        photo: "https://i.postimg.cc/FKLb3DkH/image.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00049",
        name: "乳酪燒餅10入",
        unit: "盒",
        groupPrice: 150,
        retailPrice: 165,
        storage: "冷凍",
        photo: "https://i.postimg.cc/zGW3kM76/image.png"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00051",
        name: "原味貝果6個",
        unit: "條",
        groupPrice: 125,
        retailPrice: 135,
        storage: "冷凍",
        photo: "https://i.postimg.cc/4xMbYrd0/image.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00053",
        name: "鬆餅6片",
        unit: "條",
        groupPrice: 130,
        retailPrice: 140,
        storage: "冷凍",
        photo: "https://i.postimg.cc/HxLpFP0p/鬆餅.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00054",
        name: "潛艇堡5個",
        unit: "包",
        groupPrice: 140,
        retailPrice: 150,
        storage: "冷凍",
        photo: "https://i.postimg.cc/hPZVYH9G/面.png"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00055",
        name: "雜糧堡10個",
        unit: "包",
        groupPrice: 140,
        retailPrice: 150,
        storage: "冷凍",
        photo: "https://i.postimg.cc/J4Hh1gf0/雜糧.jpg"
    },
    {
        category: ["餅.pizza.麵包"],
        model: "1-00056",
        name: "吐司披薩/20片",
        unit: "包",
        groupPrice: 140,
        retailPrice: 150,
        storage: "冷凍",
        photo: "https://i.postimg.cc/xdy1D78h/image.jpg"
    },
    {
        category: ["餃類"],
        model: "1-00044",
        name: "禾家香一口餃200粒",
        unit: "包",
        groupPrice: 140,
        retailPrice: 150,
        storage: "冷凍",
        photo: "https://i.postimg.cc/3wVSHkmd/image.jpg"
    },
    {
        category: ["餃類"],
        model: "1-00045",
        name: "奇巧煎餃100粒(熟水餃)",
        unit: "包",
        groupPrice: 130,
        retailPrice: 140,
        storage: "冷凍",
        photo: "https://i.postimg.cc/j2vfx25V/image.png"
    },
    {
        category: ["餃類"],
        model: "1-00046",
        name: "奇津鍋貼50粒",
        unit: "包",
        groupPrice: 130,
        retailPrice: 140,
        storage: "冷凍",
        photo: "https://i.postimg.cc/FRFRNKvX/1.jpg"
    },
    {
        category: ["鐵板麵", "熱門商品"],
        model: "1-00062",
        name: "義大利肉醬麵",
        unit: "包",
        groupPrice: 33,
        retailPrice: 35,
        storage: "冷凍",
        photo: "https://i.postimg.cc/ZqtvtZ0J/image.jpg"
    },
    {
        category: ["鐵板麵"],
        model: "1-00063",
        name: "宮保雞丁醬10包",
        unit: "袋",
        groupPrice: 215,
        retailPrice: 225,
        storage: "冷凍",
        photo: "https://i.postimg.cc/bYFNh1Yy/image.png"
    },
    {
        category: ["鐵板麵"],
        model: "1-00064",
        name: "沙茶豬柳醬10包",
        unit: "袋",
        groupPrice: 205,
        retailPrice: 225,
        storage: "冷凍",
        photo: "https://i.postimg.cc/y8GF3DTs/1.png"
    },
    {
        category: ["鐵板麵", "熱門商品"],
        model: "2-00001",
        name: "黑胡椒醬140G(含麵)",
        unit: "包",
        groupPrice: 25,
        retailPrice: 22,
        storage: "冷藏",
        photo: "https://i.postimg.cc/Dy0X1Bt3/黑胡椒.jpg"
    },
    {
        category: ["鐵板麵", "熱門商品"],
        model: "2-00002",
        name: "蘑菇醬140G(含麵)",
        unit: "包",
        groupPrice: 25,
        retailPrice: 22,
        storage: "冷藏",
        photo: "https://i.postimg.cc/Dy0X1Bt3/黑胡椒.jpg"
    },
    {
        category: ["飲品", "熱門商品"],
        model: "2-00033",
        name: "(口栓)鮮到味豆漿2500ml",
        unit: "包",
        groupPrice: 69,
        retailPrice: 80,
        storage: "冷藏",
        photo: "https://i.postimg.cc/hth1PSSx/image.jpg"
    },
    {
        category: ["飲品", "熱門商品"],
        model: "2-00034",
        name: "(口栓)無糖豆漿2500ml",
        unit: "包",
        groupPrice: 69,
        retailPrice: 80,
        storage: "冷藏",
        photo: "https://i.postimg.cc/hth1PSSx/image.jpg"
    },
    {
        category: ["飲品"],
        model: "2-00015",
        name: "(鮮)薏仁漿1000ml",
        unit: "包",
        groupPrice: 50,
        retailPrice: 55,
        storage: "冷藏",
        photo: ""
    },
    {
        category: ["飲品"],
        model: "3-00013",
        name: "百香果汁(良田)1200ml",
        unit: "瓶",
        groupPrice: 200,
        retailPrice: 220,
        storage: "冷藏",
        photo: "https://i.postimg.cc/2yw73ybd/image.jpg"
    },
    {
        category: ["飲品"],
        model: "3-00014",
        name: "柳橙汁(良田)1200ml",
        unit: "瓶",
        groupPrice: 200,
        retailPrice: 220,
        storage: "冷藏",
        photo: "https://i.postimg.cc/pXWB4f4s/image.jpg"
    },
    {
        category: ["飲品"],
        model: "3-00015",
        name: "可爾必思1500ml",
        unit: "瓶",
        groupPrice: 230,
        retailPrice: 250,
        storage: "冷藏",
        photo: "https://i.postimg.cc/3xb9gkLn/image.jpg"
    },
    {
        category: ["飲品"],
        model: "2-00012",
        name: "柳橙汁(開元)960ml",
        unit: "瓶",
        groupPrice: 290,
        retailPrice: 295,
        storage: "冷藏",
        photo: "https://i.postimg.cc/vT35bKk3/image.jpg"
    },
    {
        category: ["飲品"],
        model: "1-00061",
        name: "檸檬汁顆粒10小包",
        unit: "袋",
        groupPrice: 520,
        retailPrice: 550,
        storage: "冷凍",
        photo: "https://i.postimg.cc/j2LSnkC8/jpg.jpg"
    },
    {
        category: ["飲品"],
        model: "2-00019",
        name: "冬瓜茶磚550g",
        unit: "盒",
        groupPrice: 70,
        retailPrice: 75,
        storage: "冷藏",
        photo: "https://i.postimg.cc/zBhdDqFp/image.jpg"
    },
    {
        category: ["奶製品"],
        model: "3-00008",
        name: "佳純保久乳1L",
        unit: "罐",
        groupPrice: 80,
        retailPrice: 85,
        storage: "冷藏",
        photo: "https://i.postimg.cc/Y9N1y03c/image.jpg"
    },
    {
        category: ["熱門商品","餅.pizza.麵包"],
        model: "2-00013",
        name: "蘿蔔糕18片",
        unit: "包",
        groupPrice: 205,
        retailPrice: 215,
        storage: "冷藏",
        photo: "https://i.postimg.cc/Y9Lk2sCt/image.jpg"
    },
    {
        category: ["奶製品"],
        model: "2-00009",
        name: "安佳起士84片",
        unit: "包",
        groupPrice: 380,
        retailPrice: 400,
        storage: "冷藏",
        photo: "https://i.postimg.cc/wjSLqL48/image.png"
    },
    {
        category: ["奶製品"],
        model: "2-00010",
        name: "國農牛奶(原味/巧克力/草莓/果汁/麥芽)24瓶 不得混搭",
        unit: "箱",
        groupPrice: 510,
        retailPrice: 540,
        storage: "常溫",
        photo: ""
    },
    {
        category: ["奶製品"],
        model: "2-00011",
        name: "台農牛奶(原味/巧克力/草莓/果汁/麥芽)",
        unit: "瓶",
        groupPrice: 25,
        retailPrice: 27,
        storage: "常溫",
        photo: ""
    },
    {
        category: ["奶製品"],
        model: "2-00011",
        name: "台農牛奶(原味/巧克力/草莓/果汁/麥芽)24瓶",
        unit: "箱",
        groupPrice: 480,
        retailPrice: 510,
        storage: "常溫",
        photo: ""
    },
    {
        category: ["奶製品"],
        model: "2-00011",
        name: "外埔農會牛奶(原味/巧克力/草莓/果汁/麥芽)",
        unit: "瓶",
        groupPrice: 25,
        retailPrice: 27,
        storage: "常溫",
        photo: ""
    },
    {
        category: ["奶製品"],
        model: "2-00011",
        name: "外埔農會牛奶(原味/巧克力/草莓/果汁/麥芽)24瓶",
        unit: "箱",
        groupPrice: 450,
        retailPrice: 480,
        storage: "常溫",
        photo: ""
    },
    {
        category: ["果醬"],
        model: "3-00001",
        name: "沙拉1台斤",
        unit: "包",
        groupPrice: 60,
        retailPrice: 80,
        storage: "常溫",
        photo: "https://i.postimg.cc/pXsBH9tR/image.jpg"
    },
    {
        category: ["果醬"],
        model: "3-00020",
        name: "藍莓醬900g",
        unit: "罐",
        groupPrice: 185,
        retailPrice: 200,
        storage: "常溫",
        photo: "https://i.postimg.cc/jqF5YKkB/image.jpg"
    },
    {
        category: ["果醬"],
        model: "3-00026",
        name: "奶油(小)450g",
        unit: "罐",
        groupPrice: 135,
        retailPrice: 145,
        storage: "常溫",
        photo: "https://i.postimg.cc/G2vQwqb5/image.jpg"
    },
    {
        category: ["堅果"],
        model: "3-00241",
        name: "綜合堅果",
        unit: "桶",
        groupPrice: 310,
        retailPrice: 340,
        storage: "常溫",
        photo: "https://i.postimg.cc/26xZ7Jkr/image.jpg"
    }
];
