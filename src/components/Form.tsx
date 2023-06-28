import { Sub } from "../type";
import { useNewSubForm } from "../hooks/userNewSubFrom";

interface FormProps {
    onNewSub: (sub: Sub) => void
}

export function Form({ onNewSub }: FormProps) {
    const [form, dispatch] = useNewSubForm()
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({
            type: "change_value",
            payload: {
                inputName: e.target.name,
                inputValue: e.target.value
            }
        })
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(form)
        handleClear()
    }
    
    const handleClear = () => {
        dispatch({
            type: 'clear'
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={form.nick}
                    type="text"
                    name="nick"
                    placeholder="nick"
                    onChange={handleChange}
                />
                <input
                    value={form.subMonths}
                    type="number"
                    name="subMonths"
                    placeholder="months"
                    onChange={handleChange}
                />
                <input
                    value={form.avatar}
                    type="text"
                    name="avatar"
                    placeholder="avatar"
                    onChange={handleChange}
                />
                <textarea
                    value={form.description}
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                />

                <button type="button" onClick={handleClear}>Clear form</button>
                <button type="submit">Save sub</button>
            </form>
        </div>
    );
}
