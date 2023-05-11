const video = document.getElementById("vidio");
      function fill () {
        video.classList.remove("fit");
        video.classList.add("fill");
      }
        function fill () {
        video.classList.remove("fit");
        video.classList.remove("zoomIn");
        video.classList.remove("zoomOut");
        video.classList.add("fill");
      }
      function fit () {
        video.classList.remove("fill");
        video.classList.remove("zoomIn");
        video.classList.remove("zoomOut");
        video.classList.add("fit");
      }
      
      function zoomIn () {
        video.classList.remove("fit");
        video.classList.remove("fill");
        video.classList.remove("zoomOut");
        video.classList.add("zoomIn");
      }
      function zoomOut () {
        video.classList.remove("fit");
        video.classList.remove("zoomIn");
        video.classList.remove("fill");
        video.classList.add("zoomOut");
      }

