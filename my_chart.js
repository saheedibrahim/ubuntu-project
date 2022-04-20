const ctx = document.getElementById('myChart').getContext('2d');
// var earning = document.getElementById('earning').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: 'Traffic Source',
            data: [210, 150],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(185, 185, 200, 1)'
            ],
            borderWidth: [35],
        }]
    },
    options: {
        responsive: true,
    }
});


// const ctx = document.getElementById('myChart').getContext('2d');
