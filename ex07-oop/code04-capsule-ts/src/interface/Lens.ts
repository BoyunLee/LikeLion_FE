import ILens from './ILens';

export default class Lens implements ILens {

    zoomIn(level: number): void {
        console.log(`Lens zoomIn`);
    }   
    zoomOut(level: number): void {
        console.log(`Lens zoomOut`);
    }
}