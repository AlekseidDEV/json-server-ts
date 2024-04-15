import { User } from "src/models/types"
import { renderUser } from "./render"

export const sortUser = () => {
    const headerSortChildren: HTMLTableElement| null = document.querySelector('#sort-is-children')

    let isSort = false

    headerSortChildren!.style.cursor = 'pointer'

    headerSortChildren?.addEventListener('click' , () => {
        window.userService.sortUsers({name: "children", value: isSort ? 'asc' : 'desc'}).then((users: User[]) => {
            renderUser(users)
        })

        isSort = !isSort
    })
}