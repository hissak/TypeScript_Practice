interface TakePhoto {
  cameraMode: string
  filter: string
  burst: number
}

interface Story {
  createStory(): void
}

class Instagram implements TakePhoto, Story {
  cameraMode: string = 'normal'
  filter: string = 'clarendon'
  burst: number = 3
  constructor(cameraMode: string, filter: string, burst: number){
    this.cameraMode = cameraMode
    this.filter = filter
    this.burst = burst
  }
  takePhoto(){
    console.log('take a photo')
  }
  createStory(){
    console.log('create a story')
  }
}