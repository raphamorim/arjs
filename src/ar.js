(function() {
    var ar = {};

    /*
        Must verify if exists DeviceOrientation,
        WebGL Support and Camera Access (the last is not required,
        however the user must deliver an background mesh)

        returns Object only if follow the requires,
        if not then return false
    */
    function init() {
        var gl = null,
            deviceOrientation = window.DeviceOrientationEvent;

        try {
            var canvas = document.createElement('canvas');
            gl = (
                canvas.getContext("webgl") ||
                canvas.getContext("experimental-webgl")
            );
        } catch (e) {}

        if (!gl) {
            console.warn("Unable to initialize WebGL. Your browser may not support it.");
            return false;
        }

        if (!deviceOrientation) {
            console.warn("Unable to initialize DeviceOrientation. Your browser may not support it.");
            return false;
        }

        var video = document.getElementById('video');

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({
                video: true
            }).then(function(stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            });
        }

        console.log(deviceOrientation);
        console.log(gl);

        window.addEventListener("deviceorientation", handleOrientation, true);
        return {};
    }

    function handleOrientation(event) {
        var absolute = event.absolute;
        var alpha = event.alpha;
        var beta = event.beta;
        var gamma = event.gamma;

        var b = {
            absolute: absolute,
            alpha: alpha,
            beta: beta,
            gamma: gamma
        };

        var or = document.querySelector('.orientation');
        console.log(b);
        or.innerHTML = JSON.stringify(b);
    }

    ar.init = init.bind(this);
    window.ar = ar;
})();