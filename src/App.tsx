import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Sub } from "./type";
const INITIAL_STATE = [
    {
        nick: "habundesa",
        subMonths: 3,
        avatar: "https://i.pravatar.cc/150?u=habundesa",
        description: "habundes is moderator sometimes",
    },
    {
        nick: "devhugr",
        subMonths: 1,
        avatar: "https://i.pravatar.cc/150?u=devhugr",
        description: "devhugr is new user",
    },
];

function App() {
    const [subs, setSubs] = useState<Sub[]>([]);

    useEffect(() => {
        setSubs(INITIAL_STATE);
    }, []);
    
    const handleNewSub = (newSub: Sub): void => {
      setSubs(subs => ([...subs, newSub]))
    }

    return (
        <div>
            <h1>Page subs</h1>
            <List subs={subs} />
            <Form onNewSub={handleNewSub} />
        </div>
    );
}

export default App;
