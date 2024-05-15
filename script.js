const participants = [];
const items = [];

function addParticipant() {
    const participantInput = document.getElementById('participant');
    const participant = participantInput.value.trim();
    if (participant) {
        participants.push(participant);
        participantInput.value = '';
        updateParticipantList();
    }
}

function removeParticipant(index) {
    participants.splice(index, 1);
    updateParticipantList();
}

function addItem() {
    const itemInput = document.getElementById('item');
    const item = itemInput.value.trim();
    if (item) {
        items.push(item);
        itemInput.value = '';
        updateItemList();
    }
}

function removeItem(index) {
    items.splice(index, 1);
    updateItemList();
}

function updateParticipantList() {
    const participantList = document.getElementById('participant-list');
    participantList.innerHTML = '';
    participants.forEach((participant, index) => {
        const li = document.createElement('li');
        li.className = 'participant-item';
        li.textContent = participant;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
            removeParticipant(index);
        });
        li.appendChild(removeButton);
        participantList.appendChild(li);
    });
}

function updateItemList() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'participant-item';
        li.textContent = item;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
            removeItem(index);
        });
        li.appendChild(removeButton);
        itemList.appendChild(li);
    });
}

function assignRandomly() {
    const resultList = document.getElementById('result-list');
    resultList.innerHTML = '';
    
    if (participants.length === 0 || items.length === 0) {
        alert('Add participants and items to assign first.');
        return;
    }
    
    const shuffledItems = [...items];
    for (let i = shuffledItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
    }
    
    participants.forEach((participant, index) => {
        const li = document.createElement('li');
        li.textContent = `${participant}: ${shuffledItems[index]}`;
        resultList.appendChild(li);
    });
}

function handleKeyPress(event, inputType) {
    if (event.key === "Enter") {
        if (inputType === 'participant') {
            addParticipant();
        } else if (inputType === 'item') {
            addItem();
        }
    }
}