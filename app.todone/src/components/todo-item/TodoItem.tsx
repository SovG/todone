import { Button, Card, Checkbox, tokens } from "@fluentui/react-components";
import { BinRecycleRegular } from "@fluentui/react-icons";
import { useState } from "react";

export interface TodoItemProps {
    name: string,
    done?: boolean,
    deleteCallback?: () => void
}

const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
}

const checkboxStyle: React.CSSProperties = {
    paddingInline: '10px',
    alignSelf: 'center'
}

const binIconStyle: React.CSSProperties = {
    paddingInline: '10px',
    alignSelf: 'center',
}

const TodoItem = ({ name, done = false, deleteCallback = () => { } }: TodoItemProps) => {

    const [isDone, setDone] = useState(done);

    const checkboxHandler = () => {
        setDone(isDone => !isDone);
    }

    return (
        <>
            <Card style={{ backgroundColor: isDone ? tokens.colorNeutralBackground3 : tokens.colorNeutralBackground1 }} >
                <div style={containerStyle}>
                    <Checkbox style={checkboxStyle} onChange={checkboxHandler} />
                    <h2 style={{
                        textDecoration: isDone ? 'line-through' : '',
                        flexGrow: 1
                    }}>{name}</h2>
                    <Button style={binIconStyle} appearance="subtle" icon={<BinRecycleRegular fontSize={'1.5em'} />} onClick={deleteCallback} />
                </div>
            </Card>
        </>
    )
}

export default TodoItem;