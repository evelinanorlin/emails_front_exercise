const submitBtn = document.querySelector('#submitBtn');
const input = document.querySelector('#input');



submitBtn.addEventListener('click', () => {
    let newEmail = {"email": input.value};

    fetch('http://localhost:3000/users/add', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmail)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  })