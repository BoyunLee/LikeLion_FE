import Lens from "./lens.js";   
import ILens from "./ilens.js";

class Camera {

    #lens;

    constructor() {
        this.#lens = new Lens();
    }

    setLens(lens) {
        this.#lens = lens;
    }

    // 줌 조절
    zoomIn(level) {
        this.#lens.[ILens.zoomIn](level);
    }

    zoomOut(level) {
        this.#lens.[ILens.zoomOut](level);
    }

    // 사진 촬영
    capturePhoto() {
        console.log("Photo captured!");
    }

    // 동영상 촬영
    startRecording() {
        console.log("Recording started.");
    }

    stopRecording() {
        console.log("Recording stopped.");
    }

    // 광량 조절
    adjustExposure(level) {
        console.log(`Exposure adjusted to level ${level}.`);
    }

    // 초점 조절
    setFocusMode(mode) {
        console.log(`Focus mode set to ${mode}.`);
    }

    // ISO 설정
    setISO(value) {
        console.log(`ISO set to ${value}.`);
    }

    // 플래시 설정
    setFlashMode(mode) {
        console.log(`Flash mode set to ${mode}.`);
    }
}

// 카메라 객체 생성 및 사용
const camera = new Camera();
const lens = { zoomIn : () => console.log("메렁 가까지렁") };

camera.setLens(lens);

// 예제 호출
camera.capturePhoto(); // "Photo captured!"
camera.startRecording(); // "Recording started."
camera.adjustExposure(3); // "Exposure adjusted to level 3."
camera.setFocusMode("auto"); // "Focus mode set to auto."
camera.setISO(400); // "ISO set to 400."
camera.zoomIn(2); // "Zoomed in by 2 levels."
camera.setFlashMode("auto"); // "Flash mode set to auto."
