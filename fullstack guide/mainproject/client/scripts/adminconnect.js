document.getElementById('departmentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    axios.post('http://localhost:3000/orders', { name, description })
        .then(() => document.getElementById('message').textContent = 'Добавлено!')
        .catch(() => document.getElementById('message').textContent = 'Ошибка');
});