//fuck every ddr song

var twit = require('twit');
var config = require('./config.js');
var fs = require('fs');
var Twitter = new twit(config);

var fs = require('fs');
require('dotenv').config();



//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  function songName()
  {
      var songlist = [
        "trip machine",
        "paranoia",
        "jam jam raggae",
        "butterfly",
        "have you ever been mellow",
        "kung fu fighting",
        "let's get down",
        "little bitch",
        "my fire",
        "strictly business",
        "that's the way (i like it)",
        "bad girls",
        "boom boom dollar",
        "boys",
        "dub-i-dub",
        "el ritmo tropical",
        "get up'n move",
        "hero",
        "i believe in miracles",
        "if you were here",
        "love",
        "smoke",
        "stomp to my beat",
        "tubthumping",
        "am-3p",
        "brilliant 2u",
        "brilliant 2u (orchestra-groove)",
        "make it better (so-real mix)",
        "paranoia max ~dirty mix",
        "put your faith in me",
        "put your faith in me (jazzy groove",
        "sp-trip machine ~jungle mix~",
        "make a jam",
        "paranoia kcet ~clean mix~",
        "20, november",
        "keep on movin",
        "let them move",
        "boom boom dollar (k.o.g. g3 mix",
        "butterfly (upswing mix)",
        "captain jack (grandale mix)",
        "dam dariram",
        "do it all night",
        "flashdance (what a feeling)",
        "follow the sun ('90 in the shade mix)",
        "get up and dance",
        "holiday",
        "if you can say goodbye",
        "in the navy '99 (xxxl disaster remix)",
        "it only takes a minute (extended remix)",
        "mr. wonderful",
        "oh nick please not so quick",
        "operator",
        "rock beat",
        "so many men",
        "upside down",
        "vol. 4",
        "xanadu",
        "afronova",
        "dead end",
        "dynamite rave",
        "end of the century",
        "gentle stress (amd sexual mix)",
        "gradiusic cyber ~amd g5 mix~",
        "la senorita",
        "luv to me (amd mix)",
        "paranoia rebirth",
        "silent hill",
        "1,2,3,4,007",
        "boys (euro mix)",
        "dream a dream",
        "eat you up",
        "furuhata's theme",
        "have you ever been mellow",
        "hero (happy grandale mix)",
        "if you were here",
        "in the heat of the night",
        "kick the can",
        "music",
        "night in motion",
        "little bitch",
        "only you",
        "pink dinosaur",
        "saint goes marching (remix)",
        "shake your booty",
        "shooting star",
        "the 7 jump",
        "walkie talkie",
        "b4u",
        "baby baby gimme your love",
        "burnin' the floor",
        "higher",
        "hypn??tic crisis",
        "love again tonight ~for melissa mix~",
        "my summer love",
        "orion.78 (ameuro-mix)",
        "trip machine climax",
        "can't stop fallin' in love",
        "drop out",
        "hysteria",
        "let the beat him 'em",
        "paranoia evolution",
        "super star",
        "wild rush",
        ".59",
        "era (nostalmix)",
        "leading cyber",
        "never let you down",
        "conga feeling",
        "lupin the 3rd '78",
        "na-na",
        "petit love",
        "rhythm and police (k.o.g. g3 mix)",
        "sky high",
        "syncronized love (red monster hyper mix)",
        "wonda (speed k mix)",
        "do me (h.i.g.e.o. mix)",
        "sexy planet",
        "abyss",
        "???????????????????????????????????????",
        "i was the one",
        "absolute",
        "the cube",
        "dxy",
        "radical faith",
        "remember you",
        "dancing all alone",
        "swing it",
        "test my best",
        "be together",
        "the twist (double pump mix)",
        "never ending story",
        "healing vision",
        "hot limit",
        "moonlight shadow",
        "my generation (fat beat mix)",
        "dive",
        "broken my heart",
        "??? Japan",
        "ecstasy",
        "still in my heart",
        "can't stop falling in love (speed mix)",
        "insertion",
        "paranoia eternal",
        "somewhere over the rainbow",
        "highs off u (scorccio xy mix)",
        "www.blonde girl (momo mix)",
        "bye bye baby balloon",
        "cow girl",
        "ghosts (vincent de moor remix)",
        "miracle",
        "witch doctor (giant toons version)",
        "do you remember me",
        "justify my love",
        "the centre of the heart (stonebridge clubmix)",
        "i'm in the mood for dancing",
        "nori nori nori",
        "let's groove",
        "???????????? freckles (kcp re-edit)",
        "flash in the night",
        "my sweet darlin",
        "so deep (perfect sphere remix)",
        "fantasy",
        "true... (radio edit)",
        "firefly",
        "exotic ethnic",
        "on the jazz",
        "do it right",
        "share my love",
        "look to the sky",
        "midnite blaze",
        "healing vision (angelic mix)",
        "groove 2001",
        "max 300",
        "kind lady",
        "a minute",
        "drifting away",
        "it's raining men",
        "long train runnin'",
        "maximum overdrive",
        "stay",
        "the reflex",
        "living in america",
        "more than i needed to know",
        "the whistle song",
        "there you'll be",
        "waka laka",
        "destiny",
        "ever snow",
        "secret redez-vous",
        "candy???",
        "dive to the night",
        "tsugaru",
        "burning heat",
        "i feel",
        "spin the disc",
        "maxx unlimited",
        "??????",
        "burnin' the floor",
        "cartoon heroes (speedy mix)",
        "i do i do i do",
        "irresistiblement",
        "la copa de la vida",
        "senorita (speedy mix)",
        "speed over beethoven",
        "we will rock you",
        "1998",
        "321 stars",
        "a",
        "across the nightmare",
        "air",
        "bag",
        "crash!",
        "cutie chaser",
        "dance dance revolution",
        "feeling of love",
        "drop the bomb",
        "happy wedding",
        "gamelan de couple",
        "hyper eurobeat",
        "i'm gonna get you!",
        "janejana",
        "jet world",
        "kiss kiss kiss",
        "la bamba",
        "love???shine",
        "memories",
        "paranoia survivor",
        "paranoia survivor max",
        "pink rose",
        "so in love",
        "stoic (extreme version)",
        "sync (extreme version)",
        "tears",
        "the legend of max",
        "trip machine survivor",
        "v (for extreme)",
        "vanity angel",
        "white lovers",
        "xenon",
        "?????????",
        "???",
        "a love like this",
        "give me up",
        "golden sky",
        "jerk it out",
        "wookie wookie",
        "baby's tears",
        "flow",
        "flow (true style)",
        "honey???punch",
        "innocence of silence",
        "peace(^^)v",
        "aa",
        "curus",
        "happy???angel",
        "moon",
        "murmur twins",
        "quick master",
        "no. 13",
        "xepher",
        "red zone",
        "under the sky",
        "jam & marmalade",
        "logical dash",
        "love is orange",
        "peace-out",
        "healing-d-vision",
        "fascination maxx",
        "fascination -eternal love mix-",
        "chaos",
        "stealth",
        "waiting for tonight",
        "faint",
        "a thing called love",
        "electrified",
        "freeway shuffle",
        "music in the rhythm",
        "volcano",
        "saturn",
        "sunkiss???drop",
        "raspberry???heart (english version)",
        "arrabbiata",
        "mars war 3",
        "baby's tears",
        "trim",
        "moonster",
        "dead end (groove radar special)",
        "uranus",
        "happy",
        "koko soko",
        "a geisha's dream",
        "dance celebration",
        "dream machine",
        "dance floor",
        "how to play",
        "party nights",
        "slip out",
        "taj he spitz",
        "taj he spitz (tommie sunshine's brooklyn fire re-touch)",
        "take a chance",
        "malacca",
        "puzzle",
        "dazzle",
        "on the break",
        "saber wing",
        "saber wing (akira ishihara headshot mix)",
        "horatio",
        "on the bounce",
        "trigger",
        "more more more",
        "only my railgun",
        "super eurobeat <gold mix>",
        "tenshi",
        "ice ice baby",
        "bonafied lovin'",
        "daft punk is playing at my house",
        "smooooch?????????",
        "she is my wife",
        "??max",
        "vanessa",
        "ballad the feathers",
        "leaving...",
        "max love",
        "888",
        "pluto the first",
        "sakura storm",
        "dummy",
        "dirty digital",
        "???",
        "roppongi evolved",
        "sakura sunrise",
        "shiny world",
        "pierce the sky",
        "new decade",
        "anti-matter",
        "possession",
        "valkyrie dimension",
        "billiant 2u (akbk mix)",
        "future gazer",
        "love & joy",
        "paranoia (kskst mix)",
        "trip machine (xac nanoglide mix)",
        "straight jet",
        "new beginning",
        "programmed universe",
        "revolutionary addict",
        "tribe",
        "twinkle???heart",
        "crazy???love",
        "dreaming can make a wish come true",
        "ever snow",
        "haunted rhapsody",
        "private eye",
        "until the end",
        "wicked plastik",
        "chronos",
        "diamond dust",
        "flower",
        "mermaid girl",
        "sigsig",
        "cosmic hurricane",
        "snow prism",
        "??????",
        "????????????",
        "nephilim delta",
        "silver???dream",
        "amalgamation",
        "tokyoevolved",
        "new york evolved",
        "london evolved",
        "tohoku evolved",
        "paranoia revolution",
        "bright stream",
        "across world",
        "joker",
        "choo choo train",
        "mickey mouse march (eurobeat version)",
        "?????????????????????",
        "????????????????????????",
        "back in your arms",
        "beautiful dream",
        "bombay bomb",
        "condor",
        "find the way",
        "heron",
        "straight oath",
        "sucka luva",
        "wild side",
        "you",
        "printemps",
        "windy fairy",
        "wow wow venus",
        "do the evolution",
        "romancing layer",
        "somehow you found me",
        "the reason",
        "synergy for angels",
        "gaia",
        "elemental creation",
        "???????????????????????????????????????????????????????????????????????????????????????",
        "the wind of gold",
        "magnetic",
        "prana",
        "??????????????????",
        "chinese snowy dance",
        "sola",
        "???????????????????????????????????????????????????",
        "hyena",
        "squeeze",
        "engraved mark",
        "vega",
        "true blue",
        "??????????????????????????????OK????????????!!",
        "???????????????????????????????????????",
        "IX",
        "monkey business",
        "another phase",
        "air heroes",
        "spanish snowy dance",
        "new generation",
        "blew my mind",
        "???????????????",
        "??????????????????",
        "everybody say edogawa",
        "dong! dong!",
        "a to z",
        "lucky-yo!!",
        "boom! boom! miracle emotion",
        "my cosmic world",
        "???????????????????????????????????????????????????",
        "?????????????????????????????????",
        "?????????????????????????????????",
        "struggle",
        "scarlet moon",
        "bad apple!",
        "thank you merry christmas",
        "awake",
        "siberite",
        "neko * neko",
        "poochie",
        "khamen break",
        "jomanda",
        "follow tomorrow",
        "electronic or treat!",
        "funky summer beach",
        "truare!",
        "believe",
        "hillbilly shoes",
        "help me, erinnnnn!!",
        "wake me up",
        "time of our lives",
        "39",
        "more one night",
        "ace for aces",
        "algorithm",
        "all my heart",
        "angelic jelly",
        "astrogazer",
        "be a hero!",
        "boss rush",
        "catch our fire!",
        "chaos terr-rtech mix",
        "chocolate philosophy",
        "come to life",
        "cosy catastrophe",
        "cytokinesis",
        "dancer in the flare",
        "ddr megamix",
        "dreaming-ing!!",
        "electronic dance system music",
        "emera",
        "endymion",
        "far east nightbird",
        "high school love",
        "hopeful",
        "illegal function call",
        "in between",
        "ishtar",
        "lesson by dj",
        "life is beautiful",
        "love you more",
        "max 360",
        "neutrino",
        "new century",
        "prey",
        "posession (20th anniversary mix)",
        "reach the sky, without you",
        "pursuer",
        "rejoin",
        "rising fire hawk",
        "sakura reflection",
        "shion",
        "s!ck",
        "special one",
        "star trail",
        "?????????????????????????????? ",
        "yeah! yeah!",
        "vaniquish the ghost",
        "???????????????????????????!!",
        "adularia",
        "egoism 440",
        "alpacore",
        "avenger",
        "black jackal",
        "blstr",
        "bounce trippy",
        "cross",
        "dead heat",
        "digital luv",
        "drop the bounce",
        "f4sh10n",
        "get on da floor",
        "give me",
        "helios",
        "hunny bunny",
        "orca",
        "our soul",
        "rampage hero",
        "silly love",
        "small steps",
        "splash gold",
        "starlight in the snow",
        "toy boxer",
        "the world ends now",
        "sweet home party",
        "voltississimo",
        "?????????????????? ",
        "????????????????????? ",
        "crazy hot",
        "no life queen [dj command remix]",
        "shiny days",
        "realize",
        "hypertwist",
        "in the past",
        "hyperdrive",
        "i want to do this keep",
        "step machine",
        "room",
        "last card",
        "anti anthem",
        "bridal festival !!!",
        "bitter chocolate striker",
        "we're so happy",
        "evans",
        "red cape theorem",
        "hella deep",
        "poppin' soda",
        "sword of vengeance",
        "high & low",
        "typh??n",
        "draw the savage",
        "muteki buffalo",
        "going hypersonic",
        "run the show",
        "yuni's nocturnal days",
        "good looking",
        "step this way",
        "actualization of self (weaponized)",
        "come back to me",
        "better than me",
        "ddr tagmix -last dancer-",
        "our love",
        "hard brain",
        "last twilight",
        "WARNINGxWARNINGxWARNING",
        "megalovania",
        "anthurium",
        "dance phenomena",
        "fleur",
        "like a star",
        "pump pump pump",
        "surface",
        "wolf's rain",
        "SAYONARA????????????????????????",
        "????????????????????????ba",
        "gradius remix???????????????????????????BA Ver.)",
        "let's dance around!!",
        "deep tendon reflex",
        "stay gold",
        "ddr tagmix -last dancer-",
        "beluga",
        "jet coaster???girl",
        "this is my last resort"
      ];

      return songlist[randomnumber(songlist.length)]
  }


  function generatePost(){
    
        //determine song
        var effit = "fuck " + songName();
        //await twitterClient.v2.tweet(effit);
        //var ok = await twitterClient.v2.tweet("fuck");
        //console.count(ok);
        //const tweetsOfJack = await twitterClient.v2.userTimeline('12', { exclude: 'replies' });


        console.log(effit);
        return effit;
        
    }

function postTweet(post_text)
{
    // comment this out when testing!
    Twitter.post('statuses/update', {status: post_text}, function(err, data, response) {
      console.log(data)
  })

}


  
  postTweet(generatePost());


//debug - run a whole buttload
//setInterval(generatePost, 300);