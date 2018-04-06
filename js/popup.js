var link = document.querySelector(".search-btn");

    var popup = document.querySelector(".form-wrap");
    var close = popup.querySelector(".search-btn");

    var form = popup.querySelector("form");
    var incoming = popup.querySelector("[name=incoming-date]");
    var outcoming = popup.querySelector("[name=outcoming-date]");

    var isStorageSupport = true;
    var storage = "";

    popup.classList.add("modal-close");

    try {
      storage = localStorage.getItem("incoming");
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (popup.classList.contains("modal-close")) {
        popup.classList.remove("modal-close");
        popup.classList.add("modal-show");
        if (storage) {
          incoming.value = storage;
          outcoming.focus();
        } else {
          incoming.focus();
        }
      } else {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        popup.classList.add("modal-close");
      }
    });

    form.addEventListener("submit", function (evt) {
      if (!incoming.value || !outcoming.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("incoming", incoming.value);
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });