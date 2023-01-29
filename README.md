# TeremInfo

A TeremInfo weboldal célja, hogy az Egressy Gábor Két Tanítási nyelvű Technikum ~40 termében egyszerűbbé tegye a navigációt. 
Az ötlet onnan jött, hogy 2022 szeptembere és Decembere között az ELTE-n tett gyakori látogatásomnak köszönhetően találkoztam az ELTE TTK térképész-programozói által készített weblappal amely lehetőséget ad az ELTE északi épületén belüli navigáció megsegítésére. 

A weboldal megírása közben használt nyelvek a HTML, CSS és a JavaScript. Ezen felül hasznát vettem a Bootstrap CSS framework-nek, a JQuery JavaScript framework-nek és az adatok eltárolásához a JSON JavaScript objektum modelnek.

A munka közben több akadályba is belefutottam, így a kezdetben saccolt ~2 hétből kinyúlt a megvalósítás 1 hónapra. Problémák adódtak számomra új technológiák használatából (JQuery és GitHub) illetve ez az 1 hónap amit rászántam pont beleesett a félévzáró vizsgák hetébe ami ugyanúgy nehezítette a dolgomat.
Így több feature is kimaradt amiket a "tervek" szekcióban részletesebben leírok.


#### Feature-ok:
* Kiválasztott épület függő galléria
* Információ a termekről
  * Teremhez tartozó órarend
  * Teremhez tartozó extra infó
  * (Mint például, hogy van-e projektor)
* Információ a tanárikról
  * A tanáriban tartózkodó tanárok nevei
* Információ az épületekről
  * Az épületekben található termek listája
  * Az épületek rövid leírása
* Az iskola rövid történelme
* Terem kereső
  * Név alapján
  * "Tag"-ek alapján 
  
#### Futtatás:
A weboldal futtatásához szükséges egy szerver futtatása a kettő oldal közötti kommunikáció miatt.


#### Tervek:
* Útvonal kereső 'A' pontból 'B' pontba.
* Mobilos kinézet átdolgozása
* Fejletteb frameworkök, mint például Angular/React használata
* A weboldal kibővítése más funkciókkal mint például órarend kereső
* Admin bejelentkezés hozzáadása az oldal információinak szerkesztésére

#### Fejlesztőknek:
A weboldal kódjának a vizuális dokumentációsja megtalálható a "dokumentáció" mappában. Ezen kívül az átláthatóság kedvéért kommentekkel láttam el a CSS fájlokat illetve a scripts.js fájlt.


#### Segítőim:

Az alábbi személyek a segítségükkel és tanácsaikkal hozzájárultak az oldal végleges finomításához.

__Blaskó Máté__, Üzemmérnök informatikus, tanácsot adott a dokumentáció irásában.
__Ónodi-Kiss Lili__, Mérnökinformatikus hallgató, mint volt Egressy-s diák tesztelte a weblapomat.
__Madács Marcell__, IBM hálózati szakértő, tanácsot adott a weboldal méreteiben és nyújtózkodásában.
__Legendi Márton__, Egressy Gábor Technikum szakértő, mint akítv Egressy-s diák tesztelte a weblapomat.
__Makai Tamás__, Egressy Gábor Technikum szakértő, segítséget nyújtott az Egressy térképnek megszerzésében.
__Nagy-Szabó Viktória__, UI/UX Grafikus dizájner, a végső kinézetben és elrendezésben nyújtott segítséget.