/* =========================================
   1. STATO DELL'APPLICAZIONE (DATI)
   Memorizziamo il numero di carezze e l'obiettivo
   ========================================= */
let cuddleCount = 14;      // Numero attuale di carezze
let targetGoal = 20;       // Obiettivo giornaliero prefissato
let popupTimer = null;     // Riferimento al timer per chiudere il popup

/* =========================================
   2. SELEZIONE DEGLI ELEMENTI HTML (DOM)
   Recuperiamo tutti gli elementi con cui interagiremo
   ========================================= */
const countDisplay = document.querySelector('#cuddle-count');
const goalPercentDisplay = document.querySelector('#goal-percent');
const goalLabelDisplay = document.querySelector('#goal-label');
const progressBarFill = document.querySelector('#progress-bar-fill');
const progressTrack = document.querySelector('.progress-track');
const heartIcon = document.querySelector('#counter-heart-icon');
const heroCard = document.querySelector('#hero-card');

const moodEmoji = document.querySelector('#mood-emoji');
const moodText = document.querySelector('#mood-text');

const addCuddleButton = document.querySelector('#add-cuddle-btn');
const resetCounterButton = document.querySelector('#reset-counter-btn');
const resetIcon = document.querySelector('#reset-icon');
const editGoalButton = document.querySelector('#edit-goal-btn');

const celebrationBanner = document.querySelector('#celebration-banner');
const celebrationTextSub = document.querySelector('#celebration-text-sub');
const closeBannerButton = document.querySelector('#close-banner-btn');
const particleContainer = document.querySelector('#particle-container');

// Elementi del popup della mascotte
const dogPopupModal = document.querySelector('#dog-popup-modal');
const mascotDisplayGroup = document.querySelector('#mascot-display-group');
const popupDogTitle = document.querySelector('#popup-dog-title');
const popupDogSubtext = document.querySelector('#popup-dog-subtext');
const cuddleReactionText = document.querySelector('#cuddle-reaction-text');
const dogSvg = document.querySelector('#dog-svg');
const eyeRightOpen = document.querySelector('#eye-right-open');
const eyeRightWink = document.querySelector('#eye-right-wink');
const partyPaws = document.querySelector('#party-paws');

/* =========================================
   3. FUNZIONI PER AGGIORNARE L'INTERFACCIA
   ========================================= */

/**
 * Aggiorna lo stato d'animo del cane in base al numero di carezze ricevute
 */
function updateMood() {
  if (cuddleCount === 0) {
    moodEmoji.textContent = '🥺';
    moodText.textContent = 'In attesa di coccole';
  } else if (cuddleCount < 8) {
    moodEmoji.textContent = '🙂';
    moodText.textContent = 'Sereno e tranquillo';
  } else if (cuddleCount < targetGoal) {
    moodEmoji.textContent = '😊';
    moodText.textContent = 'Molto felice';
  } else {
    moodEmoji.textContent = '🥳';
    moodText.textContent = 'Al settimo cielo!';
  }
}

/**
 * Ricalcola la percentuale, allunga la barra e aggiorna tutti i testi
 */
function updateUI() {
  // 1. Mostriamo il conteggio attuale
  countDisplay.textContent = cuddleCount;

  // 2. Calcoliamo la percentuale (da 0% fino a un massimo di 100%)
  const percentage = Math.min(Math.round((cuddleCount / targetGoal) * 100), 100);
  goalPercentDisplay.textContent = percentage + '%';
  progressBarFill.style.width = percentage + '%';

  // Aggiorniamo l'accessibilità ARIA
  if (progressTrack) {
    progressTrack.setAttribute('aria-valuenow', percentage);
  }

  // 3. Aggiorniamo lo stato d'animo
  updateMood();

  // 4. Mostriamo o nascondiamo il banner di festeggiamento
  if (cuddleCount >= targetGoal) {
    celebrationBanner.classList.add('show');
    celebrationTextSub.textContent = 'Obiettivo ' + targetGoal + '/' + targetGoal + ' raggiunto! Milo è al settimo cielo! 🐾✨';
    if (partyPaws) partyPaws.classList.remove('hidden');
  } else {
    celebrationBanner.classList.remove('show');
    if (partyPaws) partyPaws.classList.add('hidden');
  }
}

/* =========================================
   4. CREAZIONE PARTICELLE FLUTTUANTI (CUORI)
   ========================================= */

