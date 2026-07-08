
# DESIGN.md — General Website Design Brief

## Účel dokumentu

Tento dokument slúži ako všeobecné dizajnové a technické zadanie pre tvorbu firemnej webstránky.

Nejde o finálny návrh sekcií, textov ani štruktúry konkrétnej stránky. Úlohou AI / dizajnéra / developera je na základe tohto dokumentu navrhnúť vlastný vizuálny smer, obsahové rozloženie, homepage štruktúru a celkový štýl webu podľa konkrétnej firmy, jej odboru a dostupných informácií.

Tento dokument definuje hlavne:

* všeobecné dizajnové pravidlá,
* čomu sa vyhnúť,
* technické pravidlá projektu,
* prístup k obsahu,
* projektovú štruktúru,
* spôsob práce s obrázkami, dátami a komponentmi.

---

## Základný cieľ stránky

Cieľom je vytvoriť modernú, dôveryhodnú a profesionálnu firemnú webstránku.

Stránka má návštevníkovi rýchlo vysvetliť:

* kto je firma,
* čomu sa venuje,
* aké služby alebo produkty ponúka,
* prečo jej možno dôverovať,
* aké má skúsenosti, výsledky alebo výhody,
* ako ju kontaktovať.

Web nemá byť iba krajšou verziou starej stránky. Má nanovo premyslieť prezentáciu firmy, informačnú hierarchiu, vizuálny štýl a spôsob, akým používateľ prechádza obsahom.

---

## Úloha AI pri návrhu

AI má samo navrhnúť:

* vizuálny koncept stránky,
* štýl homepage,
* vhodné sekcie,
* poradie sekcií,
* základné texty,
* vhodné CTA prvky,
* navigáciu,
* rozdelenie obsahu medzi homepage a budúce podstránky,
* prácu s obrázkami,
* farebný a typografický smer.

AI nemá len mechanicky skladať bežné sekcie za seba. Má sa snažiť pochopiť firmu, odbor, typ zákazníka a podľa toho navrhnúť stránku, ktorá bude pôsobiť vhodne pre daný biznis.

Výsledok má pôsobiť ako custom návrh pre konkrétnu firmu, nie ako univerzálna šablóna.

---

## Všeobecný dizajnový smer

Web má byť:

* čistý,
* profesionálny,
* moderný,
* prehľadný,
* dôveryhodný,
* ľahko čitateľný,
* vizuálne premyslený,
* použiteľný aj pre reálnych návštevníkov, nie iba ako dizajnový experiment.

Preferovaný smer je moderná firemná stránka, ktorá pôsobí prakticky a kvalitne. Dizajn má podporovať obsah, nie ho prebíjať.

Stránka má byť primárne **lightmode**. To znamená, že základ stránky má byť svetlý, čitateľný a vzdušný. Môžu sa však použiť aj tmavé sekcie s bielym písmom, ak to dáva zmysel pre kontrast, rytmus alebo vizuálne zvýraznenie.

---

## Čomu sa treba vyhnúť

Nepoužívať:

* typický AI editorial štýl,
* generické AI landing page rozloženia,
* lacný SaaS / startup vzhľad,
* AI glow efekty,
* fialovo-modré gradienty bez dôvodu,
* veľké rozmazané farebné svetlá,
* príliš generické kartičky bez nápadu,
* príliš mäkký, infantilný alebo hravý vzhľad, ak sa nehodí k firme,
* krémové / hnedé / béžové pozadia v každej druhej sekcii,
* stockové prvky, ktoré pôsobia neosobne,
* generické ilustrácie ľudí pri práci, ak nepasujú ku konkrétnej firme,
* prehnané animácie,
* zbytočné efekty len preto, že vyzerajú moderne,
* texty bez konkrétneho významu,
* sekcie, ktoré pôsobia ako z AI šablóny.

Web nemá vyzerať ako „cheap AI startup page“. Má pôsobiť ako reálna stránka reálnej firmy.

---

## Farebný systém

Farby musia byť definované v `global.css` cez CSS variables, aby sa dali neskôr jednoducho upraviť.

AI má navrhnúť farebnú paletu podľa charakteru firmy, odboru, existujúceho loga alebo vizuálnej identity.

Ak firma nemá kvalitnú identitu, AI má navrhnúť jednoduchý, profesionálny farebný smer, ktorý sa dá neskôr upraviť.

Základné pravidlá:

* nepoužívať príliš veľa farieb,
* hlavná farba má byť použitá ako akcent, nie všade,
* pozadia majú zostať čitateľné,
* kontrast musí byť dostatočný,
* farby majú sedieť k odboru firmy,
* svetlá stránka má zostať skutočne svetlá.

Príklad základných premenných:

