$(document).ready(function () {
  let amenityId = [];
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      amenityId.push($(this).data('name'));
      $('.amenities h4').text(amenityId.join(', '));
    } else {
      amenityId = amenityId.filter(amens => amens !== amenName);
      $('.amenities h4').text(amenityId.join(', '));
    }
  });
  /****************************
 display status with a colored circle on right top of page
 *****************************************/
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
