document.getElementById("urlForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const url = document.getElementById("urlInput").value;
  if (!url) return;

  fetch("/browse", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ link: url }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.html) {
        document.getElementById("output").style.display = "block";
        document.getElementById("htmlContent").textContent = data.html;
      } else {
        document.getElementById("htmlContent").textContent =
          "Failed to fetch HTML content.";
      }
    })
    .catch((error) => {
      document.getElementById("htmlContent").textContent =
        "Error occurred: " + error;
    });
});
