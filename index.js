//document.getElementById("count-el").innerText = 5


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let click_count = 0


function increment()
{
    click_count = click_count + 1
    countEl.innerText = click_count
}

function save()
{
    let cur_val = countEl.innerText + " - "
    saveEl.textContent = cur_val + saveEl.textContent
    click_count = 0
    countEl.innerText = 0
}

