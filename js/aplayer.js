!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
        oldLoadAp && oldLoadAp();

        new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            autoplay: true,
            loop: 'all',
            order: 'random',
            theme: '#b7daff',
            preload: 'none',
            audio: [
                {
                    name: 'Collapsing World',
                    artist: 'Lightscape',
                    url: '/songs/Lightscape - Collapsing World.flac',
                    cover: '/img/img30.jpg'
                },
                {
                    name: 'DUVET',
                    artist: 'bôa',
                    url: '/songs/bôa - DUVET.flac',
                    cover: '/img/img30.jpg'
                },
                {
                    name: 'So Far Away',
                    artist: 'Martin Garrix',
                    url: '/songs/Martin Garrix - So Far Away.flac',
                    cover: '/img/img30.jpg'
                },
                {
                    name: 'Dehors',
                    artist: 'Jordann',
                    url: '/songs/Jordann - Dehors.flac',
                    cover: '/img/img30.jpg'
                },
                {
                    name: 'So Far Away (Acoustic)',
                    artist: 'Adam Christopher',
                    url: '/songs/Adam Christopher - So Far Away (Acoustic).flac',
                    cover: '/img/img30.jpg'
                },
                {
                    name: 'Towards The Light',
                    artist: 'Jacoo',
                    url: '/songs/Jacoo - Towards The Light.flac',
                    cover: '/img/img30.jpg'
                },
                {
                    name: 'Daylight',
                    artist: 'Seredris',
                    url: '/songs/Seredris - Daylight.flac',
                    cover: '/img/img30.jpg'
                },
                {
                    name: 'Dusk Till Dawn',
                    artist: '晴诚',
                    url: '/songs/晴诚 - Dusk Till Dawn.flac',
                    cover: '/img/img30.jpg'
                }

            ]
        });
    }
})();