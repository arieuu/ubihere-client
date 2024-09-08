
export interface IProject {
    id?: number,
    title: string,
    about: string,
    image: string,
    owner_email?: string,
    total_ratings?: number,
    number_of_responses?: number,
    calculated_rating?: number
}

export interface IComment {
    id: number,
    commenter_name: string,
    comment_owner_email: string,
    content: string,
    project_id: number,
}

export interface ISignUp {
    email: string,
    password: string,
    name: string
}

export interface ILogin {
    email: string,
    password: string,
}

export interface IUser {
    id: string,
    name: string,
    email: string,
    is_staff: boolean,
    is_superuser: boolean,
}