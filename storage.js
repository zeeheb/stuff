loadEventListener();

function loadEventListener() {
  document.addEventListener('DOMContentLoaded', loadContacts);
}

function loadContacts() {
  const data = localStorage.getItem('Contatos');
  let pessoasVec = JSON.parse(data);

  const table = document.querySelector('.table');
  const row = document.createElement('tr');

  pessoasVec.forEach(pessoasVec => {
    console.log(pessoasVec);

    const cell = document.createElement('td');
    const celltext = document.createTextNode(pessoasVec.fname + ' ');
    const celltext2 = document.createTextNode(pessoasVec.lname);

    cell.appendChild(celltext);
    cell.appendChild(celltext2);
    row.appendChild(cell);

    table.appendChild(row);
    table.appendChild(cell);
  });
}
