// scrip de julio para el mapa
function initMap(){
    //Coordenadas de tu ubicación o lugar que desees mostrar en el mapa
       var ubicacion = { lat: 20.94873030936614, lng: -101.41615372615954 };
     
       // Crea un nuevo mapa y lo centra en la ubicación especificada
       var miPrimerMapa = new google.maps.Map(document.getElementById('map'), {
           center: ubicacion,
           zoom: 15 // Ajusta el nivel de zoom según tus necesidades
         });
}


document.addEventListener('DOMContentLoaded',function () {

});



//scrip para modals
const openModal = document.querySelector('.about_us');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});



//scrip para modals


//scrip para modals
const openModal2 = document.querySelector('.modal_Expertos');
const modal2 = document.querySelector('.modal2');
const closeModal2 = document.querySelector('.modal_close2');

openModal2.addEventListener('click', (a)=>{
    a.preventDefault();
    modal2.classList.add('modal--show2');
});

closeModal2.addEventListener('click', (a)=>{
    a.preventDefault();
    modal2.classList.remove('modal--show2');
});
