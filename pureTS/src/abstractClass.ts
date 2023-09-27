abstract class TakePhoto {
  constructor(
    public cameraModel: string,
    public filter: string
  ){};

}

class IG extends TakePhoto {
  constructor(
    public cameraModel: string,
    public filter: string
  ){
    super(cameraModel, filter);
  }
  getSepia(): void {
    console.log('Get Sepia');
  }
}

const hai = new IG('Sony', 'Black and White');