
let pagename = window.location.pathname.split('/').slice(-1);
var urlParams;
var api_url = "https://pan.mailberry.com.cn/api/fs/get";
var db_url = './db/karaoke.db';

// create song list 
function songlists(sqlstring) {
    // console.log(sqlstring);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', db_url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = e => {
        const uInt8Array = new Uint8Array(xhr.response);
        const db = new SQL.Database(uInt8Array);

        const contents = db.exec(sqlstring);
        var data = JSON.parse(JSON.stringify(contents));

        let htmlString = '';

        if (typeof data[0] == "undefined") { data = []; } else { data = data[0].values; }

        // htmlString += `<ul><li class="col-lg-8 col-md-8 col-sm-5 col-xs-3">`;
        // htmlString += `<div class="myui-vodlist__box" style="width:200px">`;
        // htmlString += `<a class="myui-vodlist__thumb lazyload" href="?artist=${data[0][1]}" `;
        // htmlString += `title="${data[0][1]}" `;
        // htmlString += `data-original="${data[0][1]}" `;
        // htmlString += `style="background-image: url('${data[0][9]}');padding-top: 200px;"`;
        // htmlString += `</a>`;
        // htmlString += `<span class="pic-text text-right">${data[0][1]}</span>`;
        // htmlString += `</div>`;
        htmlString += `<div class="myui-vodlist__detail">`;
        htmlString += `<h4 class="title text-overflow" style="margin: 10px 10px 0px;"><a href="?artist=${data[0][1]}">${data[0][1]}</a></h4>`;
        htmlString += `</div>`;
        // htmlString += `</li></ul><br>`;

        htmlString += '<ul>';

        for (var i = 0; i < data.length; i++) {
            var pid = data[i][0];
            var artist = data[i][1];
            var song = data[i][2];
            var path = data[i][6];
            var img = data[i][8];
            // if (img == null || img == '') { img = data[i][9]; }
            if (img == null || img == '') { img = 'images/karaoke.jpg'; }

            htmlString += `<li class="col-lg-8 col-md-8 col-sm-5 col-xs-3">`;
            htmlString += `<div class="myui-vodlist__box">`;
            htmlString += `<a class="myui-vodlist__thumb lazyload" href="?song=${path}" `;
            htmlString += `title="${song}" `;
            htmlString += `data-original="${path}" `;
            htmlString += `style="background-image: url('${img}');padding-top: 200px;"`;
            htmlString += `</a>`;
            htmlString += `<span class="pic-text text-left">${artist}</span>`;
            htmlString += `<span class="pic-text text-right">${song}</span>`;
            htmlString += `</div>`;
            // htmlString += `<div class="myui-vodlist__detail">`;
            // htmlString += `<h4 class="title text-overflow"><a href="?artist=${artist_name}">${artist_name}</a></h4>`;
            // htmlString += `</div>`;
            htmlString += `</li>`;



            // htmlString += '<li class="col-lg-10 col-md-8 col-sm-5 col-xs-3">';
            // // htmlString += '<div class="myui-vodlist__box">';
            // // htmlString += '<a class="myui-vodlist__thumb lazyload" href="?song=' + path + '" ';
            // // htmlString += '</a>';
            // // htmlString += '</div>';

            // htmlString += '<div class="myui-vodlist__detail">';
            // htmlString += '<h4 class="title text-overflow"><a href="?song=' + path + '">' + song + '</a></h4>';
            // htmlString += '</div>';
            // htmlString += '</li>';
        }

        htmlString += '</ul>';
        // console.log(htmlString);

        document.getElementById('tvlist').innerHTML = htmlString;

    };
    xhr.send();
}

