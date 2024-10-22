const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseMessage = document.getElementById('responseMessage');
const emotionImage = document.getElementById('emotionImage');
const container = document.querySelector('.container'); // Select the container

yesButton.addEventListener('click', () => {
    responseMessage.textContent = "Yay! I knew you loved me! ❤️🥰";
    emotionImage.src = "https://img.freepik.com/premium-vector/cute-cartoon-designed-sticker-with-lovely-boy-girl-couple-happy-valentines-day-card-with-flying-heart-children-characters-romantic-dating-card-isolated-pink-background-vector-illustration_345238-2452.jpg"; // Happy image
    emotionImage.classList.remove('hidden');
    noButton.style.display = 'none'; // Hide the "No" button

    // Change background color to a happy color
    container.style.backgroundColor = '#ffeb3b'; // Bright yellow
});

noButton.addEventListener('click', () => {
    if (responseMessage.textContent === "") {
        responseMessage.textContent = "Please think again...";
        emotionImage.src = "https://cdn-icons-png.flaticon.com/256/9559/9559048.png"; // Sad image
        emotionImage.classList.remove('hidden');

        // Change background color to a neutral color
        container.style.backgroundColor = '#f0f0f0'; // Light gray
    } else {
        responseMessage.textContent = "Think once again!";
        animateNoButton();
    }
});

function animateNoButton() {
    noButton.style.position = 'absolute';
    
    const moveButton = () => {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 100);
        
        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    };
    
    let count = 0;
    const maxMoves = 10;

    const moveInterval = setInterval(() => {
        moveButton();
        count++;
        
        if (count >= maxMoves) { // After 10 moves, stop the animation
            clearInterval(moveInterval);
            noButton.style.position = 'relative'; // Reset position for next use

            // Change background color to a sad color after the animation
            container.style.backgroundColor = '#e57373'; // Light red
        }
    }, 500);
}

// Optional: Reset the game after showing the response
function resetGame() {
    responseMessage.textContent = "";
    emotionImage.classList.add('hidden');
    noButton.style.display = 'inline-block'; // Show the "No" button again

    // Reset background color to default
    container.style.backgroundColor = '#fff'; // White
}

emotionImage.addEventListener('click', resetGame); // Reset on image click

