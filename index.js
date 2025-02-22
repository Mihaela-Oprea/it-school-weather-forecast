const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

// Selectam butonul.
const scrollToTopButton = document.getElementById("scrollToTop");

// Adaugam evenimentul de scroll.
window.addEventListener("scroll", () => {
  const viewportHeight = window.innerHeight; // Înălțimea viewport-ului.
  // Proprietatea scrollY reprezinta numarul de pixeli scrollati pe axa OY.
  // Verificăm dacă scroll-ul depășește jumătatea viewport-ului.
  if (window.scrollY > viewportHeight / 2) {
    scrollToTopButton.classList.add("visible"); // Adaugăm clasa CSS.
  } else {
    scrollToTopButton.classList.remove("visible"); // Eliminăm clasa CSS.
  }
});

// Când butonul este apăsat, face scroll la începutul paginii.
scrollToTopButton.addEventListener("click", () => {
  // Functia scrollTo este o functie predefinita.
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Anul este afisat dinamic
document.querySelector(".year").innerHTML += new Date().getFullYear();