/**
 * Crea un'icona (cuore o zampa) che fluttua verso l'alto con un'animazione
 */
function spawnFloatingHeart(originX, originY, isCelebration) {
  if (!particleContainer) return;

  const heart = document.createElement('div');
  heart.className = 'floating-heart';

  // Scegliamo un simbolo casuale
  const symbols = isCelebration 
    ? ['💖', '🐾', '✨', '🐶', '⭐', '🎉', '💚', '💕'] 
    : ['💖', '💕', '🐾', '💚', '✨'];
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  // Calcoliamo posizioni e traiettorie casuali
  const posX = originX || (120 + Math.random() * 160);
  const posY = originY || (280 + Math.random() * 80);
  const driftX = (Math.random() - 0.5) * (isCelebration ? 180 : 90);
  const rotation = (Math.random() - 0.5) * 60;
  const size = isCelebration ? (24 + Math.random() * 16) : (18 + Math.random() * 12);

  heart.style.left = posX + 'px';
  heart.style.top = posY + 'px';
  heart.style.fontSize = size + 'px';
  heart.style.setProperty('--tx', driftX + 'px');
  heart.style.setProperty('--rot', rotation + 'deg');

  particleContainer.appendChild(heart);

  // Rimuoviamo il cuore dal documento al termine dell'animazione (2.8 secondi)
  setTimeout(function() {
    heart.remove();
  }, 2800);
}

/**
 * Pioggia trionfale di cuori ed emoji per l'obiettivo raggiunto
 */
function launchCelebrationRain() {
  const centerX = 180;
  const centerY = 300;

  for (let i = 0; i < 26; i++) {
    setTimeout(function() {
      const offsetX = (Math.random() - 0.5) * 160;
      const offsetY = (Math.random() - 0.5) * 80;
      spawnFloatingHeart(centerX + offsetX, centerY + offsetY, true);
    }, i * 50);
  }
}

/* =========================================
   5. GESTIONE DEL POPUP DEL CAGNOLINO
   ========================================= */

/**
 * Chiude la finestra popup di Milo con animazione di uscita
 */
function hideDogPopup() {
  if (!dogPopupModal || !dogPopupModal.classList.contains('active')) return;

  if (mascotDisplayGroup) {
    mascotDisplayGroup.classList.remove('mascot-enter');
    mascotDisplayGroup.classList.add('mascot-leave');
  }

  setTimeout(function() {
    dogPopupModal.classList.remove('active');
    if (mascotDisplayGroup) mascotDisplayGroup.classList.remove('mascot-leave');
    if (dogSvg) dogSvg.classList.remove('animate-jump-party');
  }, 250);
}

/**
 * Apre il popup del cagnolino con scodinzolio e reazioni personalizzate
 */
function showDogPopup(isGoalReached) {
  // Se c'è già un timer attivo, lo azzeriamo
  if (popupTimer) clearTimeout(popupTimer);

  // Frasi simpatiche casuali di ringraziamento
  const randomPhrases = [
    '*Wuf!* ❤️', 
    'Slurp! 👅', 
    'Yuppi! 🎉', 
    'Ancora! 🐾', 
    'Ti adoro! 💕', 
    'Shiba felice! 🐕'
  ];

  // Testo del fumetto
  if (cuddleReactionText) {
    cuddleReactionText.textContent = isGoalReached 
      ? '🎉 SHIBA IN FESTA! 🐾' 
      : randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
  }

  // Se l'obiettivo è stato raggiunto, scatta l'animazione speciale con salti
  if (isGoalReached) {
    popupDogTitle.textContent = 'Traguardo Raggiunto!';
    popupDogSubtext.textContent = 'Milo ha ricevuto tutte le ' + targetGoal + ' coccole del giorno! 🌟';
    dogSvg.classList.add('animate-jump-party');
    if (partyPaws) partyPaws.classList.remove('hidden');
  } else {
    popupDogTitle.textContent = 'Milo ti ringrazia!';
    popupDogSubtext.textContent = 'Carezza registrata con affetto 💖';
    dogSvg.classList.remove('animate-jump-party');
  }

  // Strizzata d'occhio giocosa di Milo
  if (eyeRightOpen && eyeRightWink) {
    eyeRightOpen.classList.add('hidden');
    eyeRightWink.classList.remove('hidden');
    setTimeout(function() {
      eyeRightOpen.classList.remove('hidden');
      eyeRightWink.classList.add('hidden');
    }, 700);
  }

  // Mostriamo il popup
  dogPopupModal.classList.add('active');
  if (mascotDisplayGroup) {
    mascotDisplayGroup.classList.remove('mascot-leave');
    mascotDisplayGroup.classList.add('mascot-enter');
  }

  // Il popup si chiude da solo dopo alcuni secondi (o cliccando sullo schermo)
  const displayDuration = isGoalReached ? 3800 : 2500;
  popupTimer = setTimeout(function() {
    hideDogPopup();
  }, displayDuration);
}

