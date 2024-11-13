document.getElementById('ab').addEventListener('click', function() {
    const list = document.getElementById('list');
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        list.classList.add('show');
    } else {
        list.classList.remove('show');
        list.classList.add('hidden');
    }
});


document.getElementById('ab2').addEventListener('click', function() {
    const list = document.getElementById('list2');
    if (list.classList.contains('hidden2')) {
        list.classList.remove('hidden2');
        list.classList.add('show2');
    } else {
        list.classList.remove('show2');
        list.classList.add('hidden2');
    }
});

async function copyText() {
    try {
        const textToCopy = document.getElementById('copyTextInput').value;
        await navigator.clipboard.writeText(textToCopy);
        alert('Текст успешно скопирован!');
    } catch (err) {
        console.error('Не удалось скопировать текст:', err);
    }
}
