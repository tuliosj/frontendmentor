$("window").on("load", $("#toggle").prop("checked", false));
$("#toggle").click(function () {
  $(".annually").toggle(this.checked);
  $(".monthly").toggle(!this.checked);
  $("#y-label").css(
    "color",
    this.checked ? "var(--blue)" : "var(--light-blue)"
  );
  $("#m-label").css(
    "color",
    this.checked ? "var(--light-blue)" : "var(--blue)"
  );
});
