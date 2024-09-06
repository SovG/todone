import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Input, Label } from "@fluentui/react-components"
import { AddCircleRegular, BackspaceRegular, CheckmarkCircleRegular } from "@fluentui/react-icons";
import { useRef, useState } from "react";

export interface TodoFormModalProps {
    createTodo: (todoName: string) => void
}

const TodoFormModal = ({ createTodo }: TodoFormModalProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const todoModalRef = useRef(null);

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        const newTodo = todoModalRef.current.value;
        createTodo(newTodo);
        setIsOpen(false);
    }

    return (
        <Dialog open={isOpen} onOpenChange={(event, data) => setIsOpen(data.open)}>
            <DialogTrigger>
                <Button icon={<AddCircleRegular />} />
            </DialogTrigger>
            <DialogSurface>
                <form onSubmit={handleSubmit} data-testid="new-todo-form">
                    <DialogBody>
                        <DialogTitle>Add TODO</DialogTitle>
                        <DialogContent style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
                            <Label required htmlFor={"todo-name"}>
                                Todo:
                            </Label>
                            <Input required type="text" id={"todo-name"} ref={todoModalRef} />
                        </DialogContent>
                        <DialogActions>
                            <DialogTrigger>
                                <Button appearance="secondary" icon={<BackspaceRegular />}>Cancel</Button>
                            </DialogTrigger>
                            <Button type="submit" appearance="primary" icon={<CheckmarkCircleRegular />}>
                                Submit
                            </Button>
                        </DialogActions>
                    </DialogBody>
                </form>
            </DialogSurface>
        </Dialog>
    )
}

export default TodoFormModal;