type FieldDescription = {
    [key in keyof ImageMeta]: string;
}

const fieldDescriptions: FieldDescription = {
    size: "",
    format: "",
    uri: ""
}


// -------------
type AllFieldDescription = {
    [key in keyof (ImageMeta & TextMeta)]: string;
}


const allFieldDescriptions: AllFieldDescription = {
    font: "",
    length: "",
    size: "",
    style: "",
    format: "",
    text: "",
    uri: ""
}

// -------------

type NoStyleProps = 'font' | 'style'

type NoSyleDescription = {
    [key in Exclude<keyof (ImageMeta & TextMeta), NoStyleProps>]: string;
}

const noStyleFieldDescriptions: NoSyleDescription = {
    length: "",
    size: "",
    format: "",
    text: "",
    uri: ""
}
