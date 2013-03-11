
$ (document).on("ready", inicio);
function inicio()
{
	//aqui inica el codigo
	$("#personalizar").on("click", transicion);
}
function transicion()
{
	//json es la forma de cambiar XML
	var cambiocss=
	{
		margin:0,
		overflow:"hidden",
		padding:0,
		width:0
	};
	var cambiospersonalizacion=
	{
		height:"auto",
		opacity:1,
		width:"40%"
	}
	$("#historia").css(cambiocss);
	$("#personalizacion").css(cambiospersonalizacion);
	$("#color div").on("click", cambiarcolor);
	$("#llantas figure img").on("click", cambiarllantas);

}
function cambiarcolor(datos)
{
	var colorcin= datos.currentTarget.id;
	var nuevocoche="c"+ colorcin+".jpg";
	$("#cochecito img").attr("src", nuevocoche);
}
function cambiarllantas()
{
	console.log(datos);

}



