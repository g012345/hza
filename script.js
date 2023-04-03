// Получаем элементы из DOM
const box = document.querySelector('.box');
const text = document.querySelector('.text');

// Задаем начальные значения для координат и скорости
let x = 0;
let y = 0;
let vx = 1;
let vy = 1;

// Функция для обновления положения текста
function updateTextPosition() {
  // Получаем ширину и высоту блока
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;

  // Получаем ширину и высоту текста
  const textWidth = text.offsetWidth;
  const textHeight = text.offsetHeight;

  // Проверяем, достиг ли текст границ блока по горизонтали
  if (x + textWidth >= boxWidth || x <= 0) {
    // Если достиг, меняем направление по горизонтали
    vx *= -1;
    // Генерируем рандомный угол отклонения по вертикали
    vy = Math.random() * 2;
  }

  // Проверяем, достиг ли текст границ блока по вертикали
  if (y + textHeight >= boxHeight || y <= 0) {
    // Если достиг, меняем направление по вертикали
    vy *= -1;
    // Генерируем рандомный угол отклонения по горизонтали
    vx = Math.random() * 2;
  }

  // Обновляем координаты текста
  x += vx;
  y += vy;

  // Применяем новые координаты к тексту
  text.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
}

// Запускаем функцию обновления каждые 10 миллисекунд
setInterval(updateTextPosition, 200);
