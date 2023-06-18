function filterList(filter) {
  var items = document.querySelectorAll('#items li');
  
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    if (!filter || filter === 'all') {
      item.classList.remove('hide'); // Show all items
    } else if (item.classList.contains(filter)) {
      item.style.display = 'flex'; // Show items matching the filter
    } else {
      item.style.display = 'none'; // Hide items not matching the filter
    }
  }
}


