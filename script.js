function copyToClipboard(element) {
    const input = document.getElementById(element);
    navigator.clipboard.writeText(input.value);
}