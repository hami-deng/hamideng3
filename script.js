function updateCount(button, change) {
    const item = button.parentElement.parentElement;
    const input = item.querySelector('input');
    let count = parseInt(input.value);

    // 更新数量
    count += change;
    if (count < 0) count = 0; // 数量不能为负数
    input.value = count;

    // 计算总价
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    document.querySelectorAll('.item').forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const count = parseInt(item.querySelector('input').value);
        total += price * count;
    });

    document.getElementById('totalPrice').textContent = total.toFixed(2);
}
