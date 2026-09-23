
/* ======================= DATA: CURRICULUM ======================= */
const CHAPTERS = [
  { id:'alphabet', n:1, title:'Alphabet anglais', special:'alphabet',
    letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    vowels:[
      {s:'A', ex:'cat', exfr:'chat'}, {s:'E', ex:'bed', exfr:'lit'}, {s:'I', ex:'sit', exfr:'s\u2019asseoir'},
      {s:'O', ex:'dog', exfr:'chien'}, {s:'U', ex:'sun', exfr:'soleil'}
    ],
    exercises:[
      {type:'listen', audioText:'H', prompt:'Quelle lettre entendez-vous ?', options:['H','A','R'], correctIndex:0, explanation:'\u00abH\u00bb se prononce \u00ab\u00e9tch\u00bb en anglais, bien diff\u00e9rent du fran\u00e7ais.'},
      {type:'listen', audioText:'W', prompt:'Quelle lettre entendez-vous ?', options:['V','W','U'], correctIndex:1, explanation:'\u00abW\u00bb (double-u) ne se prononce jamais comme \u00abV\u00bb en anglais.'},
      {type:'dictation', audioText:'B L U E', prompt:'\u00c9coutez et \u00e9crivez les lettres entendues (s\u00e9par\u00e9es par des espaces).', answer:'B L U E', explanation:'On \u00e9pelle souvent son nom ou un mot lettre par lettre \u2014 c\u2019est une comp\u00e9tence tr\u00e8s utile !'},
      {type:'mcq', prompt:'Comment \u00e9pelle-t-on \u00abcat\u00bb (chat) en anglais ?', options:['C-A-T','K-A-T','C-A-D'], correctIndex:0, explanation:'\u00abCat\u00bb s\u2019\u00e9crit C-A-T, comme il se prononce.'}
    ]
  },
  { id:'pronunciation', n:2, title:'Prononciation', special:'pronunciation',
    pairs:[
      {a:'ship', afr:'bateau', b:'sheep', bfr:'mouton', note:'Le son court \u00ab\u026a\u00bb (ship) contre le son long \u00abi\u02d0\u00bb (sheep).'},
      {a:'live', afr:'vivre', b:'leave', bfr:'partir', note:'Attention \u00e0 la voyelle : \u00abliv\u00bb contre \u00abli\u02d0v\u00bb.'},
      {a:'bed', afr:'lit', b:'bad', bfr:'mauvais', note:'\u00ab\u025b\u00bb (bed) contre \u00ab\u00e6\u00bb (bad), un son qui n\u2019existe pas en fran\u00e7ais.'}
    ],
    exercises:[
      {type:'listen', audioText:'sheep', prompt:'Quel mot entendez-vous ?', options:['ship','sheep'], correctIndex:1, explanation:'\u00abSheep\u00bb (mouton) a un son \u00abi\u00bb long, comme dans \u00abmachine\u00bb.'},
      {type:'listen', audioText:'bad', prompt:'Quel mot entendez-vous ?', options:['bed','bad'], correctIndex:1, explanation:'\u00abBad\u00bb s\u2019ouvre plus la bouche que \u00abbed\u00bb.'},
      {type:'mcq', prompt:'Quel son n\u2019existe pas en fran\u00e7ais et demande de la pratique ?', options:['Le \u00abth\u00bb de \u00abthink\u00bb','Le \u00abs\u00bb de \u00absoleil\u00bb','Le \u00abm\u00bb de \u00abmaman\u00bb'], correctIndex:0, explanation:'Le \u00abth\u00bb (think, this) se prononce en pla\u00e7ant la langue entre les dents \u2014 il n\u2019a pas d\u2019\u00e9quivalent fran\u00e7ais.'},
      {type:'dictation', audioText:'This is a big ship.', prompt:'\u00c9coutez la phrase (lentement) et \u00e9crivez-la.', answer:'This is a big ship.', explanation:'Bien jou\u00e9 \u2014 la r\u00e9p\u00e9tition de phrases courtes est l\u2019un des meilleurs moyens de progresser en prononciation.'}
    ]
  },
  { id:'greetings', n:3, title:'Salutations',
    vocab:[
      {w:'Hello', fr:'Bonjour / Salut', ex:'Hello! How are you?', exfr:'Bonjour ! Comment vas-tu ?'},
      {w:'Good morning', fr:'Bonjour (le matin)', ex:'Good morning, everyone.', exfr:'Bonjour \u00e0 tous.'},
      {w:'Good evening', fr:'Bonsoir', ex:'Good evening, Mrs. Diop.', exfr:'Bonsoir, Madame Diop.'},
      {w:'Good night', fr:'Bonne nuit', ex:'Good night, sleep well.', exfr:'Bonne nuit, dors bien.'},
      {w:'Goodbye', fr:'Au revoir', ex:'Goodbye, see you soon!', exfr:'Au revoir, \u00e0 bient\u00f4t !'},
      {w:'Thank you', fr:'Merci', ex:'Thank you very much.', exfr:'Merci beaucoup.'}
    ],
    grammar:{
      title:'Le verbe \u00ab to be \u00bb (\u00eatre)',
      explain:'\u00abTo be\u00bb est le verbe le plus important en anglais. Il change de forme selon la personne, et il n\u2019a pas d\u2019\u00e9quivalent direct \u00e0 \u00eatre m\u00e9moris\u00e9 mot pour mot : on l\u2019apprend par c\u0153ur.',
      rows:[['I am',"je suis"],['You are',"tu es / vous \u00eates"],['He is / She is / It is',"il est / elle est"],['We are',"nous sommes"],['They are',"ils sont / elles sont"]],
      example:{en:'I am happy. Hello, I am fine, thank you!', fr:'Je suis heureux/heureuse. Bonjour, je vais bien, merci !'}
    },
    exercises:[
      {type:'mcq', prompt:'Que dites-vous le matin en arrivant au travail ?', options:['Good morning','Good night','Goodbye'], correctIndex:0, explanation:'\u00abGood morning\u00bb s\u2019utilise seulement le matin.'},
      {type:'fill', prompt:'I ___ happy to meet you.', options:['am','is','are'], correctIndex:0, explanation:'Avec \u00abI\u00bb, on utilise toujours \u00abam\u00bb.'},
      {type:'reorder', words:['you','How','are','?'], correct:'How are you ?', explanation:'\u00abHow are you?\u00bb est la question la plus courante pour demander comment va quelqu\u2019un.'},
      {type:'translate', promptFr:'Merci beaucoup.', answer:'Thank you very much', alts:['thank you so much'], explanation:'\u00abThank you very much\u00bb est la formule standard et polie.'}
    ]
  },
  { id:'introduce', n:4, title:'Se pr\u00e9senter',
    vocab:[
      {w:'name', fr:'nom / prénom', ex:'My name is Sara.', exfr:'Je m\u2019appelle Sara.'},
      {w:'from', fr:'de, originaire de', ex:'I am from Mauritania.', exfr:'Je viens de Mauritanie.'},
      {w:'to live', fr:'vivre, habiter', ex:'I live in Nouakchott.', exfr:'J\u2019habite \u00e0 Nouakchott.'},
      {w:'student', fr:'\u00e9tudiant(e)', ex:'She is a student.', exfr:'Elle est \u00e9tudiante.'},
      {w:'years old', fr:'\u2026 ans (\u00e2ge)', ex:'He is twenty years old.', exfr:'Il a vingt ans.'},
      {w:'Nice to meet you', fr:'Enchant\u00e9(e)', ex:'Nice to meet you!', exfr:'Enchant\u00e9(e) !'}
    ],
    grammar:{
      title:'Les pronoms : I / you / he / she / it \u2014 we / they',
      explain:'Ces mots remplacent une personne ou une chose d\u00e9j\u00e0 connue. Contrairement au fran\u00e7ais, l\u2019anglais n\u2019a qu\u2019un seul mot pour \u00abtu\u00bb et \u00abvous\u00bb : \u00abyou\u00bb.',
      rows:[['I',"je"],['You',"tu / vous"],['He',"il (personne)"],['She',"elle (personne)"],['It',"il/elle (chose, animal)"],['We',"nous"],['They',"ils / elles"]],
      example:{en:'She is from Dakar. They are students.', fr:'Elle vient de Dakar. Ils/elles sont \u00e9tudiant(e)s.'}
    },
    exercises:[
      {type:'mcq', prompt:'Comment demande-t-on le nom de quelqu\u2019un ?', options:['What is your name?','How old are you?','Where are you?'], correctIndex:0, explanation:'\u00abWhat is your name?\u00bb = \u00abComment tu t\u2019appelles ?\u00bb'},
      {type:'fill', prompt:'My name ___ Amadou.', options:['is','am','are'], correctIndex:0, explanation:'Avec \u00abname\u00bb (il/elle), on utilise \u00abis\u00bb.'},
      {type:'reorder', words:['am','Mauritania','I','from'], correct:'I am from Mauritania', explanation:'Ordre : sujet + verbe \u00abto be\u00bb + \u00abfrom\u00bb + pays.'},
      {type:'translate', promptFr:'Je suis \u00e9tudiant.', answer:'I am a student', explanation:'N\u2019oubliez pas l\u2019article \u00aba\u00bb devant \u00abstudent\u00bb : \u00abI am a student.\u00bb'}
    ]
  },
  { id:'numbers', n:5, title:'Nombres',
    vocab:[
      {w:'one', fr:'un', ex:'I have one brother.', exfr:'J\u2019ai un fr\u00e8re.'},
      {w:'two', fr:'deux', ex:'She has two cats.', exfr:'Elle a deux chats.'},
      {w:'three', fr:'trois', ex:'We need three chairs.', exfr:'Il nous faut trois chaises.'},
      {w:'ten', fr:'dix', ex:'He has ten dollars.', exfr:'Il a dix dollars.'},
      {w:'twenty', fr:'vingt', ex:'I am twenty years old.', exfr:'J\u2019ai vingt ans.'},
      {w:'hundred', fr:'cent', ex:'The book has one hundred pages.', exfr:'Le livre a cent pages.'}
    ],
    grammar:{
      title:'Le pluriel des noms',
      explain:'En g\u00e9n\u00e9ral, on ajoute simplement \u00ab-s\u00bb \u00e0 la fin d\u2019un nom pour le mettre au pluriel. Apr\u00e8s les sons en -s, -ch, -sh, -x, on ajoute \u00ab-es\u00bb.',
      rows:[['book \u2192 books',"livre \u2192 livres"],['car \u2192 cars',"voiture \u2192 voitures"],['box \u2192 boxes',"bo\u00eete \u2192 bo\u00eetes"],['child \u2192 children',"enfant \u2192 enfants (irr\u00e9gulier)"]],
      example:{en:'I have three books and two boxes.', fr:'J\u2019ai trois livres et deux bo\u00eetes.'}
    },
    exercises:[
      {type:'mcq', prompt:'Comment dit-on \u00abdix\u00bb en anglais ?', options:['ten','ton','tin'], correctIndex:0, explanation:'\u00abTen\u00bb = 10.'},
      {type:'fill', prompt:'I have two ___ (livre).', options:['books','book','bookes'], correctIndex:0, explanation:'Pluriel r\u00e9gulier : on ajoute simplement \u00ab-s\u00bb.'},
      {type:'listen', audioText:'thirteen', prompt:'Quel nombre entendez-vous ?', options:['thirty','thirteen','three'], correctIndex:1, explanation:'\u00abThirteen\u00bb (13) se termine par \u00ab-teen\u00bb, contrairement \u00abthirty\u00bb (30) qui finit par \u00ab-ty\u00bb.'},
      {type:'translate', promptFr:'J\u2019ai vingt ans.', answer:'I am twenty years old', alts:['i\u2019m twenty years old',"i'm twenty years old"], explanation:'En anglais, on utilise \u00abto be\u00bb (\u00eatre) pour parler de l\u2019\u00e2ge, pas \u00abto have\u00bb (avoir) comme en fran\u00e7ais.'}
    ]
  },
  { id:'colors', n:6, title:'Couleurs',
    vocab:[
      {w:'red', fr:'rouge', ex:'The car is red.', exfr:'La voiture est rouge.'},
      {w:'blue', fr:'bleu', ex:'I like the blue sky.', exfr:'J\u2019aime le ciel bleu.'},
      {w:'green', fr:'vert', ex:'She has a green bag.', exfr:'Elle a un sac vert.'},
      {w:'yellow', fr:'jaune', ex:'The sun is yellow.', exfr:'Le soleil est jaune.'},
      {w:'black', fr:'noir', ex:'He wears a black jacket.', exfr:'Il porte une veste noire.'},
      {w:'white', fr:'blanc', ex:'This is a white house.', exfr:'C\u2019est une maison blanche.'}
    ],
    grammar:{
      title:'La place de l\u2019adjectif',
      explain:'En anglais, l\u2019adjectif se place TOUJOURS avant le nom qu\u2019il d\u00e9crit \u2014 l\u2019inverse du fran\u00e7ais dans beaucoup de cas. Il ne s\u2019accorde jamais en genre ou en nombre.',
      rows:[['a red car',"une voiture rouge"],['a big house',"une grande maison"],['blue eyes',"des yeux bleus"]],
      example:{en:'She has a beautiful green dress.', fr:'Elle a une belle robe verte.'}
    },
    exercises:[
      {type:'mcq', prompt:'Quelle phrase est correcte ?', options:['I have a car red.','I have a red car.','I have red a car.'], correctIndex:1, explanation:'L\u2019adjectif \u00abred\u00bb se place avant le nom \u00abcar\u00bb.'},
      {type:'fill', prompt:'The sky is ___.', options:['blue','blues','blued'], correctIndex:0, explanation:'Les adjectifs anglais ne prennent jamais de \u00abs\u00bb, m\u00eame au pluriel.'},
      {type:'reorder', words:['a','green','have','I','bag'], correct:'I have a green bag', explanation:'Ordre : sujet + verbe + article + adjectif + nom.'},
      {type:'translate', promptFr:'C\u2019est une maison blanche.', answer:'This is a white house', explanation:'\u00abWhite\u00bb se place avant \u00abhouse\u00bb, sans accord au f\u00e9minin.'}
    ]
  },
  { id:'family', n:7, title:'Famille',
    vocab:[
      {w:'mother', fr:'m\u00e8re', ex:'My mother is a teacher.', exfr:'Ma m\u00e8re est enseignante.'},
      {w:'father', fr:'p\u00e8re', ex:'His father works in a bank.', exfr:'Son p\u00e8re travaille dans une banque.'},
      {w:'brother', fr:'fr\u00e8re', ex:'Her brother is ten years old.', exfr:'Son fr\u00e8re a dix ans.'},
      {w:'sister', fr:'s\u0153ur', ex:'Our sister lives in Paris.', exfr:'Notre s\u0153ur vit \u00e0 Paris.'},
      {w:'children', fr:'enfants', ex:'They have three children.', exfr:'Ils ont trois enfants.'},
      {w:'grandparents', fr:'grands-parents', ex:'My grandparents are very kind.', exfr:'Mes grands-parents sont tr\u00e8s gentils.'}
    ],
    grammar:{
      title:'Les adjectifs possessifs',
      explain:'Contrairement au fran\u00e7ais, l\u2019adjectif possessif anglais s\u2019accorde avec le POSSESSEUR, jamais avec l\u2019objet poss\u00e9d\u00e9.',
      rows:[['my',"mon / ma / mes"],['your',"ton, ta, tes / votre, vos"],['his',"son, sa, ses (\u00e0 lui)"],['her',"son, sa, ses (\u00e0 elle)"],['our',"notre, nos"],['their',"leur, leurs"]],
      example:{en:'His sister and her brother are friends.', fr:'Sa s\u0153ur (\u00e0 lui) et son fr\u00e8re (\u00e0 elle) sont ami(e)s.'}
    },
    exercises:[
      {type:'mcq', prompt:'Comment dit-on \u00abson p\u00e8re\u00bb en parlant d\u2019une fille (Amina) ?', options:['his father','her father','their father'], correctIndex:1, explanation:'\u00abHer\u00bb s\u2019utilise pour une possesseuse f\u00e9minine, quel que soit l\u2019objet poss\u00e9d\u00e9.'},
      {type:'fill', prompt:'We love ___ grandparents.', options:['our','ours','we'], correctIndex:0, explanation:'\u00abOur\u00bb = notre/nos, adjectif possessif pour \u00abwe\u00bb.'},
      {type:'reorder', words:['brother','is','My','a','teacher'], correct:'My brother is a teacher', explanation:'Ordre classique sujet + verbe + attribut.'},
      {type:'translate', promptFr:'Ils ont trois enfants.', answer:'They have three children', explanation:'\u00abChildren\u00bb est le pluriel irr\u00e9gulier de \u00abchild\u00bb.'}
    ]
  },
  { id:'house', n:8, title:'Maison',
    vocab:[
      {w:'house', fr:'maison', ex:'This is a big house.', exfr:'C\u2019est une grande maison.'},
      {w:'room', fr:'pi\u00e8ce, chambre', ex:'There are five rooms.', exfr:'Il y a cinq pi\u00e8ces.'},
      {w:'kitchen', fr:'cuisine', ex:'The kitchen is small.', exfr:'La cuisine est petite.'},
      {w:'bedroom', fr:'chambre \u00e0 coucher', ex:'My bedroom is upstairs.', exfr:'Ma chambre est \u00e0 l\u2019\u00e9tage.'},
      {w:'bathroom', fr:'salle de bain', ex:'The bathroom is clean.', exfr:'La salle de bain est propre.'},
      {w:'garden', fr:'jardin', ex:'There is a garden behind the house.', exfr:'Il y a un jardin derri\u00e8re la maison.'}
    ],
    grammar:{
      title:'There is / There are + pr\u00e9positions de lieu',
      explain:'\u00abThere is\u00bb (il y a, singulier) et \u00abthere are\u00bb (il y a, pluriel) servent \u00e0 dire ce qui existe quelque part. On les combine souvent avec des pr\u00e9positions de lieu.',
      rows:[['There is a table',"il y a une table (singulier)"],['There are two chairs',"il y a deux chaises (pluriel)"],['in / on / under',"dans / sur / sous"]],
      example:{en:'There is a lamp on the table. The cat is under the bed.', fr:'Il y a une lampe sur la table. Le chat est sous le lit.'}
    },
    exercises:[
      {type:'mcq', prompt:'Quelle phrase est correcte pour \u00abIl y a trois chambres\u00bb ?', options:['There is three bedrooms.','There are three bedrooms.','There be three bedrooms.'], correctIndex:1, explanation:'\u00abThree bedrooms\u00bb est pluriel donc on utilise \u00abthere are\u00bb.'},
      {type:'fill', prompt:'The cat is ___ the table.', options:['under','is','are'], correctIndex:0, explanation:'\u00abUnder\u00bb = sous, une pr\u00e9position de lieu.'},
      {type:'reorder', words:['a','garden','There','is'], correct:'There is a garden', explanation:'Ordre : There + is/are + article + nom.'},
      {type:'translate', promptFr:'Il y a un jardin derri\u00e8re la maison.', answer:'There is a garden behind the house', explanation:'\u00abBehind\u00bb = derri\u00e8re.'}
    ]
  }
];
const UPCOMING = ['Nourriture','Boissons','Jours et mois','Heure et date','M\u00e9tiers','\u00c9cole','Ville','Transport','Achats','H\u00f4tel','Restaurant','Vie quotidienne'];

