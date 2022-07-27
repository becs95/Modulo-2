'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        let posicion  = i
        let operacion = posicion * -50
        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})


// js de megatravel  
<script type="text/javascript">
        $(document).ready(function () {
		
		//conexiones		
		$('#framemenu a').click(function () {
        var url = $(this).attr('rel');
		url = url + "&txtColor=333333&aColor=333333&ahColor=FF6600&thBG=28B1DF&thTxColor=333333&ff=9";
        $('#iframe').attr('src', url);
		
		var titulo = $(this).attr('title');
		$("#titulo").text(titulo);	
	 
    });
			
 });
</script>   

