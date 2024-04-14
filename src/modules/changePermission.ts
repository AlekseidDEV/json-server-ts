import { User } from "src/models/types"
import { renderUser } from "./render"

export const changePermisson = () => {
    const tBody = document.querySelector('#table-body')

    tBody?.addEventListener('click', (e: Event) => {
       if((e.target as HTMLElement).closest('input[type=checkbox]')){
            const tr = (e.target as HTMLElement).closest('tr')
            const id = tr!.dataset.key
            const input = tr?.querySelector("input[type=checkbox]")

            window.userService.changUser(id!, {permission: (input as HTMLFormElement).checked}).then(() => {
                window.userService.getUsers().then((users: User[]) => {
                    renderUser(users)
                })
            })
       }
    })
}