const regex = {
  "first-name": /^([a-z\u00C0-\u00FF\s]){1,100}$/i,
  "last-name": /^([a-z\u00C0-\u00FF\s]){1,100}$/i,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,100}$/,
};

const answers = {
  "first-name": "First Name cannot be empty",
  "last-name": "Last Name cannot be empty",
  email: "Looks like this is not an email",
  password: "Password must have at least a digit and eight characters",
};

function validate(id) {
  const input = $(`#${id}`);

  $(`#${id}-after`).remove();
  input.removeClass("invalid");
  if (input.val().search(regex[id]) < 0) {
    input.addClass("invalid");
    input.after(
      `<div class='invalid-helper' id='${id}-after'><em>${answers[id]}</em><img src='./images/icon-error.svg' alt='Input Error'/></div>`
    );
  }
}

$("form").submit(() => {
  if ($(".invalid").length >= 1) {
    $(".invalid").first().focus();
    return false;
  }
});
