"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = 'normal';
        this.filter = 'clarendon';
        this.burst = 3;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    takePhoto() {
        console.log('take a photo');
    }
    createStory() {
        console.log('create a story');
    }
}
