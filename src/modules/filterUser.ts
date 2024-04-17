import { renderUser } from "./render"
import { User } from "src/models/User"

export const filterUser = () => {
    const btnIsChildren = document.querySelector('#btn-isChildren')
    const btnIsPermisson = document.querySelector('#btn-isPermissions')
    const btnIsAll = document.querySelector('#btn-isAll')
    
    btnIsChildren?.addEventListener('click', () => {
        window.userService.filterUser('children').then((data: User[]) => {
            renderUser(data)
        })
    })
    btnIsPermisson?.addEventListener('click', (e) => {
        window.userService.filterUser('permission').then((data: User[]) => {
            renderUser(data)
        })
    })
    btnIsAll?.addEventListener('click', (e) => {
        window.userService.getUsers().then((data: User[]) => {
            renderUser(data)
        })
    })
}