// create song list 
function artistlists(sqlstring) {
    // console.log(sqlstring);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', db_url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = e => {
        const uInt8Array = new Uint8Array(xhr.response);
        const db = new SQL.Database(uInt8Array);

        const contents = db.exec(sqlstring);
        var data = JSON.parse(JSON.stringify(contents));

        let htmlString = '<ul>';

        if (typeof data[0] == "undefined") { data = []; } else { data = data[0].values; }

        for (var i = 0; i < data.length; i++) {
            var artist_id = data[i][0];
            var artist_name = data[i][1];
            var artist_img = data[i][2];
            var group_id = data[i][3];

            htmlString += `<li class="col-lg-8 col-md-8 col-sm-5 col-xs-3">`;
            htmlString += `<div class="myui-vodlist__box">`;
            htmlString += `<a class="myui-vodlist__thumb lazyload" href="?artist=${artist_name}" `;
            htmlString += `title="${artist_name}" `;
            htmlString += `data-original="${artist_name}" `;
            htmlString += `style="background-image: url('${artist_img}');padding-top: 200px;"`;
            htmlString += `</a>`;
            htmlString += `<span class="pic-text text-right">${artist_name}</span>`;
            htmlString += `</div>`;
            // htmlString += `<div class="myui-vodlist__detail">`;
            // htmlString += `<h4 class="title text-overflow"><a href="?artist=${artist_name}">${artist_name}</a></h4>`;
            // htmlString += `</div>`;
            htmlString += `</li>`;
        }

        htmlString += '</ul>';
        // console.log(htmlString);

        document.getElementById('tvlist').innerHTML = htmlString;

    };
    xhr.send();
}


// create search list 
function searchlists(sqlstring) {
    // console.log(sqlstring);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', db_url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = e => {
        const uInt8Array = new Uint8Array(xhr.response);
        const db = new SQL.Database(uInt8Array);

        const contents = db.exec(sqlstring);
        var data = JSON.parse(JSON.stringify(contents));

        let htmlString = '<ul>';

        if (typeof data[0] == "undefined") { data = []; } else { data = data[0].values; }

        for (var i = 0; i < data.length; i++) {
            var pid = data[i][0];
            var artist = data[i][1];
            var song = data[i][2];
            var path = data[i][6];
            var img = data[i][8];
            if (img == null || img == '') { img = data[i][9]; }
            if (img == null || img == '') { img = 'images/karaoke.jpg'; }

            htmlString += `<li class="col-lg-8 col-md-8 col-sm-5 col-xs-3">`;
            htmlString += `<div class="myui-vodlist__box">`;
            htmlString += `<a class="myui-vodlist__thumb lazyload" href="?song=${path}" `;
            htmlString += `title="${song}" `;
            htmlString += `data-original="${path}" `;
            htmlString += `style="background-image: url('${img}');padding-top: 200px;"`;
            htmlString += `</a>`;
            htmlString += `<span class="pic-text text-left">${artist}</span>`;
            htmlString += `<span class="pic-text text-right">${song}</span>`;
            htmlString += `</div>`;
            // htmlString += `<div class="myui-vodlist__detail">`;
            // htmlString += `<h4 class="title text-overflow"><a href="?artist=${artist_name}">${artist_name}</a></h4>`;
            // htmlString += `</div>`;
            htmlString += `</li>`;
        }

        htmlString += '</ul>';
        // console.log(htmlString);

        document.getElementById('tvlist').innerHTML = htmlString;

    };
    xhr.send();
}


// Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


