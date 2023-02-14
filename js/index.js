const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggle");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variable");

  themeToggle.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggle.querySelector("span:nth-child(2)").classList.toggle("active");
});

// fill list in table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `  
                    <td>${order.nom}</td>
                    <td>${order.adresse}</td>
                    <td>${order.telephone}</td>
                    <td class="${
                      order.email === "Baharouna02@gmail.com"
                        ? "danger"
                        : order.profil === "developpeur"
                        ? "warning"
                        : "primary"
                    }">${order.email}</td>
                    <td class="primary">${order.profil}</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
