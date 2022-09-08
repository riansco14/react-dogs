import * as Yup from 'yup'
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]
const FILE_SIZE = 1000000000

export const postSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    peso: Yup.string().required("Campo obrigatório"),
    idade: Yup.string().required("Campo obrigatório"),
    img: Yup.mixed().nullable().test("FILE_SIZE", "O arquivo é muito grande.",
        value => !value || (value.raw && value.raw.size <= FILE_SIZE))
        .test("FILE_FORMAT", "O arquivo anexado não é compátivel.",
            value => !value.raw || (value.raw && SUPPORTED_FORMATS.includes(value.raw.type)))
})