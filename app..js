function closePopup() {
    $('#popupBox').hide();
    $('#blur-bg').hide();
}

$(document).ready(function () {

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
    });

    // ── Category Slider click ──
    $('.cat-slider-link').click(function () {
        var cat = $(this).data('cat');
        $(".pro-contain").css({ display: "block" });
        $("#overlay").css({ display: "block" });
        $('.tab-btn').removeClass('active');
        $('.tab-btn[data-cat="' + cat + '"]').addClass('active');
        applyFilters();
    });

    $(".probtn-close").click(function () {
        $(".pro-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
    });

    $(".promenu-open").click(function () {
        $(".pro-contain").css({ display: "block" });
        $("#overlay").css({ display: "block" });
    });

    $(".conbtn-close").click(function () {
        $(".contact-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
    });

    $(".conmenu-open").click(function () {
        $(".contact-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
    });

    $("#hamburger").click(function () {
        $("#sideMenu").css({ left: "0" });
        $("#overlay").css({ display: "block" });
    });

    $(".closeBtn").click(function () {
        $("#sideMenu").css({ left: "-350vw" });
        $("#overlay").css({ display: "none" });
    });

    $("#overlay").click(function () {
        $(".pro-contain, .contact-contain, .faqs-contain, .aff-contain, .otrack-contain, .myacc-contain, .quicko-contain, .catalog-contain, .service-contain").css({ display: "none" });
        $("#sideMenu").css({ left: "-350vw" });
        $("#overlay").css({ display: "none" });
    });

    $(".faqbtn-close").click(function () {
        $(".faqs-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
    });

    $(".faqmenu-open").click(function () {
        $(".faqs-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
    });

    $(".affbtn-close").click(function () {
        $(".aff-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
    });

    $(".affmenu-open").click(function () {
        $(".aff-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
    });

    $(".otrackbtn-close").click(function () {
        $(".otrack-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
    });

    $(".otrack-open").click(function () {
        $(".otrack-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
    });

    $(".myacc-open").click(function () {
        $(".myacc-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
    });

    $(".myaccbtn-close").click(function () {
        $(".myacc-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
    });

    $(".quicko-open").click(function () {
        $(".quicko-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
    });

    $(".quickobtn-close").click(function () {
        $(".quicko-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
    });

    $(".catalog-open").click(function () {
        $(".catalog-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
    });

    $(".catalogbtn-close").click(function () {
        $(".catalog-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
    });

    $(".service-open").click(function () {
        $(".service-contain").fadeIn(500);
        $("#overlay").css({ display: "block" });
    });

    $(".servicebtn-close").click(function () {
        $(".service-contain").css({ display: "none" });
        $("#overlay").css({ display: "none" });
    });

    $("#blur-bg").click(function () {
        $("#popupBox").css({ display: "none" });
        $("#blur-bg").css({ display: "none" });
    });

});
