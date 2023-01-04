var terms = new Array();
var max = 26;
            
for (i=1;i<=max;i++) { 
    terms[i] = new Array();
}
            
terms[1]['search'] = 'ali baba'; 
terms[1]['des'] = 'Ali Baba'; 
terms[1]['lnk'] = '/ny/syracuse/ali-baba';
            
terms[2]['search'] = 'angry garlic'; 
terms[2]['des'] = 'Angry Garlic'; 
terms[2]['lnk'] = '/ny/baldwinsville/angry-garlic';

terms[3]['search'] = 'atlantic seafood'; 
terms[3]['des'] = 'Atlantic Seafood'; 
terms[3]['lnk'] = '/ny/baldwinsville/atlantic-seafood';

terms[4]['search'] = 'baga bowls'; 
terms[4]['des'] = 'Baga Bowls'; 
terms[4]['lnk'] = '/ny/syracuse/baga-bowls';

terms[5]['search'] = 'baji cali taco'; 
terms[5]['des'] = 'Baji Cali Taco'; 
terms[5]['lnk'] = '/ny/syracuse/baji-cali-taco';

terms[6]['search'] = 'bob barkers famous hotdogs'; 
terms[6]['des'] = "Bob Barker's Famous Hotdogs"; 
terms[6]['lnk'] = '/ny/syracuse/bob-barkers';

terms[7]['search'] = 'bg1'; 
terms[7]['des'] = 'BG1'; 
terms[7]['lnk'] = '/ny/baldwinsville/bg1';

terms[8]['search'] = 'big awesome bbq'; 
terms[8]['des'] = 'Big Awesome BBQ'; 
terms[8]['lnk'] = '/ny/baldwinsville/big-awesome-bbq';

terms[9]['search'] = 'bville diner'; 
terms[9]['des'] = "B'ville Diner"; 
terms[9]['lnk'] = '/ny/baldwinsville/bville-diner';

terms[10]['search'] = 'bville sports bowl'; 
terms[10]['des'] = "B'ville Sports Bowl"; 
terms[10]['lnk'] = '/ny/baldwinsville/bville-sports-bowl';

terms[11]['search'] = 'cafe jarosz'; 
terms[11]['des'] = "Cafe Jarosz"; 
terms[11]['lnk'] = '/ny/syracuse/cafe-jarosz';

terms[12]['search'] = 'cottage restaurant'; 
terms[12]['des'] = "Cottage Restaurant"; 
terms[12]['lnk'] = '/ny/baldwinsville/cottage-restaurant';

terms[13]['search'] = 'dough boys'; 
terms[13]['des'] = "Dough Boys"; 
terms[13]['lnk'] = '/ny/baldwinsville/dough-boys';

terms[14]['search'] = 'eden'; 
terms[14]['des'] = "Eden"; 
terms[14]['lnk'] = '/ny/syracuse/eden';

terms[15]['search'] = 'elbitas cocina'; 
terms[15]['des'] = "Elbita's Cocina"; 
terms[15]['lnk'] = '/ny/syracuse/elbitas-cocina';

terms[16]['search'] = 'elm street tacos'; 
terms[16]['des'] = "Elm Street Tacos"; 
terms[16]['lnk'] = '/ny/syracuse/elm-street-tacos';

terms[17]['search'] = 'hope cafe'; 
terms[17]['des'] = "Hope Cafe"; 
terms[17]['lnk'] = '/ny/clay/hope-cafe';

terms[18]['search'] = 'hughies hotcakes'; 
terms[18]['des'] = "Hughie's Hotcakes"; 
terms[18]['lnk'] = '/ny/syracuse/hughies-hotcakes';

terms[19]['search'] = 'ji woos korean'; 
terms[19]['des'] = "Ji-Woo's Korean Seoul Food"; 
terms[19]['lnk'] = '/ny/syracuse/ji-woos';

terms[20]['search'] = 'leos donut factory'; 
terms[20]['des'] = "Leo's Donut Factory"; 
terms[20]['lnk'] = '/ny/syracuse/leos-donut-factory';

terms[21]['search'] = 'oompa loompyas'; 
terms[21]['des'] = "Oompa Loompyas"; 
terms[21]['lnk'] = '/ny/syracuse/oompa-loompyas';

terms[22]['search'] = 'pbjs lunch box'; 
terms[22]['des'] = "PB&J's Lunch Box"; 
terms[22]['lnk'] = '/ny/baldwinsville/pbjs-lunch-box';

terms[23]['search'] = 'pizza man'; 
terms[23]['des'] = "Pizza Man"; 
terms[23]['lnk'] = '/ny/baldwinsville/pizza-man';

terms[24]['search'] = 'sammy malones'; 
terms[24]['des'] = "Sammy Malone's"; 
terms[24]['lnk'] = '/ny/baldwinsville/sammy-malones';

terms[25]['search'] = 'shamballa cafe'; 
terms[25]['des'] = "Shamballa Cafe"; 
terms[25]['lnk'] = '/ny/baldwinsville/shamballa-cafe';

terms[26]['search'] = 'syracuse suds river grill'; 
terms[26]['des'] = "Syracuse Suds River Grill"; 
terms[26]['lnk'] = '/ny/baldwinsville/suds-river-grill';

function search() {
    var input = document.getElementById('searchbar').value.toLowerCase();
    var i=0;
    var list="";
    var pos=-1;

    if(input!="") { 
        for(i=1; i<=max; i++) { 
            pos= terms[i]['search'].indexOf(input);

            if(pos!=-1) { 
                list= list + '<a class="search_lnk" href="'+terms[i]['lnk']+'">' + terms[i]['des'] + '</a>' + '<br>'; 
            }   
            pos=-1;
        }

        if(list==""){ 
            document.getElementById("list").innerHTML = "";
            document.getElementById("list").style.display = "none";
        } else { 
            document.getElementById("list").innerHTML = list;
            document.getElementById("list").style.display = "flex";
        }
    }
}
