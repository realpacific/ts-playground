interface TextMeta {
    text: string;
    length: number;
    style: string;
    font: string;
}

interface ImageMeta {
    uri: string;
    format: 'jpg' | 'png';
    size: number;
}


class TextLayer {
    meta: TextMeta
}

class ImageLayer {
    meta: ImageMeta
}

function setMeta<T extends TextLayer | ImageLayer>(
    layer: T,
    meta: T extends TextLayer ? TextMeta : ImageMeta
) {
    layer.meta = meta
}

setMeta(new TextLayer(), {} as TextMeta)
setMeta(new ImageLayer(), {} as ImageMeta)
