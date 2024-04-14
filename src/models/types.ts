
interface User {
    id?: number;
    name: string;
    email: string;
    children: boolean;
    permission: boolean;
}

interface UseClass {
    getUsers(): Promise<User[]>
    addUser(user: User): Promise<User>
    removeUser(id: string): Promise<User>
    changUser(id: string, data: PermissionChange): Promise<User>
    getUser(id: string): Promise<User>
    editUser(id: string, user: User): Promise<User>
    // filterUser(option: string): Promise<User[]>
}

interface PermissionChange {
    permission: boolean
}

type FormElement = HTMLFormElement | null | undefined

export {
    UseClass, 
    User,
    FormElement,
    PermissionChange
}


