var input = document.getElementById('input');

function calc() {
    let root = Math.sqrt(input.value);
    document.getElementById('output').value = root;
}