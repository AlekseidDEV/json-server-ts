import { FormElement, User } from "src/models/types"
import { renderUser } from "./render"

export const addUser = () => {
    const form: FormElement = document.querySelector('form')
    const nameInput: FormElement = form?.querySelector('#form-name')
    const emailInput: FormElement = form?.querySelector('#form-email')
    const childrenInput: FormElement = form?.querySelector('#form-children')


    form?.addEventListener('submit', (e) => {
        e.preventDefault()

        if(!form.dataset.method){
            const user: User = {
                name: nameInput?.value,
                email: emailInput?.value,
                children: childrenInput?.checked,
                permission: false
            }
    
            window.userService.addUser(user).then(() => {
                window.userService.getUsers().then((users: User[]) => {
                    renderUser(users)
                    form!.reset()
                })
            })
        }     
    })
}