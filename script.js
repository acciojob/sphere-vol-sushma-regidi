function volume_sphere() {
  // Get radius value from input field
  const radiusInput = document.getElementById("radius").value;
  const radius = parseFloat(radiusInput);

  // Validate: must be a number and non-negative
  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN";
    return;
  }

  // Calculate volume using formula V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places and display in output field
  document.getElementById("volume").value = volume.toFixed(4);
}

