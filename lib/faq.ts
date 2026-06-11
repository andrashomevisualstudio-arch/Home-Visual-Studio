/**
 * FAQ content — single source of truth for the on-page accordion AND the
 * FAQPage JSON-LD. Every answer must stay factually true (real prices from
 * the price list, real coverage from lib/site.ts).
 */
import { site } from "@/lib/site";

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "Mennyibe kerül az ingatlanfotózás Budapesten és környékén?",
    answer:
      "A profi ingatlanfotózás 40 000 Ft, amiért 15–20 teljes utómunkával ellátott képet kapsz, full-frame MILC géppel fotózva. A fotózás + walkthrough videó + 360° bejárás együtt kedvezményes, 90 000 Ft-os Teljes média csomagban is elérhető.",
  },
  {
    question: "Mennyi idő alatt készül el a kész anyag?",
    answer:
      "A teljes utómunkával ellátott, piacképes anyagot jellemzően 24–48 órán belül átadjuk a fotózás után.",
  },
  {
    question: "Hol vállaltok ingatlanfotózást?",
    answer: `Budaörsi bázissal dolgozunk, ${site.geo.radiusLabel}: ${site.geo.areaServed.join(
      ", "
    )} és a környező települések. Ha máshol van az ingatlan, kérdezz bátran — egyeztetés alapján távolabb is vállalunk munkát.`,
  },
  {
    question: "Mi az AI alapú fotózás, és kinek való?",
    answer:
      "Az AI alapú fotózásnál a képeket te készíted el telefonnal, mi pedig mesterséges intelligenciával magas minőségű, piacképes fotókká alakítjuk őket — 20 000 Ft-ért. Akkor ideális, ha gyorsan és költséghatékonyan kell igényes anyag, külön fotós egyeztetés nélkül.",
  },
  {
    question: "Mi a különbség a figyelemfelkeltő és a walkthrough videó között?",
    answer:
      "A figyelemfelkeltő videó (45 000 Ft) pörgős, dinamikus vágásokkal készül, és a közösségi médiában új érdeklődőket vonz. A walkthrough videó (35 000 Ft) nyugodt tempóban, részletesen mutatja be az ingatlant — a már komoly érdeklődőknek.",
  },
  {
    question: "Hogyan kérhetek ajánlatot?",
    answer: `Töltsd ki az ajánlatkérő űrlapot a kapcsolat oldalon, vagy írj a ${site.email} címre, illetve hívj a ${site.phone} számon. 24 órán belül válaszolunk személyre szabott ajánlattal.`,
  },
];