/* =========================================
   6. FUNZIONE CENTRALE: AGGIUNGI UNA CAREZZA
   ========================================= */
function handleAddCuddle(event) {
  const wasBelowGoal = cuddleCount < targetGoal;

  // 1. Incrementiamo il contatore
  cuddleCount++;

  // 2. Micro-animazione di rimbalzo sul pulsante
  if (addCuddleButton) {
    addCuddleButton.classList.remove('animate-btn-pop');
    void addCuddleButton.offsetWidth; // Trucchetto per forzare il re-flow del browser
    addCuddleButton.classList.add('animate-btn-pop');
  }

  // 3. Battito del cuoricino nel contatore
  if (heartIcon) {
    heartIcon.classList.add('bump');
    setTimeout(function() {
      heartIcon.classList.remove('bump');
    }, 250);
  }

  // 4. Generiamo cuori fluttuanti dalla posizione del tocco
  const canvasRect = particleContainer.getBoundingClientRect();
  const clickX = event && event.clientX ? (event.clientX - canvasRect.left) : 180;
  const clickY = event && event.clientY ? (event.clientY - canvasRect.top - 20) : 380;

  spawnFloatingHeart(clickX, clickY, false);
  setTimeout(function() {
    spawnFloatingHeart(clickX + (Math.random() * 30 - 15), clickY - 15, false);
  }, 120);

  // 5. Verifichiamo se abbiamo appena raggiunto l'obiettivo prefissato
  const reachedGoalNow = wasBelowGoal && (cuddleCount >= targetGoal);

  // 6. Aggiorniamo l'interfaccia grafica
  updateUI();

  // 7. Mostriamo il popup con il cagnolino
  showDogPopup(reachedGoalNow);

  // 8. Se abbiamo appena raggiunto l'obiettivo, lanciamo la festa di cuori
  if (reachedGoalNow) {
    launchCelebrationRain();
  }
}

/* =========================================
   7. COLLEGAMENTO DEGLI EVENTI (LISTENERS)
   ========================================= */

// Click sul pulsante principale "+ Aggiungi carezza"
addCuddleButton.addEventListener('click', handleAddCuddle);

// Click sulla card di Milo per fare una carezza toccando ovunque sulla card
heroCard.addEventListener('click', function(event) {
  handleAddCuddle(event);
});

// Toccando il popup si aggiunge un'altra carezza istantanea senza chiuderlo bruscamente
dogPopupModal.addEventListener('click', function(event) {
  handleAddCuddle(event);
});

// Click sul pulsante "Azzera contatore"
resetCounterButton.addEventListener('click', function() {
  cuddleCount = 0;

  // Piccola rotazione dell'icona di ripristino
  if (resetIcon) {
    resetIcon.style.transform = 'rotate(-180deg)';
    setTimeout(function() {
      resetIcon.style.transform = 'rotate(0deg)';
    }, 300);
  }

  // Aggiorniamo l'interfaccia
  updateUI();
});

// Click sul pulsante "Modifica obiettivo"
editGoalButton.addEventListener('click', function() {
  const userPrompt = prompt('Inserisci il nuovo obiettivo giornaliero di carezze per Milo:', targetGoal);
  if (userPrompt !== null) {
    const parsedGoal = parseInt(userPrompt, 10);
    if (!isNaN(parsedGoal) && parsedGoal > 0) {
      targetGoal = parsedGoal;
      goalLabelDisplay.textContent = 'Obiettivo: ' + targetGoal + ' carezze';
      updateUI();
    } else {
      alert('Per favore inserisci un numero valido maggiore di 0.');
    }
  }
});

// Chiusura manuale del banner di celebrazione
closeBannerButton.addEventListener('click', function(event) {
  event.stopPropagation(); // Evita di far scattare altri click
  celebrationBanner.classList.remove('show');
});

/* =========================================
   8. INIZIALIZZAZIONE ALL'AVVIO
   ========================================= */
updateUI();
