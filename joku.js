const kaverit = [];

function paivitaLista() {
  const ul = document.getElementById('kaverilista');
  ul.innerHTML = '';

  kaverit.forEach(nimi => {
    const li = document.createElement('li');
    li.textContent = nimi;
    ul.appendChild(li);
  });
}

function lisaaKaveri() {
  const input = document.getElementById('kaveri-nimi');
  const nimi = input.value.trim();

  if (nimi === '') {
    alert('Kirjoita kaverin nimi!');
    return;
  }

  kaverit.push(nimi);
  input.value = '';
  input.focus();
  paivitaLista();
}

function poistaKaveri() {
  if (kaverit.length === 0) {
    alert('Ei kavereita poistettavaksi!');
    return;
  }

  kaverit.pop();
  paivitaLista();
}

function jarjestaKaverit() {
  kaverit.sort((a, b) => a.localeCompare(b, 'fi'));
  paivitaLista();
}
