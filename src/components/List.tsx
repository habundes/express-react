import { Sub } from "../type";

type Props = {
    subs: Array<Sub>;
};

export function List({ subs }: Props) {
    return (
        <ul>
            {subs.map((sub) => (
                <li key={sub.nick}>
                    <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                    <h4>
                        {sub.nick} (<small>{sub.subMonths}</small>)
                    </h4>
                    <p>{sub.description}</p>
                </li>
            ))}
        </ul>
    );
}
