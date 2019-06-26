exports.handler = function(event, context, callback) {
    const axios = require( 'axios');
    const cheerio = require('cheerio')
    var url = event.queryStringParameters;
    url = url.url;
    axios.get(url)
        .then(function(response){
            const $ = cheerio.load(response.data);
            var list = [];
            var itemName = $('.product-name').text();
            $('.swatches.color li a').each(function(_index,element) {
                var colorObj = {color: $(element).attr('title').substr(3)};
                var pricesObj = JSON.parse($(element).attr('data-price'));
                var salePriceObj = {price: pricesObj.saleprice};
                var item = Object.assign(colorObj, salePriceObj);
                list.push(item);
            })
            callback(null, {
              statusCode: 200,
              body: JSON.stringify({
                itemName,
                'options': list
              })
            });
        })

};
