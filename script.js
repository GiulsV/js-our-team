
// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.

// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team:
// cliccando sul pulsante “add” viene creato un nuovo oggetto,
// il quale viene inserito nell’array iniziale
// e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.


//1. array contentenente oggetti (immagini nome ruolo)
const teamMembers = [
    {
        photo: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO'
    },
    {
        photo: 'img/angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chief Editor'
    },
    {
        photo: 'img/walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager'
    },
    {
        photo: 'img/angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Manager'
    },
    {
        photo: 'img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer'
    },
    {
        photo: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer'
    }
]

//2. selezione su team-container
const teamContainer = document.querySelector('.team-container');

//3. funzione per generare card team members 
function generateMembersCards() {
    
    for (let i = 0; i < teamMembers.length; i++) {
        const member = teamMembers[i];
        generateSingleCard(member);

    }
}


//4. funzione per creare le card e la struttura
function generateSingleCard(member) {
    const teamCardContainer = document.createElement('div');
    teamCardContainer.classList.add('team-card');
    teamContainer.appendChild(teamCardContainer);

    const cardImageDiv = document.createElement('div');
    cardImageDiv.classList.add('card-image');
    teamCardContainer.appendChild(cardImageDiv);

    const cardImage = document.createElement('img');
    cardImageDiv.appendChild(cardImage);
    cardImage.src = member.photo;

    const cardTextDiv = document.createElement('div');
    teamCardContainer.appendChild(cardTextDiv);
    cardTextDiv.classList.add('card-text');

    const nameText = document.createElement('h3');
    nameText.innerText = member.name;
    cardTextDiv.appendChild(nameText);

    const roleText = document.createElement('p');
    roleText.innerText = member.role;
    cardTextDiv.appendChild(roleText);

    
}

generateMembersCards();