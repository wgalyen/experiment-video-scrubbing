(async () => {
    startProgress();

    log('Loading. Please wait...');

    const observer = await CanvasFrameScrubber.create({
        video: document.getElementById('video-1')
    });

    const observable = new ScrollObservable();
    observable.subscribe(observer);

    log('Ready! Scroll to scrub.');

    stopProgress();
})();
