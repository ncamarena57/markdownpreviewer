const preview = document.getElementById("preview");
const editor = document.getElementById("editor");

editor.addEventListener('input', function() {
    if (this.value.length > 1) {
        preview.innerText = this.value;
    }
});