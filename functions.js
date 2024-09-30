// 1. Create a list function using map() and arrow function.
function list(clients) {
  return clients
    .map(
      (
        client,
        index
      ) => `<li class="list-group-item d-flex justify-content-between"
         data-index="${index}">
       ${client.name} <strong>$ ${client.balance.toFixed(2)}</strong>
       </li>
    `
    )
    .join(""); // To form one complete string. I join the sting....
}

// 2. Create an order function using sort() and arrow function.
function order(clients, property) {
  return clients.sort((a, b) => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  });
}

// 3. create a total function using reduce() and arrow function.
function total(clients) {
  return clients.reduce((sum, client) => sum + client.balance, 0);
}

// 4. create an info function using find() and arrow function. this will find the client by index no.
function info(index) {
  return clients.find((_, i) => i === index);
}

// 5. create a search function using filter() and arrow function.
function search(query) {
  const lowerQuery = query.toLowerCase(); // toLowerCase convert the query to lowercase.
  return clients.filter((client) =>
    client.name.toLowerCase().includes(lowerQuery)
  );
}
