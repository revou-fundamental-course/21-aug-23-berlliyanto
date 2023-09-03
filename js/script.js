// Submit Message Us

let nama = prompt('Isi Nama Anda', '');
while (nama == '') {
    nama = prompt('Anda harus Isi Nama Anda', '');
}
let namaKamu = document.getElementById('name');
namaKamu.style.color = 'purple';
namaKamu.style.fontWeight = 'bold';
namaKamu.innerText = nama;

function submitMessage() {
    let inputName = document.getElementById('input-nama').value;
    let inputTgl = document.getElementById('input-tgl').value;
    var inputKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
    let selectedKelamin;
    if (inputKelamin) {
        selectedKelamin = inputKelamin.value;
    } else {
        console.log("Belum Memilih Kelamin");
    }
    let inputPesan = document.getElementById('input-pesan').value;

    if (inputName != '' && inputTgl != '' && inputKelamin != undefined && inputPesan != '') {
        let tglSekarang = document.getElementById('tglSekarang-value');
        let namaValue = document.getElementById('nama-value');
        let tglValue = document.getElementById('tglLahir-value');
        let kelaminValue = document.getElementById('kelamin-value');
        let pesanValue = document.getElementById('pesan-value');


        tglSekarang.innerText = new Date;
        namaValue.innerText = inputName;
        tglValue.innerText = inputTgl;
        kelaminValue.innerText = selectedKelamin;
        pesanValue.innerText = inputPesan;
    } else {
        alert('Semua filed harus diisi');
    }
    console.log('ee');
}