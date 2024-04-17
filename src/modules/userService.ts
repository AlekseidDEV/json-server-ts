import { User } from "src/models/User";
import { UseClass } from "src/models/useClase";
import { PermissionChange } from "src/models/permissionChange";
import { SortParam } from "src/models/sortParam";
import { FetchObject } from "src/models/fetchObject";
import { errorRequest } from "./errorRequest";

export class UserService implements UseClass {

    getRequest<T>(url: string): Promise<T>{
        return fetch(url)
        .then(res => res.json())
        .catch((error) => {
            errorRequest(error)
        })
    }

    postRequest<T>(url: string, obj: FetchObject): Promise<T>{
        return fetch(url, obj)
            .then(res => res.json())
            .catch(error => {
               errorRequest(error)
            })
    }

    getUsers(): Promise<User[]> {
        return this.getRequest('http://localhost:1808/users')
    }

    addUser(user: User): Promise<User>{
        return this.postRequest('http://localhost:1808/users', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
    })
    }

    removeUser(id: string): Promise<User>{
        return this.postRequest(`http://localhost:1808/users/${id}`, {
            method: 'DELETE'
        })
    }

    changUser(id: string, data: PermissionChange): Promise<User>{
        return this.postRequest(`http://localhost:1808/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    getUser(id: string): Promise<User>{
        return this.getRequest(`http://localhost:1808/users/${id}`)
    }

    editUser(id: string, user: User): Promise<User>{
        return this.postRequest(`http://localhost:1808/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    
    filterUser(option: string): Promise<User[]>{
        return this.getRequest(`http://localhost:1808/users?${option}=true`)
    }

    sortUsers(sortOption: SortParam): Promise<User[]>{
        return this.getRequest(`http://localhost:1808/users?_sort=${sortOption.name}&_order=${sortOption.value}`)
    }

    searchUser(srt: string): Promise<User[]>{
        return this.getRequest(`http://localhost:1808/users?name_like=${srt}`)
    }
}