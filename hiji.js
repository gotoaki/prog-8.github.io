window.onload = function() {
    setTimeout(function() {
        // logo.jpg をフェードアウト
        const logo = document.getElementById('logo');
        logo.style.opacity = 0;

        // フェードアウト後にメインコンテンツを表示
        setTimeout(function() {
            // スプラッシュスクリーンを非表示にしてメインコンテンツを表示
            document.getElementById('splash').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 1000); // 1秒後にメインページを表示
    }, 2000); // 2秒後にフェードアウト開始
};
