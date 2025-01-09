// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Ensure the script runs only after the DOM is fully loaded
    const submitBtn = document.getElementById('submitBtn');

    if (!submitBtn) {
        console.error('Submit button not found!');
        return;
    }

    submitBtn.addEventListener('click', function () {
        console.log('Button clicked'); // Debugging log

        const gender = document.getElementById('gender').value;
        if (!gender) {
            alert('Please select a gender!');
            return;
        }

        console.log(`Selected gender: ${gender}`); // Debugging log

        switch (gender) {
            case 'male':
                alert('Redirecting to Male page...');
                window.location.href = 'male.html';
                break;
            case 'female':
                alert('Redirecting to Female page...');
                window.location.href = 'female.html';
                break;
            case 'other':
                alert('Redirecting to Other page...');
                window.location.href = 'other.html';
                break;
            default:
                alert('Invalid selection. Please try again.');
        }
    });
});
