document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const registrationForm = document.getElementById('registrationForm');
    const gameInterface = document.getElementById('gameInterface');
    const statusElement = document.getElementById('status');
    const petImage = document.getElementById('petImage');
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const guessFeedback = document.getElementById('guessFeedback');
    
    const feedSound = document.getElementById('feedSound');
    const playSound = document.getElementById('playSound');
    const nextSound = document.getElementById('nextSound');
    const correctSound = document.getElementById('correctSound');
    const incorrectSound = document.getElementById('incorrectSound');
    
    const petImages = [
        { src: 'https://static.vecteezy.com/system/resources/previews/008/386/721/original/cartoon-funny-cat-isolated-on-white-background-vector.jpg', name: 'Cat' },
        { src: 'http://clipart-library.com/newimages/dog-cartoon-10.jpg', name: 'Dog' },
        { src: 'https://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-bunny-free-1024x1024.png', name: 'Rabbit' },
        { src: 'http://www.clipartbest.com/cliparts/aiq/xpe/aiqxpeqiM.png', name: 'Bird' },
        { src: 'https://png.pngtree.com/png-vector/20230801/ourmid/pngtree-two-cute-cartoon-hamsters-are-sitting-down-vector-png-image_6830918.png', name: 'Hamster' },
        { src: 'https://www.downloadclipart.net/large/25407-bubbling-cartoon-fish-clipart.png', name: 'Fish' },
        { src: 'https://png.pngtree.com/png-clipart/20231124/original/pngtree-cute-turtle-cartoon-mascot-png-image_13700513.png', name: 'Turtle' },
        { src: 'https://clipground.com/images/ferret-clipart-6.jpg', name: 'Ferret' }
    ];
    
    let currentPetIndex = 0;
    let petName = 'Cat';  // Default pet name

    // Handle form submission
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('name').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password === confirmPassword) {
            alert('Registration successful! Welcome, ' + username + '!');
            registrationForm.style.display = 'none';
            gameInterface.style.display = 'block';
        } else {
            alert('Passwords do not match. Please try again.');
        }
    });

    // Handle feeding the pet
    document.getElementById('feedButton').addEventListener('click', () => {
        feedSound.play();
        statusElement.textContent = 'Your pet is full!';
    });

    // Handle playing with the pet
    document.getElementById('playButton').addEventListener('click', () => {
        playSound.play();
        statusElement.textContent = 'Your pet had fun!';
    });

    // Handle changing to the next pet
    document.getElementById('nextPetButton').addEventListener('click', () => {
        nextSound.play();
        currentPetIndex = (currentPetIndex + 1) % petImages.length;
        const currentPet = petImages[currentPetIndex];
        petImage.src = currentPet.src;
        petName = currentPet.name;  // Update the pet's name
        statusElement.textContent = 'Your pet is happy!';
    });

    // Handle guessing the pet's name
    guessButton.addEventListener('click', () => {
        const userGuess = guessInput.value.trim();
        if (userGuess.toLowerCase() === petName.toLowerCase()) {
            correctSound.play();
            guessFeedback.textContent = 'Correct! You guessed the pet\'s name!';
            guessFeedback.style.color = 'green';
        } else {
            incorrectSound.play();
            guessFeedback.textContent = 'Try again!';
            guessFeedback.style.color = 'red';
        }
        guessInput.value = '';  // Clear the input field
    });
});
