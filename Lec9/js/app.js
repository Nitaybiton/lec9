$('#myBtn').on('click', function(){

    var name = $('#myInput').val(); 
    alert(`Hello, ${name}`);
    localStorage.setItem('username', name);
})
var name = localStorage.getItem('username');

if (name != 'null' ){
    alert('welcome back, ' + name);
} 