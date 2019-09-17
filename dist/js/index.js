'use strict';

$(function () {
  $('.sign-in select').bind('change', function () {
    alert($(this).val());
  });

  // $(apply_type).bind('change', function () {
  //   alert($(this).val());
  // });
});