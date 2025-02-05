document.addEventListener('DOMContentLoaded', () =>{
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';
    axios.get('http://localhost:3000/orders')
    .then(response => {
        let categories = response.data;
        categories.forEach(category => {
            let listItem = document.createElement('div');
            listItem.innerHTML =
            `<div>ID: ${category.order_id}</div> 
            <div>Имя: ${category.order_name}</div>
            <div>Клиент: ${category.order_client}</div>
            <div>Отдел: ${category.order_department}</div>
            <div>Описание: ${category.order_description}</div><hr>`
            categoryList.appendChild(listItem);
        });
    });
});