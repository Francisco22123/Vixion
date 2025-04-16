document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".accordion-toggle").forEach((header) => {
      header.addEventListener("click", function () {
        const content = this.nextElementSibling; // Contenido del acordeón
  
        if (!content) return;
  
        const isOpen = content.style.maxHeight;
  
        // Cierra todos los acordeones
        document.querySelectorAll(".accordion-content").forEach((el) => {
          el.style.maxHeight = "";
        });
  
        // Si el acordeón estaba cerrado, lo abrimos
        if (!isOpen || isOpen === "0px") {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });
  