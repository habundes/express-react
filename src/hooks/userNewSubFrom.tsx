import { useReducer } from "react"
import { Sub } from "../type"

type FromReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

interface FormState {
    form: Sub
}

const INITIAL_STATE = {
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
}

function formReducer(state: FormState["form"], action: FromReducerAction) {
    switch (action.type) {
        case "change_value": { 
            const { inputName, inputValue } = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
        }
        case  "clear":
            return INITIAL_STATE
    }
}

export const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

