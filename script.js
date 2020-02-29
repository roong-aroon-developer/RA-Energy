// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

var temp = [];

function generateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['ม. 1/1', 'ม. 1/2', 'ม. 1/3', 'ม. 1/4', 
                'ม. 2/1', 'ม. 2/2', 'ม. 2/3', 'ม. 2/4', 
                'ม. 3/1', 'ม. 3/2', 'ม. 3/3', 'ม. 3/4',
                'ม. 4/1', 'ม. 4/2', 'ม. 4/3',
                'ม. 5/1', 'ม. 5/2', 'ม. 5/3',
                'ม. 6/1', 'ม. 6/2', 'ห้องคอม'
              ],
        datasets: [{
            label: 'Units (kWh)',
            data: [temp[0], temp[1], temp[2], temp[3],
                    temp[4], temp[5], temp[6], temp[7],
                    temp[8], temp[9], temp[10], temp[11],
                    temp[12], temp[13], temp[14],
                    temp[15], temp[16], temp[17],
                    temp[18], temp[19], temp[20]
                    ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            fontSize: 30,
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            text: 'ตารางเเสดงการใช้ไฟฟ้าในโรงเรียนมัธยม'
        }
    },
    responsive: true,
    maintainAspectRatio: false
  });

}

function updateData() {
    db.collection("energy").doc('g7-1')
    .onSnapshot(function(doc) {
        temp[0] = doc.data().value
        
    });
    db.collection("energy").doc('g7-2')
    .onSnapshot(function(doc) {
        temp[1] = doc.data().value
        
    });
    db.collection("energy").doc('g7-3')
    .onSnapshot(function(doc) {
        temp[2] = doc.data().value
        
    });
    db.collection("energy").doc('g7-4')
    .onSnapshot(function(doc) {
        temp[3] = doc.data().value
        
    });
    db.collection("energy").doc('g8-1')
    .onSnapshot(function(doc) {
        temp[4] = doc.data().value
        
    });
    db.collection("energy").doc('g8-2')
    .onSnapshot(function(doc) {
        temp[5] = doc.data().value
        
    });
    db.collection("energy").doc('g8-3')
    .onSnapshot(function(doc) {
        temp[6] = doc.data().value
        
    });
    db.collection("energy").doc('g8-4')
    .onSnapshot(function(doc) {
        temp[7] = doc.data().value
        
    });
    db.collection("energy").doc('g9-1')
    .onSnapshot(function(doc) {
        temp[8] = doc.data().value
        
    });
    db.collection("energy").doc('g9-2')
    .onSnapshot(function(doc) {
        temp[9] = doc.data().value
        
    });
    db.collection("energy").doc('g9-3')
    .onSnapshot(function(doc) {
        temp[10] = doc.data().value
        
    });
    db.collection("energy").doc('g9-4')
    .onSnapshot(function(doc) {
        temp[11] = doc.data().value
        
    });
    db.collection("energy").doc('g10-1')
    .onSnapshot(function(doc) {
        temp[12] = doc.data().value
        
    });
    db.collection("energy").doc('g10-2')
    .onSnapshot(function(doc) {
        temp[13] = doc.data().value
        
    });
    db.collection("energy").doc('g10-3')
    .onSnapshot(function(doc) {
        temp[14] = doc.data().value
        
    });
    db.collection("energy").doc('g11-1')
    .onSnapshot(function(doc) {
        temp[15] = doc.data().value
        
    });
    db.collection("energy").doc('g11-2')
    .onSnapshot(function(doc) {
        temp[16] = doc.data().value
        
    });
    db.collection("energy").doc('g11-3')
    .onSnapshot(function(doc) {
        temp[17] = doc.data().value
        
    });
    db.collection("energy").doc('g12-1')
    .onSnapshot(function(doc) {
        temp[18] = doc.data().value
        
    });
    db.collection("energy").doc('g12-2')
    .onSnapshot(function(doc) {
        temp[19] = doc.data().value
        
    });
    db.collection("energy").doc('com')
    .onSnapshot(function(doc) {
        temp[20] = doc.data().value
        
    });

    db.collection("energy")
    .onSnapshot(() => {
        generateChart()
    });
}

