{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var mes = parseInt(prompt("Cual es su mes de nacimiento?"));\
var dia = parseInt(prompt("Cual es su dia de nacimiento?"));\
\
//aries - 21 de marzo - 20 de abril[16]\'e2\'80\'8b\
// tauro - 21 de abril - 20 de mayo[16]\'e2\'80\'8b\
// Geminis - 21 de mayo - 20 de junio[16]\'e2\'80\'8b\
// Cancer - 21 de junio - 22 de julio[16]\'e2\'80\'8b\
//Leo - 23 de julio - 23 de agosto[16]\'e2\'80\'8b\
// Virgo - 24 de agosto - 22 de septiembre[16]\'e2\'80\'8b\
// Libra - 23 de septiembre - 23 de octubre[16]\'e2\'80\'8b\
// Escorpio - 24 de octubre - 22 de noviembre[16]\'e2\'80\'8b\
// Sagitario - 23 de noviembre - 21 de diciembre[16]\'e2\'80\'8b\
// Capricornio - 22 de diciembre - 20 de enero[16]\'e2\'80\'8b\
// Acuario - 21 de enero - 19 de febrero[16]\'e2\'80\'8b\
// Piscis - 20 de febrero - 20 de marzo[16]\'e2\'80\'8b\
\
if ((dia >= 21 && mes === 3 && dia <=31) || (dia <= 20 && mes === 4)) \{\
    alert("Tu signo es Aries");\
\}else if((dia >= 21 && mes === 4 && dia <= 30) || (dia <=20 && mes  === 5)) \{\
    alert("Tu signo es Tauro");\
\}else if((dia >= 21 && mes === 5 && dia <= 31) || (dia <=20 && mes  === 6)) \{\
    alert("Tu signo es Geminis");\
\}else if((dia >= 21 && mes === 6 && dia <= 30) || (dia <=22 && mes  === 7)) \{\
    alert("Tu signo es Cancer");\
\}else if((dia >= 23 && mes === 7 && dia <= 31) || (dia <=23 && mes  === 8)) \{\
    alert("Tu signo es Leo");\
\}else if((dia >= 24 && mes === 8 && dia <= 31) || (dia <=22 && mes  === 9)) \{\
    alert("Tu signo es Virgo");\
\}else if((dia >= 23 && mes === 9 && dia <= 30) || (dia <=23 && mes  === 10)) \{\
    alert("Tu signo es Libra");\
\}else if((dia >= 24 && mes === 10 && dia <= 31) || (dia <=22 && mes  === 11)) \{\
    alert("Tu signo es Escorpio");\
\}else if((dia >= 23 && mes === 11 && dia <= 30) || (dia <=21 && mes  === 12)) \{\
    alert("Tu signo es Sagitario");\
\}else if((dia >= 22 && mes === 12 && dia <= 31) || (dia <=20 && mes  === 1)) \{\
    alert("Tu signo es Capricornio");\
\}else if((dia >= 21 && mes === 1 && dia <= 31) || (dia <=19 && mes  === 2)) \{\
    alert("Tu signo es Acuario");\
\}else if((dia >= 20 && mes === 2 && dia <= 29) || (dia <=20 && mes  === 3)) \{\
    alert("Tu signo es Piscis");\
\}else\{\
    alert("Su fecha de nacimiento es incorrecta, intente de nuevo...")\
\}\
}