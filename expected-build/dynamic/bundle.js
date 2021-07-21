const el = document.getElementById("123");
const el2 = document.getElementsByTagName("input")[0];
const el3 = document.getElementById("1234");
const initUsername = "";
const handleMousemove = (e) => {
    //can't bother to do reactivity so will write values directly
    el.innerHTML = `${e.clientX} : ${e.clientY}`;
}
const handleInput = (e) => {
    el2.value = e.target.value;
    el3.innerHTML = e.target.value;
    onChange(e.target.value);
}
const onChange = (val) => {
    localStorage.setItem("username", JSON.stringify(val));
}
document.addEventListener("mousemove", handleMousemove);
document.addEventListener("input", handleInput);
const storedValueStr = localStorage.getItem("username");
const storedValue = JSON.parse(storedValueStr);
el2.value = storedValue ?? initUsername;