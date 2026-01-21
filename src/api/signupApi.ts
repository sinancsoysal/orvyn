import { callEdge } from "../utils/supabaseClient"

const SIGNUP_API = "signup"

export type AcceptInvitationParams = {
    token: string
    password: string
    full_name: string
    username: string
}

export function acceptInvitation(parameters: AcceptInvitationParams): Promise<boolean> {
    return callEdge<boolean>(SIGNUP_API, {
        body: {
            action: 'accept_invitation',
            parameters,
        },
    })
}

export function validate_invitation(parameters: string): Promise<boolean> {
    return callEdge<boolean>(SIGNUP_API, {
        body: {
            action: 'validate_invitation',
            parameters,
        },
    })
}
