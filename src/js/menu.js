// (() => {
    import $ from "jquery";
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    })
$(window).on("scroll", function () {
        $(".nav-js").toggleClass("is-fixed",$(this).scrollTop()>$(".hero").height())
    })
// })();