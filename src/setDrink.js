const setDrink=(section)=>{
    section.addEventListener('click',function(e){
        // e.preventDefault()
        // console.log(e.target)
        const id=e.target.parentElement.dataset.id

        // json
        localStorage.setItem('drink',id)
        
    })
}
export default setDrink