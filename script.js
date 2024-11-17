document.querySelector('.add-expense-btn').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'flex';
    document.querySelector('.content-wrapper').style.filter = 'blur(5px)';
});

document.getElementById('overlay').addEventListener('click', (e) => {
    if (e.target.id === 'overlay') {
        document.getElementById('overlay').style.display = 'none';
        document.querySelector('.content-wrapper').style.filter = 'none';
    }
});

document.getElementById('expense-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission logic here
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.content-wrapper').style.filter = 'none';
});
document.addEventListener('DOMContentLoaded', () => {
    const username = 'mohit';
    const profileSpan = document.querySelector('.profile span');
    animateUsername(profileSpan, username);

    const logo = document.getElementById('logo');
    const calendarIcon = document.getElementById('calendar-icon');
    const profileOverview = document.getElementById('profile-overview');
    const calendarContainer = document.getElementById('calendar-container');
    const monthSelect = document.getElementById('month-select');
    const calendarGrid = document.getElementById('calendar-grid');
    const overlay = document.getElementById('transaction-overlay');
    const transactionList = document.getElementById('transaction-list');
    const closeOverlayButton = document.getElementById('close-overlay');

    const transactions = {
        1: [{ amount: 100, who: 'Alice' }, { amount: 150, who: 'Bob' }],
        2: [{ amount: 200, who: 'Bob' }, { amount: 50, who: 'Charlie' }],
        3: [{ amount: 150, who: 'Charlie' }, { amount: 100, who: 'David' }],
        4: [{ amount: 50, who: 'David' }, { amount: 200, who: 'Eve' }],
        5: [{ amount: 300, who: 'Eve' }, { amount: 100, who: 'Frank' }],
        6: [{ amount: 400, who: 'Frank' }, { amount: 150, who: 'Grace' }],
        7: [{ amount: 250, who: 'Grace' }, { amount: 200, who: 'Heidi' }],
        8: [{ amount: 350, who: 'Heidi' }, { amount: 100, who: 'Ivan' }],
        9: [{ amount: 450, who: 'Ivan' }, { amount: 150, who: 'Judy' }],
        10: [{ amount: 500, who: 'Judy' }, { amount: 200, who: 'Mallory' }],
        11: [{ amount: 600, who: 'Mallory' }, { amount: 100, who: 'Niaj' }],
        12: [{ amount: 700, who: 'Niaj' }, { amount: 150, who: 'Oscar' }],
        13: [{ amount: 800, who: 'Oscar' }, { amount: 200, who: 'Peggy' }],
        14: [{ amount: 900, who: 'Peggy' }, { amount: 100, who: 'Sybil' }],
        15: [{ amount: 1000, who: 'Sybil' }, { amount: 150, who: 'Trent' }],
        16: [{ amount: 1100, who: 'Trent' }, { amount: 200, who: 'Victor' }],
        17: [{ amount: 1200, who: 'Victor' }, { amount: 100, who: 'Walter' }],
        18: [{ amount: 1300, who: 'Walter' }, { amount: 150, who: 'Xavier' }],
        19: [{ amount: 1400, who: 'Xavier' }, { amount: 200, who: 'Yvonne' }],
        20: [{ amount: 1500, who: 'Yvonne' }, { amount: 100, who: 'Zara' }],
        21: [{ amount: 1600, who: 'Zara' }, { amount: 150, who: 'Alice' }],
        22: [{ amount: 1700, who: 'Alice' }, { amount: 200, who: 'Bob' }],
        23: [{ amount: 1800, who: 'Bob' }, { amount: 100, who: 'Charlie' }],
        24: [{ amount: 1900, who: 'Charlie' }, { amount: 150, who: 'David' }],
        25: [{ amount: 2000, who: 'David' }, { amount: 200, who: 'Eve' }],
        26: [{ amount: 2100, who: 'Eve' }, { amount: 100, who: 'Frank' }],
        27: [{ amount: 2200, who: 'Frank' }, { amount: 150, who: 'Grace' }],
        28: [{ amount: 2300, who: 'Grace' }, { amount: 200, who: 'Heidi' }],
        29: [{ amount: 2400, who: 'Heidi' }, { amount: 100, who: 'Ivan' }],
        30: [{ amount: 2500, who: 'Ivan' }, { amount: 150, who: 'Judy' }],
        31: [{ amount: 2600, who: 'Judy' }, { amount: 200, who: 'Mallory' }]
    };

    logo.addEventListener('click', () => {
        profileOverview.style.display = 'block';
        calendarContainer.style.display = 'none';
    });

    calendarIcon.addEventListener('click', () => {
        profileOverview.style.display = 'none';
        calendarContainer.style.display = 'block';
    });

    monthSelect.addEventListener('change', updateCalendar);

    function updateCalendar() {
        const daysInMonth = new Date(2024, parseInt(monthSelect.value) + 1, 0).getDate();
        calendarGrid.innerHTML = '';

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.innerHTML = `<div class="day-number">${day}</div>`;
            dayElement.addEventListener('click', () => showTransactions(day));
            calendarGrid.appendChild(dayElement);

            // Apply gradient color based on total amount spent
            const totalAmount = transactions[day]?.reduce((sum, t) => sum + t.amount, 0) || 0;
            const colorIntensity = Math.min(totalAmount / 5000, 1); // Adjust the divisor for scaling
            dayElement.style.backgroundColor = totalAmount ? `rgba(126, 202, 156, ${colorIntensity})` : 'var(--background-light)';
        }
    }

    function showTransactions(day) {
        transactionList.innerHTML = '';

        if (transactions[day]) {
            let totalAmount = 0;
            const categoryTotals = {
                food: 0,
                transport: 0,
                shopping: 0,
                entertainment: 0
            };

            transactions[day].forEach(transaction => {
                totalAmount += transaction.amount;
                const category = ['food', 'transport', 'shopping', 'entertainment'][Math.floor(Math.random() * 4)];
                categoryTotals[category] += transaction.amount;
                const transactionElement = document.createElement('div');
                transactionElement.innerHTML = `<p>Amount: ₹${transaction.amount}</p><p>Who: ${transaction.who}</p>`;
                transactionList.appendChild(transactionElement);
            });

            const totalElement = document.createElement('div');
            totalElement.innerHTML = `<p>Total Amount: ₹${totalAmount}</p>`;
            transactionList.appendChild(totalElement);

            // Add slider for category percentages
            const sliderContainer = document.createElement('div');
            sliderContainer.className = 'slider-container';
            Object.keys(categoryTotals).forEach(category => {
                const percentage = (categoryTotals[category] / totalAmount) * 100;
                const slider = document.createElement('div');
                slider.className = 'slider';
                slider.style.width = `${percentage}%`;
                slider.style.backgroundColor = {
                    food: '#FF6384',
                    transport: '#36A2EB',
                    shopping: '#FFCE56',
                    entertainment: '#4BC0C0'
                }[category];
                sliderContainer.appendChild(slider);
            });
            transactionList.appendChild(sliderContainer);
        } else {
            transactionList.innerHTML = '<p>No transactions</p>';
        }

        overlay.style.display = 'flex';
    }

    closeOverlayButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    function initializeCharts() {
        const ctxPie = document.getElementById('pie-chart').getContext('2d');
        const ctxLine = document.getElementById('line-chart').getContext('2d');

        // Aggregate data for the pie chart
        const categoryTotals = {
            food: 0,
            transport: 0,
            shopping: 0,
            entertainment: 0
        };

        Object.values(transactions).forEach(dayTransactions => {
            dayTransactions.forEach(transaction => {
                const category = ['food', 'transport', 'shopping', 'entertainment'][Math.floor(Math.random() * 4)];
                categoryTotals[category] += transaction.amount;
            });
        });

        const pieChart = new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: ['Food', 'Transport', 'Shopping', 'Entertainment'],
                datasets: [{
                    data: Object.values(categoryTotals),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Aggregate data for the line chart
        const dailyTotals = Array.from({ length: 31 }, (_, i) => {
            const day = i + 1;
            return transactions[day]?.reduce((sum, t) => sum + t.amount, 0) || 0;
        });

        const lineChart = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: Array.from({ length: 31 }, (_, i) => i + 1),
                datasets: [{
                    label: 'Amount Spent',
                    data: dailyTotals,
                    borderColor: '#FF6384',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Update summary
        const totalEarned = 50000; // Example data
        const totalSpent = dailyTotals.reduce((sum, amount) => sum + amount, 0);
        document.getElementById('total-earned').textContent = totalEarned;
        document.getElementById('total-spent').textContent = totalSpent;
        document.getElementById('available-money').textContent = totalEarned - totalSpent;
    }

    initializeCharts();
    updateCalendar(); // Initialize the calendar for the current month
});

function animateUsername(element, username) {
    let currentText = '';
    let currentIndex = 0;

    function animateLetter() {
        if (currentIndex < username.length) {
            let targetLetter = username[currentIndex];
            let currentLetter = 'a';
            let letterInterval = setInterval(() => {
                if (currentLetter <= targetLetter) {
                    currentText = currentText.slice(0, currentIndex) + currentLetter;
                    element.textContent = `Hi, ${currentText}`;
                    currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
                } else {
                    clearInterval(letterInterval);
                    currentIndex++;
                    animateLetter();
                }
            }, 50);
        }
    }

    animateLetter();
}

function animateUsername(element, username) {
    let currentText = '';
    let currentIndex = 0;

    function animateLetter() {
        if (currentIndex < username.length) {
            let targetLetter = username[currentIndex];
            let currentLetter = 'a';
            let letterInterval = setInterval(() => {
                if (currentLetter <= targetLetter) {
                    currentText = currentText.slice(0, currentIndex) + currentLetter;
                    element.textContent = `Hi, ${currentText}`;
                    currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
                } else {
                    clearInterval(letterInterval);
                    currentIndex++;
                    animateLetter();
                }
            }, 50);
        }
    }

    animateLetter();
}

function animateUsername(element, username) {
    let currentText = '';
    let currentIndex = 0;

    function animateLetter() {
        if (currentIndex < username.length) {
            let targetLetter = username[currentIndex];
            let currentLetter = 'a';
            let letterInterval = setInterval(() => {
                if (currentLetter <= targetLetter) {
                    currentText = currentText.slice(0, currentIndex) + currentLetter;
                    element.textContent = `Hi, ${currentText}`;
                    currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
                } else {
                    clearInterval(letterInterval);
                    currentIndex++;
                    animateLetter();
                }
            }, 50);
        }
    }

    animateLetter();
}
function animateUsername(element, username) {
    let currentText = '';
    let currentIndex = 0;

    function animateLetter() {
        if (currentIndex < username.length) {
            let targetLetter = username[currentIndex];
            let currentLetter = 'a';
            let letterInterval = setInterval(() => {
                if (currentLetter <= targetLetter) {
                    currentText = currentText.slice(0, currentIndex) + currentLetter;
                    element.textContent = `Hi, ${currentText}`;
                    currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
                } else {
                    clearInterval(letterInterval);
                    currentIndex++;
                    animateLetter();
                }
            }, 50);
        }
    }

    animateLetter();
}