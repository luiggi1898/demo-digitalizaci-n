"use strict";

// YouTube no deja ver vídeos insertados si la página se abre con doble clic (file://).
// En ese caso cambio el vídeo por su miniatura con un enlace a YouTube.
if (location.protocol === "file:") {
  document.querySelectorAll("iframe[data-video]").forEach((iframe) => {
    const id = iframe.dataset.video;
    const enlace = document.createElement("a");
    enlace.href = "https://www.youtube.com/watch?v=" + id;
    enlace.className = "video-enlace";
    enlace.innerHTML =
      '<img src="https://img.youtube.com/vi/' + id + '/hqdefault.jpg" alt="' + iframe.title + '">' +
      '<span class="video-play">▶ Ver en YouTube</span>';
    iframe.replaceWith(enlace);
  });
}
