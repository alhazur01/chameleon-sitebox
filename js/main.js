const TRANSLATIONS = {
  RU: {
    nav_how: "Как мы работаем", nav_pricing: "Тарифы", nav_portfolio: "Портфолио", nav_contact: "Контакты",
    hero_title: "Сайт для вашего бизнеса за 3 дня",
    hero_subtitle: "Лендинги для малого бизнеса в Казахстане. Привлекайте клиентов уже на этой неделе.",
    hero_cta: "Получить сайт", hero_secondary: "Узнать подробнее →",
    how_title: "Как мы работаем", how_subtitle: "Простой путь к вашему новому сайту",
    step1_title: "Заявка", step1_desc: "Вы оставляете заявку. Мы связываемся с вами для обсуждения деталей вашего бизнеса и пожеланий.",
    step2_title: "Разработка", step2_desc: "Мы создаем современный дизайн, пишем тексты и программируем сайт с учетом всех требований.",
    step3_title: "Запуск", step3_desc: "Тестируем и запускаем ваш новый сайт. Теперь он готов приносить вам новых клиентов!",
    pricing_title: "Прозрачные тарифы", pricing_subtitle: "Выберите подходящий формат сотрудничества",
    dev_title: "Разработка", dev_price_sub: "единоразово",
    dev_f1: "Индивидуальный дизайн", dev_f2: "Адаптация под смартфоны", dev_f3: "Базовая SEO-оптимизация", dev_f4: "Форма заявки от клиентов", dev_f5: "Интеграция соцсетей (Instagram, WhatsApp)",
    dev_btn: "Заказать сайт",
    sup_title: "Поддержка", sup_price_sub: "после запуска сайта", sup_note: "Всё включено: хостинг, поддержка, правки",
    sup_f1: "Хостинг на вашем домене", sup_f2: "Домен", sup_f3: "Поддержка в рабочие часы", sup_f4: "Регулярные обновления", sup_f5: "Внесение правок",
    sup_btn: "Оформить поддержку",
    pricing_arrow_text: "затем", pricing_footer_note: "Сначала вы платите за разработку, затем подключаете поддержку",
    portfolio_title: "Наши работы", portfolio_subtitle: "Примеры сайтов, которые мы создали",
    portfolio_empty: "Скоро здесь появятся наши работы", portfolio_desc: "Мы активно работаем над новыми проектами и скоро их покажем.",
    contact_title: "Готовы начать?", contact_subtitle: "Оставьте заявку, и мы свяжемся с вами в течение 15 минут для обсуждения вашего проекта.",
    contact_whatsapp: "Написать в WhatsApp",
    form_name_label: "Ваше имя", form_phone_label: "Номер телефона", form_business_label: "Тип бизнеса / Ниша", form_submit: "Оставить заявку",
    placeholder_name: "Алим Алимов", placeholder_phone: "+7 (___) ___-__-__", placeholder_business: "Например: Салон красоты",
    footer_desc: "Быстрые и эффективные лендинги для малого бизнеса в Казахстане.",
    footer_rights: "Все права защищены.",
    badge1: "🚀 Быстрый запуск", badge2: "📱 Адаптивный дизайн"
  },
  KZ: {
    nav_how: "Біз қалай жұмыс істейміз", nav_pricing: "Тарифтер", nav_portfolio: "Портфолио", nav_contact: "Байланыс",
    hero_title: "Бизнесіңізге сайт 3 күнде",
    hero_subtitle: "Қазақстандағы шағын бизнеске арналған лендингтер. Осы аптада-ақ клиенттер тартыңыз.",
    hero_cta: "Сайт алу", hero_secondary: "Толығырақ →",
    how_title: "Біз қалай жұмыс істейміз", how_subtitle: "Жаңа сайтқа жеткен оңай жол",
    step1_title: "Өтінім", step1_desc: "Сіз өтінім қалдырасыз. Біз бизнесіңіздің егжей-тегжейін талқылау үшін хабарласамыз.",
    step2_title: "Әзірлеу", step2_desc: "Біз заманауи дизайн жасаймыз, мәтіндер жазамыз және барлық талаптарды ескере отырып сайт бағдарламалаймыз.",
    step3_title: "Іске қосу", step3_desc: "Жаңа сайтыңызды тестілеп, іске қосамыз. Енді ол сізге жаңа клиенттер әкелуге дайын!",
    pricing_title: "Ашық тарифтер", pricing_subtitle: "Ынтымақтастықтың қолайлы форматын таңдаңыз",
    dev_title: "Әзірлеу", dev_price_sub: "бір рет",
    dev_f1: "Жеке дизайн", dev_f2: "Смартфондарға бейімдеу", dev_f3: "Базалық SEO-оңтайландыру", dev_f4: "Клиенттерден өтінім формасы", dev_f5: "Әлеуметтік желілер интеграциясы (Instagram, WhatsApp)",
    dev_btn: "Сайт тапсырыс беру",
    sup_title: "Қолдау", sup_price_sub: "сайт іске қосылғаннан кейін", sup_note: "Барлығы кіреді: хостинг, қолдау, түзетулер",
    sup_f1: "Доменіңіздегі хостинг", sup_f2: "Домен", sup_f3: "Жұмыс уақытында қолдау", sup_f4: "Тұрақты жаңартулар", sup_f5: "Түзетулер енгізу",
    sup_btn: "Қолдауды рәсімдеу",
    pricing_arrow_text: "содан кейін", pricing_footer_note: "Алдымен әзірлеуге төлейсіз, содан кейін қолдауды қосасыз",
    portfolio_title: "Біздің жұмыстарымыз", portfolio_subtitle: "Біз жасаған сайттардың мысалдары",
    portfolio_empty: "Жұмыстарымыз жақында осында пайда болады", portfolio_desc: "Біз жаңа жобалармен белсенді жұмыс істеп жатырмыз.",
    contact_title: "Бастауға дайынсыз ба?", contact_subtitle: "Өтінім қалдырыңыз, біз жобаңызды талқылау үшін 15 минут ішінде хабарласамыз.",
    contact_whatsapp: "WhatsApp-қа жазу",
    form_name_label: "Атыңыз", form_phone_label: "Телефон нөмірі", form_business_label: "Бизнес түрі / Ниша", form_submit: "Өтінім қалдыру",
    placeholder_name: "Алихан Оспанов", placeholder_phone: "+7 (___) ___-__-__", placeholder_business: "Мысалы: Сұлулық салоны",
    footer_desc: "Қазақстандағы шағын бизнеске арналған жылдам және тиімді лендингтер.",
    footer_rights: "Барлық құқықтар қорғалған.",
    badge1: "🚀 Жылдам іске қосу", badge2: "📱 Бейімді дизайн"
  },
  EN: {
    nav_how: "How it works", nav_pricing: "Pricing", nav_portfolio: "Portfolio", nav_contact: "Contact",
    hero_title: "A website for your business in 3 days",
    hero_subtitle: "Landing pages for small businesses in Kazakhstan. Start getting clients this week.",
    hero_cta: "Get a website", hero_secondary: "Learn more →",
    how_title: "How it works", how_subtitle: "A simple path to your new website",
    step1_title: "Request", step1_desc: "You submit a request. We contact you to discuss your business details and requirements.",
    step2_title: "Development", step2_desc: "We create a modern design, write copy, and build the site according to all your requirements.",
    step3_title: "Launch", step3_desc: "We test and launch your new website. It's ready to bring you new clients!",
    pricing_title: "Transparent pricing", pricing_subtitle: "Choose the right format of cooperation",
    dev_title: "Development", dev_price_sub: "one-time",
    dev_f1: "Custom design", dev_f2: "Mobile responsive", dev_f3: "Basic SEO optimization", dev_f4: "Client request form", dev_f5: "Social media integration (Instagram, WhatsApp)",
    dev_btn: "Order a website",
    sup_title: "Support", sup_price_sub: "after launch", sup_note: "All included: hosting, support, edits",
    sup_f1: "Hosting on your domain", sup_f2: "Domain", sup_f3: "Support during working hours", sup_f4: "Regular updates", sup_f5: "Content edits",
    sup_btn: "Get support",
    pricing_arrow_text: "then", pricing_footer_note: "First you pay for development, then optionally add support",
    portfolio_title: "Our works", portfolio_subtitle: "Examples of websites we have created",
    portfolio_empty: "Our portfolio will appear here soon", portfolio_desc: "We are actively working on new projects and will show them soon.",
    contact_title: "Ready to start?", contact_subtitle: "Leave a request and we will contact you within 15 minutes to discuss your project.",
    contact_whatsapp: "Write on WhatsApp",
    form_name_label: "Your name", form_phone_label: "Phone number", form_business_label: "Business type / Niche", form_submit: "Submit request",
    placeholder_name: "John Smith", placeholder_phone: "+7 (___) ___-__-__", placeholder_business: "E.g.: Beauty salon",
    footer_desc: "Fast and effective landing pages for small businesses in Kazakhstan.",
    footer_rights: "All rights reserved.",
    badge1: "🚀 Fast launch", badge2: "📱 Responsive design"
  }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Language Switcher Logic ---
    const langButtons = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('csb_lang') || 'RU';
    
    function applyLanguage(lang) {
        // Set document language
        document.documentElement.lang = lang.toLowerCase();
        
        // Update texts
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
                if (key === 'hero_title') {
                    // special case to preserve highlight
                    let text = TRANSLATIONS[lang][key];
                    let highlightStr = lang === 'RU' ? '3 дня' : (lang === 'KZ' ? '3 күнде' : '3 days');
                    if (text.includes(highlightStr)) {
                        el.innerHTML = text.replace(highlightStr, `<span class="highlight">${highlightStr}</span>`);
                    } else {
                        el.textContent = text;
                    }
                } else {
                    el.textContent = TRANSLATIONS[lang][key];
                }
            }
        });

        // Update placeholders
        const inputs = document.querySelectorAll('[data-i18n-placeholder]');
        inputs.forEach(input => {
            const key = input.getAttribute('data-i18n-placeholder');
            if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
                input.placeholder = TRANSLATIONS[lang][key];
            }
        });

        // Update buttons state
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Save to local storage
        localStorage.setItem('csb_lang', lang);
    }

    // Initialize language
    applyLanguage(savedLang);

    // Add click listeners
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Sticky Header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust scroll position to account for fixed header
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Form Submission Handler
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const businessInput = document.getElementById('business');
        const submitBtn = leadForm.querySelector('.submit-btn');

        // Initial state
        submitBtn.disabled = true;

        const validateForm = () => {
            const nameValid = nameInput.value.trim().length >= 3;
            const businessValid = businessInput.value.trim().length >= 1;
            // A fully formatted number is 18 chars long or has 11 digits total
            const phoneValid = phoneInput.value.replace(/\D/g, '').length === 11 && phoneInput.value.startsWith('+7');

            submitBtn.disabled = !(nameValid && businessValid && phoneValid);
        };

        nameInput.addEventListener('input', validateForm);
        businessInput.addEventListener('input', validateForm);

        phoneInput.addEventListener('focus', () => {
            if (phoneInput.value === '') {
                phoneInput.value = '+7';
            }
        });

        phoneInput.addEventListener('input', () => {
            let val = phoneInput.value;
            let digits = val.replace(/\D/g, '');
            
            // Remove the leading 7 if it's there, as we will hardcode +7
            if (digits.startsWith('7')) {
                digits = digits.substring(1);
            }
            
            digits = digits.substring(0, 10);
            
            let formatted = '+7';
            if (digits.length > 0) {
                formatted += ' (' + digits.substring(0, 3);
            }
            if (digits.length >= 4) {
                formatted += ') ' + digits.substring(3, 6);
            }
            if (digits.length >= 7) {
                formatted += '-' + digits.substring(6, 8);
            }
            if (digits.length >= 9) {
                formatted += '-' + digits.substring(8, 10);
            }

            phoneInput.value = formatted;
            validateForm();
        });

        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = leadForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            const currentLang = localStorage.getItem('csb_lang') || 'RU';
            const sendingText = currentLang === 'KZ' ? 'Жіберілуде...' : (currentLang === 'EN' ? 'Sending...' : 'Отправка...');
            const successText = currentLang === 'KZ' ? 'Өтінім жіберілді!' : (currentLang === 'EN' ? 'Request sent!' : 'Заявка отправлена!');
            const errorText = currentLang === 'KZ' ? 'Қате шықты. Қайта көріңіз.' : (currentLang === 'EN' ? 'Error occurred. Try again.' : 'Произошла ошибка. Попробуйте еще раз.');
            
            // Show loading state
            submitBtn.textContent = sendingText;
            submitBtn.disabled = true;

            const formData = new FormData();
            formData.append('entry.1775299029', document.getElementById('name').value);
            formData.append('entry.2044684753', document.getElementById('phone').value);
            formData.append('entry.183302904', document.getElementById('business').value);

            fetch('https://docs.google.com/forms/d/e/1FAIpQLScGupyisnL7iqDz8k-gogK7Z8qboKDdXSbiWRcqVduqYvs5EA/formResponse', {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            })
            .then(() => {
                // Telegram Notification
                const TELEGRAM_TOKEN = '8408107241:AAH3UUEZepNibPT54AolRjc7VKSZ9ZDFpRg';
                const TELEGRAM_CHAT_ID = '5113132345';
                const nameVal = document.getElementById('name').value;
                const phoneVal = document.getElementById('phone').value;
                const businessVal = document.getElementById('business').value;
                const text = `🆕 Новая заявка!\n👤 Имя: ${nameVal}\n📞 Телефон: ${phoneVal}\n💼 Бизнес: ${businessVal}`;

                fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: text
                    })
                }).catch(err => console.error('Telegram error:', err));

                submitBtn.textContent = successText;
                submitBtn.style.backgroundColor = '#27C93F';
                submitBtn.style.color = '#fff';
                
                leadForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                }, 3000);
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                submitBtn.textContent = errorText;
                submitBtn.style.backgroundColor = '#E8622A'; // Red/Orange for error
                submitBtn.style.color = '#fff';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                }, 3000);
            });
        });
    }
});
