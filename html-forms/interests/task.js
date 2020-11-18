let checks = document.getElementsByClassName("interest__check");
checks[0].addEventListener("change", () => {
  if (checks[1].checked === true && checks[2].checked === true) {
    checks[1].checked = false;
    checks[2].checked = false;
  } else {
    checks[1].checked = true;
    checks[2].checked = true;
  }
});
checks[3].addEventListener("change", () => {
    if (checks[4].checked === true && checks[5].checked === true) {
      checks[4].checked = false;
      checks[5].checked = false;
    } else {
      checks[4].checked = true;
      checks[5].checked = true;
    }
  });