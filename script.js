function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }
}


// START MACHINE
function startMachine() {

    document.querySelector(".value").textContent = "RUNNING";

    document.getElementById("machineMessage").textContent =
        "Machine Started – Process Running";

}


// STOP MACHINE
function stopMachine() {

    document.querySelector(".value").textContent = "STOPPED";

    document.getElementById("machineMessage").textContent =
        "Machine Stopped";


}


// RESET MACHINE
function resetMachine() {

    document.querySelector(".value").textContent = "READY";

    document.getElementById("machineMessage").textContent =
        "System Reset – Ready for Operation";

}