$(document).ready(() => {
  $("#sidebarCollapse").on("click", () => {
    $("#sidebar, #content").toggleClass("active");
  });
});
