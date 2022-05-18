const ft = document.querySelector("footer")


let cnt = 0

ft.addEventListener("click", function() {
    cnt++
    ft.innerHTML = cnt
})
