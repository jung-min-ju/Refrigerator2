
// function itemCheck() {
//     const itemStateString = window.localStorage.getItem('itemState');
//     const itemState = JSON.parse(itemStateString);
//     console.log(itemState);
//     console.log("이거나오면안댐");
// }
// itemCheck();

function ItemLoad() {
    const itemStateString = window.localStorage.getItem('itemState'); //로컬저장소에 저장된 정보 불러오기
    console.log(itemStateString);
    if (itemStateString !== null) {  //로컬 저장소에 저장된 정보가 있을 경우 랜더링
    
        const presentItemState = JSON.parse(itemStateString);
        const tableContainer = document.querySelector(".item-show");
        // tableContainer.innerHTML = "";
        presentItemState.name.forEach((arr, index) => {
            const row = document.createElement("tr");

            // itemState.name.push(arr);
            // itemState.state.push(presentItemState.state[index]);
            // itemState.exp.push(presentItemState.exp[index]);
            // itemState.amount.push(presentItemState.amount[index]);

            const nameCell = document.createElement("td");
            const stateCell = document.createElement("td");
            const expCell = document.createElement("td");
            const amountCell = document.createElement("td");

            nameCell.textContent = arr;
            stateCell.textContent = presentItemState.state[index];
            expCell.textContent = presentItemState.exp[index];
            amountCell.textContent = presentItemState.amount[index];

            row.appendChild(nameCell);
            row.appendChild(stateCell);
            row.appendChild(expCell);
            row.appendChild(amountCell);
            tableContainer.appendChild(row);
        });
    }
}


ItemLoad();