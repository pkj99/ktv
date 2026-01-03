
let pagename = window.location.pathname.split('/').slice(-1);
var urlParams;
var cors_api_url = 'https://api.allorigins.win/raw?url=';

function get4kvmM3u8(url) {
    var Url = '';
    fetch(cors_api_url + encodeURIComponent(url))
    .then(response => {
        if (response.ok) return response.text()
        throw new Error('Network response was not ok.')
    })
    .then(data => {
		var Url = data.split("container: '#artplayer-app',")[1].split(',')[0].trim().split("url:'")[1].split("'")[0];
        // location.href = Url;
        // location.href = 'playvideo.html?url='+Url;
        return Url;
    });
}


function tvchannels2(groupName) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', m3u_url);
    xhr.onload = e => {

        var contents = xhr.response;
        var channel = "0";
        var url_tvg, tvg_logo, tvg_name, group_title, title, url, info;
        let htmlString = '';

        var lines = contents.split(/[\r\n]/);
        for (var i in lines) {
            var line = lines[i];
            if (/#EXTM3U/.test(line)) {
                channel = "0";
                if (/url-tvg/.test(line)) {
                    var keyVal = line.split(/ /)[1], url_tvg = keyVal.split(/[=]/)[1].replaceAll('\"', '').trim();
                }
            } else {
                if (/#EXTINF/.test(line)) {
                    channel = "0";
                    title = line.split(/,/)[1].replaceAll('\"', '').trim();
                    info = line.split(/,/)[0];

                    if (/tvg-logo/.test(info)) {
                        var keyVal = info.split(/tvg-logo/)[1], val2 = keyVal.split(/ /)[0], tvg_logo = val2.split(/[=]/)[1].replaceAll('\"', '').trim();
                    }
                    if (/tvg-name/.test(info)) {
                        var keyVal = info.split(/tvg-name/)[1], val2 = keyVal.split(/ /)[0], tvg_name = val2.split(/[=]/)[1].replaceAll('\"', '').trim();
                    }
                    if (/group-title/.test(info)) {
                        var keyVal = info.split(/group-title/)[1], val2 = keyVal.split(/ /)[0], group_title = val2.split(/[=]/)[1].replaceAll('\"', '').trim();
                    }
                } else {
                    if (line.trim() != '') {
                        channel = "1";
                        url = line.trim();
                    }
                }
            }
            if (channel == "1") {
                var img = tvg_logo;
                if (tvg_logo.includes('movieffm')) {
                    img = cors_api_url + encodeURIComponent(tvg_logo);
                }
                if (group_title == groupName || groupName == 'ALL') {
                    htmlString += `<li class="col-lg-8 col-md-8 col-sm-5 col-xs-3">`;
                    htmlString += `<div class="myui-vodlist__box">`;
                    if (m3u_url.includes('4kvm')){
                        // var id = url.replace('https://www.4kvm.net/artplayer?mvsource=0&type=hls&id=','');
                        var id = url.split('id=')[1];
                        // htmlString += `<a class="myui-vodlist__thumb lazyload" href="${url}" `;
                        htmlString += `<a class="myui-vodlist__thumb lazyload" href="4kvm.html?id=${id}" `;
                    } else {
                        htmlString += `<a class="myui-vodlist__thumb lazyload" href="playvideo.html?url=${url}&img=${img}" `;
                    }
                    htmlString += `title="${title}" `;
                    htmlString += `data-original="${url}" `;
                    htmlString += `style="background-image: url('${img}')"`;
                    htmlString += `</a>`;
                    htmlString += `<span class="pic-text text-right">${group_title}</span>`;
                    htmlString += `</div>`;
                    htmlString += `<div class="myui-vodlist__detail">`;
                    htmlString += `<h4 class="title text-overflow"><a href="${url}">${title}</a></h4>`;
                    htmlString += `</div>`;
                    htmlString += `</li>`;
                }
                channel = "0";
            }
        }
        document.getElementById('tvlist').innerHTML = htmlString;
    };
    xhr.send();
}



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

if (urlParams["m3u"] == null) {
    urlParams["m3u"] = "https://pkj99.github.io/demo/media/movie-hits.m3u";
}

if (urlParams["m3u"] != null) {
    m3u_url = urlParams["m3u"];
    tvchannels2('ALL');
    if (m3u_url.includes('movie-')) {
        var menuId = m3u_url.split('movie-')[1].replace('.m3u', '');
        document.getElementById(menuId).classList.add("active");
    }
}
