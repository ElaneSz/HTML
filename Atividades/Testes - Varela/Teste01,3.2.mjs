const ft = document.querySelector("footer")
let cnt = 0
ft.addEventListener("click", function () {
    cnt++
    if (cnt == 5) {
        ft.innerHTML = "Profº Varela ^-^"
        return
    }
    
    if (cnt == 10) {
        ft.innerHTML = "by: Pequena Vênus"
        return
    }

    ft.innerHTML = cnt
})
