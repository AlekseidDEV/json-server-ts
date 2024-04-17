
import { User } from "src/models/User"
import { renderUser } from "./render"

export const addUser = () => {
    const form: HTMLFormElement | null = document.querySelector('form')
    const nameInput: HTMLFormElement | null = form!.querySelector('#form-name')
    const emailInput: HTMLFormElement | null = form!.querySelector('#form-email')
    const childrenInput: HTMLFormElement | null = form!.querySelector('#form-children')


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