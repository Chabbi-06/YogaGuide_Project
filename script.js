// ---------- POSES DATA (truncated for brevity, same as before with 15 poses) ----------
const POSES = [
  {
    nameEN:"Mountain Pose",
    nameSA:"Tadasana",
    img:"https://static.vecteezy.com/system/resources/previews/050/094/677/original/young-woman-doing-extended-mountain-pose-backbend-interlocked-hands-or-utthita-tadasana-backbend-baddhanguliyasana-vector.jpg",
    steps:[
      "Stand with big toes touching, heels slightly apart; arms relaxed at sides.",
      "Spread toes and distribute weight evenly across both feet.",
      "Engage thighs, lift kneecaps gently, and lengthen through the spine.",
      "Broaden collarbones, let shoulders soften down and back; palms face forward.",
      "Gaze straight ahead; breathe steadily for 30–60 seconds."
    ],
    benefits:["Improves posture and alignment","Builds awareness of balance","Strengthens legs and core stability","Can relieve sciatica when practiced correctly"],
    best:"Morning or anytime for grounding",
    uses:["Centering before a sequence","Posture awareness training"]
  },
  {
    nameEN:"Tree Pose",
    nameSA:"Vṛkṣāsana",
    img:"https://www.vinyasayogaashram.com/blog/wp-content/uploads/2021/07/tree-pose-1.jpg",
    steps:[
      "From Tadasana, shift weight into the left foot and firm the thigh.",
      "Place right sole on inner left calf or thigh (avoid the knee).",
      "Find a steady point to look at; hands to heart.",
      "On an inhale, raise arms overhead; keep hips square forward.",
      "Hold 30–45 seconds; switch sides."
    ],
    benefits:["Enhances balance and focus","Strengthens ankles, calves and thighs","Opens hips gently"],
    best:"Morning or pre-practice to build focus",
    uses:["Balance training","Mindfulness and concentration"]
  },
  {
    nameEN:"Cobra Pose",
    nameSA:"Bhujangāsana",
    img:"https://static.vecteezy.com/system/resources/previews/007/341/653/original/woman-doing-cobra-pose-or-bhujangasana-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg",
    steps:[
      "Lie prone; legs long, tops of feet on mat; place palms under shoulders.",
      "Press pubic bone down; on inhale pull chest forward and up.",
      "Keep elbows close to ribs; broaden across collarbones.",
      "Lift only to a comfortable height; avoid compressing lower back.",
      "Hold 15–30 seconds with smooth breaths; release on exhale."
    ],
    benefits:["Strengthens spinal extensors","Opens chest and lungs","Invigorates and improves posture"],
    best:"Morning or mid‑day to energize (empty/light stomach)",
    uses:["Back‑bend prep","Counterpose after forward bends"]
  },
  {
    nameEN:"Downward-Facing Dog",
    nameSA:"Adho Mukha Śvānāsana",
    img:"https://static.vecteezy.com/system/resources/previews/016/138/103/non_2x/man-doing-adho-mukha-svanasana-or-downward-facing-dog-yoga-pose-illustration-in-trendy-style-vector.jpg",
    steps:[
      "Start on hands and knees; wrists under shoulders, knees under hips.",
      "Spread fingers, press through palms; tuck toes and lift knees.",
      "Send hips up and back; lengthen spine, draw ribs in.",
      "Gently pedal heels toward floor; keep a micro-bend in knees if tight.",
      "Hold 30–60 seconds, breathing evenly."
    ],
    benefits:["Stretches hamstrings and calves","Lengthens spine and shoulders","Builds upper‑body strength","Energizes the whole body"],
    best:"Morning or as a reset during the day",
    uses:["Transition pose in Sun Salutations","Full‑body stretch"]
  },
  {
    nameEN:"Warrior I",
    nameSA:"Vīrabhadrāsana I",
    img:"https://www.arhantayoga.org/wp-content/uploads/2023/09/Warrior-1-Pose-.jpg",
    steps:[
      "From Down Dog, step right foot forward between hands; back heel down 45°.",
      "Square hips forward; front knee over ankle.",
      "On inhale sweep arms up; lengthen through sides of waist.",
      "Press outer edge of back foot firmly; lift chest.",
      "Hold 30–45 seconds; repeat left."
    ],
    benefits:["Strengthens legs and glutes","Opens hip flexors and chest","Improves stability and stamina"],
    best:"Morning or before strength sequences",
    uses:["Sun Salutation B component","Building lower‑body strength"]
  },
  {
    nameEN:"Warrior II",
    nameSA:"Vīrabhadrāsana II",
    img:"https://www.arhantayoga.org/wp-content/uploads/2023/09/Warrior-2-Pose-.jpg",
    steps:[
      "From a wide stance, turn right toes out 90°; left toes slightly in.",
      "Bend right knee to stack over ankle; press outer left foot down.",
      "Extend arms parallel to floor; gaze softly over right fingertips.",
      "Keep torso centered; lengthen tailbone; breathe.",
      "Hold 30–45 seconds; switch sides."
    ],
    benefits:["Builds leg and core endurance","Opens hips and chest","Improves concentration"],
    best:"Anytime; great mid‑sequence for strength",
    uses:["Standing series foundation","Focus training"]
  },
  {
    nameEN:"Triangle Pose",
    nameSA:"Trikoṇāsana",
    img:"https://static.vecteezy.com/system/resources/previews/007/745/837/original/woman-doing-revolved-triangle-pose-parivrtta-trikonasana-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg",
    steps:[
      "From wide stance, turn right toes out; left toes slightly in.",
      "Inhale lengthen; exhale hinge at right hip, reach right hand forward.",
      "Place right hand to shin/block; extend left arm to sky.",
      "Roll left shoulder back; lengthen both sides of torso.",
      "Hold 30–45 seconds; breathe; repeat other side."
    ],
    benefits:["Stretches hamstrings and side body","Opens hips and chest","Strengthens legs"],
    best:"Late morning or afternoon when warm",
    uses:["Hamstring/side‑body opener","Posture alignment work"]
  },
  {
    nameEN:"Bridge Pose",
    nameSA:"Setu Bandhāsana",
    img:"https://cdn1.iconfinder.com/data/icons/yoga-pose-set-2-3/600/bridge-Setu-Bandhasana-yoga-pose-exercise-512.png",
    steps:[
      "Lie on back; bend knees, feet hip‑width close to sitting bones.",
      "Press feet and arms; on inhale lift hips.",
      "Roll shoulders under; interlace fingers or keep palms flat.",
      "Keep knees tracking forward; lengthen tailbone toward knees.",
      "Hold 30–60 seconds; exhale to lower."
    ],
    benefits:["Strengthens posterior chain","Opens chest and hip flexors","Can relieve mild backache"],
    best:"Evening or after sitting long hours",
    uses:["Back‑bend prep","Countering desk posture"]
  },
  {
    nameEN:"Seated Forward Bend",
    nameSA:"Paścimottānāsana",
    img:"https://static.vecteezy.com/system/resources/previews/007/745/788/large_2x/woman-doing-paschimottanasana-seated-forward-bend-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg",
    steps:[
      "Sit with legs extended; flex feet; sit tall on sit bones.",
      "Inhale reach arms up; exhale hinge from hips to lengthen over legs.",
      "Hold shins/feet/strap; keep spine long (avoid rounding).",
      "Relax shoulders and jaw; breathe into back body.",
      "Hold 45–90 seconds; release slowly."
    ],
    benefits:["Stretches hamstrings and spine","Calms the nervous system","Aids digestion"],
    best:"Evening or after practice as a cool‑down",
    uses:["Forward‑bend sequence","Relaxation and introspection"]
  },
  {
    nameEN:"Boat Pose",
    nameSA:"Navāsana",
    img:"https://static.vecteezy.com/system/resources/previews/037/043/856/original/woman-doing-paripurna-navasana-or-boat-pose-female-cartoon-character-practicing-hatha-yoga-gymnastics-training-vector.jpg",
    steps:[
      "Sit, knees bent; hold behind thighs; lift chest.",
      "Lean back slightly and lift feet, shins parallel to floor.",
      "Option: straighten legs to a V; reach arms forward.",
      "Draw lower belly in; keep spine long and chest open.",
      "Hold 20–40 seconds; breathe steadily."
    ],
    benefits:["Strengthens core and hip flexors","Improves balance and stamina","Supports healthy posture"],
    best:"Morning or early practice for core activation",
    uses:["Core strengthening","Preparation for arm balances"]
  },
  {
    nameEN:"Plank Pose",
    nameSA:"Phalakāsana",
    img:"https://i.pinimg.com/originals/c0/e3/bb/c0e3bb84b895a4b86d38e3ba922ea3c5.jpg",
    steps:[
      "From hands and knees, step feet back to a straight line head‑to‑heels.",
      "Wrists under shoulders; press floor away; broaden upper back.",
      "Draw ribs in; engage glutes and legs; keep neck neutral.",
      "Hold 20–45 seconds with even breaths; lower to rest as needed."
    ],
    benefits:["Builds full‑body strength","Stabilizes core and shoulders","Prepares for arm balances"],
    best:"Anytime; great in warm‑up sequences",
    uses:["Strength & conditioning","Transition to Chaturanga"]
  },
  {
    nameEN:"Child's Pose",
    nameSA:"Bālāsana",
    img:"https://static.vecteezy.com/system/resources/previews/006/470/400/original/man-doing-child-s-pose-stretch-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg",
    steps:[
      "From kneeling, sit back on heels; big toes touch, knees together or wide.",
      "Fold torso over thighs; extend arms forward or rest by sides.",
      "Let forehead rest; soften jaw and shoulders; breathe into back body.",
      "Hold 1–3 minutes or as comfortable."
    ],
    benefits:["Gently stretches hips, thighs, ankles","Releases back tension","Calms the mind"],
    best:"Anytime; restorative and between challenging poses",
    uses:["Rest pose","Grounding and calming"]
  },
  {
    nameEN:"Cat–Cow",
    nameSA:"Marjaryāsana–Bitilāsana",
    img:"https://static.vecteezy.com/system/resources/previews/006/470/390/original/woman-doing-yoga-cat-cow-stretch-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg",
    steps:[
      "Start on all fours; wrists under shoulders, knees under hips.",
      "Inhale arch (Cow): tail and chest lift, gaze forward.",
      "Exhale round (Cat): press floor, tuck tail, chin to throat.",
      "Flow 5–8 rounds with breath, smoothing the spine."
    ],
    benefits:["Mobilizes entire spine","Warms shoulders and hips","Connects movement with breath"],
    best:"Beginning of practice or as a break from sitting",
    uses:["Spinal warm‑up","Stress relief"]
  },
  {
    nameEN:"Chair Pose",
    nameSA:"Utkatāsana",
    img:"https://pocketyoga.com/assets/images/full/Chair.png",
    steps:[
      "From Tadasana, inhale arms up; exhale bend knees, sit hips back like a chair.",
      "Keep weight in heels; knees track over toes; chest lifts.",
      "Draw ribs in; lengthen tailbone; gaze forward.",
      "Hold 20–40 seconds; breathe; stand to release."
    ],
    benefits:["Strengthens legs and glutes","Builds heat and stamina","Tones core"],
    best:"Morning or early sequence to warm up",
    uses:["Sun Salutation B","Leg strength work"]
  },
  {
    nameEN:"Camel Pose",
    nameSA:"Ustrāsana",
    img:"https://static.vecteezy.com/system/resources/previews/016/138/114/original/man-doing-camel-pose-or-ustrasana-exercise-flat-illustration-isolated-on-white-background-vector.jpg",
    steps:[
      "Kneel hip‑width; thighs vertical; hands to low back (fingers down).",
      "Inhale lift chest; press hips forward over knees.",
      "Option: reach hands to heels; keep neck long (gaze up or back gently).",
      "Breathe 20–30 seconds; exit by leading with chest back to kneel."
    ],
    benefits:["Opens chest, shoulders, and hip flexors","Strengthens back body","Improves posture and respiration"],
    best:"Middle of practice when warm",
    uses:["Heart‑opening sequences","Countering hunching"]
  },
  {
    nameEN:"Low Lunge",
    nameSA:"Anjaneyāsana",
    img:"https://entri.app/blog/wp-content/uploads/2023/10/Low-Lunge.jpg",
    steps:[
      "From Down Dog, step right foot forward; lower left knee.",
      "Stack right knee over ankle; slide left knee back to feel front‑thigh stretch.",
      "Inhale arms up; lengthen through sides; tailbone heavy.",
      "Hold 30–45 seconds; switch sides."
    ],
    benefits:["Opens hip flexors and groin","Builds balance and stability","Relieves lower‑back tightness"],
    best:"Early or mid‑practice to open hips",
    uses:["Warm‑up for backbends","Desk‑relief stretch"]
  },
  {
    nameEN:"Bound Angle Pose",
    nameSA:"Baddha Koṇāsana",
    img:"https://www.yogaclassplan.com/wp-content/uploads/2021/06/27-boundangle.jpg",
    steps:[
      "Sit tall; bring soles of feet together; let knees open wide.",
      "Hold ankles or feet; lengthen spine.",
      "Option: hinge forward slightly from hips while keeping back long.",
      "Breathe 1–2 minutes; gently release."
    ],
    benefits:["Opens inner thighs and groin","Soothes and grounds","Improves hip mobility"],
    best:"Evening or restorative sequences",
    uses:["Hip opener","Pre‑meditation seat"]
  },
  {
    nameEN:"Pigeon Pose",
    nameSA:"Eka Pāda Rajakapotāsana (prep)",
    img:"https://www.yogaclassplan.com/wp-content/uploads/2021/06/12-one-legged-pigeon.jpg",
    steps:[
      "From Down Dog, bring right knee toward right wrist; shin angled forward.",
      "Slide left leg back; square hips as best as comfortable.",
      "Inhale lengthen; exhale fold over front shin on forearms or a block.",
      "Hold 1–2 minutes; switch sides."
    ],
    benefits:["Deeply opens glutes and outer hip","Can relieve low‑back tightness","Calms the nervous system"],
    best:"After warming up; great in cool‑down",
    uses:["Hip mobility","Release after running or sitting"]
  } 
];

