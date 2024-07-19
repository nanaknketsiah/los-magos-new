$(document).ready(function () {
  // Function to detect if the device is a smartphone
  function isSmartphone() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  // Only initialize Locomotive Scroll if the device is not a smartphone
  if (!isSmartphone()) {
    var locoScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      repeat: true,
      multiplier: 0.5,
      touchMultiplier: 9,
      firefoxMultiplier: 50,
      direction: "vertical",
      getDirection: true,
      tablet: {
        smooth: true,
      },
    });

    new ResizeObserver(() => locoScroll.update()).observe(
      document.querySelector("[data-scroll-container]")
    );

    locoScroll.on("call", (value, way, obj) => {
      if (value === "showAlert") {
        if (way === "enter") {
          $(obj.el).addClass("in-view");
        } else if (way === "exit") {
          $(obj.el).removeClass("in-view");
        }
      }
    });
  }
 
  
});
