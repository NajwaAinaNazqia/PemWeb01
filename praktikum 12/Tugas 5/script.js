function validateForm() {
    const namaPelanggan = document.getElementById("namaPelanggan").value;
    const email = document.getElementById("email").value;
    const jamKeberangkatan = document.getElementById("jamKeberangkatan").value;
    const tujuanKeberangkatan = document.getElementById("tujuanKeberangkatan").value;
    const jumlahTiket = document.getElementById("jumlahTiket").value;
  
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";
  
    let isValid = true;
  
    if (namaPelanggan.length === 0 || namaPelanggan.length > 30) {
      errorMessages.innerHTML += "Nama Pelanggan harus diisi (maksimum 30 karakter)<br>";
      isValid = false;
    }
  
    // Tambahkan validasi email
    // Tambahkan validasi jam keberangkatan
    // Tambahkan validasi tujuan keberangkatan
    // Tambahkan validasi jumlah tiket
  
    if (isValid) {
      displayFormData();
    }
  }
  
  function displayFormData() {
    const namaPelanggan = document.getElementById("namaPelanggan").value;
    const email = document.getElementById("email").value;
    const jamKeberangkatan = document.getElementById("jamKeberangkatan").value;
    const tujuanKeberangkatan = document.getElementById("tujuanKeberangkatan").value;
    const jumlahTiket = document.getElementById("jumlahTiket").value;
  
    document.getElementById("resultNama").innerText = "Nama Pelanggan: " + namaPelanggan;
    document.getElementById("resultEmail").innerText = "Email: " + email;
    document.getElementById("resultJam").innerText = "Jam Keberangkatan: " + jamKeberangkatan;
    document.getElementById("resultTujuan").innerText = "Tujuan Keberangkatan: " + tujuanKeberangkatan;
    document.getElementById("resultJumlah").innerText = "Jumlah Tiket: " + jumlahTiket;
  
    document.getElementById("errorMessages").innerHTML = "";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("result").style.display = "block";
  }