// ---------- DOM refs ----------
const i1=document.getElementById('interface1'),
      i2=document.getElementById('interface2'),
      i3=document.getElementById('interface3'),
      startBtn=document.getElementById('startBtn'),
      yogaList=document.getElementById('yogaList'),
      poseImg=document.getElementById('poseImg'),
      stepsBox=document.getElementById('stepsBox'),
      stepsOl=stepsBox.querySelector('ol'),
      infoToggle=document.getElementById('infoToggle'),
      infoBox=document.getElementById('infoBox'),
      stepImage=document.getElementById('stepImage'),
      stepDesc=document.getElementById('stepDesc'),
      backBtn=document.getElementById('backBtn');

// Populate list
POSES.forEach((p,idx)=>{
  const item=document.createElement('div');
  item.className='yoga-item';
  item.innerHTML=`<img src="${p.img}" alt="${p.nameEN}"/><div><div class="title">${p.nameEN}</div><div class="sub">${p.nameSA}</div></div>`;
  item.addEventListener('click',()=>{
    document.querySelectorAll('.yoga-item').forEach(el=>el.classList.remove('active'));
    item.classList.add('active');
    selectPose(idx);
  });
  yogaList.appendChild(item);
});

let currentIndex=-1;
function selectPose(index){
  currentIndex=index;
  const p=POSES[index];
  poseImg.style.opacity=0;
  stepsBox.style.opacity=0; stepsBox.style.transform='translateX(10px)';
  setTimeout(()=>{
    poseImg.src=p.img; poseImg.alt=`${p.nameEN} (${p.nameSA})`;
    stepsBox.querySelector('h2').textContent=`${p.nameEN} (${p.nameSA}) — Steps`;
    stepsOl.innerHTML=''; p.steps.forEach(s=>{const li=document.createElement('li');li.textContent=s;stepsOl.appendChild(li);});
    infoBox.innerHTML=`<h3>${p.nameEN} (${p.nameSA})</h3><h4>Benefits</h4><ul>${p.benefits.map(b=>`<li>${b}</li>`).join('')}</ul><h4>Best Time</h4><p>${p.best}</p><h4>Best Uses</h4><ul>${p.uses.map(u=>`<li>${u}</li>`).join('')}</ul>`;
    poseImg.style.opacity=1; stepsBox.style.opacity=1; stepsBox.style.transform='translateX(0)';
  },250);
}

