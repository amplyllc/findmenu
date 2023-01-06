var listings = new Array();
var max = 26;
            
for (i=1;i<=max;i++) { 
    listings[i] = new Array();
}
            
listings[1]['search'] = 'ali baba'; 
listings[1]['des'] = 'Ali Baba'; 
listings[1]['lnk'] = '/ny/syracuse/ali-baba';
            
listings[2]['search'] = 'angry garlic'; 
listings[2]['des'] = 'Angry Garlic'; 
listings[2]['lnk'] = '/ny/baldwinsville/angry-garlic';

listings[3]['search'] = 'atlantic seafood'; 
listings[3]['des'] = 'Atlantic Seafood'; 
listings[3]['lnk'] = '/ny/baldwinsville/atlantic-seafood';

listings[4]['search'] = 'baga bowls'; 
listings[4]['des'] = 'Baga Bowls'; 
listings[4]['lnk'] = '/ny/syracuse/baga-bowls';

listings[5]['search'] = 'baji cali taco'; 
listings[5]['des'] = 'Baji Cali Taco'; 
listings[5]['lnk'] = '/ny/syracuse/baji-cali-taco';

listings[6]['search'] = 'bob barkers famous hotdogs'; 
listings[6]['des'] = "Bob Barker's Famous Hotdogs"; 
listings[6]['lnk'] = '/ny/syracuse/bob-barkers';

listings[7]['search'] = 'bg1'; 
listings[7]['des'] = 'BG1'; 
listings[7]['lnk'] = '/ny/baldwinsville/bg1';

listings[8]['search'] = 'big awesome bbq'; 
listings[8]['des'] = 'Big Awesome BBQ'; 
listings[8]['lnk'] = '/ny/baldwinsville/big-awesome-bbq';

listings[9]['search'] = 'bville diner'; 
listings[9]['des'] = "B'ville Diner"; 
listings[9]['lnk'] = '/ny/baldwinsville/bville-diner';

listings[10]['search'] = 'bville sports bowl'; 
listings[10]['des'] = "B'ville Sports Bowl"; 
listings[10]['lnk'] = '/ny/baldwinsville/bville-sports-bowl';

listings[11]['search'] = 'cafe jarosz'; 
listings[11]['des'] = "Cafe Jarosz"; 
listings[11]['lnk'] = '/ny/syracuse/cafe-jarosz';

listings[12]['search'] = 'cottage restaurant'; 
listings[12]['des'] = "Cottage Restaurant"; 
listings[12]['lnk'] = '/ny/baldwinsville/cottage-restaurant';

listings[13]['search'] = 'dough boys'; 
listings[13]['des'] = "Dough Boys"; 
listings[13]['lnk'] = '/ny/baldwinsville/dough-boys';

listings[14]['search'] = 'eden'; 
listings[14]['des'] = "Eden"; 
listings[14]['lnk'] = '/ny/syracuse/eden';

listings[15]['search'] = 'elbitas cocina'; 
listings[15]['des'] = "Elbita's Cocina"; 
listings[15]['lnk'] = '/ny/syracuse/elbitas-cocina';

listings[16]['search'] = 'elm street tacos'; 
listings[16]['des'] = "Elm Street Tacos"; 
listings[16]['lnk'] = '/ny/syracuse/elm-street-tacos';

listings[17]['search'] = 'hope cafe'; 
listings[17]['des'] = "Hope Cafe"; 
listings[17]['lnk'] = '/ny/clay/hope-cafe';

listings[18]['search'] = 'hughies hotcakes'; 
listings[18]['des'] = "Hughie's Hotcakes"; 
listings[18]['lnk'] = '/ny/syracuse/hughies-hotcakes';

listings[19]['search'] = 'ji woos korean'; 
listings[19]['des'] = "Ji-Woo's Korean Seoul Food"; 
listings[19]['lnk'] = '/ny/syracuse/ji-woos';

listings[20]['search'] = 'leos donut factory'; 
listings[20]['des'] = "Leo's Donut Factory"; 
listings[20]['lnk'] = '/ny/syracuse/leos-donut-factory';

listings[21]['search'] = 'oompa loompyas'; 
listings[21]['des'] = "Oompa Loompyas"; 
listings[21]['lnk'] = '/ny/syracuse/oompa-loompyas';

listings[22]['search'] = 'pbjs lunch box'; 
listings[22]['des'] = "PB&J's Lunch Box"; 
listings[22]['lnk'] = '/ny/baldwinsville/pbjs-lunch-box';

listings[23]['search'] = 'pizza man'; 
listings[23]['des'] = "Pizza Man"; 
listings[23]['lnk'] = '/ny/baldwinsville/pizza-man';

listings[24]['search'] = 'sammy malones'; 
listings[24]['des'] = "Sammy Malone's"; 
listings[24]['lnk'] = '/ny/baldwinsville/sammy-malones';

listings[25]['search'] = 'shamballa cafe'; 
listings[25]['des'] = "Shamballa Cafe"; 
listings[25]['lnk'] = '/ny/baldwinsville/shamballa-cafe';

listings[26]['search'] = 'syracuse suds river grill'; 
listings[26]['des'] = "Syracuse Suds River Grill"; 
listings[26]['lnk'] = '/ny/baldwinsville/suds-river-grill';

function search() {
    var input = document.getElementById('searchbar').value.toLowerCase();
    var i=0;
    var list="";
    var pos=-1;

    if(input!="") { 
        for(i=1; i<=max; i++) { 
            pos= listings[i]['search'].indexOf(input);

            if(pos!=-1) { 
                list= list + '<a class="search_lnk" href="'+listings[i]['lnk']+'">' + listings[i]['des'] + '</a>' + '<br>'; 
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
