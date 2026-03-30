// Function to generate table rows from data
function generateTableRows(data) {
    let rows = '';
    data.forEach(item => {
        rows += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
            </tr>
        `;
    });
    return rows;
}

// Insert building data
const buildingsTableBody = document.querySelector('#buildingsTable tbody');
buildingsTableBody.innerHTML = generateTableRows(buildingsData);

// Insert vehicle data
const vehiclesTableBody = document.querySelector('#vehiclesTable tbody');
vehiclesTableBody.innerHTML = generateTableRows(vehiclesData);

// Insert staff data
const staffTableBody = document.querySelector('#staffTable tbody');
staffTableBody.innerHTML = generateTableRows(staffData);
