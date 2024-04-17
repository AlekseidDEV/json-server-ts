import { User } from "src/models/User"
import { debounce } from "./hellpers"
import { renderUser } from "./render"

export const searchUsers = () => {
    const searchInput: HTMLInputElement | null = document.querySelector('#search-input')

    const searcRender = () => {
        window.userService.searchUser(searchInput!.value).then((users: User[]) => {
            renderUser(users)
        })
    }

    searchInput?.addEventListener('input', debounce(searcRender, 1000))
}