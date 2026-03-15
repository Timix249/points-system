const db = firebase.firestore()

function login(){

let p=document.getElementById("password").value

if(p==="1234"){

document.getElementById("login").style.display="none"
document.getElementById("dashboard").style.display="block"

loadCards()

}

}

function addCard(){

let name=document.getElementById("nameInput").value

let number=Math.floor(Math.random()*100000000)

db.collection("cards").doc(number.toString()).set({

name:name,
points:0

})

}

function loadCards(){

db.collection("cards").onSnapshot(snapshot=>{

let table=document.getElementById("table")

table.innerHTML=`
<tr>
<th>Name</th>
<th>Number</th>
<th>Points</th>
<th>Actions</th>
</tr>
`

snapshot.forEach(doc=>{

let c=doc.data()

table.innerHTML+=`

<tr>

<td>${c.name}</td>

<td>${doc.id}</td>

<td>${c.points}</td>

<td>

<button onclick="addPoint('${doc.id}')">+1</button>

<button onclick="printCard('${doc.id}')">Print</button>

</td>

</tr>

`

})

})

}

function addPoint(id){

db.collection("cards").doc(id).update({

points: firebase.firestore.FieldValue.increment(1)

})

}

function loadCard(id){

db.collection("cards").doc(id).get().then(doc=>{

let c=doc.data()

document.getElementById("name").innerText=c.name
document.getElementById("points").innerText="⭐ "+c.points

})

}

function printCard(id){

window.open("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+id)

}
