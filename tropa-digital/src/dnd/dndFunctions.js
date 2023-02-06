export function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/html', event.target.id);
    var img = new Image();
    img.src = 'example.gif';
    event.dataTransfer.setDragImage(img, 10, 10);
};

export function onDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move"
};

export function onDrop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));

}