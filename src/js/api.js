fetch('https://jsonplaceholder.typicode.com/todos/10')
      .then(response => response.json())
      .then(json => console.log(json))