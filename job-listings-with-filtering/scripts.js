const $filters = $(".filters");
var items = [];

$("#clear-all").on("click", () => {
  $(".card").show();
  $filters.empty();
  items = [];
  checkFilters();
});

$(`.tags>button`).on("click", function () {
  const info = $(this).attr("data-info");
  items.push({
    info: info,
    html: $.parseHTML(
      `<div class="item"><span>${info}</span><button data-remove=${info}><img src="./images/icon-remove.svg" alt="Remove filter" /></button></div>`
    ),
  });

  $.map($(".card"), function (e, i) {
    if ($(e).find(`button[data-info=${info}]`).length == 0) {
      $(e).hide();
    }
  });

  $filters.empty();
  for (const e of items) {
    $filters.append(e.html);
  }
  $(".filter").first().css("visibility", "visible");
});

$(document).on("click", ".item>button", function () {
  const info = $(this).attr("data-remove");

  $.map($(".card"), function (e, i) {
    if ($(e).find(`button[data-info=${info}]`).length == 0) {
      $(e).show();
    }
  });

  let newItems = [];
  for (const e of items) {
    if (e.info !== info) {
      newItems.push(e);
    }
  }
  items = newItems;
  $filters.empty();
  for (const e of items) {
    $filters.append(e.html);
  }
  checkFilters();
});

function checkFilters() {
  if (items.length === 0) {
    $(".filter").first().css("visibility", "hidden");
  }
}
