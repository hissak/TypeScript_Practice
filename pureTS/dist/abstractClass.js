"use strict";
class TakePhoto {
    constructor(cameraModel, filter) {
        this.cameraModel = cameraModel;
        this.filter = filter;
    }
    ;
}
class IG extends TakePhoto {
    constructor(cameraModel, filter) {
        super(cameraModel, filter);
        this.cameraModel = cameraModel;
        this.filter = filter;
    }
    getSepia() {
        console.log('Get Sepia');
    }
}
const hai = new IG('Sony', 'Black and White');
