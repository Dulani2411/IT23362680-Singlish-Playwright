import { test, expect } from "@playwright/test";

// Increase navigation timeout for all tests in this file
test.use({ navigationTimeout: 60000 });

const testCases = [
  {
    id: "Pos_Fun_0001",
    name: "Greeting question",
    input: "oyaata hariyata nindha giyaadha?",
    expected: "ඔයාට හරියට නින්ද ගියාද?",
  },
  {
    id: "Pos_Fun_0002",
    name: "Compound sentence",
    input: "mama dhavasema vaeda karanavaa.",
    expected: "මම දවසෙම වැඩ කරනවා.",
  },
  {
    id: "Pos_Fun_0003",
    name: "Compound sentence",
    input: "mama kaalayak asaniipayen sitiyaa saha passe saniipa unaa.",
    expected: "මම කාලයක් අසනීපයෙන් සිටියා සහ පස්සෙ සනීප උනා.",
  },
  {
    id: "Pos_Fun_0004",
    name: "Conditional complex sentence",
    input: "oyaa mal kadanavaa nan api pansal yamu",
    expected: "ඔයා මල් කඩනවා නන් අපි පන්සල් යමු",
  },
  {
    id: "Pos_Fun_0005",
    name: "Direct command",
    input: "issarahata poddak yanna.",
    expected: "ඉස්සරහට පොඩ්ඩක් යන්න.",
  },
  {
    id: "Pos_Fun_0006",
    name: "Negative present tense",
    input: "mama eeka hariyata karala naehae.",
    expected: "මම ඒක හරියට කරල නැහැ.",
  },
  {
    id: "Pos_Fun_0007",
    name: "Polite request sentence",
    input: "oyaata puLuvannam meeka balala kiyanna.",
    expected: "ඔයාට පුළුවන්නම් මේක බලල කියන්න.",
  },
  {
    id: "Pos_Fun_0008",
    name: "Informal spoken phrase",
    input: "adoo api kamu dha?",
    expected: "අඩෝ අපි කමු ද?",
  },
  {
    id: "Pos_Fun_0009",
    name: "Repeated word emphasis",
    input: "paata paata mal hari lassanayi.",
    expected: "පාට පාට මල් හරි ලස්සනයි.",
  },
  {
    id: "Pos_Fun_0010",
    name: "Past tense statement",
    input: "api raee chithrapatayak baeluvaa.",
    expected: "අපි රෑ චිත්‍රපටයක් බැලුවා.",
  },
  {
    id: "Pos_Fun_0011",
    name: "Future tense statement",
    input: "mama heta meeting ekakata yanavaa.",
    expected: "මම හෙට meeting එකකට යනවා.",
  },
  {
    id: "Pos_Fun_0012",
    name: "English brand name handling",
    input: "WhatsApp eken message ekak dhaanna.",
    expected: "WhatsApp එකෙන් message එකක් දාන්න.",
  },
  {
    id: "Pos_Fun_0013",
    name: "Place name preservation",
    input: "api Galle valata yanavaa.",
    expected: "අපි Galle වලට යනවා.",
  },
  {
    id: "Pos_Fun_0014",
    name: "Numeric value handling",
    input: "mata USD 250 k thiyenavaa.",
    expected: "මට USD 250 ක් තියෙනවා.",
  },
  {
    id: "Pos_Fun_0015",
    name: "Mixed-language arrival message",
    input: "8.15 AM venakam inna.mama othanata enavaa",
    expected: "8.15 AM වෙනකම් ඉන්න.මම ඔතනට එනවා",
  },
  {
    id: "Pos_Fun_0016",
    name: "Simple answer",
    input: "hoDHAyi",
    expected: "හොඳයි",
  },
  {
    id: "Pos_Fun_0017",
    name: "Multi-line input",
    input: "mama enavaa,oyaa innavaadha?",
    expected: "මම එනවා,ඔයා ඉන්නවාද?",
  },
  {
    id: "Pos_Fun_0018",
    name: "Slang expression",
    input: "siraavatama hodhatama vaeda.",
    expected: "සිරාවටම හොදටම වැඩ.",
  },
  {
    id: "Pos_Fun_0019",
    name: "Mixed informal Singlish paragraph-attendance request",
    input: "Ayyoo machan, adha podi problem ekak unaa. Mama morning bus eka miss vuna nisa class ekata enna poddak late venna puluvan. Attendance mark karaganna puluvan veyidha? Lecturer ta email ekak dhaanna try kalaa, namuth network eka hariyata vaeda karanne nae. puluvannam eka poddak explain karala message ekak dhanna puluvandha? Mama campus enna kalin eeka hariyata settle karaganna oone. Eka karanna puluvan nam mata loku help ekak. Thanks machan!",
    expected: "අය්යෝ මචන්, අද පොඩි problem එකක් උනා. මම morning bus එක miss වුන නිස class එකට එන්න පොඩ්ඩක් late වෙන්න පුලුවන්. Attendance mark කරගන්න පුලුවන් වෙයිද? Lecturer ට email එකක් දාන්න try කලා, නමුත් network එක හරියට වැඩ කරන්නේ නැ. පුලුවන්නම් එක පොඩ්ඩක් explain කරල message එකක් දන්න පුලුවන්ද? මම campus එන්න කලින් ඒක හරියට settle කරගන්න ඕනෙ. එක කරන්න පුලුවන් නම් මට ලොකු help එකක්. Thanks මචන්!",
  },
  {
    id: "Pos_Fun_0020",
    name: "Abbreviation handling",
    input: "OTP eka mata evanna.",
    expected: "OTP එක මට එවන්න.",
  },
  {
    id: "Pos_Fun_0021",
    name: "Handling multiple spaces in Singlish input",
    input: "mama    gedhara    enavaa.",
    expected: "මම    ගෙදර    එනවා.",
  },
  {
    id: "Pos_Fun_0022",
    name: "Date format handling in Singlish input",
    input: "api dhesaembar 25 saadhayak dhaamu",
    expected: "අපි දෙසැම්බර් 25 සාදයක් දාමු",
  },
  {
    id: "Pos_Fun_0023",
    name: "Handling measurement units in Singlish input",
    input: "siini 2kg kakata vathura 500ml dhaanna.",
    expected: "සීනි 2kg කකට වතුර 500ml දාන්න",
  },
  {
    id: "Pos_Fun_0024",
    name: "Formal Singlish paragraph describing Sinhala language",
    input: "shri lQQkaavee praDhaana jaathiya vana siQQhala janayaagee mavbasa SiQQhala veyi. Adha vana vita miliyana 20 kata aDhika SiQQhala saha miliyana 3 kata aDhika SiQQhala novana janagahanayak SiQQhala Bhaashaava Bhaavithaa karathi. siQQhala, Indhu-yuroopiyan BhaaShaavala upa gaNayak vana Indhu-Aarya BhaaShaa gaNayata ayithiyi. maaladhivayina Bhaavithaa karana dhivehi Bhaashaava siQQhala basata bohoo dhurata samaana BhaaShaavak vee. SiQQhala shri laQQkaavee nila BhaaShaava vee. praag ayithihasika yugayee patan paevathi helabasa, aeetha athiithayee indhiyaanu BhaaShaa saha yatath vijitha kaalayee batahira BhaaShaa samaga sammishraNayen vathman SiQQhala Bhaashaava bihivii aetha. SiQQhala Bhaashavee svara 18 ki.",
    expected: "ශ්‍රි ලංකාවේ ප්‍රධාන ජාතිය වන සිංහල ජනයාගේ මව්බස සිංහල වෙයි. අද වන විට මිලියන 20 කට අධික සිංහල සහ මිලියන 3 කට අධික සිංහල නොවන ජනගහනයක් සිංහල භාශාව භාවිතා කරති. සිංහල, ඉන්දු-යුරෝපියන් භාෂාවල උප ගණයක් වන ඉන්දු-ආර්ය භාෂා ගණයට අයිතියි. මාලදිවයින භාවිතා කරන දිවෙහි භාශාව සිංහල බසට බොහෝ දුරට සමාන භාෂාවක් වේ. සිංහල ශ්‍රි ලංකාවේ නිල භාෂාව වේ. ප්‍රාග් අයිතිහසික යුගයේ පටන් පැවති හෙලබස, ඈත අතීතයේ ඉන්දියානු භාෂා සහ යටත් විජිත කාලයේ බටහිර භාෂා සමග සම්මිශ්‍රණයෙන් වත්මන් සිංහල භාශාව බිහිවී ඇත. සිංහල භාශවේ ස්වර 18 කි.",
  },
  {
    id: "Pos_Fun_0025",
    name: "Simple thanks",
    input: "sthuthiyi",
    expected: "ස්තුතියි",
  },
];

test.describe("Positive Functional Tests", () => {
  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "networkidle",
      });
      const inputArea = page.getByPlaceholder("Input Your Singlish Text Here.");
      const inputSelector =
        'textarea[placeholder="Input Your Singlish Text Here."]';
      await page.fill(inputSelector, "");
      await inputArea.click();
      
      // REPLACE THIS LINE:
      // await inputArea.pressSequentially(tc.input, { delay: 35 });
      
      // WITH THIS BLOCK:
      if (tc.input.length > 200) {
        // Use fill for long text (faster)
        await page.fill(inputSelector, tc.input);
        await inputArea.dispatchEvent('input');
      } else {
        // Use pressSequentially for short text (more realistic)
        await inputArea.pressSequentially(tc.input, { delay: 35 });
      }
      await page.waitForTimeout(3000); // Wait 3 seconds for translation

      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.dispatchEvent(
          new CompositionEvent("compositionend", {
            bubbles: true,
            cancelable: true,
            data: (el as HTMLTextAreaElement).value,
          }),
        );
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }, inputSelector);
      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');
      await expect(outputBox).toContainText(tc.expected, { timeout: 30000 });
      const output = await outputBox.textContent();
      expect(output).toContain(tc.expected);
      await page.close();
    });
  }
});
