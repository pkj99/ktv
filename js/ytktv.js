const songDB = [
    {
        "id": 1,
        "artist": "周杰倫",
        "title": "【KTV】周杰伦 Jay Chou《安静》原版伴奏 | 高清歌词 (Karaoke Version)",
        "vid": "zfO7_kLfudI",
        "surname": "周"
    },
    {
        "id": 2,
        "artist": "周杰倫",
        "title": "純音樂 周杰倫 Jay Chou ─《不能說的秘密》Wild West KTV 伴唱 Karaoke 伴奏 西野",
        "vid": "YGceKnbXWzQ",
        "surname": "周"
    },
    {
        "id": 3,
        "artist": "周杰倫",
        "title": "純音樂 周杰倫  ─《愛你沒差》Wild West KTV 伴唱 Karaoke",
        "vid": "bydMr5IzrrQ",
        "surname": "周"
    },
    {
        "id": 4,
        "artist": "周杰倫",
        "title": "周杰伦   发如雪 Karaoke",
        "vid": "CsQBQB08JS4",
        "surname": "周"
    },
    {
        "id": 5,
        "artist": "周杰倫",
        "title": "【繁中】周杰倫-等你下課KTV(無人聲)",
        "vid": "YL8Z78av-Bs",
        "surname": "周"
    },
    {
        "id": 6,
        "artist": "周杰倫",
        "title": "周杰倫 - 明明就 (KTV/HD)",
        "vid": "XoKFf-HOii0",
        "surname": "周"
    },
    {
        "id": 7,
        "artist": "周杰倫",
        "title": "退後KTV不間斷版/周杰倫",
        "vid": "_xJM3DdLL84",
        "surname": "周"
    },
    {
        "id": 8,
        "artist": "周杰倫",
        "title": "周杰倫  我不配 KTV 高清修復版",
        "vid": "nmMWRYqJwaU",
        "surname": "周"
    },
    {
        "id": 9,
        "artist": "周杰倫",
        "title": "（伴奏版）明明就 - 周杰伦 《歌词拼音》【明明就不习惯牵手　为何却主动把手勾】",
        "vid": "I4Ycr3YATkA",
        "surname": "周"
    },
    {
        "id": 10,
        "artist": "周杰倫",
        "title": "周杰倫 夜曲 KTV 高清修復版",
        "vid": "f1PIcK-9po4",
        "surname": "周"
    },
    {
        "id": 11,
        "artist": "張信哲",
        "title": "[KARAOKE] 爱如潮水 - 张信哲",
        "vid": "6iMlGPSYPJs",
        "surname": "張"
    },
    {
        "id": 12,
        "artist": "張信哲",
        "title": "太想愛你 - 張信哲 (Jeff Chang) KTV伴奏版 (Karaoke Version)",
        "vid": "XlMC45md14A",
        "surname": "張"
    },
    {
        "id": 13,
        "artist": "張信哲",
        "title": "张信哲 爱是一个字 伴奏音乐 KTV Music || 欢迎点歌",
        "vid": "6RyS00rHXmI",
        "surname": "張"
    },
    {
        "id": 14,
        "artist": "張信哲",
        "title": "張信哲 《 不要對他說 》KTV 伴奏 no vocal 無人聲 music 純音樂 karaoke 卡拉OK 伴唱张信哲 《 不要对他说 》",
        "vid": "q-GtpXT9MIM",
        "surname": "張"
    },
    {
        "id": 15,
        "artist": "張信哲",
        "title": "[ KTV ] 信仰 - 张信哲 伴奏",
        "vid": "yJGjPwqLhAc",
        "surname": "張"
    },
    {
        "id": 16,
        "artist": "張信哲",
        "title": "用情 张信哲 伴奏 karaoke 張信哲 Zhang Xin Zhe",
        "vid": "JweMw7D_HrU",
        "surname": "張"
    },
    {
        "id": 17,
        "artist": "張信哲",
        "title": "已經結束了嗎 張信哲 KTV (Lyrics, 去人聲)",
        "vid": "qLvOhkU5dak",
        "surname": "張"
    },
    {
        "id": 18,
        "artist": "張信哲",
        "title": "(4K60幀帶和音卡拉OK伴奏) 張信哲 薛之謙 你不是一個人",
        "vid": "VlXYlsURjeI",
        "surname": "張"
    },
    {
        "id": 19,
        "artist": "張信哲",
        "title": "信仰-歌词伴奏",
        "vid": "KfaWQGZ5LOE",
        "surname": "張"
    },
    {
        "id": 20,
        "artist": "張信哲",
        "title": "过火 张信哲 伴奏 karaoke",
        "vid": "BhgCU0HQb2A",
        "surname": "張"
    },
    {
        "id": 21,
        "artist": "林俊傑",
        "title": "林俊杰 - 黑夜问白天(2017)🎙️伴奏🎙️KTV",
        "vid": "J-tXGVTfq_s",
        "surname": "林"
    },
    {
        "id": 22,
        "artist": "林俊傑",
        "title": "[Karaoke] 江南 - 林俊傑（伴奏版）",
        "vid": "X3utks1oAfE",
        "surname": "林"
    },
    {
        "id": 23,
        "artist": "林俊傑",
        "title": "林俊傑 - 修煉愛情 伴奏ktv",
        "vid": "GI7wzhpwwLM",
        "surname": "林"
    },
    {
        "id": 24,
        "artist": "林俊傑",
        "title": "（伴奏版）那些你很冒险的梦 - 林俊杰 《歌词拼音》【那些你很冒险的梦 我陪你去疯】",
        "vid": "bnybchlc4ZA",
        "surname": "林"
    },
    {
        "id": 25,
        "artist": "林俊傑",
        "title": "可惜沒如果 KTV 動態歌詞 / (If Only) 林俊傑 JJ Lin",
        "vid": "YYTtL4V7H3Y",
        "surname": "林"
    },
    {
        "id": 26,
        "artist": "林俊傑",
        "title": "JJ 林俊傑 《裹著心的光》 高音質伴奏",
        "vid": "eWSYlJHf2g4",
        "surname": "林"
    },
    {
        "id": 27,
        "artist": "林俊傑",
        "title": "林俊傑 - 不為誰而作的歌 伴奏ktv",
        "vid": "L9-xMp39wvE",
        "surname": "林"
    },
    {
        "id": 28,
        "artist": "林俊傑",
        "title": "(你来唱) 當你 林俊傑 伴奏／伴唱 Karaoke 4K video",
        "vid": "dtcRpvyiC_Y",
        "surname": "林"
    },
    {
        "id": 29,
        "artist": "林俊傑",
        "title": "（伴奏版）一千年以后 - 林俊杰 《歌词拼音》【因为在 一千年以后世界早已没有我】",
        "vid": "A2zHmz7dQYY",
        "surname": "林"
    },
    {
        "id": 30,
        "artist": "林俊傑",
        "title": "Những Giấc Mơ Em Rất Mạo Hiểm Đó [那些你很冒险的梦] - Lâm Tuấn Kiệt [林俊杰] (Karaoke)",
        "vid": "Sr22QaKRix8",
        "surname": "林"
    },
    {
        "id": 31,
        "artist": "蔡依林",
        "title": "說愛你 (伴奏)蔡依林",
        "vid": "hwXgZ8dx8yE",
        "surname": "蔡"
    },
    {
        "id": 32,
        "artist": "蔡依林",
        "title": "蔡依林 《日不落》 Pinyin Karaoke Version Instrumental Music 拼音卡拉OK伴奏 KTV with Pinyin Lyrics 4k",
        "vid": "fBU1XTq9l_M",
        "surname": "蔡"
    },
    {
        "id": 33,
        "artist": "蔡依林",
        "title": "蔡依林 倒带 -  Pinyin Karaoke Version - 拼音卡拉OK伴奏 - KTV with Pinyin Lyrics",
        "vid": "n98xjFtDsZs",
        "surname": "蔡"
    },
    {
        "id": 34,
        "artist": "蔡依林",
        "title": "蔡依林 Jolin Tsai - 玫瑰少年 Womxnly ( KTV 原版伴奏 Original Instrumental CLEAN VERSION )",
        "vid": "LB7i53NOibs",
        "surname": "蔡"
    },
    {
        "id": 35,
        "artist": "蔡依林",
        "title": "[ KTV ] 我知道你很难过 - 蔡依林伴奏",
        "vid": "mFziJjR7hYA",
        "surname": "蔡"
    },
    {
        "id": 36,
        "artist": "蔡依林",
        "title": "蔡依林 Jolin Tsai - 怪美的 UGLY BEAUTY ( KTV 原版伴奏 Original Instrumental )",
        "vid": "t8K1rBWR1MA",
        "surname": "蔡"
    },
    {
        "id": 37,
        "artist": "蔡依林",
        "title": "蔡依林 - 倒帶(KTV伴唱)",
        "vid": "Mu2Qrzf73Fg",
        "surname": "蔡"
    },
    {
        "id": 38,
        "artist": "蔡依林",
        "title": "蔡依林 Jolin Tsai - 甜秘密 Sweet Guilty Pleasure ( KTV 原版伴奏 Original Instrumental )",
        "vid": "XZDTAP8fxtw",
        "surname": "蔡"
    },
    {
        "id": 39,
        "artist": "蔡依林",
        "title": "蔡依林 怪美的 KTV歌詞 伴奏版",
        "vid": "evEsbmuvcVk",
        "surname": "蔡"
    },
    {
        "id": 40,
        "artist": "蔡依林",
        "title": "蔡依林 Jolin Tsai - 消極掰 Life Sucks ( KTV 原版伴奏 Original Instrumental )",
        "vid": "uDG3d9qe7Ys",
        "surname": "蔡"
    }
];
