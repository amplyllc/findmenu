var terms = new Array();
var max = 14;
            
for (i=1;i<=max;i++) { 
    terms[i] = new Array();
}
            
terms[1]['search'] = 'angry garlic'; 
terms[1]['des'] = 'Angry Garlic'; 
terms[1]['lnk'] = '/ny/baldwinsville/angry-garlic';

terms[2]['search'] = 'atlantic seafood'; 
terms[2]['des'] = 'Atlantic Seafood'; 
terms[2]['lnk'] = '/ny/baldwinsville/atlantic-seafood';

terms[3]['search'] = 'bg1'; 
terms[3]['des'] = 'BG1'; 
terms[3]['lnk'] = '/ny/baldwinsville/bg1';

terms[4]['search'] = 'big awesome bbq'; 
terms[4]['des'] = 'Big Awesome BBQ'; 
terms[4]['lnk'] = '/ny/baldwinsville/big-awesome-bbq';

terms[5]['search'] = 'bville diner'; 
terms[5]['des'] = "B'ville Diner"; 
terms[5]['lnk'] = '/ny/baldwinsville/bville-diner';

terms[6]['search'] = 'bville sports bowl'; 
terms[6]['des'] = "B'ville Sports Bowl"; 
terms[6]['lnk'] = '/ny/baldwinsville/bville-sports-bowl';

terms[7]['search'] = 'cottage restaurant'; 
terms[7]['des'] = "Cottage Restaurant"; 
terms[7]['lnk'] = '/ny/baldwinsville/cottage-restaurant';

terms[8]['search'] = 'dough boys'; 
terms[8]['des'] = "Dough Boys"; 
terms[8]['lnk'] = '/ny/baldwinsville/dough-boys';

terms[9]['search'] = 'hope cafe'; 
terms[9]['des'] = "Hope Cafe"; 
terms[9]['lnk'] = '/ny/clay/hope-cafe';

terms[10]['search'] = 'oompa loompyas'; 
terms[10]['des'] = "Oompa Loompyas"; 
terms[10]['lnk'] = '/ny/syracuse/oompa-loompyas';

terms[11]['search'] = 'pizza man'; 
terms[11]['des'] = "Pizza Man"; 
terms[11]['lnk'] = '/ny/baldwinsville/pizza-man';

terms[12]['search'] = 'sammy malones'; 
terms[12]['des'] = "Sammy Malone's"; 
terms[12]['lnk'] = '/ny/baldwinsville/sammy-malones';

terms[13]['search'] = 'shamballa cafe'; 
terms[13]['des'] = "Shamballa Cafe"; 
terms[13]['lnk'] = '/ny/baldwinsville/shamballa-cafe';

terms[14]['search'] = 'syracuse suds river grill'; 
terms[14]['des'] = "Syracuse Suds River Grill"; 
terms[14]['lnk'] = '/ny/baldwinsville/suds-river-grill';

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
