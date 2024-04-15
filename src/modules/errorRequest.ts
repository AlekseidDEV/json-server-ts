export const errorRequest = (error: object | '') => {
    const errorMes: HTMLParagraphElement | null = document.querySelector('.error_Mes')

    if(error){
        errorMes!.style.display = 'block'
    } else{
        errorMes!.style.display = 'none'
    }
}