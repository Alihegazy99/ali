const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
});
const hiddenElements =
document.querySelectorAll('.hidden');

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){
entry.target.classList.add('show');
}

});

});

hiddenElements.forEach((el)=>{
observer.observe(el);
});
const counters =
document.querySelectorAll('.counter');

counters.forEach(counter => {

const updateCounter = () => {

const target =
+counter.getAttribute('data-target');

const count =
+counter.innerText;

const increment =
target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});
window.addEventListener('scroll',()=>{

const header =
document.querySelector('.header');

header.classList.toggle(
'scrolled',
window.scrollY > 50
);

});