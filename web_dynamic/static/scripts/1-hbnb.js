$(document).ready(function () {
  let amenityId = [];
  $('input:checkbox').change(function () {
    // console.log(this);
    // alert('checked!');
    let name = $(this).attr('data-name');
    // if ($(this).prop('checked', true)) {
    if ($(this).is(':checked')) {
      amenityId.push(name);
    } else {
      amenityId = amenityId.filter(amens => amens !== name);
    }
    $('.amenities h4').text(amenityId.join(', '));
  });
  console.log(amenityId);
});

// alert('youhou');