// Start button
startBtn.addEventListener('click',()=>{
  startBtn.classList.remove('ripple'); void startBtn.offsetWidth; startBtn.classList.add('ripple');
  i1.style.opacity=0;
  setTimeout(()=>{i1.classList.add('hidden'); i2.classList.remove('hidden'); setTimeout(()=>{i2.style.opacity=1;i2.style.pointerEvents='auto';},40);},600);
});

// Info toggle (manual open/close)
infoToggle.addEventListener('click',()=>{ infoBox.classList.toggle('show'); });

// Pose image click (popup)
poseImg.addEventListener('click',()=>{
  if(currentIndex<0) return;
  const p=POSES[currentIndex];
  i2.style.opacity=0;
  setTimeout(()=>{
    i2.classList.add('hidden'); i3.classList.remove('hidden');
    stepImage.src=p.img; stepImage.alt=`${p.nameEN} (${p.nameSA})`; stepDesc.textContent=`${p.nameEN} (${p.nameSA})`;
    setTimeout(()=>{ i3.style.opacity=1; i3.style.pointerEvents='auto'; },40);
  },350);
});

// Back from popup
backBtn.addEventListener('click',()=>{
  i3.style.opacity=0;
  setTimeout(()=>{ i3.classList.add('hidden'); i2.classList.remove('hidden'); setTimeout(()=>{ i2.style.opacity=1; i2.style.pointerEvents='auto';},40); },350);
});

// Init
document.querySelectorAll('.yoga-item')[0].classList.add('active');
selectPose(0);