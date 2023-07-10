import { itemAdd } from "./itemState.js";
import { itemAllDelete } from "./itemState.js";
export function eventLists() { //모든 이벤트 초기 세팅

    const addBtn = document.querySelector(".addBtn"); // [추가] 버튼
    addBtn.addEventListener("click", () => { // 제품 이름 저장
        itemAdd();
    });

    const addEnter = document.querySelector(".item-amount"); // 수량 입력 후 enter 버튼
    addEnter.addEventListener("keydown", (event) => {
        if(event.key === "Enter")
            itemAdd();
    });


    const allDelBtn = document.querySelector(".deleteAllBtn"); // [전체 초기화 버튼]
    allDelBtn.addEventListener("click", () => {
        itemAllDelete();
    });
}