async function showMessage(message) {
    const dialog = document.createElement("dialog");
    document.body.appendChild(dialog);
    dialog.style.marginLeft = 'auto';
    dialog.style.marginRight = 'auto';
    dialog.innerText = message;
    dialog.show();
    setTimeout(function () {
      dialog.close();
    }, 2000);
}


        import { FFmpeg } from './ffmpeg@0.12.7/index.js';
        import { fetchFile, toBlobURL } from './util@0.12.1/index.js';

        const ffmpeg = new FFmpeg();
        const player = document.getElementById('player');
        const status = document.getElementById('status');
        const progressFill = document.getElementById('progress-fill');
        const progressContainer = document.getElementById('progress-container');

        async function init() {
            document.getElementById('message').hidden= false;
            try {
                // 載入 FFmpeg 核心
                // const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
                const baseURL = './js/ffmpeg@0.12.7';
                await ffmpeg.load({
                    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
                    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
                    workerURL: await toBlobURL(`${baseURL}/worker.js`, 'text/javascript'),
                });
            } catch (e) {
                status.innerText = '❌ FFmpeg 載入失敗: ' + e.message;
            }
            document.getElementById('message').hidden= true;
        }

        async function convertPlay(videoUrl) {
            // console.log(videoUrl);
            try {
                // 載入 FFmpeg 核心
                // const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
                const baseURL = './js/ffmpeg@0.12.7';
                await ffmpeg.load({
                    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
                    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
                    workerURL: await toBlobURL(`${baseURL}/worker.js`, 'text/javascript'),
                });

                if (!videoUrl) {
                    status.innerText = '❌ 錯誤：網址未提供 path 參數。';
                    return;
                }
                
                if (videoUrl.startsWith('http')){
                    processVideo(videoUrl);
                } else {
                    postData(api_url, { password: '', path: `${videoUrl}` }).then((data) => {
                        // console.log(data); // JSON data parsed by `data.json()` call
                        if (data['code'] == 200) {
                            var sign = data['data']['sign'];
                            ktv_url = `https://pan.mailberry.com.cn/d${videoUrl}?sign=${sign}`;
                            processVideo(ktv_url);
                        }
                    });  
                }

            } catch (e) {
                status.innerText = '❌ FFmpeg 載入失敗: ' + e.message;
            }
        }

        async function processVideo(url) {
            // console.log(url);
            document.getElementById('message').hidden = false;
            document.getElementById('video-container').hidden = true;
            document.getElementById('tvlist').innerHTML = `<div class="text-center"><br><b>影片準備中...請稍後</b><br><br></div>`;

            try {
                status.innerText = '⏳ 正在從遠端下載影片 (這取決於您的網速)...';
                progressContainer.style.display = 'block';

                // 2. 下載遠端檔案
                // 注意：若遇到 CORS 錯誤，通常需要後端代理或目標伺服器開放權限
                const fileData = await fetchFile(url);
                
                status.innerText = '⚡ 正在進行 MKV/AC3 轉碼中...';
                
                // 監聽進度 (FFmpeg 的進度是基於 log 的，這裡簡單顯示)
                ffmpeg.on('log', ({ message }) => {
                    // console.log(message);
                    if (message.includes('time=')) {
                        status.innerText = '⚡ 轉碼進行中... 請稍候';
                    }
                });

                // 3. 寫入虛擬系統並執行轉碼
                await ffmpeg.writeFile('input.mkv', fileData);

                // 指令優化：影像直接複製(copy)，音訊轉為 aac
                await ffmpeg.exec([
                    '-i', 'input.mkv',
                    '-c:v', 'copy', 
                    '-c:a', 'aac', 
                    // '-strict', 'experimental',
                    'output.mp4'
                ]);

                // 4. 讀取結果並播放
                const data = await ffmpeg.readFile('output.mp4');
                status.innerText = '✅ 轉碼完成！';
                progressContainer.style.display = 'none';

                player.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
                player.play();

                document.getElementById('message').hidden= true;
                document.getElementById('video-container').hidden= false;
                document.getElementById('tvlist').innerHTML = `<div class="text-center"><br><b>${song_name}</b><br><br></div>`;
                

            } catch (err) {
                console.error(err);
                status.innerText = '❌ 處理失敗: ' + err.message + ' (請檢查 CORS 設定)';
            }
        }
  


window.onload = init();

// get params
(window.onpopstate = function () {
    var match,
        pl = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
})();


if (urlParams["wd"] != null) {
    var wd = urlParams["wd"];
    var sqlstring = "select a.*,b.artist_img from ktv a left outer join artists b on a.artist = b.artist_name where a.lang <> '粵語' and a.artist like '%" + wd + "%' or a.song like '%" + wd + "%'";
    searchlists(sqlstring);
    document.getElementById('wd').value = wd;
}

if (urlParams["myktv"] != null) {
    var sqlstring = "select a.*,b.artist_img from ktv a left outer join artists b on a.artist = b.artist_name where a.favorite = 1 order by random()";
    searchlists(sqlstring);
    document.getElementById('menu4').classList.add("active");
}


if (urlParams["artist"] != null) {
    var artist = urlParams["artist"];
    var sqlstring = "select a.*,b.artist_img from ktv a left outer join artists b on a.artist = b.artist_name where a.lang <> '粵語' and a.artist='" + artist + "'";
    songlists(sqlstring);
}

if (urlParams["type"] != null) {
    var type = urlParams["type"];
    var sqlstring = "select * from v_artists where group_id=" + type + "";
    artistlists(sqlstring);
    let menuId = 'menu' + urlParams["type"];
    document.getElementById(menuId).classList.add("active");
}

var song_name = '';
let htmlString = '';

