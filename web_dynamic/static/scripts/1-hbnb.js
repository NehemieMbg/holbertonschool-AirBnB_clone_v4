$(document).ready(function () {
  let amenityId = [];
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      amenityId.push($(this).data('name'));
    } else {
      amenityId = amenityId.filter(amens => amens !== amenName);
    }
    console.log(amenityId);
    $('.amenities h4').text(amenityId.join(', '));
  });
});
