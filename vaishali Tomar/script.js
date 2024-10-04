document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const popup = document.getElementById('popup');
    const imagePopup = document.getElementById('image-popup');
    const popupImg = document.getElementById('popup-img');

    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form submission to handle validation manually
        
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        // Validation
        let isValid = true;

        if (!firstName) {
            document.getElementById('first-name-error').textContent = 'First Name is required';
            isValid = false;
        } else {
            document.getElementById('first-name-error').textContent = '';
        }

        if (!lastName) {
            document.getElementById('last-name-error').textContent = 'Last Name is required';
            isValid = false;
        } else {
            document.getElementById('last-name-error').textContent = '';
        }

        if (!validateEmail(email)) {
            document.getElementById('email-error').textContent = 'Invalid email format';
            isValid = false;
        } else {
            document.getElementById('email-error').textContent = '';
        }

        if (!validatePhone(phone)) {
            document.getElementById('phone-error').textContent = 'Invalid phone number';
            isValid = false;
        } else {
            document.getElementById('phone-error').textContent = '';
        }

        if (password.length < 8) {
            document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
            isValid = false;
        } else {
            document.getElementById('password-error').textContent = '';
        }

        if (isValid) {
            // Save form data to localStorage
            const formData = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: phone,
                password: password
            };

            localStorage.setItem('userData', JSON.stringify(formData));

            // Redirect to the details page
            window.location.href = 'user-details.html';
        }
    });

    // Move popups with the mouse
    document.addEventListener('mousemove', function (event) {
        const x = event.pageX + 10;
        const y = event.pageY + 10;

        // Move name popup
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;

        // Move image popup
        imagePopup.style.left = `${x + 60}px`;
        imagePopup.style.top = `${y}px`;
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Phone number validation function
    function validatePhone(phone) {
        return phone.length === 10 && /^[0-9]+$/.test(phone);
    }
});
