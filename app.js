function login(){

let p=document.getElementById("password").value

if(p==="1234"){

document.getElementById("login").style.display="none"
document.getElementById("dashboard").style.display="block"

loadCards()

}

}

async function addCard(){

let name=document.getElementById("nameInput").value

let number=Math.floor(Math.random()*100000000).toString()

await setDoc(doc(db,"cards",number),{

name:name,
points:0

})

}

function loadCards(){

onSnapshot(collection(db,"cards"),(snapshot)=>{

let table=document.getElementById("table")

table.innerHTML=`
<tr>
<th>Name</th>
<th>Number</th>
<th>Points</th>
<th>Actions</th>
</tr>
`

snapshot.forEach((docu)=>{

let c=docu.data()

table.innerHTML+=`

<tr>

<td>${c.name}</td>

<td>${docu.id}</td>

<td>${c.points}</td>

<td>

<button onclick="addPoint('${docu.id}')">+1</button>

<button onclick="printCard('${docu.id}')">Print</button>

</td>

</tr>

`

})

})

}

async function addPoint(id){

await updateDoc(doc(db,"cards",id),{

points: increment(1)

})

}

async function loadCard(id){

const ref=doc(db,"cards",id)
const snap=await getDoc(ref)

if(snap.exists()){

let c=snap.data()

document.getElementById("name").innerText=c.name
document.getElementById("points").innerText="⭐ "+c.points

}

}

function printCard(id){

window.open("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+id)

}
