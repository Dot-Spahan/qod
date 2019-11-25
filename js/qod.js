(function ($) {

    let lastPage = '';

    // your code here
    $('#new-quote-button').on('click', function (event) {
        event.preventDefault();

        lastPage = document.URL;

        console.log('click');

        $.ajax({
            method: 'get',
            url: qod_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
        }).done(function (data) {
            console.log(data);

            $('.entry-content').html(data[0].content.rendered);
            $('.entry-title').html(data[0].title.rendered);

            history.pushState(null, null, qod_vars.home_url + '/' + data[0].slug)

            if (data[0]._qod_quote_source_url !== '') {
                $('.source').html(`
                , <a href="${data[0]._qod_quote_source_url}">${data[0]._qod_quote_source}</a>
                `);

            } else {
                $('.source').html(data[0]._qod_quote_source);
            }


        })
            .fail(function (error) {
                console.log(error);
            });

    //update the page when we click forward and back button
        $(window).on('popstate', function () {
            window.location.replace(lastPage);
        });
    });


        $('#submit-quote').on('click', function(event) {
           event.preventDefault();
           $.ajax({
              method: 'post',
              url: qod_vars.rest_url + 'wp/v2/posts/',
              data: {
                title:$("#quote-author").val(),
                content:$("#quote-content").val(),
                _qod_quote_source:$("#quote-source").val(),
                _qod_quote_source_url:$("#quote-source-url").val()
              },
              beforeSend: function(xhr) {
                 xhr.setRequestHeader( 'X-WP-Nonce', qod_vars.wpapi_nonce );
              }
           }).done( function(response) {
              alert('Success!');
           });
        });


})(jQuery);