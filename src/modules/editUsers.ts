import { renderUser } from "./render"
import { User} from "src/models/User"

export const editUsers = () => {
    const tBody = document.querySelector('#table-body')
    const form: HTMLFormElement | null = document.querySelector('form')
    const nameInput: HTMLFormElement | null = form!.querySelector('#form-name')
    const emailInput: HTMLFormElement | null = form!.querySelector('#form-email')
    const childrenInput: HTMLFormElement | null = form!.querySelector('#form-children')

    tBody?.addEventListener('click', (e: Event) => {
       if((e.target as HTMLElement).closest('.btn-warning')){
            const tr = (e.target as HTMLElement).closest('tr')
            const id = tr!.dataset.key

            window.userService.getUser(id!).then((user: User) => {
                nameInput!.value = user.name
                emailInput!.value = user.email
                childrenInput!.checked = user.children

                form!.dataset.method = id
            })


       }
    })

    form?.addEventListener('submit', (e) => {
        e.preventDefault()

        if(form.dataset.method){
            const id = form.dataset.method

            const user: User = {
                name: nameInput?.value,
                email: emailInput?.value,
                children: childrenInput?.checked,
                permission: false
            }

            window.userService.editUser(id, user).then(() => {
                window.userService.getUsers().then((users: User[]) => {
                    renderUser(users)
                    form!.reset()
                    form.removeAttribute('data-method')
                })
            })
        }     
    })
}