function masonryLayout(containerEl, itemSelector, columns, gap = 20) {
  containerEl.style.position = "relative";
  const items = Array.from(containerEl.querySelectorAll(itemSelector));
  const columnHeights = new Array(columns).fill(0);

  const itemWidth = items[0].offsetWidth;
  const totalItemWidth = itemWidth + gap; // Aumentamos espacio de separación

  items.forEach(item => {
    let minColIndex = columnHeights.indexOf(Math.min(...columnHeights));
    const x = minColIndex * totalItemWidth;
    const y = columnHeights[minColIndex];
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;

    // Sumamos la altura + gap
    columnHeights[minColIndex] += item.offsetHeight + gap;
  });

  const tallestColumnHeight = Math.max(...columnHeights);
  containerEl.style.height = `${tallestColumnHeight}px`;
}

// Ejecutar cuando la página cargue
window.onload = function() {
  const gridContainer = document.getElementById('gallery');
  masonryLayout(gridContainer, '.grid-item', 3, 10); // 3 columnas, gap de 20px
};
