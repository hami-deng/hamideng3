、// 页面加载时调用以初始化总价
window.onload = function() {
    calculateTotal();
};

function updateCount(button, change) {
    const item = button.closest('.item'); // 使用 closest 方法寻找最近的 .item 祖先元素
    const input = item.querySelector('input');
    let count = parseInt(input.value, 10); // 明确指定基数为10

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
        const count = parseInt(item.querySelector('input').value, 10);
        total += price * count;
    });

    document.getElementById('totalPrice').textContent = total.toFixed(2);
}
