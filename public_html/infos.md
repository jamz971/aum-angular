Auth avec login et mdp du site adopteunmec. compte test
<identifiant = 'test@gustr.com'>
<password ='123456971'>

tester un appel sans avoir à saisir les infos


exemple WS avec option activated ou

get: function(id) {
                    if(ApplicationConfiguration.webServiceActivated) {
                        return this.getFromWebservice(id);
                    } else {
                        return this.getFromLocal(id);
                    }
                },
                getFromLocal: function(id) {
                    var deferred = $q.defer();

                    var result = $resource('data/webservices/' + id + '.json', {}, {
                        query: {
                            method: 'GET',
                            isArray: true,
                            cache: IndicateurCache.get()
                        }
                    }).query(function(result) {
                        deferred.resolve(result);
                    });

                    return deferred.promise;
                },
                getFromWebservice: function(id) {
                    var deferred = $q.defer();

                    delete $http.defaults.headers.common['X-Request-With'];
                    //$http.defaults.headers.common['Authorization'] = 'Basic a3JvbWk6a3JvbWl0ZXN0';

                    $resource(ApplicationConfiguration.webServiceURL + id, {}, {
                        get: {
                            method: 'GET',
                            headers: {
                                'Authorization': ApplicationConfiguration.webServiceAUTH
                            },
                            isArray: true,
                            cache:  IndicateurCache.get(),
                        }
                    }).query(function(result){
                        deferred.resolve(result);
                    });

                    return deferred.promise;
                },


listFromWebservice: function() {
                    var deferred = $q.defer();

                    delete $http.defaults.headers.common['X-Request-With'];
    
                    $resource(ApplicationConfiguration.webServiceURL + 'Thematiques', {}, {
                        get: {
                            method: 'GET',
                            headers: {
                                'Authorization': 'Basic a3JvbWk6a3JvbWl0ZXN0' /* ApplicationConfiguration.webServiceAUTH*/
                            },
                            isArray: true,
                            cache:  false,
                        }
                    }).query(function(result){
                        ThematiqueService.parseListResult(result);
                        deferred.resolve(ThematiqueService.thematiques);
                    });

                    return deferred.promise;
                }





##########
API Urls trouvé
##########
?? : 
    https://api.adopteunmec.com/api/users?sex=1&by=region&count=5&start_cnx=1429565028

userList :    
    http://api.adopteunmec.com/api/users?count=5&offset=0&callback=JSON_CALLBACK

loggedUser:
    http://www.adopteunmec.com/api/home/

userInfos :
    https://api.adopteunmec.com/api/users/15462652?callback=JSON_CALLBACK

searchuser : 
    http://api.adopteunmec.com/api/loop?count=5&q=paris_blonde_etudiante_pulpeuse&offset=0&callback=JSON_CALLBACK

############################################################
THEORIE POUR PHOTO

Photo cover 200x200 : https://s2.adopteunmec.com/fr/2/6/8/0/4/0/0/1/thumb2_14.jpg
    pic_id : 38625674
url galerie image :  https://s2.adopteunmec.com/fr/068f171e30eb349d006.jpg
<img src="https://s2.adopteunmec.com/fr/2/6/8/0/4/0/0/1/thumb0_13.jpg">
Si je remplace thumb par le mot image je récupère la vrai image uploadé vu sur le lien source
http://methylbro.titaxium.org/post/2008/10/03/AdopteUnMec-Informatique-rencontre-et-libertes
<img src="https://s2.adopteunmec.com/fr/2/6/8/0/4/0/0/1/image13.jpg">
<img src="https://s2.adopteunmec.com/fr/068f171e30dffdd590d.jpg">
la dernière partie de l'url corespond peut etre a l'ID encrypté
en enregistrant l'image on obptient 110040862-image14.jpg
la partie -image14.jpg semble commune à toute les première image du profil.

SOLUTION POUR PHOTO
exemple avec 9 chiffre id_user=110040862
l'id est composé d'au moin 7 chiffres 
l'url des photos  = id_user_reverse=268040011 ou l'on garde les 7 premiers chiffres 
lorsque id_user.lenght() = 8 
et les 8 derniers quand id_user.lenght() = 9 ainsi de suite
que l'on s'épare
de / le 8 ieme chiffre est en faite le nom de l'image.

 http://s8.adopteunmec.com/fr/ = 29 charactère

######################################################################
Requette de recherche
query = http://api.adopteunmec.com/api/loop?count=1000&q=nantes_blonde&offset=1

params:
   - count : 1000 results max
   - q : ville ou caractéristiques ou ville_caractéristique_???_
   - offset : de 0 à 199 (pour le moment)
#######################################################################
 

{
    "results": [
        {
            "id": 19761528,
            "pseudo": "Julie Lp",
            "online": true,
            "sex": 1,
            "$ref": "http://api.adopteunmec.com/api/users/19761528",
            "age": 18,
            "city": "Nantes",
            "cover": "http://s8.adopteunmec.com/fr/8/2/5/1/6/7/9/13",
            "last_cnx": "2015-02-09 12:32:43",
            "last_cnx_label": "en ligne",
            "styles": [
                "4",
                "5",
                "6"
            ],
            "in_contact": false,
            "hashtags": [
                {
                    "id": 17,
                    "label": "blonde"
                },
                {
                    "id": 28,
                    "label": "vegan"
                },
                {
                    "id": 802,
                    "label": "marilynmanson"
                }
            ],
            "highlighted_values": [
                "blonds"
            ]
        },
        {...},
        {...},
    ]
}

#######################################################
INFOS CONCERNANT UN PROFIL
query : http://api.adopteunmec.com/api/users/19761528
param:
    - id_user
