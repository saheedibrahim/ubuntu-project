document.getElementById("toggle").addEventListener("click", showaside, false)
function showaside() {
    document.getElementById("aside").style.display = "block"
    document.getElementById("overlay").style.display = "block"
}
document.getElementById("overlay").addEventListener("click", hideaside)
function hideaside() {
    document.getElementById("aside").style.display = "none"
    document.getElementById("overlay").style.display = "none"
    // document.getElementById("hamburger").removeEventListener("click", showaside, false);
}