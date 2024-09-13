const urunler = [
    { ad: "Ürün 1", stok: 15 },
    { ad: "Ürün 2", stok: 8 },
    { ad: "Ürün 3", stok: 0 }
];
function stokDurumunuGoruntule(urunIndex) {
       setTimeout(() => {
        const urun = urunler[urunIndex];
        const stokSonuc = urun.stok > 0 ? `${urun.ad} stokta var: ${urun.stok} adet.` : `${urun.ad} stokta yok.`;
        document.getElementById("stok-sonuc").innerText = stokSonuc;
    }, 1000);
}