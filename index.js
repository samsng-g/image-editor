      function updateScreen() {
        const meter = document.getElementById("meterInput").value || "000000";
        const kwh = document.getElementById("kwhInput").value || "0.0";
        document.getElementById("meterDisplay").textContent = " " + meter;
        document.getElementById("kwhDisplay").textContent = "kWh: " + kwh;
      }

      function clearDisplay() {
        document.getElementById("meterInput").value = "";
        document.getElementById("kwhInput").value = "";
        updateScreen();
      }

      // Initialize display
      updateScreen();
   