const BADGES = [
  {id:'first_lesson', ic:'\ud83d\udcda', label:'Premi\u00e8re le\u00e7on termin\u00e9e', test:p=>Object.values(p.chapters).some(c=>c.status==='completed'||c.status==='mastered')},
  {id:'streak7', ic:'\ud83d\udd25', label:'S\u00e9rie de 7 jours', test:p=>p.streak>=7},
  {id:'words50', ic:'\ud83c\udfc6', label:'50 mots rencontr\u00e9s', test:p=>Object.keys(p.vocab).length>=50},
  {id:'half', ic:'\u2b50', label:'Module 1 termin\u00e9 (8 chapitres)', test:p=>CHAPTERS.every(c=>p.chapters[c.id] && (p.chapters[c.id].status==='completed'||p.chapters[c.id].status==='mastered'))},
];

/* ======================= STATE ======================= */
const LS_THEME='em_theme', LS_VOICE='em_voice';
function defaultProgress(){
  return { xp:0, streak:0, lastStudyDate:null, dailyGoalMinutes:15, minutesToday:0,
    placementDone:false, placementReport:null,
    chapters:{ [CHAPTERS[0].id]:{status:'available', bestScore:0} },
    vocab:{}, badges:[], updated:Date.now() };
}
let S = {
  view:'loading', prevView:null,
  viewerName:'', userEmail:'', role:'USER',
  progress: defaultProgress(),
  theme: localStorage.getItem(LS_THEME) || 'light',
  voiceURI: localStorage.getItem(LS_VOICE) || '',
  voices: [],
  lesson:{ chapterId:null, stepIndex:0, exIndex:0, answered:false, selected:null, correctCount:0, order:[] },
  placement:{ qIndex:0, answers:[] },
  tutorMsgs: [],
  toast:null,
  _saveChain: Promise.resolve(),
};
document.documentElement.setAttribute('data-theme', S.theme);

