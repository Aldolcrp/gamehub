const questions = [
    {
        question: "Apa ibukota Indonesia?",
        options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        answer: "Jakarta"
    },
    {
        question: "Siapakah presiden pertama Indonesia?",
        options: ["Soeharto", "Soekarno", "B.J. Habibie", "Joko Widodo"],
        answer: "Soekarno"
    },
    {
        question: "Berapa hasil dari 8 x 8?",
        options: ["56", "64", "72", "80"],
        answer: "64"
    },
    {
        question: "Planet terdekat dengan Matahari adalah...",
        options: ["Venus", "Mars", "Merkurius", "Bumi"],
        answer: "Merkurius"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionButtons = [
    document.getElementById('btn0'),
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3')
];
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        questionEl.textContent = "Kuis Selesai!";
        optionButtons.forEach(btn => btn.style.display = 'none');
        resultEl.textContent = `Skor Akhir Anda: ${score}`;
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    resultEl.textContent = "";

    optionButtons.forEach((btn, index) => {
        btn.textContent = currentQuestion.options[index];
        btn.style.backgroundColor = '#3498db';
        btn.disabled = false;
        btn.onclick = () => checkAnswer(currentQuestion.options[index], currentQuestion.answer, btn);
    });
}

function checkAnswer(selected, correct, btn) {
    optionButtons.forEach(button => button.disabled = true); // Disable all buttons

    if (selected === correct) {
        score++;
        scoreEl.textContent = score;
        resultEl.textContent = "Benar!";
        btn.style.backgroundColor = '#2ecc71'; // Green
    } else {
        resultEl.textContent = `Salah! Jawaban yang benar adalah ${correct}`;
        btn.style.backgroundColor = '#e74c3c'; // Red
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000); // Wait 2 seconds before next question
}

loadQuestion();