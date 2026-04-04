function closePopup() {
    $('#popupBox').hide();
    $('#blur-bg').hide();
    $('.product-item').hide(); // Hides the new product detail modal
    $('#overlay').hide();
}

$(document).ready(function () {

    function pauseMarquee() { $('marquee')[0].stop(); }
    function startMarquee() { $('marquee')[0].start(); }

    $('.tab-btn').click(function () {
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');
        applyFilters();
    });

    $('#filter-brand, #filter-price, #filter-sort').change(function () {
        applyFilters();
    });

    $('#reset-filters').click(function () {
        $('#filter-brand').val('all');
        $('#filter-price').val('all');
        $('#filter-sort').val('default');
        $('.tab-btn').removeClass('active');
        $('.tab-btn[data-cat="all"]').addClass('active');
        applyFilters();
    });

    function applyFilters() {
        var cat = $('.tab-btn.active').data('cat');
        var brand = $('#filter-brand').val();
        var price = $('#filter-price').val();
        var sort = $('#filter-sort').val();
        var visibleCount = 0;

        $('.product-card').removeClass('hidden');

        $('.product-card').each(function () {
            var cardCat = $(this).data('cat');
            var cardBrand = $(this).data('brand');
            var cardPrice = parseInt($(this).data('price'));
            var show = true;

            if (cat !== 'all' && cardCat !== cat) show = false;
            if (brand !== 'all' && cardBrand !== brand) show = false;

            if (price !== 'all') {
                var range = price.split('-');
                var min = parseInt(range[0]);
                var max = parseInt(range[1]);
                if (cardPrice < min || cardPrice > max) show = false;
            }

            if (!show) {
                $(this).addClass('hidden');
            } else {
                visibleCount++;
            }
        });

        if (sort !== 'default') {
            var grid = $('#product-grid');
            var cards = grid.find('.product-card:not(.hidden)').toArray();
            cards.sort(function (a, b) {
                var priceA = parseInt($(a).data('price'));
                var priceB = parseInt($(b).data('price'));
                return sort === 'low-high' ? priceA - priceB : priceB - priceA;
            });
            $.each(cards, function (i, card) {
                grid.append(card);
            });
        }

        if (visibleCount === 0) {
            $('#no-results').show();
        } else {
            $('#no-results').hide();
        }
    }

    // ── Sidebar subcategory click ──
    $('.side-cat-link').click(function (e) {
        e.preventDefault();
        var cat = $(this).data('cat');
        $("#sideMenu").css({ left: "-350vw" });
        $(".pro-contain").css({ display: "block" });
        $("#overlay").css({ display: "block" });
        $('.tab-btn').removeClass('active');
        $('.tab-btn[data-cat="' + cat + '"]').addClass('active');
        applyFilters();
        pauseMarquee();
    });

    // ── Category Slider click ──
    $('.cat-slider-link').click(function () {
        var cat = $(this).data('cat');
        $(".pro-contain").css({ display: "block" });
        $("#overlay").css({ display: "block" });
        $('.tab-btn').removeClass('active');
        $('.tab-btn[data-cat="' + cat + '"]').addClass('active');
        applyFilters();
        pauseMarquee();
    });

    $(".probtn-close").click(function () {
        $(".pro-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $(".promenu-open").click(function () {
        $(".pro-contain").css({ display: "block" });
        $("#overlay").css({ display: "block" });
        pauseMarquee();
    });

    $(".conbtn-close").click(function () {
        $(".contact-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $(".conmenu-open").click(function () {
        $(".contact-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
        pauseMarquee();
    });

    $("#hamburger").click(function () {
        $("#sideMenu").css({ left: "0" });
        $("#overlay").css({ display: "block" });
        pauseMarquee();
    });

    $(".closeBtn").click(function () {
        $("#sideMenu").css({ left: "-350vw" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $("#overlay").click(function () {
        $(".pro-contain, .contact-contain, .faqs-contain, .aff-contain, .otrack-contain, .myacc-contain, .quicko-contain, .catalog-contain, .service-contain").css({ display: "none" });
        $("#sideMenu").css({ left: "-350vw" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $(".faqbtn-close").click(function () {
        $(".faqs-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $(".faqmenu-open").click(function () {
        $(".faqs-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
        pauseMarquee();
    });

    $(".affbtn-close").click(function () {
        $(".aff-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $(".affmenu-open").click(function () {
        $(".aff-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
        pauseMarquee();
    });

    $(".otrackbtn-close").click(function () {
        $(".otrack-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $(".otrack-open").click(function () {
        $(".otrack-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
        pauseMarquee();
    });

    $(".myacc-open").click(function () {
        $(".myacc-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
        pauseMarquee();
    });

    $(".myaccbtn-close").click(function () {
        $(".myacc-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $(".quicko-open").click(function () {
        $(".quicko-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
        pauseMarquee();
    });

    $(".quickobtn-close").click(function () {
        $(".quicko-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $(".catalog-open").click(function () {
        $(".catalog-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
        pauseMarquee();
    });

    $(".catalogbtn-close").click(function () {
        $(".catalog-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $(".service-open").click(function () {
        $(".service-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
        pauseMarquee();
    });

    $(".servicebtn-close").click(function () {
        $(".service-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
        startMarquee();
    });

    $("#blur-bg").click(function () {
        $("#popupBox").css({ display: "none" });
        $("#blur-bg").css({ display: "none" });
    });

    $(".side-links").click(function () {
        $("#sideMenu").css({ left: "-350vw" });
    });

    // ── Dark Mode ──
    $('#dark-mode').click(function () {
        $('body').addClass('dark');
        $('#dark-mode').hide();
        $('#light-mode').show();
        localStorage.setItem('theme', 'dark');
    });

    $('#light-mode').click(function () {
        $('body').removeClass('dark');
        $('#light-mode').hide();
        $('#dark-mode').show();
        localStorage.setItem('theme', 'light');
    });

    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark');
        $('#dark-mode').hide();
        $('#light-mode').show();
    }

    // ── 1. The Product Database ──
    const products = [
        // Mobiles
        { id: 1, cat: 'mobiles', brand: 'samsung', price: 424999, name: 'Samsung Galaxy S26 Ultra', img: 'assets/Latest Deals/samsung s26 ultra.png', details: 'The ultimate flagship. Features a stunning 6.8" Dynamic AMOLED display, Snapdragon 8 Gen 4 processor, a massive 200MP quad-camera setup with 100x Space Zoom, and the integrated S-Pen for ultimate productivity. 12GB RAM, 512GB Storage.' },
        { id: 2, cat: 'mobiles', brand: 'apple', price: 359999, name: 'Apple iPhone 16', img: 'assets/category-slider/mobile.png', details: 'Experience the next generation of Apple silicon with the A18 Bionic chip. Features a refined titanium chassis, a 48MP main camera with advanced computational photography, and an all-day battery life. 256GB Storage.' },
        { id: 3, cat: 'mobiles', brand: 'xiaomi', price: 89999, name: 'Xiaomi 14 Pro', img: 'assets/category-slider/mobile.png', details: 'Flagship performance on a budget. Boasts a 120Hz OLED screen, Leica-engineered triple cameras, and insanely fast 120W HyperCharge that fills the battery in just 19 minutes.' },
        
        // Earbuds
        { id: 4, cat: 'earbuds', brand: 'apple', price: 49999, name: 'Apple AirPods Pro', img: 'assets/Latest Deals/Ear buds wirless.png', details: 'Active Noise Cancellation for immersive sound. Transparency mode for hearing the world around you. Includes personalized spatial audio and sweat/water resistance.' },
        { id: 5, cat: 'earbuds', brand: 'samsung', price: 24999, name: 'Samsung Galaxy Buds 2', img: 'assets/Latest Deals/Ear buds wirless.png', details: 'Well-balanced sound with dynamic 2-way speakers. Three microphones and a built-in voice pickup unit ensure clear calls, while active noise canceling blocks unwanted distractions.' },
        { id: 6, cat: 'earbuds', brand: 'anker', price: 3999, name: 'Anker Soundcore P3', img: 'assets/Latest Deals/Ear buds wirless.png', details: 'Thumping bass and multi-mode noise cancellation. Offers an impressive 35-hour playtime with the charging case and customizable EQ via the Soundcore app.' },

        // Watches
        { id: 7, cat: 'watches', brand: 'apple', price: 129999, name: 'Apple Watch Series 10', img: 'assets/Latest Deals/smart watch.png', details: 'Your essential companion for a healthy life. Features advanced health tracking including ECG, blood oxygen, and temperature sensing, paired with a crack-resistant edge-to-edge display.' },
        { id: 8, cat: 'watches', brand: 'samsung', price: 69999, name: 'Samsung Galaxy Watch 7', img: 'assets/Latest Deals/smart watch.png', details: 'Seamlessly tracks your sleep, workouts, and body composition. Runs on Wear OS with a rotating bezel for easy navigation and a robust sapphire crystal display.' },
        { id: 9, cat: 'watches', brand: 'xiaomi', price: 4999, name: 'Xiaomi Smart Band 9', img: 'assets/Latest Deals/smart watch.png', details: 'Ultra-lightweight fitness tracker with a vibrant AMOLED display. Supports over 150 sports modes, continuous heart rate monitoring, and up to 14 days of battery life.' },

        // Tablets
        { id: 10, cat: 'tablets', brand: 'samsung', price: 186999, name: 'Samsung Galaxy Tab S11', img: 'assets/Latest Deals/s11 tab ultra.png', details: 'A powerhouse tablet featuring an 11-inch 120Hz display, perfect for gaming and multitasking. Includes the ultra-responsive S-Pen for drawing and note-taking.' },
        { id: 11, cat: 'tablets', brand: 'apple', price: 299999, name: 'Apple iPad Pro M4', img: 'assets/category-slider/tablet.png', details: 'Outrageous performance powered by the M4 chip. Features a Liquid Retina XDR display for true-to-life colors and contrast, making it the ultimate tool for creatives and professionals.' },
        { id: 12, cat: 'tablets', brand: 'xiaomi', price: 79999, name: 'Xiaomi Pad 7 Pro', img: 'assets/category-slider/tablet.png', details: 'A media consumption beast. High-res display with Dolby Vision, quad-speakers tuned by Harman Kardon, and a massive 10,000mAh battery.' },

        // Power Banks
        { id: 13, cat: 'powerbanks', brand: 'anker', price: 7999, name: 'Anker 20000mAh Power Bank', img: 'assets/category-slider/powerbank.png', details: 'Massive capacity to charge your phone up to 5 times. Features PowerIQ technology for optimized high-speed charging across all your devices.' },
        { id: 14, cat: 'powerbanks', brand: 'samsung', price: 4999, name: 'Samsung 10000mAh Power Bank', img: 'assets/category-slider/powerbank.png', details: 'Sleek, metallic design with 25W Super Fast Charging. Features dual USB-C ports so you can charge two devices simultaneously on the go.' },
        { id: 15, cat: 'powerbanks', brand: 'xiaomi', price: 3499, name: 'Xiaomi 10000mAh Redmi', img: 'assets/category-slider/powerbank.png', details: 'Affordable, reliable, and compact. Includes dual input/output ports and high-density lithium polymer batteries for safe, long-lasting power.' },

        // Speakers
        { id: 16, cat: 'speakers', brand: 'jbl', price: 14999, name: 'JBL Charge 5', img: 'assets/category-slider/bluetooth speaker.png', details: 'Bold JBL Original Pro Sound with an optimized long excursion driver. IP67 waterproof and dustproof, plus a built-in powerbank to charge your phone while playing music.' },
        { id: 17, cat: 'speakers', brand: 'sony', price: 19999, name: 'Sony SRS-XB33', img: 'assets/category-slider/bluetooth speaker.png', details: 'EXTRA BASS technology delivers deep, punchy sound. Features customizable party lights, a rugged waterproof build, and up to 24 hours of battery life.' },
        { id: 18, cat: 'speakers', brand: 'anker', price: 4999, name: 'Anker Soundcore 3', img: 'assets/category-slider/bluetooth speaker.png', details: 'Upgraded driver technology provides zero distortion even at high volumes. 100% waterproof build makes it the perfect shower or pool companion.' },

        // Chargers
        { id: 19, cat: 'chargers', brand: 'anker', price: 2999, name: 'Anker 65W GaN Charger', img: 'assets/category-slider  z/charger.png', details: 'Powered by Gallium Nitride (GaN) technology to pack 65W of power into a tiny form factor. Can charge a MacBook Pro or fast-charge any smartphone.' },
        { id: 20, cat: 'chargers', brand: 'samsung', price: 1999, name: 'Samsung 45W Super Fast Charger', img: 'assets/category-slider/charger.png', details: 'Official Samsung charging brick. Gets your Galaxy device from 0 to 50% in roughly 20 minutes safely and efficiently.' },
        { id: 21, cat: 'chargers', brand: 'apple', price: 3499, name: 'Apple 30W USB-C Charger', img: 'assets/category-slider/charger.png', details: 'The reliable standard for Apple devices. Perfect for fast-charging iPhones and iPads without degrading battery health.' },

        // Trimmers
        { id: 22, cat: 'trimmers', brand: 'philips', price: 4999, name: 'Philips Series 5000 Trimmer', img: 'assets/category-slider/trimmer.png', details: 'Self-sharpening steel blades and 40 lock-in length settings. Delivers an even trim from every angle, making it perfect for styling stubble or a full beard.' },
        { id: 23, cat: 'trimmers', brand: 'philips', price: 2999, name: 'Philips AquaTouch Shaver', img: 'assets/category-slider/trimmer.png', details: 'Designed for a comfortable dry shave or a refreshing wet shave with gel or foam. Features ComfortCut blades that glide smoothly over your skin.' },
        { id: 24, cat: 'trimmers', brand: 'sony', price: 3499, name: 'Panasonic Beard Trimmer', img: 'assets/category-slider/trimmer.png', details: 'Ergonomic design with acute 45-degree blade edges for precise cutting. Washable entirely underwater for easy maintenance.' }
    ];

    // ── 2. Render Products into the DOM ──
    const grid = $('#product-grid');
    
    // Loop through the array and generate the HTML
    products.forEach(p => {
        // We use toLocaleString() to format numbers like 424999 into 4,24,999 automatically
        const cardHTML = `
            <div class="product-card" data-id="${p.id}" data-cat="${p.cat}" data-brand="${p.brand}" data-price="${p.price}">
                <img src="${p.img}" alt="${p.name}">
                <div class="product-info">
                    <span class="product-tag">${p.cat}</span>
                    <p class="product-name">${p.name}</p>
                    <p class="product-price"><sup>RS</sup> ${p.price.toLocaleString()}</p>
                </div>
            </div>
        `;
        grid.append(cardHTML);
    });

    // ── 3. Handle Product Click for the Detail Modal ──
    $(document).on('click', '.product-card', function() {
        // Grab the ID of the card we just clicked
        const clickedId = $(this).data('id');
        
        // Find the matching product in our array
        const product = products.find(p => p.id === clickedId);

        if (product) {
            // Inject the details into the popup
            $('.prod-img').attr('src', product.img);
            $('.prod-name').text(product.name);
            $('.prod-price').html(`<sup>RS</sup> ${product.price.toLocaleString()}`);
            $('.prod-detail').text(product.details);

            // Show the modal
            $('.product-item').css('display', 'flex');
            $('#overlay').css('display', 'block'); // Triggers your dark overlay
        }
    });
    $(".prodbtn-close").click(function(){
         $('.product-item').css('display', 'none');
    })
});
