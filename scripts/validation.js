//  when user submits form ("On Form Submit Event" snippet):
$("#feedback-form").on("submit", function() {
  var formValid = true;

  //  if email component is valid ("Check Component Validity" snippet):
  //    hide email feedback
  //  else
  //    show email feedback
  if( $("#user-email").prop("validity").valid ) {

    $("#email-feedback").addClass("hidden");

  } else {

    $("#email-feedback").removeClass("hidden");

    formValid = false;
  }

  //  if Friday is checked or Saturday is checked or Sunday is checked ("At Least One Checkbox Checked" snippet):
  //    hide days-attended feedback
  //  else
  //    show days-attended feedback
  if( $("#user-friday").is(":checked") ||
      $("#user-saturday").is(":checked") ||
      $("#user-sunday").is(":checked") ) {

    $("#days-feedback").addClass("hidden");

  } else {

    $("#days-feedback").removeClass("hidden");

    formValid = false;
  }

  //  if rate component is valid ("Check Component Validity" snippet):
  //    hide rate feedback
  //  else
  //    show rate feedback
  if( $("input[name='user-rate']").prop("validity").valid ) {

    $("#rate-feedback").addClass("hidden");

  } else {

    $("#rate-feedback").removeClass("hidden");

    formValid = false;
  }

  //  if receive-update component is valid ("Check Component Validity" snippet):
  //    hide receive-update feedback
  //  else
  //    show receive-update feedback
  if( $("input[name='receive-update']").prop("validity").valid ) {

    $("#receive-feedback").addClass("hidden");

  } else {

    $("#receive-feedback").removeClass("hidden");

    formValid = false;
  }

  //  if form is valid (no feedback):
  //    send data to server
  //  else
  //    prevent form from sending data to server
  return formValid;
});
