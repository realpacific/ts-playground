class CoreAPI {
    constructor(public baseUrl: string) {
    }
}

type BaseAPIConstructor = new (...args: any[]) => CoreAPI;

function ImageAPI<TBase extends BaseAPIConstructor>(Base: TBase) {
    return class extends Base {
        getImages() {
        }

        getImageById(id: string) {
        }
    }
}

function TextAPI<TBase extends BaseAPIConstructor>(Base: TBase) {
    return class extends Base {
        getTexts() {
        }

        getTextById(id: string) {
        }
    }
}

class ImageApiClient extends ImageAPI(CoreAPI) {
}

const imageApiClient = new ImageApiClient('https://image.com');
imageApiClient.getImageById('12')
imageApiClient.getImages()


class TextApiClient extends TextAPI(CoreAPI) {
}

const textApiClient = new TextApiClient('https://image.com');
textApiClient.getTextById('12')
textApiClient.getTexts()


class AllApiClient extends TextAPI(ImageAPI(CoreAPI)) {}

const allAppClient = new AllApiClient('');
allAppClient.getImages()
allAppClient.getTexts()