const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    //Add your code here
    const prices = document.querySelectorAll(".price");
    let totalPrice = 0;
    prices.forEach(price => {
        totalPrice += Number(price.innerText.replace("$", ""));
    });
    // alert(`Total price: $${totalPrice.toFixed(2)}`);
    // console.log(totalPrice);
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
            <td>Total</td>
            <td id="ans">${totalPrice}</td>
    `;
    document.querySelector("table").appendChild(totalRow);

};

getSumBtn.addEventListener("click", getSum);