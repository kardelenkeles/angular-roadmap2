# Order of Lifecycle Hooks' Execution

## constructor:

Lifecycle Hook olarak geçiyor olmasada ilk başta constructor’ı belirtmek istedim. Class’tan yeni bir instance oluşturduğunuzda, ilk olarak constructor çalışır. Component’ imizde bir class olduğu için ilk olarak constructor çalışıyor. Constructor’ı genelde servislerimizi inject etmek için kullanıyoruz.

## ngOnChanges:

2 . olarak çalışan methodumuz ise ngOnChanges oluyor. ngOnChanges methodu Parent Component’lerden Child Component’lere gönderilen input üzerinde değişiklik olduğunda tetiklenir. Bu yüzden ilk gönderilen değerde Child Component’lerdeki ngOnChanges methodu tetiklenmiş olacaktır. En üstteki Parent Component’de input alınamayacağı için ngOnChanges methodu burada implement’e edilse dahi tetiklenmeyecektir. Ayrıca ngOnChanges methodunun almış olduğu SimpleChanges nesnesi sayesinde input’un eski ve yeni hallerine ulaşabilirsiniz.

## ngOnInit:

3 . olarak çalışan methodumuz olan ngOnInit Component ilk oluşturulduğunda tetiklenir. Burada yapabileceğiniz işlemler genelde sayfada oluşturulacak olan içeriğin initialize edildiği yer oluyor. Örneğin; form oluşturulması, api isteklerinin atılması vb.

## ngDoCheck:

4 . olarak çalışan methodumuz ngDoCheck her bir Component’imiz için ilk yüklendiğinde Development modunda iken 2, Production modunda ise 1 defa tetiklenecektir. Daha sonrasında ise sayfa üzerinde verilmiş eventler her tetiklendiğinde, input’lar üzerinde değişiklik olduğunda tetiklenmeye devam edecektir. Hangi Component üzerinde event/input tetiklenirse tetiklensin tüm Component’lerin ngDoCheck methodu tetiklenecektir. Bu sebeble bu method üzerinde işlem yapmanız performans açısından önerilmez.

## ngAfterContentInit:

5 . olarak çalışan ngAfterContentInit Hook’una bakalım. Child Component’lere içerik gönderirken ng-content olarak gönderilebilir. İçerik Child Component’de ngAfterContentInit Hook tetiklendiğinde ulaşılabilir duruma gelir. İçeriğe ulaşmak için Child Component’imizde @ContentChild decorator’ünden yararlanırız.

## ngAfterContentChecked:

6 . olarak çalışan ngAfterContentChecked Hook’u ngAfterContentInit’den hemen sonra tetiklenir. Sonrasında ng-content üzerinde değişiklikleri kontrol etmek için ngDoCheck Hook’u her tetiklendiğinde bu method’da tetiklenecektir. Performans açısından bu method üzerinde kod yazmanız önerilmez.

## ngAfterViewInit:

7 . olarak çalışan ngAfterViewInit Hook sayfada referans verdiğimiz element ve Componentlere ulaşmamızı sağlar. ngAfterViewInit Hook’una gelene kadar referans verdiğimiz nesnelere ulaşamayız(Typescript tarafında static=true olarak işaretlenirse önceki Hook’lardan da erişilebilir). İçeriğe ulaşmak için Parent Component’imizde referans verdiğimiz nesnelere @ViewChild decorator’ünü kullanırız.

## ngAfterViewChecked:

8 . olarak çalışan ngAfterViewChecked Hook’u ngAfterViewInit’den hemen sonra tetiklenir. Sonrasında referans verilen nesneler üzerinde değişiklikleri kontrol etmek için ngDoCheck Hook’u her tetiklendiğinde bu method’da tetiklenecektir. Performans açısından bu method üzerinde kod yazmanız önerilmez.

## ngOnDestroy:

Yaşam döngüsünün sonunda çalışan methodumuz ise Component’ler sayfadan yok olmadan hemen önce tetiklenir. Örneğin başka bir sayfaya gitmek istediğinizde bulunmuş olduğunuz sayfa yok olur. Bu esnada bu method tetiklenir. ngOnDestroy genel olarak subscribe olduğunuz hizmetlerden unsubcribe olmak için sıklıkla kullanılır. Bu sayede Memory Leak sıkıntılarından kurtulmuş oluruz.
