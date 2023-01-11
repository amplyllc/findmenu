var listings = new Array();
var max = 31;
            
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

listings[6]['search'] = 'basil thai'; 
listings[6]['des'] = 'Basil Thai'; 
listings[6]['lnk'] = '/ny/phoenix/basil-thai';

listings[7]['search'] = 'bob barkers famous hotdogs'; 
listings[7]['des'] = "Bob Barker's Famous Hotdogs"; 
listings[7]['lnk'] = '/ny/syracuse/bob-barkers';

listings[8]['search'] = 'bombadils tavern'; 
listings[8]['des'] = "Bombadil's Tavern"; 
listings[8]['lnk'] = '/ny/phoenix/bombadils-tavern';

listings[9]['search'] = 'bg1'; 
listings[9]['des'] = 'BG1'; 
listings[9]['lnk'] = '/ny/baldwinsville/bg1';

listings[10]['search'] = 'big awesome bbq'; 
listings[10]['des'] = 'Big Awesome BBQ'; 
listings[10]['lnk'] = '/ny/baldwinsville/big-awesome-bbq';

listings[11]['search'] = 'bville diner'; 
listings[11]['des'] = "B'ville Diner"; 
listings[11]['lnk'] = '/ny/baldwinsville/bville-diner';

listings[12]['search'] = 'bville sports bowl'; 
listings[12]['des'] = "B'ville Sports Bowl"; 
listings[12]['lnk'] = '/ny/baldwinsville/bville-sports-bowl';

listings[13]['search'] = 'cafe jarosz'; 
listings[13]['des'] = "Cafe Jarosz"; 
listings[13]['lnk'] = '/ny/syracuse/cafe-jarosz';

listings[14]['search'] = 'cottage restaurant'; 
listings[14]['des'] = "Cottage Restaurant"; 
listings[14]['lnk'] = '/ny/baldwinsville/cottage-restaurant';

listings[15]['search'] = 'dough boys'; 
listings[15]['des'] = "Dough Boys"; 
listings[15]['lnk'] = '/ny/baldwinsville/dough-boys';

listings[16]['search'] = 'eden'; 
listings[16]['des'] = "Eden"; 
listings[16]['lnk'] = '/ny/syracuse/eden';

listings[17]['search'] = 'elbitas cocina'; 
listings[17]['des'] = "Elbita's Cocina"; 
listings[17]['lnk'] = '/ny/syracuse/elbitas-cocina';

listings[18]['search'] = 'elm street tacos'; 
listings[18]['des'] = "Elm Street Tacos"; 
listings[18]['lnk'] = '/ny/syracuse/elm-street-tacos';

listings[19]['search'] = 'erawan thai'; 
listings[19]['des'] = "Erawan"; 
listings[19]['lnk'] = '/ny/syracuse/erawan';

listings[20]['search'] = 'harpers pizza and ice cream'; 
listings[20]['des'] = "Harper's Pizza & Ice Cream"; 
listings[20]['lnk'] = '/ny/phoenix/harpers';

listings[21]['search'] = 'hope cafe'; 
listings[21]['des'] = "Hope Cafe"; 
listings[21]['lnk'] = '/ny/clay/hope-cafe';

listings[22]['search'] = 'hughies hotcakes'; 
listings[22]['des'] = "Hughie's Hotcakes"; 
listings[22]['lnk'] = '/ny/syracuse/hughies-hotcakes';

listings[23]['search'] = 'ji woos korean'; 
listings[23]['des'] = "Ji-Woo's Korean Seoul Food"; 
listings[23]['lnk'] = '/ny/syracuse/ji-woos';

listings[24]['search'] = 'leos donut factory'; 
listings[24]['des'] = "Leo's Donut Factory"; 
listings[24]['lnk'] = '/ny/syracuse/leos-donut-factory';

listings[25]['search'] = 'lock 1 distilling company'; 
listings[25]['des'] = "Lock 1 Distilling Co"; 
listings[25]['lnk'] = '/ny/phoenix/lock-1-distilling';

listings[26]['search'] = 'oompa loompyas'; 
listings[26]['des'] = "Oompa Loompyas"; 
listings[26]['lnk'] = '/ny/syracuse/oompa-loompyas';

listings[27]['search'] = 'pbjs lunch box'; 
listings[27]['des'] = "PB&J's Lunch Box"; 
listings[27]['lnk'] = '/ny/baldwinsville/pbjs-lunch-box';

listings[28]['search'] = 'pizza man'; 
listings[28]['des'] = "Pizza Man"; 
listings[28]['lnk'] = '/ny/baldwinsville/pizza-man';

listings[29]['search'] = 'sammy malones'; 
listings[29]['des'] = "Sammy Malone's"; 
listings[29]['lnk'] = '/ny/baldwinsville/sammy-malones';

listings[30]['search'] = 'shamballa cafe'; 
listings[30]['des'] = "Shamballa Cafe"; 
listings[30]['lnk'] = '/ny/baldwinsville/shamballa-cafe';

listings[31]['search'] = 'syracuse suds river grill'; 
listings[31]['des'] = "Syracuse Suds River Grill"; 
listings[31]['lnk'] = '/ny/baldwinsville/suds-river-grill';

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
