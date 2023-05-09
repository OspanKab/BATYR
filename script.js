location.assign("#head");

function log__in(element) {
	var a = document.querySelector(".logIn").innerHTML;
	location.assign("#popup");
	if(a == "log out") {
		document.querySelector(".popup").style.display = "none";
		document.querySelector(".profile").style.display = "none";
		document.getElementById("asd").style.overflowY = "auto";
		document.querySelector(".logIn").innerHTML = "log in";
		document.querySelector(".workouts").style.marginLeft = "827px";
	}
	else if(a == "log in") {
		document.querySelector(".popup").style.display = "block";
	}
}

function scrol(element) {
	document.getElementById("asd").style.overflowY = "auto";
}

function remember(element) {
	var a = $("#checkbox_check").is(':checked');

	if(a == false) {
		$("#checkbox_check").prop('checked', true);
	}
	else {
		$("#checkbox_check").prop('checked', false);
	}
}



function logIn(element) {
	var n = document.querySelector(".your_username").value;
	var m = document.querySelector(".your_password").value;
	if(n.length > 2 && m.length > 4) {
		document.querySelector(".profile").style.display = "block";
		document.querySelector(".logIn").innerHTML = "log out";
		document.querySelector(".user_name").innerHTML = n;
		document.querySelector(".workouts").style.marginLeft = "817px";
		document.getElementById("asd").style.overflowY = "auto";
		document.getElementById("asd").style.width = "1519px";
		document.getElementById("top").style.width = "1519px";
		document.getElementById("rectangle").style.width = "1519px";
		var q = document.getElementById("logbtnnn");
		q.href = "#head";
	}
	else {
		var o = document.getElementById("logbtnnn");
		o.href = "#head";

		var x = document.getElementById("txtb111");
		x.setAttribute("class", "txtb1");

		var y = document.getElementById("txtb122");
		y.setAttribute("class", "txtb1");

		/*var j = document.getElementById("txtb13");
		j.setAttribute("class", "txtb1");*/
	}
}

function big() {
	var c = document.querySelector(".your_username").value;
	var d = document.querySelector(".your_password").value;
	if(c.length > 2 && d.length > 4) {
		var e = document.getElementById("txtb111");
		e.setAttribute("class", "txtb");

		var f = document.getElementById("txtb122");
		f.setAttribute("class", "txtb");

		/*var g = document.getElementById("txtb13");
		g.setAttribute("class", "txtb");*/
	}
}

	let map;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      }

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});