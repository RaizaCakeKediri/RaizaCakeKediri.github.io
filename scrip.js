function tampilkan(id) {
    // Sembunyikan semua bagian dengan class "content"
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');

    // Tampilkan bagian yang sesuai dengan id
    document.getElementById(id).style.display = 'block';
}