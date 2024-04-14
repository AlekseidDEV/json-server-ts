import { UseClass, User, PermissionChange } from "src/models/types"

export class UserService implements UseClass {
    getUsers() {
        return fetch('http://localhost:1808/users').then(res => res.json())
    }

    addUser(user: User){
        return fetch('http://localhost:1808/users', {
            method: "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
    }

    removeUser(id: string){
        return fetch(`http://localhost:1808/users/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
    }

    changUser(id: string, data: PermissionChange){
        return fetch(`http://localhost:1808/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    getUser(id: string){
        return fetch(`http://localhost:1808/users/${id}`).then(res => res.json())
    }

    editUser(id: string, user: User){
        return fetch(`http://localhost:1808/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
    }
    
    // filterUser(option: string){
    //     return fetch(`http://localhost:1808/users?${option}`).then(res => res.json())
    // }
}