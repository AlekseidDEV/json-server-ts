import { renderUser } from "./render"
import { User } from "src/models/User"

export const removeUsers = () => {
    const tBody = document.querySelector('#table-body')

    tBody?.addEventListener('click', (e: Event) => {
       if((e.target as HTMLElement).closest('.btn-danger')){
            const tr = (e.target as HTMLElement).closest('tr')
            const id = tr!.dataset.key

            window.userService.removeUser(id!).then(() => {
                window.userService.getUsers().then((users: User[]) => {
                    renderUser(users)
                })
            })
       }
    })
}