if (urlParams["song"] != null) {
    song_name = urlParams["song"];
    document.getElementById('message').hidden = false;
    postData(api_url, { password: '', path: `${song_name}` }).then((data) => {
        if (data['code'] == 200) {
            var raw_url = data['data']['raw_url'];
            processVideo(raw_url);


            // var thumb = data['data']['thumb'];
            // var sign = data['data']['sign'];

            // var vlc_url = raw_url;
            // var ktv_url = `https://pan.mailberry.com.cn/d${song_name}?sign=${sign}`;
            
            // convertPlay(raw_url);

            // var art = new Artplayer({
            //     container: '.artplayer-app',
            //     url: raw_url,
            //     poster: thumb,
            //     volume: 0.5,
            //     isLive: false,
            //     muted: false,
            //     autoplay: true,
            //     pip: true,
            //     autoSize: true,
            //     autoMini: true,
            //     screenshot: true,
            //     setting: true,
            //     loop: false,
            //     flip: true,
            //     playbackRate: true,
            //     aspectRatio: true,
            //     fullscreen: true,
            //     fullscreenWeb: true,
            //     subtitleOffset: true,
            //     miniProgressBar: true,
            //     mutex: true,
            //     backdrop: true,
            //     playsInline: true,
            //     autoPlayback: true,
            //     airplay: true,
            //     theme: '#23ade5'
            // });


            // console.log(raw_url);
            // console.log(ktv_url);
            // // ktv_url = `playvideo.html?url=${raw_url}&img=${thumb}`;
            // // var ktv_url = `playvideo.html?url=https://pan.mailberry.com.cn/d${song_name}?sign=${sign}&img=${thumb}`;

            // htmlString += `<li class="col-lg-1 col-md-1 col-sm-1 col-xs-1">`;

            // // htmlString += `<div class="myui-vodlist__box">`;
            // // htmlString += `<a class="myui-vodlist__thumb lazyload" href="vlc://https://pan.mailberry.com.cn/d${song_name}?sign=${sign}"`;
            // // htmlString += `title="${song_name}" `;
            // // htmlString += `data-original="${song_name}" `;
            // // htmlString += `style="background-image: url('images/vlc.webp');padding-top: 200px;"`;
            // // htmlString += `</a>`;
            // // htmlString += `</div>`;

            // htmlString += `<div class="myui-vodlist__detail">`;
            // // htmlString += `<h4 class="title text-overflow text-center"><a href="vlc://${ktv_url}">Open with VLC Player</a></h4>`;
            // // htmlString += `<h4 class="title text-overflow text-center"><a href="vlc://${ktv_url}" id="vlc">使用VLC開啟</a> | `;
            // htmlString += `<h4 class="title text-overflow text-center">`;
            // htmlString += `<a target="_blank" href="player.html?song=${ktv_url}" id="ffmpeg">自動轉檔播放</a> | `;
            // htmlString += `<a onclick='navigator.clipboard.writeText("${ktv_url}"); showMessage("複製完成");' style="cursor: pointer;">複製連結</a> | `;
            // htmlString += `<a href="${raw_url}" style="cursor: pointer;">下載影片</a> | `;
            // htmlString += `</h4></div>`;

            // // htmlString += `<video controls autoplay width="50%" poster="${thumb}" src="${raw_url}"></video>`;
            // // htmlString += `<a href='vlc://${vlc_url}'><img src="images/vlc.webp" width="100px">KTV</a>`;
            // // htmlString += `<a href='vlc://https://pan.mailberry.com.cn/d${song_name}?sign=${sign}'><img src="images/vlc.webp" width="100px">Open with VLC Player</a>`;
            // // htmlString += `<div style="width:400px;margin-left: auto; margin-right: auto;"><video controls autoplay width="100%"><source src="${raw_url}" type="video/mp4"></video></div>`;


            // // htmlString += `<div class="text-center"><br><b>How to enable vlc protocol</b><br><br>Put the files from the bat directory in your VLC directory (usually C:\\Program Files`
            // // htmlString += `(x86)\\VideoLAN\\VLC), <br>and then run vlc-protocol-register.bat as administrator (right-click the file and use Run as administrator).`
            // // htmlString += `<br><br>You can download the repository here. <br><a href='https://github.com/stefansundin/vlc-protocol/tree/main/windows/bat'>`
            // // htmlString += `https://github.com/stefansundin/vlc-protocol/tree/main/windows/bat</a><br><br></div>`


            // htmlString += `</li>`;
            // document.getElementById('tvlist').innerHTML = htmlString;
            // document.getElementById('artplayer').style.display = "block";
            // // document.getElementById('vlc').click();

            // // window.open(`vlc://https://pan.mailberry.com.cn/d${song_name}?sign=${sign}`);
            // // window.open(`vlc://${raw_url}`);
        }
    });

}

document.getElementById('message').hidden= true;
document.getElementById('video-container').hidden= true;  

