!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
        oldLoadAp && oldLoadAp();

        new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            autoplay: false,
            loop: 'all',
            order: 'random',
            theme: '#b7daff',
            preload: 'none',
            audio: [
                {
                    name: 'song1',
                    artist: 'artist1',
                    url: '/songs/Lightscape - Collapsing World.flac',
                    cover: '/img/img30.jpg'
                }
            ]
        });
    }
})();