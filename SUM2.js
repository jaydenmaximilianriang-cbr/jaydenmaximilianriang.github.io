const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("input", function () {
  const nama = document.getElementById("nama").value.trim();
  const kelas = document.getElementById("kelas").value.trim();
  const jadwal = document.querySelector('input[name="jadwal"]:checked');

  if (nama !== "" && kelas !== "" && jadwal) {
    submitBtn.classList.add("active");
  } else {
    submitBtn.classList.remove("active");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const jadwal = document.querySelector('input[name="jadwal"]:checked');

  if (!nama || !kelas || !jadwal) {
    alert("Harap isi semua data wajib!");
    return;
  }

  alert("Pendaftaran berhasil!");
  form.reset();
  submitBtn.classList.remove("active");
});