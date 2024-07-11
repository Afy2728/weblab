document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let semester = document.getElementById('semester').value;
    let branch = document.getElementById('branch').value;
    let website = document.getElementById('website').value;

    // Create result string
    let result = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Semester: ${semester}</p>
        <p>Branch: ${branch}</p>
        <p>Website: ${website}</p>
    `;

    // Display result
    document.getElementById('res').innerHTML = result;
});
