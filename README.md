# ktv

1. 問題

    開發網頁程式播放含有 AC3（Dolby Digital）音訊的影片其實具備一定的挑戰性，因為 AC3 格式在大多數瀏覽器（如 Chrome、Firefox）中並沒有原生支援，主要原因是授權費用與專利問題。
    目前只有 Safari (macOS/iOS) 或部分支援硬體解碼的環境（如 Edge 在特定硬體下）能直接播放。

    要在網頁上播放 MKV (Matroska) 格式的影片，比起 MP4 更加複雜。主要原因是 MKV 是一個「封裝容器」，它並非 HTML5 標準原生支援的格式（標準支援通常是 MP4、WebM 和 Ogg）。
    雖然 Chrome 和 Edge 近期增加了對 MKV 的部分支援，但 Safari 和 Firefox 則幾乎完全不支援。

2. 為什麼 MKV 在網頁上這麼難搞？
    MKV 就像一個盒子，裡面可以裝各種不同編碼的內容：

    影像編碼： H.264 (AVC), H.265 (HEVC), VP9, AV1。
    音訊編碼： AAC, AC3, DTS, Opus。

    瀏覽器的問題在於：

    容器不支援： Safari 根本不認得這個「盒子」，看到 .mkv 就拒絕。
    編碼不支援： 即使 Chrome 打開了盒子，發現裡面是 AC3 或 DTS 音訊（MKV 常見音訊），也會因為授權問題而沒有聲音。

3. 實務上的解決方案
    如果您正在開發一個需要正式運作的網頁程式，建議採用以下三種方式之一：

    方案 A：使用 Video.js (目前最主流的框架)
    Video.js 雖然不能魔法般地讓不支援的瀏覽器支援 MKV，但它能提供更好的錯誤處理與外掛支援。

    方案 B：使用 FFmpeg.wasm（瀏覽器端即時轉碼）
    這是在「不依賴伺服器」的情況下最強大的方法。利用 WebAssembly 技術在使用者瀏覽器裡直接把 MKV 轉碼成 MP4。
    優點： 不需要後端伺服器轉檔。
    缺點： 首次載入慢，且非常消耗使用者的 CPU 和記憶體。

    方案 C：後端轉串流 (HLS / DASH) — 專業推薦
    這是 Netflix、YouTube 等平台的做法。不要直接播放 MKV 檔案，而是在伺服器端將其轉換為 HLS (.m3u8)。
    伺服器使用 FFmpeg 將 MKV 拆解成無數個小的 .ts 檔案。
    前端使用 hls.js 播放。

使用 ffmpeg.wasm 是目前網頁前端最強大的技術之一，它能讓你在瀏覽器中直接運行 FFmpeg，不需要後端伺服器介入即可處理影片編碼。
但請注意：這對電腦效能（CPU/記憶體）要求較高，且因為瀏覽器的安全限制，伺服器必須設定特定的 HTTP 標頭才能執行。

為了安全考量，ffmpeg.wasm 使用了 SharedArrayBuffer。你的伺服器（或是本地開發環境）必須傳送以下兩個 Response Headers，否則程式會報錯：
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp