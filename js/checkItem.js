
function itemCheck() {
    const itemStateString = window.localStorage.getItem('itemState');
    const itemState = JSON.parse(itemStateString);
    console.log(itemState);
    console.log("이거나오면안댐");
}
itemCheck();