/* ======================= UTIL ======================= */
function todayStr(){ const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function daysBetween(a,b){ return Math.round((new Date(b)-new Date(a))/86400000); }
function esc(s){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function norm(s){ return String(s||'').toLowerCase().trim().replace(/[.,!?;:]/g,'').replace(/\s+/g,' '); }
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function chapterById(id){ return CHAPTERS.find(c=>c.id===id); }
function greetName(){ return S.viewerName || ''; }

function speak(text, rate){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang='en-US'; u.rate = rate || 1;
  if(S.voiceURI){ const v = S.voices.find(v=>v.voiceURI===S.voiceURI); if(v) u.voice=v; }
  window.speechSynthesis.speak(u);
}
function loadVoices(){
  if(!('speechSynthesis' in window)) return;
  const all = window.speechSynthesis.getVoices();
  S.voices = all.filter(v=>/^en/i.test(v.lang));
  if(S.view==='profile') render();
}
if('speechSynthesis' in window){
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

/* ======================= PERSISTENCE ======================= */
async function initApp(){
  const u = window.__EM_USER__ || {};
  S.viewerName = u.name || '';
  S.userEmail = u.email || '';
  S.role = u.role || 'USER';
  S.progress = Object.assign(defaultProgress(), u.progress || {});
  S.view = S.progress.placementDone ? 'dashboard' : 'onboarding';
  render();
}
function queueSave(){
  S.progress.updated = Date.now();
  S._saveChain = S._saveChain.then(async ()=>{
    try{
      await fetch('/api/progress', {
        method:'PUT',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({progress: S.progress})
      });
    }catch(e){ /* best-effort; progression retentera d\u2019\u00eatre sauvegard\u00e9e au prochain changement */ }
  });
}

/* ======================= GAMIFICATION ======================= */
function touchStudySession(){
  const t = todayStr();
  if(S.progress.lastStudyDate !== t){
    const gap = S.progress.lastStudyDate ? daysBetween(S.progress.lastStudyDate, t) : null;
    S.progress.streak = (gap===1) ? (S.progress.streak+1) : 1;
    S.progress.lastStudyDate = t;
    S.progress.minutesToday = 0;
  }
}
function addXP(n){ S.progress.xp += n; }
function checkBadges(){
  const newly=[];
  BADGES.forEach(b=>{
    if(!S.progress.badges.includes(b.id) && b.test(S.progress)){
      S.progress.badges.push(b.id); newly.push(b);
    }
  });
  if(newly.length){ S.toast = newly[0]; }
  return newly;
}

/* ======================= SPACED REPETITION (Leitner) ======================= */
const BOX_INTERVAL_DAYS = [0,1,2,4,8,16];
function vocabKey(chapterId, word){ return chapterId+':'+word; }
function touchVocabSeen(chapterId, word){
  const k = vocabKey(chapterId, word);
  if(!S.progress.vocab[k]) S.progress.vocab[k] = {box:1, next:Date.now(), seen:0, correct:0};
}
function vocabAnswer(chapterId, word, ok){
  const k = vocabKey(chapterId, word);
  const v = S.progress.vocab[k] || {box:1, next:Date.now(), seen:0, correct:0};
  v.seen++; if(ok){ v.correct++; v.box = Math.min(5, v.box+1); } else { v.box = 1; }
  v.next = Date.now() + BOX_INTERVAL_DAYS[v.box]*86400000;
  S.progress.vocab[k] = v;
}
function dueVocab(limit){
  const now = Date.now();
  return Object.entries(S.progress.vocab)
    .filter(([k,v])=> v.next<=now)
    .sort((a,b)=> a[1].next-b[1].next)
    .slice(0, limit)
    .map(([k,v])=>{ const [cid,word]=k.split(':'); const ch=chapterById(cid); const item=(ch&&ch.vocab||[]).find(x=>x.w===word); return item?{...item, chapterId:cid}:null; })
    .filter(Boolean);
}

/* ======================= ROUTER / NAV ======================= */
function go(view, extra){
  S.view = view;
  if(extra) Object.assign(S, extra);
  window.scrollTo(0,0);
  render();
}
function nextAvailableChapter(){
  for(const c of CHAPTERS){
    const st = S.progress.chapters[c.id];
    if(!st) return c.id;
    if(st.status==='available') return c.id;
  }
  const lastCompleted = [...CHAPTERS].reverse().find(c=> S.progress.chapters[c.id] && (S.progress.chapters[c.id].status==='completed'||S.progress.chapters[c.id].status==='mastered'));
  return lastCompleted ? lastCompleted.id : CHAPTERS[0].id;
}
function unlockNext(currentId){
  const idx = CHAPTERS.findIndex(c=>c.id===currentId);
  const next = CHAPTERS[idx+1];
  if(next && !S.progress.chapters[next.id]) S.progress.chapters[next.id] = {status:'available', bestScore:0};
}

/* ======================= AI TUTOR (server-side API route) ======================= */
async function askAI(promptText){
  try{
    const res = await fetch('/api/tutor', {
      method:'POST', headers:{'content-type':'application/json'},
      body: JSON.stringify({ messages:[{role:'user', content:promptText}] })
    });
    const data = await res.json();
    if(!res.ok) return {error: data.error || 'Le tuteur IA n\u2019a pas pu r\u00e9pondre pour le moment.'};
    return {text: data.text};
  }catch(e){
    return {error: 'Le tuteur IA n\u2019a pas pu r\u00e9pondre pour le moment.'};
  }
}
function aiErrorMessage(msg){
  return msg || "Le tuteur IA n\u2019a pas pu r\u00e9pondre pour le moment.";
}

/* ======================= RENDER: SHELL ======================= */
function render(){
  const app = document.getElementById('app');
  if(S.view==='loading'){
    app.innerHTML = '<div class="loading-wrap"><div class="spinner"></div><div class="muted">Chargement d\u2019English BIKOLE Master\u2026</div></div>';
    return;
  }
  if(S.view==='onboarding'){ app.innerHTML = renderOnboarding(); attachOnboarding(); return; }
  if(S.view==='placement'){ app.innerHTML = renderPlacement(); attachPlacement(); return; }

  const navItems = [
    ['dashboard','\ud83c\udfe0','Tableau de bord'],
    ['map','\ud83d\uddfa\ufe0f','Parcours'],
    ['review','\ud83d\udd01','R\u00e9vision du jour'],
    ['tutor','\ud83e\udd16','Tuteur IA'],
    ['profile','\u2699\ufe0f','Profil'],
  ];
  const titleMap = {dashboard:'Tableau de bord', map:'Votre parcours', review:'R\u00e9vision du jour', tutor:'Tuteur IA', profile:'Profil & r\u00e9glages', lesson:chapterById(S.lesson.chapterId)? chapterById(S.lesson.chapterId).title : 'Le\u00e7on', exam:'Contr\u00f4le', certificate:'Certificat'};

  app.innerHTML = `
    <nav class="rail">
      <div class="rail-brand"><div class="mark">EB</div><div class="word">English BIKOLE Master<small>FR \u2192 EN</small></div></div>
      ${navItems.map(([id,ic,label])=>`<button class="navbtn ${S.view===id?'active':''}" data-nav="${id}"><span class="ic">${ic}</span>${label}</button>`).join('')}
      ${S.role==='ADMIN'? '<a class="navbtn" href="/admin"><span class="ic">\ud83d\udee1\ufe0f</span>Administration</a>' : ''}
      <div class="rail-bottom">
        <div class="rail-user">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--emerald-light);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--emerald-dark);font-size:12px;">${esc((greetName()||S.userEmail||'?').slice(0,1).toUpperCase())}</div>
          <div>
            <div class="nm">${esc(greetName()||S.userEmail||'Vous')}</div>
            <div class="lv">Niveau 1 \u2022 D\u00e9butant</div>
          </div>
        </div>
        <a href="/api/auth/signout" class="navbtn" style="margin-top:4px;"><span class="ic">\ud83d\udeaa</span>Se d\u00e9connecter</a>
      </div>
    </nav>
    <div class="mainwrap">
      <div class="topbar">
        <h2>${titleMap[S.view]||''}</h2>
        <div class="row gap8">
          <span class="pill streak">\ud83d\udd25 ${S.progress.streak}</span>
          <span class="pill xp">\u2b50 ${S.progress.xp} XP</span>
          <button class="iconbtn" id="themeToggle" title="Th\u00e8me clair/sombre">${S.theme==='dark'?'\u2600\ufe0f':'\ud83c\udf19'}</button>
        </div>
      </div>
      <main id="mainContent"></main>
    </div>
    <div class="mobilenav">
      ${navItems.map(([id,ic,label])=>`<button class="${S.view===id?'active':''}" data-nav="${id}"><span>${ic}</span>${label.split(' ')[0]}</button>`).join('')}
    </div>
    ${S.toast? renderToast() : ''}
  `;
  document.querySelectorAll('[data-nav]').forEach(b=> b.onclick=()=> go(b.getAttribute('data-nav')));
  const tt = document.getElementById('themeToggle');
  if(tt) tt.onclick = ()=>{ S.theme = S.theme==='dark'?'light':'dark'; document.documentElement.setAttribute('data-theme', S.theme); localStorage.setItem(LS_THEME, S.theme); render(); };

  const main = document.getElementById('mainContent');
  if(S.view==='dashboard') main.innerHTML = renderDashboard();
  else if(S.view==='map') main.innerHTML = renderMap();
  else if(S.view==='review'){ main.innerHTML = renderReview(); }
  else if(S.view==='tutor'){ main.innerHTML = renderTutor(); attachTutor(); }
  else if(S.view==='profile'){ main.innerHTML = renderProfile(); attachProfile(); }
  else if(S.view==='lesson'){ main.innerHTML = renderLesson(); attachLesson(); }
  else if(S.view==='exam'){ main.innerHTML = renderExamResult(); }
  else if(S.view==='certificate'){ main.innerHTML = renderCertificate(); }

  if(S.view==='dashboard') attachDashboard();
  if(S.view==='map') attachMap();
  if(S.view==='review') attachReview();

  if(S.toast){ setTimeout(()=>{ S.toast=null; const t=document.getElementById('toastPop'); if(t) t.remove(); }, 4200); }
}
function renderToast(){
  const b = S.toast;
  return `<div id="toastPop" style="position:fixed;bottom:24px;right:24px;z-index:50;" class="card">
    <div class="badge-pop">${b.ic} Nouveau badge : ${esc(b.label)}</div>
  </div>`;
}

/* ======================= ONBOARDING ======================= */
function renderOnboarding(){
  return `<div class="loading-wrap" style="padding:20px;">
    <div class="card" style="max-width:480px;width:100%;">
      <div class="row gap10" style="margin-bottom:16px;">
        <div class="mark" style="width:38px;height:38px;border-radius:10px;background:linear-gradient(155deg,var(--emerald),var(--emerald-dark));display:flex;align-items:center;justify-content:center;color:#fff;font-family:'Fraunces',serif;font-weight:700;">EB</div>
        <div><h1 style="font-size:22px;">English BIKOLE Master</h1><div class="muted small">Learn English. Speak English. Master English.</div></div>
      </div>
      <p>Bienvenue${S.viewerName? ', '+esc(S.viewerName):''} ! Cette premi\u00e8re version couvre les 8 premiers chapitres du Niveau 1 D\u00e9butant, avec cours, audio, exercices, r\u00e9vision intelligente et un tuteur IA.</p>
      <div class="row gap10" style="margin-top:8px;">
        <button class="btn btn-primary" id="onbPlacement" style="flex:1;">\u00c9valuer mon niveau</button>
        <button class="btn btn-ghost" id="onbSkip" style="flex:1;">Commencer au Niveau 1</button>
      </div>
      <p class="small muted" style="margin-top:14px;">\u2713 Votre progression est li\u00e9e \u00e0 votre compte et sauvegard\u00e9e automatiquement.</p>
    </div>
  </div>`;
}
function attachOnboarding(){
  const pl = document.getElementById('onbPlacement');
  if(pl) pl.onclick = ()=>{ go('placement'); };
  const sk = document.getElementById('onbSkip');
  if(sk) sk.onclick = ()=>{ S.progress.placementDone = true; queueSave(); go('dashboard'); };
}

/* ======================= PLACEMENT TEST ======================= */
const PLACEMENT_QS = [
  {cat:'vocabulary', prompt:'\u00abHello\u00bb veut dire\u2026', options:['Bonjour','Au revoir','Merci'], correct:0},
  {cat:'vocabulary', prompt:'\u00abRed\u00bb veut dire\u2026', options:['bleu','rouge','vert'], correct:1},
  {cat:'grammar', prompt:'I ___ a student.', options:['am','is','are'], correct:0},
  {cat:'grammar', prompt:'She ___ from Dakar.', options:['am','is','are'], correct:1},
  {cat:'grammar', prompt:'Choisissez la forme correcte : \u00abmy sister ___ car\u00bb (voiture de ma s\u0153ur)', options:['her','his','their'], correct:0},
  {cat:'comprehension', prompt:'\u00abThere are three rooms in the house.\u00bb Combien de pi\u00e8ces ?', options:['1','2','3'], correct:2},
  {cat:'comprehension', prompt:'\u00abMy brother is twenty years old.\u00bb Quel \u00e2ge a-t-il ?', options:['12','20','2'], correct:1},
  {cat:'sentence', prompt:'Remettez dans l\u2019ordre : \u00abfrom / I / Mauritania / am\u00bb', options:['I am from Mauritania','Am I Mauritania from','From I am Mauritania'], correct:0},
  {cat:'sentence', prompt:'Quelle phrase est bien construite ?', options:['I have a car red.','I have a red car.','Red I have a car.'], correct:1},
  {cat:'vocabulary', prompt:'\u00abThank you\u00bb veut dire\u2026', options:['S\u2019il te pla\u00eet','Merci','Pardon'], correct:1},
];
function renderPlacement(){
  const i = S.placement.qIndex;
  if(i>=PLACEMENT_QS.length) return renderPlacementReport();
  const q = PLACEMENT_QS[i];
  return `<div class="loading-wrap" style="padding:20px;">
    <div class="card" style="max-width:520px;width:100%;">
      <div class="row between" style="margin-bottom:10px;"><span class="small muted">Test de placement</span><span class="small muted">${i+1} / ${PLACEMENT_QS.length}</span></div>
      <div class="progressbar" style="margin-bottom:18px;"><div style="width:${(i/PLACEMENT_QS.length)*100}%"></div></div>
      <div class="ex-prompt">${esc(q.prompt)}</div>
      <div class="opt-list">
        ${q.options.map((o,idx)=>`<button class="opt" data-idx="${idx}">${esc(o)}</button>`).join('')}
      </div>
    </div>
  </div>`;
}
function renderPlacementReport(){
  const scores = {vocabulary:0, grammar:0, comprehension:0, sentence:0};
  const totals = {vocabulary:0, grammar:0, comprehension:0, sentence:0};
  PLACEMENT_QS.forEach((q,idx)=>{ totals[q.cat]++; if(S.placement.answers[idx]===q.correct) scores[q.cat]++; });
  const pct = c=> totals[c]? Math.round(100*scores[c]/totals[c]) : 0;
  const overall = Math.round(100*Object.keys(totals).reduce((s,c)=>s+scores[c],0)/PLACEMENT_QS.length);
  const rows = [['Vocabulaire', pct('vocabulary')],['Grammaire', pct('grammar')],['Compr\u00e9hension', pct('comprehension')],['Construction de phrases', pct('sentence')]];
  return `<div class="loading-wrap" style="padding:20px;">
    <div class="card" style="max-width:520px;width:100%;">
      <h2 style="margin-bottom:4px;">Votre niveau estim\u00e9 : Niveau 1 \u2014 D\u00e9butant</h2>
      <p class="muted small">${overall>=60? "Vous avez d\u00e9j\u00e0 de bonnes bases \u2014 vous pouvez avancer rapidement dans le Niveau 1." : "Ce parcours d\u00e9butant va poser des fondations solides, pas \u00e0 pas."}</p>
      <div class="grid" style="margin-top:16px;gap:12px;">
        ${rows.map(([l,v])=>`<div><div class="row between small" style="margin-bottom:4px;"><strong>${l}</strong><span class="muted">${v}%</span></div><div class="progressbar"><div style="width:${v}%"></div></div></div>`).join('')}
      </div>
      <button class="btn btn-primary" id="placementDone" style="width:100%;margin-top:22px;">Commencer le Niveau 1</button>
    </div>
  </div>`;
}
function attachPlacement(){
  const opts = document.querySelectorAll('.opt[data-idx]');
  opts.forEach(o=> o.onclick = ()=>{
    const idx = parseInt(o.getAttribute('data-idx'));
    S.placement.answers[S.placement.qIndex] = idx;
    S.placement.qIndex++;
    render();
  });
  const done = document.getElementById('placementDone');
  if(done) done.onclick = ()=>{
    const scores = {vocabulary:0, grammar:0, comprehension:0, sentence:0};
    const totals = {vocabulary:0, grammar:0, comprehension:0, sentence:0};
    PLACEMENT_QS.forEach((q,idx)=>{ totals[q.cat]++; if(S.placement.answers[idx]===q.correct) scores[q.cat]++; });
    const pct = c=> totals[c]? Math.round(100*scores[c]/totals[c]) : 0;
    S.progress.placementDone = true;
    S.progress.placementReport = {vocabulary:pct('vocabulary'), grammar:pct('grammar'), comprehension:pct('comprehension'), sentence:pct('sentence')};
    queueSave();
    go('dashboard');
  };
}

/* ======================= DASHBOARD ======================= */
function levelProgressPct(){
  const done = CHAPTERS.filter(c=> S.progress.chapters[c.id] && ['completed','mastered'].includes(S.progress.chapters[c.id].status)).length;
  return Math.round(100*done/CHAPTERS.length);
}
function vocabKnownCount(){ return Object.values(S.progress.vocab).filter(v=>v.box>=3).length; }
function avgGrammarScore(){
  const scores = CHAPTERS.filter(c=>S.progress.chapters[c.id]).map(c=>S.progress.chapters[c.id].bestScore||0);
  return scores.length? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : 0;
}
function renderDashboard(){
  const name = greetName();
  const pct = levelProgressPct();
  const due = dueVocab(999).length;
  return `
  <div class="grid" style="gap:22px;">
    <div>
      <h1 style="font-size:24px;">Bonjour${name? ', '+esc(name): ''}</h1>
      <p class="muted">Niveau 1 \u2014 D\u00e9butant \u2022 Progression du module : <strong>${pct}%</strong></p>
      <div class="progressbar" style="max-width:360px;"><div style="width:${pct}%"></div></div>
    </div>
    <div class="stat-grid">
      <div class="stat"><div class="n">${vocabKnownCount()}</div><div class="l">Mots ma\u00eetris\u00e9s</div></div>
      <div class="stat"><div class="n">${avgGrammarScore()}%</div><div class="l">Score moyen grammaire</div></div>
      <div class="stat"><div class="n">${S.progress.streak}</div><div class="l">Jours de suite \ud83d\udd25</div></div>
      <div class="stat"><div class="n">${due}</div><div class="l">\u00e0 r\u00e9viser aujourd\u2019hui</div></div>
    </div>
    <div>
      <h3 style="margin-bottom:12px;font-size:16px;">Objectif du jour \u2014 ${S.progress.dailyGoalMinutes} min</h3>
      <div class="progressbar"><div style="width:${Math.min(100, Math.round(100*S.progress.minutesToday/S.progress.dailyGoalMinutes))}%"></div></div>
    </div>
    <div class="quickgrid">
      <button class="quickcard" data-go="continue"><div class="ic">\u25b6\ufe0f</div><div class="t">Continuer le cours</div><div class="d">${esc(chapterById(nextAvailableChapter()).title)}</div></button>
      <button class="quickcard" data-go="review"><div class="ic">\ud83d\udd01</div><div class="t">R\u00e9vision</div><div class="d">${due} \u00e9l\u00e9ment${due>1?'s':''} \u00e0 revoir</div></button>
      <button class="quickcard" data-go="tutor"><div class="ic">\ud83e\udd16</div><div class="t">Tuteur IA</div><div class="d">Posez une question de grammaire</div></button>
      <button class="quickcard" data-go="map"><div class="ic">\ud83d\uddfa\ufe0f</div><div class="t">Voir le parcours</div><div class="d">8 chapitres \u2022 12 \u00e0 venir</div></button>
    </div>
    ${S.progress.badges.length? `<div><h3 style="margin-bottom:10px;font-size:16px;">Badges</h3><div class="row gap8 wrap">${S.progress.badges.map(id=>{const b=BADGES.find(x=>x.id===id); return b? `<span class="badge-pop">${b.ic} ${esc(b.label)}</span>`:'';}).join('')}</div></div>`:''}
  </div>`;
}
function attachDashboard(){
  document.querySelectorAll('[data-go]').forEach(b=> b.onclick=()=>{
    const g = b.getAttribute('data-go');
    if(g==='continue') startLesson(nextAvailableChapter());
    else go(g);
  });
}

/* ======================= COURSE MAP ======================= */
function renderMap(){
  const rows = CHAPTERS.map(c=>{
    const st = S.progress.chapters[c.id];
    const status = st? st.status : 'locked';
    const icon = status==='mastered'?'\u2b50':status==='completed'?'\u2705':status==='available'?'\u25b6\ufe0f':'\ud83d\udd12';
    const cls = status==='locked'?'locked':'';
    return `<div class="chapter-row ${cls}" data-open="${status!=='locked'?c.id:''}">
      <div class="num">${c.n}</div>
      <div class="status-ic">${icon}</div>
      <div class="body"><div class="ttl">${esc(c.title)}</div><div class="sub">${st? (st.bestScore? 'Meilleur score : '+st.bestScore+'%' : 'Disponible') : 'Verrouill\u00e9 \u2014 termine le chapitre pr\u00e9c\u00e9dent'}</div></div>
    </div>`;
  }).join('');
  const soon = UPCOMING.map((t,i)=> `<div class="chapter-row soon"><div class="num">${CHAPTERS.length+i+1}</div><div class="status-ic">\ud83d\udd39</div><div class="body"><div class="ttl">${esc(t)}</div><div class="sub">Bient\u00f4t disponible</div></div></div>`).join('');
  return `<div class="grid" style="gap:10px;">
    <p class="muted small">Niveau 1 \u2014 D\u00e9butant \u00b7 chapitres 1 \u00e0 8 disponibles, 12 en pr\u00e9paration.</p>
    ${rows}
    ${soon}
  </div>`;
}
function attachMap(){
  document.querySelectorAll('[data-open]').forEach(el=>{
    const id = el.getAttribute('data-open');
    if(id) el.onclick = ()=> startLesson(id);
  });
}

/* ======================= LESSON ENGINE ======================= */
function startLesson(chapterId){
  const ch = chapterById(chapterId);
  if(!ch) return;
  S.lesson = { chapterId, stepIndex:0, exIndex:0, answered:false, selected:null, correctCount:0,
    order: shuffle(ch.exercises.map((_,i)=>i)) };
  go('lesson');
}
function lessonSteps(ch){
  const steps = [];
  if(ch.special==='alphabet' || ch.special==='pronunciation') steps.push('intro');
  else { if(ch.vocab) steps.push('vocab'); if(ch.grammar) steps.push('grammar'); }
  steps.push('exercises');
  steps.push('summary');
  return steps;
}
function renderLesson(){
  const ch = chapterById(S.lesson.chapterId);
  if(!ch) return '<div class="empty">Chapitre introuvable.</div>';
  const steps = lessonSteps(ch);
  const step = steps[S.lesson.stepIndex];
  const pct = Math.round(100*(S.lesson.stepIndex)/(steps.length-1||1));
  let body = '';
  if(step==='intro') body = renderIntroStep(ch);
  else if(step==='vocab') body = renderVocabStep(ch);
  else if(step==='grammar') body = renderGrammarStep(ch);
  else if(step==='exercises') body = renderExerciseStep(ch);
  else if(step==='summary') body = renderSummaryStep(ch);
  return `
    <div class="lesson-progress"><div class="progressbar"><div style="width:${pct}%"></div></div></div>
    <div class="step-label">Chapitre ${ch.n} \u2014 ${esc(ch.title)}</div>
    ${body}
  `;
}
function renderIntroStep(ch){
  if(ch.special==='alphabet'){
    return `<div class="grid" style="gap:18px;">
      <div class="card"><h3 style="margin-bottom:10px;">Les 26 lettres</h3>
        <div class="row gap8 wrap">
          ${ch.letters.map(l=>`<button class="audio-btn" data-say="${l}">${l}</button>`).join('')}
        </div>
      </div>
      <div class="card"><h3 style="margin-bottom:10px;">Les voyelles</h3>
        <div class="grid" style="gap:10px;">
          ${ch.vowels.map(v=>`<div class="row between" style="padding:8px 0;border-bottom:1px solid var(--line);">
            <div><strong>${v.s}</strong> \u2014 comme dans <em>${esc(v.ex)}</em> (${esc(v.exfr)})</div>
            <button class="audio-btn" data-say="${esc(v.ex)}">\u25b6\ufe0f \u00c9couter</button>
          </div>`).join('')}
        </div>
      </div>
      <button class="btn btn-primary" id="lessonNext" style="align-self:flex-end;">Continuer \u2192</button>
    </div>`;
  }
  // pronunciation
  return `<div class="grid" style="gap:18px;">
    <div class="card"><h3 style="margin-bottom:6px;">Paires de sons \u00e0 distinguer</h3>
      <p class="muted small">Les mots suivants se ressemblent mais n\u2019ont pas le m\u00eame sens \u2014 \u00e9coutez bien la diff\u00e9rence.</p>
    </div>
    ${ch.pairs.map((p,i)=>`<div class="card">
      <div class="row between wrap gap10">
        <div><span style="font-family:'Fraunces',serif;font-size:19px;">${p.a}</span> <span class="muted small">(${p.afr})</span></div>
        <button class="audio-btn" data-say="${esc(p.a)}">\u25b6\ufe0f</button>
      </div>
      <div class="row between wrap gap10" style="margin-top:8px;">
        <div><span style="font-family:'Fraunces',serif;font-size:19px;">${p.b}</span> <span class="muted small">(${p.bfr})</span></div>
        <button class="audio-btn" data-say="${esc(p.b)}">\u25b6\ufe0f</button>
      </div>
      <p class="small muted" style="margin-top:10px;">${esc(p.note)}</p>
    </div>`).join('')}
    <button class="btn btn-primary" id="lessonNext" style="align-self:flex-end;">Continuer \u2192</button>
  </div>`;
}
function renderVocabStep(ch){
  return `<div class="grid" style="gap:16px;">
    ${ch.vocab.map(v=>`<div class="vocab-card">
      <div class="en">${esc(v.w)}</div>
      <div class="fr">${esc(v.fr)}</div>
      <div class="audio-row">
        <button class="audio-btn" data-say="${esc(v.w)}" data-rate="1">\u25b6\ufe0f \u00c9couter</button>
        <button class="audio-btn" data-say="${esc(v.w)}" data-rate="0.6">\ud83d\udc22 Ralentir</button>
      </div>
      <div class="ex">\u201c${esc(v.ex)}\u201d<div class="exfr">${esc(v.exfr)}</div></div>
    </div>`).join('')}
    <button class="btn btn-primary" id="lessonNext" style="align-self:flex-end;">Continuer \u2192</button>
  </div>`;
}
function renderGrammarStep(ch){
  const g = ch.grammar;
  return `<div class="grid" style="gap:16px;">
    <div class="grammar-box">
      <h3>${esc(g.title)}</h3>
      <p style="margin-top:8px;">${esc(g.explain)}</p>
      <table class="grammar-table"><tbody>
        ${g.rows.map(r=>`<tr><td>${esc(r[0])}</td><td class="muted">${esc(r[1])}</td></tr>`).join('')}
      </tbody></table>
      <div class="grammar-example">
        <div class="row between wrap gap10">
          <div><div class="en">${esc(g.example.en)}</div><div class="fr">${esc(g.example.fr)}</div></div>
          <button class="audio-btn" data-say="${esc(g.example.en)}">\u25b6\ufe0f</button>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" id="lessonNext" style="align-self:flex-end;">Passer aux exercices \u2192</button>
  </div>`;
}
function renderExerciseStep(ch){
  const idx = S.lesson.exIndex;
  const order = S.lesson.order;
  if(idx>=order.length){
    return `<div class="card center"><h3>Exercices termin\u00e9s !</h3><p class="muted">${S.lesson.correctCount} / ${order.length} bonnes r\u00e9ponses.</p><button class="btn btn-primary" id="lessonNext" style="margin-top:12px;">Voir le r\u00e9sum\u00e9 \u2192</button></div>`;
  }
  const ex = ch.exercises[order[idx]];
  const kindLabel = {mcq:'Choix multiple', fill:'Phrase \u00e0 compl\u00e9ter', reorder:'Remettre dans l\u2019ordre', translate:'Traduction', listen:'\u00c9coute', dictation:'Dict\u00e9e'}[ex.type];
  let inner = '';
  if(ex.type==='mcq' || ex.type==='fill'){
    inner = `<div class="ex-prompt">${esc(ex.prompt)}</div>
      <div class="opt-list">${ex.options.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join('')}</div>`;
  } else if(ex.type==='listen'){
    inner = `<div class="ex-prompt">${esc(ex.prompt)}</div>
      <div class="audio-row" style="margin-bottom:14px;"><button class="audio-btn" data-say="${esc(ex.audioText)}">\u25b6\ufe0f \u00c9couter</button><button class="audio-btn" data-say="${esc(ex.audioText)}" data-rate="0.6">\ud83d\udc22 Ralentir</button></div>
      <div class="opt-list">${ex.options.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join('')}</div>`;
  } else if(ex.type==='reorder'){
    inner = `<div class="ex-prompt">Remettez les mots dans l\u2019ordre pour former une phrase correcte.</div>
      <div class="reorder-tokens" id="reorderTarget"></div>
      <div class="bank" id="reorderBank">${shuffle(ex.words.map((w,i)=>({w,i}))).map(t=>`<button class="token" data-w="${esc(t.w)}" data-i="${t.i}">${esc(t.w)}</button>`).join('')}</div>
      <div class="row gap8" style="margin-top:14px;"><button class="btn btn-ghost btn-sm" id="reorderReset">R\u00e9initialiser</button><button class="btn btn-primary btn-sm" id="reorderSubmit">Valider</button></div>`;
  } else if(ex.type==='translate'){
    inner = `<div class="ex-prompt">Traduisez en anglais : \u00ab${esc(ex.promptFr)}\u00bb</div>
      <input class="text-input" id="translateInput" placeholder="\u00c9crivez votre r\u00e9ponse en anglais">
      <button class="btn btn-primary" id="translateSubmit" style="margin-top:12px;">Valider</button>`;
  } else if(ex.type==='dictation'){
    inner = `<div class="ex-prompt">${esc(ex.prompt)}</div>
      <div class="audio-row" style="margin-bottom:14px;"><button class="audio-btn" data-say="${esc(ex.audioText)}" data-rate="0.7">\ud83d\udd0a \u00c9couter</button><button class="audio-btn" data-say="${esc(ex.audioText)}" data-rate="0.5">\ud83d\udc22 Encore plus lent</button></div>
      <input class="text-input" id="dictationInput" placeholder="\u00c9crivez ce que vous entendez">
      <button class="btn btn-primary" id="dictationSubmit" style="margin-top:12px;">Valider</button>`;
  }
  return `<div>
    <div class="row between small muted" style="margin-bottom:8px;"><span>Exercice ${idx+1} / ${order.length}</span><span>${ch.title}</span></div>
    <div class="ex-panel type-${ex.type}">
      <div class="ex-kind">${kindLabel}</div>
      ${inner}
      <div id="exFeedback"></div>
    </div>
  </div>`;
}
function renderSummaryStep(ch){
  const order = S.lesson.order;
  const score = Math.round(100*S.lesson.correctCount/order.length);
  return `<div class="card center">
    <div style="font-size:38px;">${score>=70?'\ud83c\udf89':'\ud83d\udcaa'}</div>
    <h2>Chapitre termin\u00e9 : ${esc(ch.title)}</h2>
    <p class="muted">Score : ${score}% \u2014 ${score>=70? 'Chapitre valid\u00e9 !' : 'Continuez \u00e0 vous entra\u00eener, vous progressez.'}</p>
    <div class="row gap10 center" style="justify-content:center;margin-top:16px;">
      <button class="btn btn-ghost" id="lessonRetry">Refaire les exercices</button>
      <button class="btn btn-primary" id="lessonFinish">Retour au tableau de bord</button>
    </div>
  </div>`;
}
function attachAudioButtons(root){
  (root||document).querySelectorAll('[data-say]').forEach(b=>{
    b.onclick = ()=>{ speak(b.getAttribute('data-say'), parseFloat(b.getAttribute('data-rate')||'1')); };
  });
}
function attachLesson(){
  attachAudioButtons();
  const ch = chapterById(S.lesson.chapterId);
  const steps = lessonSteps(ch);
  const step = steps[S.lesson.stepIndex];
  const nextBtn = document.getElementById('lessonNext');
  if(nextBtn) nextBtn.onclick = ()=>{
    if(step==='exercises'){ S.lesson.stepIndex++; render(); return; }
    S.lesson.stepIndex++; render();
  };
  if(step==='exercises') attachExerciseStep(ch);
  const retry = document.getElementById('lessonRetry');
  if(retry) retry.onclick = ()=>{ S.lesson.exIndex=0; S.lesson.correctCount=0; S.lesson.order = shuffle(ch.exercises.map((_,i)=>i)); S.lesson.stepIndex = steps.indexOf('exercises'); render(); };
  const fin = document.getElementById('lessonFinish');
  if(fin) fin.onclick = ()=>{
    const order = S.lesson.order;
    const score = Math.round(100*S.lesson.correctCount/order.length);
    touchStudySession();
    S.progress.minutesToday += 5;
    if(ch.vocab){ ch.vocab.forEach(v=> touchVocabSeen(ch.id, v.w)); }
    const cur = S.progress.chapters[ch.id] || {status:'available', bestScore:0};
    cur.bestScore = Math.max(cur.bestScore||0, score);
    cur.status = score>=70 ? (cur.status==='mastered'?'mastered':'completed') : (cur.status==='completed'||cur.status==='mastered'?cur.status:'available');
    S.progress.chapters[ch.id] = cur;
    if(score>=70) unlockNext(ch.id);
    addXP(10 + Math.round(score/10));
    checkBadges();
    queueSave();
    go('dashboard');
  };
}
function attachExerciseStep(ch){
  const idx = S.lesson.exIndex;
  const order = S.lesson.order;
  if(idx>=order.length) return;
  const ex = ch.exercises[order[idx]];
  const fbDiv = ()=> document.getElementById('exFeedback');

  function afterAnswer(ok, yourAnswerText, correctText){
    if(ok) S.lesson.correctCount++;
    if(ch.vocab){ /* light touch: mark chapter vocab exposure */ }
    const fb = document.createElement('div');
    fb.className = 'feedback ' + (ok?'ok':'bad');
    fb.innerHTML = `
      <div class="ftitle">${ok? '\u2705 Bonne r\u00e9ponse' : '\u274c R\u00e9ponse incorrecte'}</div>
      ${!ok && yourAnswerText? `<div class="yours">Votre r\u00e9ponse : \u00ab${esc(yourAnswerText)}\u00bb</div>`:''}
      ${!ok && correctText? `<div class="yours">R\u00e9ponse correcte : \u00ab${esc(correctText)}\u00bb</div>`:''}
      <div class="exp">${esc(ex.explanation||'')}</div>
      ${!ok? `<div class="ai-help"><button class="btn btn-ghost btn-sm" id="aiHelpBtn">\ud83e\udd16 Demander une explication au tuteur IA</button><div id="aiHelpAnswer"></div></div>`:''}
      <button class="btn btn-primary btn-sm" id="exContinue" style="margin-top:14px;">Continuer</button>
    `;
    fbDiv().innerHTML=''; fbDiv().appendChild(fb);
    document.getElementById('exContinue').onclick = ()=>{ S.lesson.exIndex++; render(); };
    const aiBtn = document.getElementById('aiHelpBtn');
    if(aiBtn) aiBtn.onclick = async ()=>{
      aiBtn.disabled = true; aiBtn.textContent = 'Le tuteur r\u00e9fl\u00e9chit\u2026';
      const prompt = `Tu es un professeur d'anglais bienveillant pour un francophone d\u00e9butant (niveau A1). Explique SIMPLEMENT en fran\u00e7ais, en 4-5 lignes maximum, pourquoi la r\u00e9ponse de l'\u00e9l\u00e8ve est incorrecte, puis donne 2 exemples suppl\u00e9mentaires corrects. Ne le/la culpabilise jamais.\n\nExercice : ${ex.prompt||ex.promptFr||''}\nSa r\u00e9ponse : ${yourAnswerText||''}\nR\u00e9ponse correcte : ${correctText||''}\nR\u00e8gle : ${ex.explanation||''}`;
      const res = await askAI(prompt);
      const out = document.getElementById('aiHelpAnswer');
      if(res.text){ out.innerHTML = `<div class="ai-answer">${esc(res.text)}</div>`; aiBtn.remove(); }
      else { out.innerHTML = `<div class="ai-answer small muted">${esc(aiErrorMessage(res.error))}</div>`; aiBtn.disabled=false; aiBtn.textContent='\ud83e\udd16 Demander une explication au tuteur IA'; }
    };
  }

  if(ex.type==='mcq' || ex.type==='fill' || ex.type==='listen'){
    document.querySelectorAll('.opt[data-i]').forEach(btn=>{
      btn.onclick = ()=>{
        const i = parseInt(btn.getAttribute('data-i'));
        document.querySelectorAll('.opt[data-i]').forEach(o=> o.disabled=true);
        const ok = i===ex.correctIndex;
        btn.classList.add(ok?'correct':'wrong');
        if(!ok) document.querySelector(`.opt[data-i="${ex.correctIndex}"]`).classList.add('correct');
        afterAnswer(ok, ex.options[i], ex.options[ex.correctIndex]);
      };
    });
  } else if(ex.type==='reorder'){
    const chosen = [];
    const target = document.getElementById('reorderTarget');
    const bank = document.getElementById('reorderBank');
    function refresh(){
      target.innerHTML = chosen.map((t,pos)=>`<button class="token" data-pos="${pos}">${esc(t.w)}</button>`).join('') || '<span class="muted small">Cliquez sur les mots ci-dessous</span>';
      target.querySelectorAll('[data-pos]').forEach(b=> b.onclick = ()=>{ chosen.splice(parseInt(b.getAttribute('data-pos')),1); refresh(); });
    }
    bank.querySelectorAll('.token').forEach(b=>{
      b.onclick = ()=>{ chosen.push({w:b.getAttribute('data-w')}); b.style.visibility='hidden'; refresh(); };
    });
    refresh();
    document.getElementById('reorderReset').onclick = ()=>{ chosen.length=0; bank.querySelectorAll('.token').forEach(b=> b.style.visibility='visible'); refresh(); };
    document.getElementById('reorderSubmit').onclick = ()=>{
      const yourText = chosen.map(t=>t.w).join(' ');
      const ok = norm(yourText)===norm(ex.correct);
      document.getElementById('reorderSubmit').disabled = true;
      afterAnswer(ok, yourText, ex.correct);
    };
  } else if(ex.type==='translate'){
    document.getElementById('translateSubmit').onclick = ()=>{
      const val = document.getElementById('translateInput').value;
      const accepted = [ex.answer, ...(ex.alts||[])].map(norm);
      const ok = accepted.includes(norm(val));
      document.getElementById('translateSubmit').disabled = true;
      afterAnswer(ok, val, ex.answer);
    };
  } else if(ex.type==='dictation'){
    document.getElementById('dictationSubmit').onclick = ()=>{
      const val = document.getElementById('dictationInput').value;
      const ok = norm(val)===norm(ex.answer);
      document.getElementById('dictationSubmit').disabled = true;
      afterAnswer(ok, val, ex.answer);
    };
  }
}

/* ======================= REVIEW ======================= */
function renderReview(){
  const due = dueVocab(10);
  if(!due.length){
    return `<div class="empty"><div style="font-size:34px;">\u2728</div><h3>Rien \u00e0 r\u00e9viser pour l\u2019instant</h3><p class="muted">Continuez vos le\u00e7ons \u2014 les mots \u00e0 revoir appara\u00eetront ici automatiquement, au bon moment.</p></div>`;
  }
  return `<div class="grid" style="gap:14px;">
    <p class="muted small">${due.length} mot${due.length>1?'s':''} \u00e0 revoir aujourd\u2019hui, choisis selon votre m\u00e9moire (r\u00e9p\u00e9tition espac\u00e9e).</p>
    ${due.map(v=>`<div class="vocab-card">
      <div class="en">${esc(v.w)}</div><div class="fr">${esc(v.fr)}</div>
      <div class="audio-row"><button class="audio-btn" data-say="${esc(v.w)}">\u25b6\ufe0f</button></div>
      <div class="row gap8" style="margin-top:10px;">
        <button class="btn btn-ghost btn-sm" data-review="${v.chapterId}::${esc(v.w)}::0">Je ne me souviens plus</button>
        <button class="btn btn-primary btn-sm" data-review="${v.chapterId}::${esc(v.w)}::1">Je m\u2019en souviens \u2713</button>
      </div>
    </div>`).join('')}
  </div>`;
}
function attachReview(){
  attachAudioButtons();
  document.querySelectorAll('[data-review]').forEach(b=>{
    b.onclick = ()=>{
      const [cid, word, ok] = b.getAttribute('data-review').split('::');
      vocabAnswer(cid, word, ok==='1');
      addXP(2);
      touchStudySession();
      queueSave();
      render();
    };
  });
}

/* ======================= TUTOR CHAT ======================= */
function renderTutor(){
  return `<div class="card">
    <p class="small muted" style="margin-bottom:14px;">Posez une question de grammaire ou de vocabulaire en fran\u00e7ais \u2014 le tuteur r\u00e9pond en fran\u00e7ais avec des exemples. Cette conversation n\u2019est pas conserv\u00e9e apr\u00e8s la fermeture de la page.</p>
    <div class="chat-log" id="chatLog">
      ${S.tutorMsgs.map(m=>`<div class="msg ${m.role==='user'?'user':'ai'}">${esc(m.content)}</div>`).join('')}
      ${!S.tutorMsgs.length? '<p class="muted small">Exemple : \u00abPourquoi on dit \u2018I am\u2019 et pas \u2018I is\u2019 ?\u00bb</p>':''}
    </div>
    <div class="row gap8" style="margin-top:14px;">
      <input class="text-input" id="chatInput" placeholder="\u00c9crivez votre question\u2026">
      <button class="btn btn-primary" id="chatSend">Envoyer</button>
    </div>
  </div>`;
}
function attachTutor(){
  const send = document.getElementById('chatSend');
  const input = document.getElementById('chatInput');
  if(!send) return;
  const log = document.getElementById('chatLog');
  log.scrollTop = log.scrollHeight;
  async function doSend(){
    const val = input.value.trim();
    if(!val) return;
    S.tutorMsgs.push({role:'user', content:val});
    input.value=''; send.disabled = true;
    render();
    try{
      const res = await fetch('/api/tutor', {
        method:'POST', headers:{'content-type':'application/json'},
        body: JSON.stringify({ messages: S.tutorMsgs })
      });
      const data = await res.json();
      if(res.ok){ S.tutorMsgs.push({role:'assistant', content:data.text}); }
      else { S.tutorMsgs.push({role:'assistant', content: aiErrorMessage(data.error)}); }
    }catch(e){
      S.tutorMsgs.push({role:'assistant', content: aiErrorMessage()});
    }
    render();
  }
  send.onclick = doSend;
  input.onkeydown = (e)=>{ if(e.key==='Enter') doSend(); };
}

/* ======================= PROFILE ======================= */
function renderProfile(){
  return `<div class="grid" style="gap:22px;max-width:560px;">
    <div class="card">
      <h3 style="margin-bottom:12px;">Compte</h3>
      <div class="row gap10">
        <div style="width:44px;height:44px;border-radius:50%;background:var(--emerald-light);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--emerald-dark);">${esc((greetName()||S.userEmail||'?').slice(0,1).toUpperCase())}</div>
        <div><div style="font-weight:700;">${esc(greetName()||S.userEmail||'Invit\u00e9')}</div><div class="muted small">${esc(S.userEmail)} \u00b7 Progression sauvegard\u00e9e automatiquement</div></div>
      </div>
    </div>
    <div class="card">
      <h3 style="margin-bottom:6px;">Objectif quotidien</h3>
      <div class="row between"><span class="muted small">Minutes par jour</span><strong>${S.progress.dailyGoalMinutes} min</strong></div>
      <input type="range" min="5" max="60" step="5" id="goalRange" value="${S.progress.dailyGoalMinutes}">
    </div>
    <div class="card">
      <h3 style="margin-bottom:6px;">Voix audio</h3>
      <select id="voiceSelect">
        <option value="">Voix par d\u00e9faut du navigateur</option>
        ${S.voices.map(v=>`<option value="${v.voiceURI}" ${S.voiceURI===v.voiceURI?'selected':''}>${esc(v.name)} (${v.lang})</option>`).join('')}
      </select>
      <div style="margin-top:10px;"><button class="btn btn-ghost btn-sm" id="voiceTest">\u25b6\ufe0f Tester la voix</button></div>
      ${!S.voices.length? '<p class="small muted" style="margin-top:8px;">Aucune voix anglaise d\u00e9tect\u00e9e pour l\u2019instant \u2014 certains navigateurs les chargent avec un l\u00e9ger d\u00e9lai.</p>':''}
    </div>
    <div class="card">
      <div class="toggle-row" style="border:none;padding-top:0;">
        <div><div style="font-weight:700;">Mode sombre</div></div>
        <div class="switch ${S.theme==='dark'?'on':''}" id="darkSwitch"><div class="knob"></div></div>
      </div>
    </div>
    <div class="card">
      <h3 style="margin-bottom:6px;">Statistiques</h3>
      <div class="grid" style="gap:8px;">
        <div class="row between small"><span>Vocabulaire ma\u00eetris\u00e9</span><strong>${vocabKnownCount()} mots</strong></div>
        <div class="row between small"><span>Chapitres termin\u00e9s</span><strong>${CHAPTERS.filter(c=>S.progress.chapters[c.id]&&['completed','mastered'].includes(S.progress.chapters[c.id].status)).length} / ${CHAPTERS.length}</strong></div>
        <div class="row between small"><span>XP total</span><strong>${S.progress.xp}</strong></div>
        <div class="row between small"><span>S\u00e9rie actuelle</span><strong>${S.progress.streak} jours</strong></div>
      </div>
    </div>
  </div>`;
}
function attachProfile(){
  const gr = document.getElementById('goalRange');
  if(gr) gr.oninput = ()=>{ S.progress.dailyGoalMinutes = parseInt(gr.value); queueSave(); render(); };
  const vs = document.getElementById('voiceSelect');
  if(vs) vs.onchange = ()=>{ S.voiceURI = vs.value; localStorage.setItem(LS_VOICE, S.voiceURI); };
  const vt = document.getElementById('voiceTest');
  if(vt) vt.onclick = ()=> speak('Hello! This is how I sound.', 1);
  const ds = document.getElementById('darkSwitch');
  if(ds) ds.onclick = ()=>{ S.theme = S.theme==='dark'?'light':'dark'; document.documentElement.setAttribute('data-theme', S.theme); localStorage.setItem(LS_THEME, S.theme); render(); };
}

/* not used yet: exam/certificate placeholders reserved for full-level completion */
function renderExamResult(){ return '<div class="empty">\u00c0 venir.</div>'; }
function renderCertificate(){ return '<div class="empty">\u00c0 venir.</div>'; }

/* ======================= BOOT ======================= */
initApp();
