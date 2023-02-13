// Import JS
import * as bootstrap from 'bootstrap';
import 'select2';

import $ from 'jquery';
window.$ = window.jQuery = $;

$('.js-select2').select2();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$('#sidebar-toggle').on('click', function () {
  $('.sidebar').toggleClass('sidebar-min');
  $('main').toggleClass('p-sidebar')
});

$('.show-filters').on('click', function () {
  $('.filters').removeClass('d-none');
  $(this).addClass('d-none');
  $('main').addClass('p-filter');
});

$('.close-filters').on('click', function () {
  $('.filters').addClass('d-none');
  $('.show-filters').removeClass('d-none');
  $('main').removeClass('p-filter');
});
