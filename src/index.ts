import { renderUser } from "./modules/render";
import { UserService } from "./modules/userService";
import { User } from  './models/types'
import { addUser } from "./modules/addUser";
import { removeUsers } from "./modules/removeUsers";
import { changePermisson } from "./modules/changePermission";
import { editUsers } from "./modules/editUsers";
import { filterUser } from "./modules/filterUser";
import { sortUser } from "./modules/sortUser";
import { searchUsers } from "./modules/searchUsers";

declare global {
    interface Window {
        userService: UserService
    }
}

window.userService = new UserService

window.userService.getUsers().then((data: User[]) => {
    renderUser(data)
})

addUser()
removeUsers()
changePermisson()
editUsers()
filterUser()
sortUser()
searchUsers()
