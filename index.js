function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const selectedFoodOptions = document.getElementById("food").selectedOptions;
    const foods = [];
    for (let i = 0; i < selectedFoodOptions.length; i++) {
      foods.push(selectedFoodOptions[i].value);
    }
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    if (foods.length < 2) {
      alert("Please select at least 2 choices for food.");
      return;
    }

    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cells = [
      firstName,
      lastName,
      address,
      pincode,
      gender,
      foods.join(", "),
      state,
      country
    ];

    cells.forEach((cellData) => {
      const newCell = newRow.insertCell();
      newCell.textContent = cellData;
    });

    clearForm();
  }

  function clearForm() {
    document.getElementById("myForm").reset();
  }