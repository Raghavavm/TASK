const form = document.getElementById("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const batch = document.getElementById("batch").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;
    const gender = document.getElementById("gender").value;
    console.log({name, age, batch, mobile, address, gender});

    fetch('mongodb+srv://vmr:vmr@cluster0.64xzncc.mongodb.net/yoga', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            age: age,
            fee: 500,
            batch: batch,
            mobile: mobile,
            address: address,
            })
    })
    .then(res => res.json())
    .then(data => {
            console.log(data);
    })
    .catch(error => {
        console.log("error", error);
    })  
})
