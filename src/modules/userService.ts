import { UseClass, User, PermissionChange, SortParam} from "src/models/types"

export class UserService implements UseClass {
    getUsers(): Promise<User[]> {
        return fetch('http://localhost:1808/users').then(res => res.json())
    }

    addUser(user: User): Promise<User>{
        return fetch('http://localhost:1808/users', {
            method: "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
    }

    removeUser(id: string): Promise<User>{
        return fetch(`http://localhost:1808/users/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
    }

    changUser(id: string, data: PermissionChange): Promise<User>{
        return fetch(`http://localhost:1808/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    getUser(id: string): Promise<User>{
        return fetch(`http://localhost:1808/users/${id}`).then(res => res.json())
    }

    editUser(id: string, user: User): Promise<User>{
        return fetch(`http://localhost:1808/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
    }
    
    filterUser(option: string): Promise<User[]>{
        return fetch(`http://localhost:1808/users?${option}=true`).then(res => res.json())
    }

    sortUsers(sortOption: SortParam): Promise<User[]>{
        return fetch(`http://localhost:1808/users?_sort=${sortOption.name}&_order=${sortOption.value}`).then(res => res.json())
    }

    searchUser(srt: string): Promise<User[]>{
        return fetch(`http://localhost:1808/users?name_like=${srt}`).then(res => res.json())
    }
}