```css
:root {
  --background: #ffffff;
  --foreground: #111111;

  --primary: #1f2937;
  --primary-foreground: #ffffff;

  --surface: #f5f5f5;
  --surface-strong: #e9e9e9;

  --border: #d8d8d8;
  --muted: #6f6f6f;

  --dark: #151515;
  --dark-foreground: #ffffff;
}
```

AI môže zmeniť hodnoty podľa konkrétneho projektu, ale musí zachovať logiku premenných.

---

## Typografia

Použiť font cez `next/font`.

Font má byť:

* moderný,
* dobre čitateľný,
* vhodný pre daný typ firmy,
* konzistentný v celom projekte.

Vhodné možnosti:

* `Geist`,
* `Inter`,
* `Space Grotesk`,
* `Barlow`,
* prípadne iný font, ak dáva zmysel pre daný projekt.

Nepoužívať príliš dekoratívne fonty, ak to nie je súčasťou jasného vizuálneho konceptu.

Nadpisy majú byť výrazné, ale nie prehnané. Texty majú byť krátke, prehľadné a čitateľné.

---

## Logo a značka

Ak nie je dostupné kvalitné logo, použiť dočasné textové logo.

Dočasné logo má byť:

* jednoduché,
* čisté,
* ľahko nahraditeľné,
* bez zbytočnej ikonky,
* bez pokusu o kompletný rebrand, pokiaľ to nie je vyžiadané.

Ak existuje aspoň základná farba alebo staré logo, AI ho môže použiť ako inšpiráciu, ale nemusí sa ho držať doslovne, ak vizuálne nefunguje.

---

## Obsahový prístup

Dostupný obsah môže byť neúplný, starý alebo nepresný. AI ho má použiť ako kontext, nie ako finálnu štruktúru.

AI nemá:

* slepo kopírovať starý web,
* prenášať staré poradie obsahu,
* vytvoriť homepage iba ako textový výpis služieb,
* používať neoverené tvrdenia ako fakty,
* vymýšľať konkrétne čísla, roky, certifikáty alebo referencie bez podkladu.

AI má:

* pochopiť, čo firma robí,
* vytvoriť lepšiu informačnú hierarchiu,
* vybrať najdôležitejšie informácie,
* rozdeliť obsah medzi homepage a budúce podstránky,
* písať vecne a profesionálne,
* používať opatrné formulácie tam, kde údaje nie sú potvrdené.

Ak niektorý údaj nie je istý, použiť neutrálnejšiu formuláciu.

Príklady vhodných formulácií:

* „Firma sa zameriava na...“
* „Medzi hlavné oblasti pôsobenia patria...“
* „Web počíta s doplnením aktuálnych realizácií.“
* „Obsah bude upravený po dodaní presných podkladov od klienta.“

---

## Texty a mikrocopy

Texty majú byť:

* krátke,
* jasné,
* konkrétne,
* profesionálne,
* bez zbytočného marketingového balastu.

Vyhnúť sa frázam ako:

* „Vaša vízia, naša misia.“
* „Budujeme budúcnosť.“
* „Inovácie pre lepší zajtrajšok.“
* „Sme lídrom na trhu“, ak to nie je overené.
* „Kvalita, spoľahlivosť, profesionalita“ ako prázdny slogan bez kontextu.

Lepšie je písať konkrétne:

* čo firma robí,
* pre koho to robí,
* v čom je prakticky užitočná,
* aký problém rieši,
* prečo ju zákazník môže kontaktovať.

---

## Homepage

AI má samo navrhnúť štruktúru homepage podľa konkrétnej firmy.

Nemá dostať pevný zoznam sekcií. Má rozhodnúť:

* čo má byť v hero časti,
* aké sekcie dávajú zmysel,
* ktoré informácie patria na homepage,
* čo má byť iba odkaz na podstránku,
* ako prezentovať služby alebo produkty,
* ako ukázať referencie, realizácie alebo dôkazy dôvery,
* kde a ako pracovať s CTA,
* ako zakončiť stránku.

Homepage má byť pripravená tak, aby web mohol mať aj ďalšie podstránky.

---

## Navigácia

Web pravdepodobne nebude iba single-page landing page.

To znamená:

* navbar nemá automaticky odkazovať iba na sekcie na homepage,
* treba myslieť na budúce podstránky,
* niektoré odkazy môžu zatiaľ smerovať na placeholder URL,
* homepage môže obsahovať odkazy na budúce detailné stránky.

Navigácia má byť jednoduchá, zrozumiteľná a profesionálna. Nemá byť preplnená.

---

## Obrázky a vizuálne podklady

Ak nie sú dostupné reálne fotografie od klienta, AI môže použiť placeholder obrázky.

Placeholdery majú:

* sedieť k odboru firmy,
* pôsobiť realisticky,
* byť ľahko nahraditeľné,
* mať podobný pomer strán ako budúce reálne fotky.

Nevhodné sú:

* príliš generické stock fotky,
* AI obrázky, ktoré pôsobia nereálne,
* fotky, ktoré nesedia ku krajine, odboru alebo typu firmy,
* luxusné vizualizácie, ak sa nehodia ku konkrétnej firme,
* generické úsmevné tímy, ak nepôsobia prirodzene.

Ak AI navrhne použitie obrázkov, má zároveň odporučiť, aké typy fotiek by mal klient neskôr dodať.

---

## Projektová štruktúra

Projekt je postavený na:

* Next.js App Router,
* TypeScript,
* Tailwind CSS,
* `next/font`,
* CSS premenných v `global.css`.

Treba používať aktuálne štandardy Next.js. Ak je potrebné overiť najnovšie odporúčania, treba si ich pozrieť.

Používať Tailwind inline classes priamo v komponentoch.

Homepage bude rozdelená na samostatné sekcie v:

```txt
@/components/homepage/
```

Každý homepage komponent má mať názov zakončený na `Section`.

Príklady názvov:

```txt
HeroSection.tsx
ServicesSection.tsx
ProjectsSection.tsx
```

Tieto názvy sú iba príklady. AI má navrhnúť vlastné sekcie podľa potreby.

Layout komponenty patria do:

```txt
@/components/layout/
```

Napríklad:

```txt
Navbar.tsx
Footer.tsx
```

Konštanty patria do:

```txt
@/constants/index.ts
```

Dummy dáta patria do:

```txt
@/data/
```

Napríklad:

```txt
@/data/services.ts
@/data/projects.ts
@/data/navigation.ts
```

Názvy dátových súborov má AI zvoliť podľa navrhnutej štruktúry.

---

## Technické pravidlá

Používať:

* TypeScript,
* Tailwind inline classes,
* komponentovú štruktúru,
* server components tam, kde je to rozumné,
* `next/font`,
* premenné v `global.css`,
* čisté a udržiavateľné dáta v `@/data`,
* konštanty v `@/constants`.

Kontaktná forma, ak sa objaví v návrhu, nemusí byť funkčná. Stačí statický formulár alebo vizuálny placeholder.

Neimplementovať zbytočne backend funkcionalitu, pokiaľ nie je vyžiadaná.

---

## Komponentový prístup

Komponenty majú byť:

* jasne pomenované,
* rozdelené podľa účelu,
* jednoduché na úpravu,
* bez zbytočne komplikovanej logiky,
* pripravené na budúce rozšírenie.

Dáta ako služby, referencie, položky galérie, výhody alebo navigácia nemajú byť natvrdo rozhádzané po komponentoch, ak sa opakujú alebo môžu meniť. V takom prípade ich treba presunúť do `@/data`.

---

## Responzivita

Web musí byť plne responzívny.

Dizajn musí dobre fungovať:

* na mobile,
* na tablete,
* na desktope,
* na väčších obrazovkách.

Mobile verzia nemá byť len zmenšený desktop. Sekcie majú byť prirodzene usporiadané, čitateľné a ľahko ovládateľné.

---

## Animácie

Animácie môžu byť použité jemne, ale nesmú dominovať stránke.

Vhodné:

* jemné hover stavy,
* decentné prechody,
* jednoduché odhaľovanie obsahu,
* malé interakcie, ktoré pomáhajú orientácii.

Nevhodné:

* prehnané scroll animácie,
* animácie bez účelu,
* glow efekty,
* neustále pohyblivé dekorácie,
* efekty, ktoré zhoršujú výkon alebo čitateľnosť.

Ak animácie nie sú potrebné, radšej ich nepoužívať.

---

## Prístup pred kódením

Pred samotným kódením má AI premyslieť:

* aký je hlavný vizuálny koncept stránky,
* aký typ zákazníka bude web navštevovať,
* aká informačná architektúra dáva zmysel,
* ktoré sekcie patria na homepage,
* čo má byť iba odkaz na budúcu podstránku,
* aké texty sú bezpečné použiť ako placeholder,
* aké fotky alebo vizuálne prvky by boli ideálne,
* ako stránku odlíšiť od generickej šablóny.

---

## Kľúčová požiadavka

Nevytvárať generickú AI landing page.

AI má navrhnúť vlastný, premyslený a profesionálny firemný web podľa konkrétnej firmy, pričom musí rešpektovať:

* lightmode smer,
* zákaz AI glow / startup / editorial vzhľadu,
* možnosť budúcich podstránok,
* čistú projektovú štruktúru v Next.js,
* Tailwind inline classes,
* CSS premenné v `global.css`,
* komponenty rozdelené podľa účelu,
* realistický obsahový a vizuálny smer.
