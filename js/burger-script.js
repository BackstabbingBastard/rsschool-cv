"use strict";

let menuBurger = document.querySelector('.menu_burger');
let burgerUl = document.querySelector('.burger_ul');

menuBurger.addEventListener('click', function(){
	menuBurger.classList.toggle('active');
	burgerUl.classList.toggle('active');
});