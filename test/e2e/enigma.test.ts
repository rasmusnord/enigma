import { test, expect } from "@playwright/test";

test("should handle 'Enigma Instruction Manual, 1930'", async ({ page }) => {
  await page.goto("/");

  await page
    .getByTestId("input")
    .fill(
      "GCDSEAHUGWTQGRKVLFGXUCALXVYMIGMMNMFDXTGNVHVRMMEVOUYFZSLRHDRRXFJWCFHUHMUNZEFRDISIKBGPMYVXUZ"
    );

  await page.getByTestId("reflector").selectOption("UKW A");

  await page.getByTestId("rotor-1").selectOption("II");
  await page.getByTestId("rotor-2").selectOption("I");
  await page.getByTestId("rotor-3").selectOption("III");

  await page.getByTestId("position-1").selectOption("A");
  await page.getByTestId("position-2").selectOption("B");
  await page.getByTestId("position-3").selectOption("L");

  await page.getByTestId("ring-1").selectOption("24");
  await page.getByTestId("ring-2").selectOption("13");
  await page.getByTestId("ring-3").selectOption("22");

  await page.getByTestId("plugboard").fill("AM FI NV PS TU WZ");

  await expect(page.getByTestId("output")).toContainText(
    "FEINDLIQEINFANTERIEKOLONNEBEOBAQTETXANFANGSUEDAUSGANGBAERWALDEXENDEDREIKMOSTWAERTSNEUSTADT"
  );
});

test("should handle 'Operation Barbarossa, 1941 - part 1'", async ({
  page,
}) => {
  await page.goto("/");

  await page
    .getByTestId("input")
    .fill(
      "EDPUDNRGYSZRCXNUYTPOMRMBOFKTBZREZKMLXLVEFGUEYSIOZVEQMIKUBPMMYLKLTTDEISMDICAGYKUACTCDOMOHWXMUUIAUBSTSLRNBZSZWNRFXWFYSSXJZVIJHIDISHPRKLKAYUPADTXQSPINQMATLPIFSVKDASCTACDPBOPVHJK"
    );

  await page.getByTestId("reflector").selectOption("UKW B");

  await page.getByTestId("rotor-1").selectOption("II");
  await page.getByTestId("rotor-2").selectOption("IV");
  await page.getByTestId("rotor-3").selectOption("V");

  await page.getByTestId("position-1").selectOption("B");
  await page.getByTestId("position-2").selectOption("L");
  await page.getByTestId("position-3").selectOption("A");

  await page.getByTestId("ring-1").selectOption("2");
  await page.getByTestId("ring-2").selectOption("21");
  await page.getByTestId("ring-3").selectOption("12");

  await page.getByTestId("plugboard").fill("AV BS CG DL FU HZ IN KM OW RX");

  await expect(page.getByTestId("output")).toContainText(
    "AUFKLXABTEILUNGXVONXKURTINOWAXKURTINOWAXNORDWESTLXSEBEZXSEBEZXUAFFLIEGERSTRASZERIQTUNGXDUBROWKIXDUBROWKIXOPOTSCHKAXOPOTSCHKAXUMXEINSAQTDREINULLXUHRANGETRETENXANGRIFFXINFXRGTX"
  );
});

test("should handle 'Operation Barbarossa, 1941 - part 2'", async ({
  page,
}) => {
  await page.goto("/");

  await page
    .getByTestId("input")
    .fill(
      "SFBWDNJUSEGQOBHKRTAREEZMWKPPRBXOHDROEQGBBGTQVPGVKBVVGBIMHUSZYDAJQIROAXSSSNREHYGGRPISEZBOVMQIEMMZCYSGQDGRERVBILEKXYQIRGIRQNRDNVRXCYYTNJR"
    );

  await page.getByTestId("reflector").selectOption("UKW B");

  await page.getByTestId("rotor-1").selectOption("II");
  await page.getByTestId("rotor-2").selectOption("IV");
  await page.getByTestId("rotor-3").selectOption("V");

  await page.getByTestId("position-1").selectOption("L");
  await page.getByTestId("position-2").selectOption("S");
  await page.getByTestId("position-3").selectOption("D");

  await page.getByTestId("ring-1").selectOption("2");
  await page.getByTestId("ring-2").selectOption("21");
  await page.getByTestId("ring-3").selectOption("12");

  await page.getByTestId("plugboard").fill("AV BS CG DL FU HZ IN KM OW RX");

  await expect(page.getByTestId("output")).toContainText(
    "DREIGEHTLANGSAMABERSIQERVORWAERTSXEINSSIEBENNULLSEQSXUHRXROEMXEINSXINFRGTXDREIXAUFFLIEGERSTRASZEMITANFANGXEINSSEQSXKMXKMXOSTWXKAMENECXK"
  );
});
