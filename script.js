
  
  // Animación de nieve
  function createSnowflakes() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 8}s`;
    snowflake.innerText = "❄";
    document.body.appendChild(snowflake);
    setTimeout(() => {
      snowflake.remove();
    }, 5000);
  }
  
  setInterval(createSnowflakes, 200);
  