document.addEventListener('DOMContentLoaded', function() {
    const detailsVehicle = document.querySelectorAll('.details');
    const doneDetails = document.querySelectorAll('.dismiss');
    const cards = document.querySelectorAll('.card');

    detailsVehicle.forEach(function(button, index) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const buttonIndex = Array.from(detailsVehicle).indexOf(button);

            cards.forEach(function(card) {
                card.classList.add('hide');
            });

            for (let i = 0; i < cards.length; i++) {
                if (i === buttonIndex) {
                    cards[i].classList.remove('hide');
                    break;
                }
            }
        });
    });

    doneDetails.forEach(function(button, index) {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Find the parent card of the clicked "Dismiss" button
            const parentCard = button.closest('.card');
            if (!parentCard) return; // If the parent card is not found, do nothing

            // Find the index of the parent card among all the cards
            const cardIndex = Array.from(cards).indexOf(parentCard);

            // Hide the parent card by adding the 'hide' class
            parentCard.classList.add('hide');
        });
    });

});