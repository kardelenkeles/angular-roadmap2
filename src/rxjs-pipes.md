İçinden su yerine verilerin dönüştürülerek (operatör kullanılarak örneğin, filter, map, vb ) aktığı bir boru gibi düşünebiliriz. Pipe işlemi tamamlandıktan sonra observable’a subscribe(abone) olarak akış başlatılır.

Pipe fonksiyonu, observable veri kaynağındaki, operatörler ile montaj hattıdır. Tıpkı bir arabanın bitmiş halinin fabrikadan çıkmadan önce uğradığı bir dizi üretim bandı gibi düşünebilirsiniz.

Pipe’in bize sunduğu avantajlardan bir kaçını şu şekilde sıralayabiliriz.

RxJS kütüphanelerinin tree-shakeable(ihtiaç duyulmadıkça import edilmeyen ve bundle boyutunu büyütmeyen) olmasını sağlar.

third-party operatör yazmayı ve kullanmayı kolaylaştırır.