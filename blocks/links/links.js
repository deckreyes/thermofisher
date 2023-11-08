fetch("links.json")
.then(response => response.json())
.then(data => {
  
    //console.log(data);
    //console.log(data.data[0].Title);
    //document.getElementById('list-of-links').textContent = data.data[0].Title;

    var mainContainer = document.getElementById("list-of-links");
    for (var i = 0; i < data.data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = "<a href=" + data.data[i].Link + ">" + data.data[i].Title + "</a>";
        mainContainer.appendChild(div);
    }


  })
  .catch(error => {
    console.log('Error fetching link list:', error);
  });

