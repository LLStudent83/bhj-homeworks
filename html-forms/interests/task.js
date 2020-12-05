/*let checks = document.getElementsByClassName("interest__check");

for (let i = 0; i < checks.length; i++) {
  checks[i].addEventListener("change", () => {
    if (checks[i].parentElement.nextElementSibling) {
      changeCheckDown(checks[i]);
    }
    if (checks[i].closest("ul.interests")) {
      changeCheckUpp(checks[i]);
    }
  });
}

function changeCheckDown(check) {
  if (check.parentElement.nextElementSibling) {
    let nestedElems = check.parentElement.nextElementSibling.getElementsByClassName(
      "interest__check"
    );

    if (
      check.parentElement.nextElementSibling.matches("ul.interests") &&
      check.checked
    ) {
      for (let i = 0; i < nestedElems.length; i++) {
        nestedElems[i].checked = true;
      }
    } else {
      for (let i = 0; i < nestedElems.length; i++) {
        nestedElems[i].checked = false;
      }
    }
  }
}

function changeCheckUpp(check) {
  let checkChildren = Array.from(
    check.closest("ul.interests").getElementsByClassName("interest__check")
  );
  if (checkChildren.every((element) => element.checked)) {
    check
      .closest("ul.interests")
      .previousElementSibling.querySelector(
        ".interest__check"
      ).indeterminate = false;
    check
      .closest("ul.interests")
      .previousElementSibling.querySelector(".interest__check").checked = true;
  }
  if (
    checkChildren.some((element) => element.checked) &&
    !checkChildren.every((element) => element.checked)
  ) {
    check
      .closest("ul.interests")
      .previousElementSibling.querySelector(
        ".interest__check"
      ).indeterminate = true;
    check
      .closest("ul.interests")
      .previousElementSibling.querySelector(".interest__check").checked = false;
  }
  if (!checkChildren.some((element) => element.checked)) {
    check
      .closest("ul.interests")
      .previousElementSibling.querySelector(".interest__check").checked = false;
    check
      .closest("ul.interests")
      .previousElementSibling.querySelector(
        ".interest__check"
      ).indeterminate = false;
  }
}
*/
const allInterests = document.querySelectorAll('.interest__check')

function checkLists (event) {
	let target = event.target;
	let childLi = target.closest('li').querySelectorAll('ul li');

	if (childLi.length > 0) {
		for (let j = 0; j < childLi.length; j++) {
			childLi[j].querySelector('input').checked = target.checked;
		}
	}

	upListChecked(target);
}

function upListChecked(target) {
	let parentUlChild = target.closest('ul');
	let childInput = parentUlChild.querySelectorAll('input');
	let parentLiUl = parentUlChild.closest('li');

	if (parentLiUl) {
		parentLiUl = parentLiUl.querySelector('input');
		let array = [];

		for (let i = 0; i < childInput.length; i++) {
			array.push(childInput[i].checked);
		}

		parentLiUl.checked = array.every(Boolean);
		parentLiUl.indeterminate = !array.every(Boolean) && array.some(Boolean);

		upListChecked(parentLiUl);
	}

}

allInterests.forEach(node => {
  node.addEventListener('click', checkLists) 
});