######################################################

{
    "id": 19761528,
    "pseudo": "Julie Lp",
    "online": true,
    "sex": 1,
    "$ref": "http://api.adopteunmec.com/api/users/19761528",
    "age": 18,
    "city": "Nantes",
    "cover": "http://s8.adopteunmec.com/fr/8/2/5/1/6/7/9/13",
    "last_cnx": "2015-02-09 13:28:51",
    "last_cnx_label": "en ligne",
    "styles": [
        "4",
        "5",
        "6"
    ],
    "in_contact": false,
    "points": 18000,
    "birthdate": "1996-05-27",
    "title": "",
    "zip": "44000",
    "country": "fr",
    "can_mail": false,
    "is_faked": false,
    "is_blocked": false,
    "in_basket": false,
    "pics": [
        "http://s8.adopteunmec.com/fr/8/2/5/1/6/7/9/1",
        "http://s8.adopteunmec.com/fr/8/2/5/1/6/7/9/2",
        "http://s8.adopteunmec.com/fr/8/2/5/1/6/7/9/4",
        "http://s8.adopteunmec.com/fr/8/2/5/1/6/7/9/6",
        "http://s8.adopteunmec.com/fr/8/2/5/1/6/7/9/10",
        "http://s8.adopteunmec.com/fr/8/2/5/1/6/7/9/11",
        "http://s8.adopteunmec.com/fr/8/2/5/1/6/7/9/12",
        "http://s8.adopteunmec.com/fr/8/2/5/1/6/7/9/13"
    ],
    "hashtags": [
        {
            "id": 17,
            "label": "blonde"
        },
        {
            "id": 28,
            "label": "vegan"
        },
        {
            "id": 802,
            "label": "marilynmanson"
        },
        {
            "id": 280,
            "label": "lesfleursdumal"
        },
        {
            "id": 833,
            "label": "mulhollanddrive"
        },
        {
            "id": 153,
            "label": "prisonbreak"
        },
        {
            "id": 1194,
            "label": "bohème"
        },
        {
            "id": 19,
            "label": "yeuxbleus"
        },
        {
            "id": 557,
            "label": "hendrix"
        },
        {
            "id": 602,
            "label": "eternalsunshine"
        }
    ],
    "refuse_geoloc": false,
    "job": "Lycéenne ",
    "music": [
        "Nirvana, Marilyn Manson, Rammstein",
        "Hendrix, Joplin, Bob Marley",
        "The Clash, Dire Straits, Pink FLoyd",
        "Chris Isaak, Elvis Presley ",
        "The Cardigans, Nouvelle vague"
    ],
    "cinema": [
        "Fight Club",
        "Mr. Nobody, Eternal Sunshine (...) ",
        "Mulholland Drive, Sailor et Lula",
        "Shutter Island, Inception",
        "Orange mécanique, Shining"
    ],
    "books": [
        "L'étranger",
        "Les fleurs du mal",
        "Paul Eluard"
    ],
    "tvs": [
        "Walking dead",
        "Prison break ",
        "Lost",
        "Game of Thrones"
    ],
    "hobbies": "Dessin, musique, écriture, cinéma",
    "fall_for": "Regard, sourire",
    "turned_on_by": "",
    "cant_stand": "Les pretentieux, les perfectionnistes, les queutards",
    "vices": "Timidité, impulsivité",
    "fantasies": "",
    "assets": "Indépendante",
    "size": "160",
    "weight": "55",
    "shape": "6",
    "origins": "1",
    "hair_size": "3",
    "hair_color": "7",
    "eyes_color": "4",
    "tobacco": "3",
    "alcohol": "2",
    "diet": "4",
    "features": [
        "4"
    ],
    "character": [
        "4",
        "6",
        "11",
        "12"
    ],
    "arousing": [
        "9",
        "13"
    ],
    "sexgames": [],
    "sextoys": [],
    "underwear": [],
    "about1": "\"Nous trouvons absurde le sujet de dissertation que vous nous avez donner, « qui penser vous être ? » qu’est-ce que ça peut vous faire. Vous nous voyez comme vous voulez bien nous voir parce que c’est plus simple et parce que ça vous arrange, vous nous définissez comme, un surdoué, un athlète, une détraquée, une fille à papa et un délinquant, vrai ou faux ? L’intox avait marché à fond.<br>Nous vous avons trouvé une définition très simple, chacun de nous est à la fois un surdoué, et un athlète, et une fille à papa, et un délinquant. Ça vous va ?\"",
    "about2": "Impressionne-moi et démarque toi. Et sois jeune.",
    "favourite_food": [],
    "hair_style": "1",
    "university": "Lycée Jean Perrin (Rezé)",
    "working": "2",
    "announce": "\"Nous trouvons absurde le sujet de dissertation que vous nous avez donner, « qui penser vous être ? » qu’est-ce que ça peut vous faire. Vous nous voyez comme vous voulez bien nous voir parce que c’est plus simple et parce que ça vous arrange, vous nous définissez comme, un surdoué, un athlète, une détraquée, une fille à papa et un délinquant, vrai ou faux ? L’intox avait marché à fond.\nNous vous avons trouvé une définition très simple, chacun de nous est à la fois un surdoué, et un athlète, et une fille à papa, et un délinquant. Ça vous va ?\"",
    "shopping_list": "Impressionne-moi et démarque toi. Et sois jeune.",
    "enabled_badges": [
        {
            "id": 18,
            "level": 1
        },
        {
            "id": 19,
            "level": 3
        }
    ],
    "disabled_badges": []
}
