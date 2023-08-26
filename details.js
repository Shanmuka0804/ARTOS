
  // details.js

document.addEventListener('DOMContentLoaded', function() {
  var artosImage = document.getElementById('artos-image');
  var detailsContainer = document.getElementById('details-container');

  artosImage.addEventListener('click', function() {
    // Clear the details container
    detailsContainer.innerHTML = '';

    // Create and append the details content
    var detailsContent = document.createElement('div');
    detailsContent.innerHTML = '<h2>Product Details</h2>' +
                               '<p>Product Name: Artos</p>' +
                               '<p>Quantity: 300ml</p>' +
                               '<p>Taste: Refreshing</p>';

    detailsContainer.appendChild(detailsContent);
  });
});
