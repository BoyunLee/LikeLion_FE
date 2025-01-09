import ILens from "./ilens";

export default class Lens {
    [ILens.zoomIn](level) {
        console.log(`Zoomed in by ${level}.`);
    }

    [ILens.zoomOut](level) {
        console.log(`Zoomed out by ${level}.`);
    }
}