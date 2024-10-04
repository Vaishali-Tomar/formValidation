document.addEventListener('DOMContentLoaded', function () {
    const userDetailsDiv = document.getElementById('user-details');
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        userDetailsDiv.innerHTML = `
            <p><strong>First Name:</strong> ${userData.first_name}</p>
            <p><strong>Last Name:</strong> ${userData.last_name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Phone Number:</strong> ${userData.phone_number}</p>
            <p><strong>Password:</strong> ${userData.password}</p>
        `;
    } else {
        userDetailsDiv.innerHTML = '<p>No user data found.</p>';
    }
});
