    var elindulte = false;
    var nehezsegfok = 0; //lehet 1,2,3
    var kep = "";
    var jokepekszama = 0;
    var keresettKepUrl; 
    var kepszam;
    var szamok = [];
    var pont = 0;
    var ponthelye = document.getElementById("pont");
    var kartyakszamai = new Array();
    var kikapcsolomazujkorgombot =document.getElementById("ujkor");
    kikapcsolomazujkorgombot.disabled = true;
    var fokeptorolvevane = false;
    var marvanbenne = false;

    function veletlenszam(also, felso) {
        return Math.floor(Math.random() * (felso - also + 1) + also);
    }
    function Gen()
    {
        fokeptorolvevane = false;
        var kikapcsolomazujkorgombot =document.getElementById("ujkor");
        kikapcsolomazujkorgombot.disabled = true;
        if(nehezsegfok > 0)
        {
            elindulte = true;
            if(elindulte == true)
            {
                let kikapcsolomastartgombot =document.getElementById("start");
                kikapcsolomastartgombot.disabled = true;    
            }
            let gombkikapcsol1 = document.getElementById("konnyu");
            let gombkikapcsol2 = document.getElementById("kozepes");
            let gombkikapcsol3 = document.getElementById("nehez");
            gombkikapcsol1.disabled = true;
            gombkikapcsol2.disabled = true;
            gombkikapcsol3.disabled = true;
            Kepkivalaszt();
            var kephelye = document.getElementById("kephely");
            var generalkep = document.createElement("img");
            generalkep.id="kigeneraltkep";
            generalkep.src = "./kepek/"+kep;
            keresettKepUrl = generalkep.src;
            kephelye.appendChild(generalkep);
            KartyakGen();
            ConsoleLogok();
        }
        else
        {
            alert("Válassz nehézségiszintet!");
        }
    }
    function KartyakGen()
    {
        var hely = document.getElementById("jatekter");
        var marvanegymin = false;
        if(nehezsegfok == 3)
        {
            for(var i=0; i < 95;i++)
            {
            var szam = veletlenszam(1,30);
            if(i >70 && i<95 && marvanegymin === false)
            {
                for(let z =0; z < szamok.length;z++)
                {
                    if(kepszam != szamok[z])
                    {
                        szam = kepszam;
                        marvanegymin = true;
                        break;
                    }
                }
            }
            if(szam == kepszam)
            {
                jokepekszama++;
                marvanegymin = true;
            }
            
            szamok[i] = szam;
            var kartya = document.createElement("img");
            kartya.id=i;
            kartya.value=szam;
            kartya.style.height="50px"
            kartya.style.width="80px";
            kartya.src="./kepek/"+szam+".jpg";
            kartya.addEventListener("click", Megvizsgal);
            hely.appendChild(kartya);
            console.log(kartya);
            }
        }
        else if(nehezsegfok == 2)
        {
            for(var i=0; i < 65;i++)
            {
            var szam = veletlenszam(1,30);
            //var marvanegymin = false;
            if(i >30 && i<65 && marvanegymin === false)
            {
                for(let z =0; z < szamok.length;z++)
                {
                    if(kepszam != szamok[z])
                    {
                        szam = kepszam;
                        marvanegymin = true;
                        break;
                    }
                }
            }
            if(szam == kepszam)
            {
                jokepekszama++;
            }
            var kartya = document.createElement("img");
            kartya.id=i;
            kartya.value=szam;
            kartya.style.height="50px"
            kartya.style.width="80px";
            kartya.src="./kepek/"+szam+".jpg";
            kartya.addEventListener("click", Megvizsgal);
            hely.appendChild(kartya);
            }
        }
        else if(nehezsegfok == 1)
        {
            for(var i=0; i < 25;i++)
            {
            var szam = veletlenszam(1,30);
            //var marvanegymin = false;
            if(i >5 && i<25 && marvanegymin === false)
            {
                for(let z =0; z < szamok.length;z++)
                {
                    if(kepszam != szamok[z])
                    {
                        szam = kepszam;
                        marvanegymin = true;
                        break;
                    }
                }
            }
            if(szam == kepszam)
            {
                jokepekszama++;
            }
            var kartya = document.createElement("img");
            kartya.id=i;
            kartya.value=szam;
            kartya.style.height="50px"
            kartya.style.width="80px";
            kartya.src="./kepek/"+szam+".jpg";
            kartya.addEventListener("click", Megvizsgal);
            hely.appendChild(kartya);
            }
        }
    }
    function Megvizsgal(event)
    {
        var kattintottKepUrl = event.target.src;
        if(keresettKepUrl == kattintottKepUrl)
        {
            let keret = document.getElementById("kephely");
            event.target.style.display = "none";
            if(nehezsegfok == 3)
            {
                pont +=6;
                jokepekszama--;
                console.log(jokepekszama);
                VegeVanE();
            }
            else if(nehezsegfok == 2)
            {
                pont +=4;
                jokepekszama--;
                console.log(jokepekszama);
                VegeVanE();
            }
            else
            {
                pont +=3;
                jokepekszama--;
                console.log(jokepekszama);
                VegeVanE();
            }      
            PontFrissit();
        }
        else
        {
            pont -=5;
            PontFrissit();
            console.log(jokepekszama);
            VegeVanE();
        }
    }
    function Torol()
    {
        var kigeneraltkeeptorlese = document.getElementById("kigeneraltkep");
        kigeneraltkeeptorlese.style.display="none";
        jokepekszama = 0;
        kepszam = 0;
        szamok = [];
        kep = "";
        kartyakszamai = new Array();
        if(nehezsegfok === 3)
        {
            for(let i =0;i<95;i++)
            {
                var keptorol = document.getElementById(i);
                keptorol.remove();
            }
        }
        else if(nehezsegfok === 2)
        {
            for(let i =0;i<65;i++)
            {
                var keptorol = document.getElementById(i);
                keptorol.remove();
            }
        }
        else
        {
            for(let i =0;i<25;i++)
            {
                var keptorol = document.getElementById(i);
                keptorol.remove();
            }
        }
    }
    function VegeVanE()
    {
        if(pont < 0)
        {
            var uzenethely = document.getElementById("uzenetmertelfogyottapont");
            var uzenet = document.createElement("h1");
            uzenet.innerHTML="A pontod 0 alá csökkent, így véget ért számodra a játék. :(";
            uzenethely.appendChild(uzenet);
            var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
            myModal.show();
        }
        else if(jokepekszama == 0)
        {
            Torol();
            alert("Nyertél!");
            var kikapcsolomazujkorgombot =document.getElementById("ujkor");
            kikapcsolomazujkorgombot.disabled = false;
        }
    }
    function Kepkivalaszt()
    {
        kepszam = veletlenszam(1,30);
        kep = kepszam+".jpg";
    }
    function Konnyu()
    {
        nehezsegfok = 1;
        
    }
    function Kozepes()
    {
        nehezsegfok = 2;
    }

    function Nehez()
    {
        nehezsegfok = 3;
    }

    function Reset()
    {
        location.reload();
    }

    function UjKor() {
        jokepekszama = 0;
        var kikapcsolomazujkorgombot = document.getElementById("ujkor");
        kikapcsolomazujkorgombot.disabled = true;
        FokepInaktival();
        KartyakInaktivallas();
        Gen();
    }
    


    function KartyakInaktivallas()
    {
        var hely = document.getElementById("jatekter");
        var kartyak = hely.getElementsByTagName("img"); // Kártyák lekérése
        for (var i = 0; i < kartyak.length; i++)
        {
            kartyak[i].remove();
        }
        
    }

    function FokepInaktival()
    {
        if(fokeptorolvevane === false)
        {
            var kigeneraltkeeptorlese = document.getElementById("kigeneraltkep");
            
            kigeneraltkeeptorlese.remove();
            fokeptorolvevane = true;
        }
        
        console.log("hello");
    }

    function PontFrissit()
    {
        ponthelye.innerHTML = pont +"-pont";
    }


    function ConsoleLogok()
    {
        //console.log("elindult, nehezseg:"+nehezsegfok+"-as szintu.Nehezsegek:\n1-konnyu,\n2-kozepes,\n3-nehez.");
        //console.log("Aktuális nehézségfok:"+nehezsegfok);
        //console.log("Elindult-e a játék? ->"+elindulte);
        //console.log(kepszam);
        console.log(jokepekszama);
        //console.log(kep);
    }
