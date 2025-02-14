console.log('funguju!');

// Priklad: Dovednosti  (https://kodim.cz/czechitas/js1/lekce/knihovny-vlastni-funkce/ulozky-na-doma/dovednosti)
// Vizualizujte vědomosti.
// Vytvořte si repozitář ze šablony cviceni-dovednosti. V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. 
// Ty ukazují úroveň dovedností v různých oblastech.
  
// Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech 
//  zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků 
//  na uživatelem zadaná čísla.
// Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a 
//  číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu,
//  abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód. 

const yourLevelHtml = prompt("Zadej tvoji uroven v HTML cislem 0-100")


const updateSkill = (idElement, level) => {
    // nutne vybrat posuvnik ve spravnem elementu napr. skill2 protoze posuvnik samotny nema ciselne oznaceni ❗❗❗👀
    const elSkillProgressId = document.querySelector(`#skill${idElement} .skill__progress`)
    elSkillProgressId.style.width = `${level}%`

    // zmena ciselne hodnoty za posuvnikem
    const elSkillValueId = document.querySelector(`#skill${idElement} .skill__value`)
    elSkillValueId.innerHTML = `${level} / 100`

}

updateSkill(1, yourLevelHtml);
updateSkill(2, prompt("Zadej tvoji uroven v CSS cislem 0-100"));        // prompt lze zadat i rovnou do volani fce
updateSkill(3, prompt("Zadej tvoji uroven v JavaScriptu cislem 0-100"));

