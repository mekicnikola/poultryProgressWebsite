const translations = {
    en: {
        "title": "Poultry Progress: Free Poultry Management App – Simplify Farm Operations",
        "meta-description": "Effortlessly manage your poultry farm with our all-in-one app. Track feed, monitor health, and optimize performance with real-time data and smart tools. Start today!",
        "og-title": "Poultry Management App – Track, Manage, and Optimize Your Farm",
        "og-description": "Make managing your poultry farm easier with our app. Track feed intake, health, and productivity using real-time data and tools. Optimize your operations simply and efficiently!",
        "features": "Features",
        "help": "Help",
        "help-link": "help.html",
        "privacy": "Privacy",
        "privacy-link": "privacy.html",
        "follow-us": "Follow us",
        "subheading": "Poultry Farm Management App",
        "free-download": "FREE Download",
        "for": "For",
        "manage-heading": "Effortlessly Manage Your Poultry Farm",
        "manage-text": "Forget the hassle of piles of paperwork! Track feed consumption, monitor health, and optimize performance with ease. Our all-in-one poultry management app gives you the insights and tools to manage your farm efficiently, from Android device.",
        "control-heading": "Stay in Control, Anytime, Anywhere",
        "control-text" : "Access real-time data, schedule tasks, and streamline your operations to boost productivity. Whether you're managing a small farm or a large operation, our app helps you make smarter decisions for better results.",
        "get-started-heading": "Get Started Today",
        "get-started-text": "Join thousands of poultry farmers transforming their farms with smart data and automated tools. Download now and take control of your farm’s success.",
        "feature-1": "Create farm and objects",
        "feature-2": "Register turns",
        "feature-3": "Store measuring data",
        "feature-4": "Store feeding data",
        "feature-5": "Get notifications",
        "feature-6": "Schedule notifications",
        "feature-7": "Generate PDF report",
        "feature-8": "Share turn data",
        "feature-9": "Get turn statistics",
        "footer-text": "© 2025 Poultry Progress. All rights reserved."
    },
    sr: {
        "title": "Poultry Progress Srbija: Besplatna Aplikacija za Upravljanje Farmom Pilića – Pojednostavite Rad na Farmi",
        "meta-description": "Jednostavno upravljajte svojom farmom pilića uz našu aplikaciju. Pratite ishranu, nadgledajte zdravlje i optimizujte performanse pomoću podataka u realnom vremenu. Počnite danas!",
        "og-title": "Aplikacija za Upravljanje Farmom pilića – Pratite, Upravljajte i Optimizujte Vašu Farmu",
        "og-description": "Olakšajte upravljanje vašom farmom pilića uz našu aplikaciju. Pratite unos hrane, zdravlje i produktivnost pomoću alata i podataka u realnom vremenu. Optimizujte poslovanje jednostavno i efikasno!",
        "features": "Funkcije",
        "help": "Pomoć",
        "help-link": "sr/help.html",
        "privacy": "Privatnost",
        "privacy-link": "sr/privacy.html",
        "follow-us": "Pratite nas",
        "subheading": "Aplikacija za upravljanje farmom pilića",
        "free-download": "PREUZMI Besplatno",
        "for": "Za",
        "manage-heading": "Jednostavno Upravljajte Svojom Farmom",
        "manage-text": "Zaboravite gomile papira! Pratite potrošnju hrane, nadgledajte zdravlje i optimizujte performanse sa lakoćom. Naša sve-u-jednom aplikacija za upravljanje farmom pilića pruža vam uvide i alate za efikasno upravljanje farmom sa Android uređaja.",
        "control-heading": "Pratite Sve, Uvek i Svuda",
        "control-text" : "Pristupite podacima u realnom vremenu, planirajte zadatke i optimizujte poslovanje kako biste povećali produktivnost. Bilo da upravljate malom farmom ili velikom operacijom, naša aplikacija vam pomaže da donosite pametnije odluke za bolje rezultate.",
        "get-started-heading": "Započnite Danas",
        "get-started-text": "Pridružite se hiljadama živinara koji transformišu svoje farme uz pomoć pametnih podataka i automatizovanih alata. Preuzmite aplikaciju sada i preuzmite kontrolu nad uspehom vaše farme.",
        "feature-1": "Kreirajte farmu i objekte",
        "feature-2": "Registrujte turnuse",
        "feature-3": "Čuvajte podatke merenja",
        "feature-4": "Čuvajte podatke o hrani",
        "feature-5": "Primajte obaveštenja",
        "feature-6": "Zakazujte obaveštenja",
        "feature-7": "Generišite PDF izveštaj",
        "feature-8": "Delite podatke o turnusu",
        "feature-9": "Pratite statistiku turnusa",
        "footer-text": "© 2025 Poultry Progress. Sva prava zadržana."
    }
};

function getLanguageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || 'en';
}

function setLanguage(language) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");

        if (translations[language] && translations[language][key]) {
            if (el.tagName === "A" && el.hasAttribute("data-i18n-link")) {
                const linkKey = el.getAttribute("data-i18n-link");

                if (translations[language][linkKey]) {
                    el.href = translations[language][linkKey];
                } else {
                    console.warn(`Missing translation for link key: ${linkKey}`);
                }

                el.textContent = translations[language][key];
            } else {
                el.textContent = translations[language][key];
            }
        } else {
            console.warn(`Missing translation for key: ${key}`);
        }
    });
}

document.getElementById('language-select').addEventListener('change', function () {
    const selectedLang = this.value;
    setLanguage(selectedLang);
});

document.addEventListener("DOMContentLoaded", () => {
    const initialLang = getLanguageFromUrl();
    document.getElementById('language-select').value = initialLang;
    setLanguage(initialLang);
});
