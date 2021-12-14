interface UpdateAction {
    type: "update",
    payload: string
}

interface OutputAction {
    type: "output"
}

export type Action = UpdateAction | OutputAction;