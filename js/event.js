import { itemAdd } from "./itemState.js";

export function eventLists() { //모든 이벤트 초기 세팅

    const addBtn = document.querySelector(".addBtn"); // [추가] 버튼
    addBtn.addEventListener("click", () => { // 제품 이름 저장
        itemAdd();
    });

}

