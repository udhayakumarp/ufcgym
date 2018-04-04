$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '3000341673',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '3000341673.1677ed0.8757d37e9cf2464191b5fa8c568357b7',
        sortBy: 'most-recent',
        template: '<li class="instagram-feed__item"><a class="instagram-feed__link" href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="instagram-feed__image"/></a></li>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    // $('.gallery').magnificPopup({
    //     type: 'image',
    //     delegate: 'a',
    //     gallery: {
    //         enabled: true
    //     }
    // });


});



