//código para verificar en que section estamos e iluminar los actives

const menuLinks = document.querySelectorAll(".minavbar a");
    const sections = document.querySelectorAll("section");

    // Función para verificar si una sección está en la vista
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para actualizar el enlace activo en función de la sección visible
    function updateActiveLink() {
        sections.forEach((section, index) => {
            if (isElementInViewport(section)) {
                // Elimina la clase "active" de todos los enlaces
                menuLinks.forEach(link => link.classList.remove("active"));
                // Agrega la clase "active" solo al enlace correspondiente a la sección visible
                menuLinks[index].classList.add("active");
            }
        });
    }

    document.addEventListener("DOMContentLoaded", updateActiveLink);


    // Agrega un evento de "scroll" para actualizar el enlace activo cuando haces scroll
    window.addEventListener("scroll", updateActiveLink);
    // Llama a la función al cargar la página para establecer el enlace activo inicial
    updateActiveLink();