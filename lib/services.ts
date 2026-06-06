export type PriceLine = {
  label: string;
  amount: string;
  note?: string;
};

export type Service = {
  slug: string;
  /** Short display title used on the full-width bands (uppercase). */
  title: string;
  /** Longer human title. */
  name: string;
  /** Background image for the band. */
  image: string;
  /** object-position for the band image (default "center"). */
  imagePosition?: string;
  /** One-line tagline shown under the band title. */
  tagline: string;
  /** Full Hungarian description (from the services document). */
  description: string;
  /** Pricing lines (from the price list). */
  prices: PriceLine[];
  /** Optional badge, e.g. "Legnépszerűbb". */
  badge?: string;
};

export const services: Service[] = [
  {
    slug: "fotozas",
    title: "Fotózás",
    name: "Profi fotózás",
    image: "/images/property/property-05.webp",
    tagline: "15–20 képes profi fotósorozat, teljes utómunkával.",
    description:
      "Az érdeklődők először a fotókat látják – és másodpercek alatt eldöntik, továbbgörgetnek vagy rákattintanak. Egy 15–20 képből álló, profin megvilágított és gondosan utómunkázott sorozattal ingatlanod kiemelkedik a hirdetések tengeréből: több megtekintés, több megkeresés, és végső soron gyorsabb, jobb áron történő értékesítés. Full-frame MILC technikával és évek tapasztalatával dolgozunk, hogy minden helyiség a legjobb formáját mutassa.",
    prices: [{ label: "Profi fotózás", amount: "40 000 Ft", note: "egyszeri díj" }],
  },
  {
    slug: "video",
    title: "Videó",
    name: "Ingatlan videó",
    image: "/images/services/video.png",
    tagline: "Figyelemfelkeltő és walkthrough videó — két verzióban.",
    description:
      "A videó az egyetlen formátum, ami valódi térérzetet ad, és érzelmileg is megfogja a nézőt – így emel ki a versenytársak hirdetései közül. Két változatot kínálunk: egy pörgős, dinamikus figyelemfelkeltő videót, ami a közösségi médiában új érdeklődőket vonz, és egy nyugodt tempójú walkthrough videót, ami a komoly vevőket lépésről lépésre vezeti végig az ingatlanon. Mindkettő úgy mutatja be az otthont, hogy a néző már önmagát képzeli bele.",
    prices: [
      { label: "Figyelemfelkeltő videó", amount: "45 000 Ft", note: "egyszeri díj" },
      { label: "Walkthrough videó", amount: "35 000 Ft", note: "egyszeri díj" },
    ],
  },
  {
    slug: "360-virtualis-bejaras",
    title: "360° Virtuális bejárás",
    name: "360° virtuális bejárás",
    image: "/images/services/360.png",
    tagline: "Interaktív, otthonról felfedezhető ingatlanbemutatás.",
    description:
      "Engedd, hogy az érdeklődők bármikor, otthonuk kényelméből bejárják az ingatlant – mintha valóban ott sétálnának. Az interaktív 360°-os bejárás kiszűri a komolytalan érdeklődőket, jelentősen csökkenti a felesleges helyszíni bemutatásokat, és napi 24 órában dolgozik helyetted. A leghatékonyabb eszköz arra, hogy egy egyszerű hirdetésből élmény legyen – nem véletlen, hogy ez a legnépszerűbb szolgáltatásunk.",
    prices: [{ label: "360° virtuális bejárás", amount: "25 000 Ft", note: "egyszeri díj" }],
    badge: "Legnépszerűbb",
  },
  {
    slug: "ai-fotozas",
    title: "AI Fotózás",
    name: "AI alapú fotózás",
    image: "/images/ai/bedroom-after.png",
    tagline: "Az ügynök képeiből AI-val készített profi fotók.",
    description:
      "Nincs idő vagy lehetőség külön fotózásra? Az AI alapú fotózással profi végeredményt kapsz – plusz teendők és helyszíni fotós nélkül. Te elküldöd a telefonnal készült képeket, mi pedig AI segítségével, gondos promptolással és közel nulla hibával piacképes, igényes fotókká alakítjuk őket. Gyors és költséghatékony megoldás, hogy ingatlanod akkor is kiemelkedjen, amikor minden perc számít.",
    prices: [{ label: "AI alapú fotózás", amount: "20 000 Ft", note: "egyszeri díj" }],
  },
  {
    slug: "hirdetesi-ugynok",
    title: "Hirdetési ügynök",
    name: "Ingatlanhirdető AI ügynök",
    image: "/images/services/hirdetesi-ugynok.png",
    tagline: "Automatikus hirdetésgenerálás és posztolás minden platformra.",
    description:
      "Vedd le a hirdetés terhét a válladról. Az ingatlanhirdető AI ügynök néhány alapadat és a képek feltöltése után automatikusan célzott, az adott platformra szabott hirdetésszövegeket ír, majd a képekkel együtt ki is posztolja őket minden fontos felületre. Te az értékesítésre és az ügyfelekre koncentrálsz, az ismétlődő rutinmunkát pedig elvégzi helyetted a rendszer – következetesen, gyorsan, fáradás nélkül.",
    prices: [
      { label: "Setup díj", amount: "30 000 Ft", note: "egyszeri" },
      { label: "Havi díj", amount: "15 000 Ft", note: "/ hó" },
    ],
  },
  {
    slug: "landing-page",
    title: "Landing page",
    name: "Ingatlan & personal brand landing page",
    image: "/images/services/landing-page.png",
    tagline: "Profi, személyre szabott landing page a lead gyűjtéshez.",
    description:
      "Egy profi, személyre szabott landing page minden érdeklődőt egy helyre terel – és valódi leaddé alakít. Kétféle változatban érhető el: egy adott ingatlanhoz, vagy a személyes brandedhez igazítva. A cél mindkét esetben ugyanaz: több és jobb minőségű érdeklődő egy letisztult, bizalmat építő weboldalon keresztül, ami éjjel-nappal gyűjti neked a kapcsolatokat.",
    prices: [
      { label: "Ingatlan-specifikus landing page", amount: "50 000 Ft", note: "egyszeri díj" },
      { label: "Personal brand — setup", amount: "100 000 Ft", note: "egyszeri" },
      { label: "Personal brand — hosting", amount: "25 000 Ft", note: "/ hó" },
    ],
  },
];

export const featurePackage = {
  name: "Teljes média csomag",
  description: "Fotózás + walkthrough videó + 360° bejárás — ~10% kedvezménnyel.",
  amount: "90 000 Ft",
  note: "külön: ~100 000 Ft",
};

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
