setInterval(save, 3000)
async function save() {
    const textArea = document.querySelector("#doc-text")
    const docText = textArea.value;

    const saveText = document.querySelector("#save-in-progress-text")
    saveText.classList.remove("hidden")
    await fetch("http://127.0.0.1:9000/", {
        method: "post",
        body: docText
    })
    
    saveText.classList.add("hidden")
}