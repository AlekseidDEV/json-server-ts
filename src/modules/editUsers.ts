import { renderUser } from "./render"
import { User, FormElement } from "src/models/types"

export const editUsers = () => {
    const tBody = document.querySelector('#table-body')
    const form: FormElement = document.querySelector('form')
    const nameInput: FormElement = form?.querySelector('#form-name')
    const emailInput: FormElement = form?.querySelector('#form-email')
    const childrenInput: FormElement = form?.querySelector('#form-children')

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