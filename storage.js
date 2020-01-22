loadEventListener();

function loadEventListener() {
  document.addEventListener('DOMContentLoaded', loadContacts);
}

function loadContacts() {
  const data = localStorage.getItem('Contatos');
  let pessoasVec = JSON.parse(data);

  const table = document.querySelector('.table');
  //   const row = document.createElement('tr');
  pessoasVec.forEach(pessoasVec => {
    const row = document.createElement('tr');
    console.log(pessoasVec);

    buildTd = (tag, i) => {
      const cell = document.createElement('td');
      const celltext = document.createTextNode(pessoasVec[tag]);
      cell.appendChild(celltext);
      row.appendChild(cell);
    };

    ['fname', 'lname', 'em', 'passw', 'phn'].forEach(buildTd);

    table.appendChild(row);
  });
}
