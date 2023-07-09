//CRUD
//create
//read
//update
//delete

function itemLoad() {

    const itemStateString = window.localStorage.getItem('itemState');
    //console.log(itemStateString);
    if (itemStateString !== null) {
        const presentItemState = JSON.parse(itemStateString);
        const tableContainer = document.querySelector(".item-show");

        const row = document.createElement("tr");
        

        presentItemState.name.forEach( (arr) => {
            itemState.name.push(arr); 
            const nameCell = document.createElement("td");
            nameCell.textContent = arr;
            row.appendChild(nameCell);
        });
        presentItemState.state.forEach((arr) =>{
            itemState.state.push(arr);
            const stateCell = document.createElement("td");
            stateCell.textContent = arr;
            row.appendChild(stateCell);
        })
        presentItemState.exp.forEach((arr) =>{
            itemState.exp.push(arr);  
            const nameCell = document.createElement("td");
            nameCell.textContent = arr;
            row.appendChild(nameCell);  
        })
        presentItemState.amount.forEach((arr) =>{
            itemState.amount.push(arr);
            const nameCell = document.createElement("td");
            nameCell.textContent = arr;
            row.appendChild(nameCell);    
        })
                
    }

    
}

export const itemState = { //냉장고 제품 정보
    name: [],   // 제품 이름
    state: [],  // 저장 공간 / freeze : 냉동 , cool : 냉장
    exp: [],    // 유통 기한 / YYMMDD 로 저장
    amount: [], // 제품 수량 
}

export function itemAdd() {
    const nameInput = document.querySelector(".item-name").value;
    const stateInput = document.querySelector(".item-where").value;
    const expInput = document.querySelector(".item-exp").value;
    const amountInput = document.querySelector(".item-amount").value;

    itemState.name.push(nameInput);
    itemState.state.push(stateInput);
    itemState.exp.push(expInput);
    itemState.amount.push(amountInput);

    const itemStateString = JSON.stringify(itemState);
    window.localStorage.setItem('itemState', itemStateString);
}

export function itemDelte() {

}

export function itemEdit() {

}

export function itemRender() {

}


itemLoad();