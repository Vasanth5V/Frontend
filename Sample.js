async function call() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json()
      console.log(typeof(response))
      console.log(typeof(data))
      // console.log(responsed_data);

    const table = document.getElementById('tablebody');

      data.forEach(data => {
        const tableRow = document.createElement('tr');
        
        const userIdeCell = document.createElement('td');
        userIdeCell.textContent = data.userId;
        
        const idCell = document.createElement('td');
        idCell.textContent = data.id;
        
        const titleCell = document.createElement('td');
        titleCell.textContent = data.title;
        
        const completedCell= document.createElement('td');
        completedCell.textContent = data.completed;

        tableRow.append(userIdeCell, idCell, titleCell, completedCell);

        table.append(tableRow);
      });

   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  call();

  // responsed_data.forEach(element => {   });
  
  
//  const response=fetch('https://jsonplaceholder.typicode.com/todos/1')
//  responsed_data =then(response => response.json())
//  console.log(responsed_data)
//     //   .then(json => console.log(json))