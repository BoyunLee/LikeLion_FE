export default interface ILens {
    zoomIn(level: number): void; // : 반환타입(void = 없다)
    zoomOut(level: number): void;
}