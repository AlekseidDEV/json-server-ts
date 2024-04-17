
import { User } from "./User"
import { FetchObject } from "./fetchObject"
import { PermissionChange } from "./permissionChange"
import { SortParam } from "./sortParam"

export interface UseClass {
    postRequest(url: string, obj: FetchObject): Promise<User | User[]>
    getRequest(url: string): Promise<User | User[]>
    getUsers(): Promise<User[]>
    addUser(user: User): Promise<User>
    removeUser(id: string): Promise<User>
    changUser(id: string, data: PermissionChange): Promise<User>
    getUser(id: string): Promise<User>
    editUser(id: string, user: User): Promise<User>
    filterUser(option: string): Promise<User[]>
    sortUsers(sortOption: SortParam): Promise<User[]>
    searchUser(str: string): Promise<User[]>
}