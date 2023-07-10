//CRUD
//create
//read
//update
//delete

export const itemState = { //냉장고 제품 정보
    name: [],   // 제품 이름
    state: [],  // 저장 공간 / freeze : 냉동 , cool : 냉장
    exp: [],    // 유통 기한 / YYMMDD 로 저장
    amount: [], // 제품 수량 
}

export function itemAdd() {
    const nameInput = document.querySelector(".item-name").value; // 입력한 정보
    const stateInput = document.querySelector(".item-where").value;
    const expInput = document.querySelector(".item-exp").value;
    const amountInput = document.querySelector(".item-amount").value;

    if(nameInput === "" || stateInput === "" || expInput === "" || amountInput ===""){
        alert("빈칸 없이 입력 부탁드립니다.");
        return;
    } 

    itemState.name.push(nameInput); //itemState에 입력한 정보 저장
    itemState.state.push(stateInput);
    itemState.exp.push(expInput);
    itemState.amount.push(amountInput);

    console.log(itemState);
    const itemStateString = JSON.stringify(itemState); //서버에 저장
    window.localStorage.setItem('itemState', itemStateString);
    
    alert("성공적으로 추가되었습니다!");
}

export function itemDelte() { // 제품 삭제 기능 ( 추가 예정 )

}

export function itemAllDelete() { //전체 초기화 버튼
    window.localStorage.clear();  //모든 저장된 제품 삭제
    alert("냉장고 초기화");
}

export function itemEdit() { // 제품 정보 수정 기능 ( 추가 예정 )

}

export function itemRender() { // 제품 정보 랜더링 기능 ( 추가 예정 )

}
