$("window").on("load", $("#toggle").prop("checked", false));
$("#toggle").click(function () {
  $(".annually").toggle(this.checked);
  $(".monthly").toggle(!this.checked);
});
