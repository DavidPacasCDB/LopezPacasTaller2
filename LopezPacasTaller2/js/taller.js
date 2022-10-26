
var Calculo = new Object();



function algoritmo()
{
    let a, b, c, discriminante, x1;
    let x2;
    a = parseFloat (document.formulario1.valora.value);
    b = parseFloat (document.formulario1.valorb.value);
    c = parseFloat (document.formulario1.valorc.value);
    discriminante=b*b-4.0*a*c;
    if(discriminante<0)
    {
        discriminante=-discriminante;
        alert('Soluciones imaginarias');
    }
    else
        alert('Soluciones reales');
    if(a!=0)
    {
        x1=(-b+Math.sqrt(discriminante))/2.0/a;
        x2=(-b-Math.sqrt(discriminante))/2.0/a;
    }
    else
    {
        x1=0;
        x2=0;
        alert('No es una ecuaci\u00F3n cuadr\u00E1tica');
    }
    document.formulario1.discriminante.value = discriminante;
    document.formulario1.x1.value = x1;
    document.formulario1.x2.value = x2;
}

