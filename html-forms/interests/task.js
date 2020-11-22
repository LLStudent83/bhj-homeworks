
let checks = document.getElementsByClassName("interest__check");
console.log(checks);

for (let i = 0; i < checks.length; i++) {
  checks[i].addEventListener("change", () => {
    changeCheck(checks[i]);
  });
}

function changeCheck(check) {
  let nestedElems = check.parentElement.nextElementSibling.getElementsByClassName(
    "interest__check"
  );
  if (check.parentElement.nextElementSibling.matches("ul.interests") && check.checked) {
    for (let i = 0; i < nestedElems.length; i++) {
      nestedElems[i].checked = true;
    }
  } else {
    for (let i = 0; i < nestedElems.length; i++) {
      nestedElems[i].checked = false;
    }
  }
}

//closest("ul.interests")