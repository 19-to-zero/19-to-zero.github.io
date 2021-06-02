function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

(function() {

  var vaccinesAPI = "https://api.opencovid.ca/";

  $.getJSON(vaccinesAPI, {format: "json"})
    .done(function( data ) {
      $("#vaccines").text(numberWithCommas(data.summary[0]["cumulative_avaccine"]-data.summary[0]["cumulative_cvaccine"]));
      console.log("More than " + data.summary[0]["cumulative_avaccine"] + " vaccines have been administered in Canada. Great!")
    })
    .fail(function( data ) {
      console.log("Failed")
    });

})();