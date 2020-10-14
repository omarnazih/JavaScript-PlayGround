document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open connection
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(this.responseText);
    }
  }

  xhr.send();
  // HTTP Statuses
  // 200 : 'ok'
  // 403 : "Forbidden"
  // 404 : "Not Found"
}