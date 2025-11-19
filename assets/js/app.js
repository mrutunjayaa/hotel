document.addEventListener("DOMContentLoaded",()=>{

  let selectedRoom = null;

  // Select room button
  document.querySelectorAll(".select-room-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const roomName = btn.closest(".room-card").querySelector("strong").innerText;
      selectedRoom = roomName;
      document.getElementById("customerInfo").classList.remove("d-none");
      window.scrollTo({top: 0, behavior:"smooth"});
      alert("Room selected: " + roomName);
    });
  });

  // Send OTP simulation
  document.getElementById("sendOTP").addEventListener("click",()=>{
    document.getElementById("otpBox").classList.remove("d-none");
    alert("OTP sent via WhatsApp / SMS");
  });

  // Verify OTP simulation
  document.getElementById("verifyOTP").addEventListener("click",()=>{
    document.getElementById("paymentSection").classList.remove("d-none");
    alert("OTP Verified");
  });

  // Confirm Booking
  document.getElementById("confirmBooking").addEventListener("click",()=>{
    document.getElementById("confirmationSection").classList.remove("d-none");
    alert("Booking Confirmed! Booking ID: BK-"+Math.floor(Math.random()*9000+1000));
  });

});
