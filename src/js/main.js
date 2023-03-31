// Import JS
import * as bootstrap from 'bootstrap';
import 'select2';

import $ from 'jquery';
window.$ = window.jQuery = $;

$('.js-select2').select2();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {html: true}));

$('#sidebar-toggle').on('click', function () {
  $('.sidebar').toggleClass('sidebar-min');
  $('main').toggleClass('p-sidebar')
});

$('.show-filters').on('click', function () {
  $('.filters').removeClass('d-none');
  $(this).closest('.aside').addClass('d-none');
  $('main').removeClass('has-aside').addClass('has-filter');
});

$('.close-filters').on('click', function () {
  $('.filters').addClass('d-none');
  $('.show-filters').closest('.aside').removeClass('d-none');
  $('main').removeClass('has-filter');
});
$('#btn-menu').on('click', function () {
  $(this).find('i').toggleClass('d-none');
  $(this).toggleClass('btn-success btn-primary border-white rounded-circle');

  //Sidebar
  $('.sidebar').removeClass('sidebar-min').toggleClass('d-none d-flex w-100 h-100').find('ul').toggleClass('flex-grow-1 justify-content-center h-100');
});

$('.btn-chat-minimize,.btn-chat-maximize').on('click', function () {
  var $cardChat = $(this).closest('.card-floating-chat');

  $cardChat.find('.btn-chat-minimize').toggleClass('d-none');
  $cardChat.find('.btn-chat-maximize').toggleClass('d-none');
  $cardChat.find('.card-footer').toggleClass('d-none');
  $cardChat.find('.card-body').toggleClass('d-none');
  $cardChat.toggleClass('h-auto');

});
$('.btn-chat-close').on('click', function () {
  $(this).closest('.card-floating-chat').remove();
});
$('.show-aside').on('click', function () {
  $('.aside-box').removeClass('d-none');
  $(this).closest('.aside').addClass('d-none');
  $('main').removeClass('has-aside').addClass('has-filter');
});

$('.expand-aside').on('click', function () {
  $('.expand-aside').toggleClass('d-none');
  $('.aside-box').toggleClass('w-75');
  $('main').toggleClass('has-aside-expand');
  $('.col-speaker').toggleClass('w-100');
});
$('.close-aside').on('click', function () {
  $('.aside-box').removeClass('w-75');
  $('main').removeClass('has-aside-expand');
  $('.col-speaker').removeClass('w-100');
  $('.aside-box').addClass('d-none');
  $('.aside').removeClass('d-none');
  $('main').addClass('has-aside').removeClass('has-filter');
});
