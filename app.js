document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');
  const submit = document.querySelector('.btn');

  loadEventListeners();

  function loadEventListeners() {
    form.addEventListener('submit', escreveObj);
  }

  function escreveObj(e) {
    const firstname = document.querySelector('.firstname');
    const lastname = document.querySelector('.lastname');
    const email = document.querySelector('.email');
    const pw = document.querySelector('.pw');
    const phone = document.querySelector('.phone');

    let tempObj = {
      fname: firstname.value,
      lname: lastname.value,
      em: email.value,
      passw: pw.value,
      phn: phone.value
    };

    let pessoasVec;

    blankCheck = pessoasVec => {
      if (
        ['fname', 'lname', 'mail', 'pw'].some(function(item) {
          return pessoasVec[item] === '';
        })
      ) {
        alert('Preencha todos os campos!');
        return false;
      }
      return true;
    };

    if (!blankCheck(tempObj)) {
      return;
    }

    const dataFromStorage = localStorage.getItem('Contatos');

    if (dataFromStorage) {
      pessoasVec = JSON.parse(dataFromStorage);
    } else {
      pessoasVec = [];
    }

    pessoasVec.push(tempObj);

    let objJson = JSON.stringify(pessoasVec);
    localStorage.setItem('Contatos', objJson);
    window.location.href = 'after.html';

    pessoasVec.forEach(pessoasVec => {
      console.log(pessoasVec);
    });

    e.preventDefault();
  }
});
