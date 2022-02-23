import model from "./model"
import comentModel from './comentModel'

const addNewElement = 'addNewElement'
const deleteElement = 'deleteElement'
const newElementChange = 'newElementChange'
const modalToggle = 'modalToggle'
const warning = 'warning'
const deleteComent = 'deleteComent'
const addComment = 'addComment'
const setElements = 'setElements'

let AppleUrl = 'data:image/jpeg;base64,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'
let ApelsinUrl = 'data:image/jpeg;base64,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'
let EggUrl = 'data:image/jpeg;base64,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'
let AnanasUrl = 'https://winetime.com.ua/uploads/symlink/55000-56000/51178961374_b4ef89786f_b.jpg'

let someComents = (id) => [
    comentModel(1, id, 'some text in comment', '14:00 22.08.2021'),
    comentModel(2, id, 'some text in comment', '15:00 22.08.2021'),
    comentModel(3, id, 'some text in comment', '16:00 22.08.2021')
]

let initialState = {
    addModal: false,
    elements: [
        model(2, ApelsinUrl, 'Apelsin', 3, undefined, undefined, '100g', ...someComents(2)),
        model(3, EggUrl, 'Egg', 500, '999', '999', '1T', ...someComents(3)),
        model(4, AnanasUrl, 'Pineapple', 1, '150', '150', '1kg', ...someComents(4)),
        model(1, AppleUrl, 'Apple', 4, '100', '100', '200g', ...someComents(1)),
        model(5, AppleUrl, 'Apple', 2, '100', '100', '200g', ...someComents(1)),
    ].sort((a, b) => {
        if (a.name.localeCompare(b.name) == 0) {
            return b.count - a.count
        }
        else {
            return a.name.localeCompare(b.name)
        }
    }),
    parameters: ['title', 'imageUrl', 'count', 'width', 'height', 'weight'],
    newElement: {
        title: '',
        imageUrl: '',
        count: '',
        height: '',
        width: '',
        weight: ''
    },
    warning: false
}

let ell

let listReducer = (state = initialState, action) => {
    switch (action.type) {
        case setElements:
            return {...state, elements: action.elements}
        case addComment:
            let newComent = comentModel(Math.random(), action.pageId, action.text || 'empty comment', 'no date, I want to sleep(')
            ell = state.elements.map(i => {
                if (i.id == action.pageId) {
                    i.comments.push(newComent)
                }
                return i
            })
            return { ...state, elements: ell }
        case deleteComent:
            let comm = state.elements.filter(i => i.id == action.pageId)[0].comments.filter(c => c.id != action.id)
            ell = state.elements.map(i => {
                if (i.id == action.pageId) {
                    i.comments = comm
                }
                return i
            })
            return { ...state, elements: ell }
        case warning:
            return { ...state, warning: false }
        case addNewElement:
            let id
            if (state.elements.length == 0) {
                id = 0
            }
            else {
                id = state.elements[state.elements.length - 1].id
            }
            let warn = false
            Object.entries(state.newElement).map(i => {
                if (i[1] == '') {
                    warn = true
                }
            }
            )
            if (warn == true) {
                return {
                    ...state, newElement:
                    {
                        title: '',
                        imageUrl: '',
                        count: '',
                        height: '',
                        width: '',
                        weight: ''
                    }, warning: true, addModal: false
                }
            }
            let element = model(id + 1, state.newElement.imageUrl, state.newElement.title,
                state.newElement.count, state.newElement.height, state.newElement.width, state.newElement.weight)
            return {
                ...state, elements: [...state.elements, element], newElement:
                {
                    title: '',
                    imageUrl: '',
                    count: '',
                    height: '',
                    width: '',
                    weight: ''
                }, addModal: false
            }
        case deleteElement:
            return { ...state, elements: state.elements.filter(i => i.id != action.id) }
        case newElementChange:
            let obj = { ...state }
            obj.newElement[action.header] = action.text
            return obj
        case modalToggle:
            return { ...state, addModal: !state.addModal }
        default:
            return state
    }
}

export let addAction = () => ({ type: addNewElement })
export let deleteAction = (id) => ({ type: deleteElement, id })
export let newElementChangeAction = (header, text) => ({ type: newElementChange, header, text })
export let modalToggleAction = () => ({ type: modalToggle })
export let warningAction = () => ({ type: warning })
export let deleteComentAction = (id, pageId) => ({ type: deleteComent, id, pageId })
export let addCommentAction = (text, pageId) => ({ type: addComment, text, pageId })
export let setElementsAction = (elements) => ({type: setElements, elements})

export default listReducer