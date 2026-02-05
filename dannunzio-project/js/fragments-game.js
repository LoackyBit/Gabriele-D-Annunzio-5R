document.addEventListener('DOMContentLoaded', () => {
    const fragments = [
        {
            id: 1,
            title: "L'Agonia del Crisoberillo",
            text: `Egli restava assorto e inerte d'innanzi al tripode di bronzo, ove la lenta combustione dei grani orientali esalava una nuvola di fumo azzurrognolo e denso. L'aria della stanza, saturata da quel vapore di sandalo, pareva quasi cristallizzarsi intorno ai mobili di ebano e d'avorio, in una sospensione di tempo inaudita e vana. Egli, l'uomo d'intelletto vorace di sensazioni rare, accarezzava col pollice la superficie di un crisoberillo incastonato in un anello di foggia bizantina, sentendo sotto i polpastrelli la freddezza della pietra farsi quasi tiepida per il contatto della sua carne. Un brivido sottile, simile a un richiamo lontano, gli percorse l'anima: tra le spire evanescenti del fumo, egli cercava invano di ricomporre il fantasma d'una voluttà perduta, assaporando l'amarezza squisita d'un desiderio che, privo ormai d'oggetto, finiva per divorare dolcemente se stesso.`,
            isAI: true,
            feedback: "✓ CORRETTO! Questo frammento è stato generato dall'IA. Notare l'eccessiva ricercatezza lessicale e la costruzione troppo perfetta della prosa decadente.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdGrO5C4uGWHfpH9JWkL4LFshR8y8AEtKQWzkYhRVJsD5gg7ZTLcjLgCH-k8NcSCXbJwg-ldD8EGV2y_IYJ2MQQEfiXRrC1nJ81DchUfQHir0b0jrJkcwSo6QsO60NffKueERFF8mBAleH6gMzA2NoOHnIAKG4vdC9zu2-wLMW4IG9ZavGBEzokoAElNQkCXvoPxfBqUSGO7QS4TXXZoNrpdkMvqwXK-WdjlmA6c3hLWc2Du1KmkcU--1PuIMkts3udmtHZ7Fs_Xvt"
        },
        {
            id: 2,
            title: "Donna Ippolita",
            text: `Avrebbe voluto affrontarlo sùbito, in quello stesso giorno, in quella stessa ora, senza altro indugio, per godere una duplice vittoria e per mordere quindi al frutto che gli offriva la mano di Donna Ippolita. Tutto il suo essere accendevasi d'orgoglio selvaggio, al pensiero di posseder quella bianca e superba donna per diritto di conquista violenta. L'imaginazione gli fingeva un gaudio non mai provato, quasi direi una voluttà d'altri tempi, quando i gentiluomini scioglievano i capelli delle amasie con mani omicide e carezzevoli, affondandovi la fronte ancóra grondante per la fatica dell'abbattimento e la bocca ancóra amara delle profferte ingiurie. Egli era invaso da quella inesplicabile ebrezza che dànno a certi uomini d'intelletto l'esercizio della forza fisica, l'esperimento del coraggio, la rivelazione della brutalità.`,
            isAI: false,
            feedback: "✗ ERRATO! Questo è un frammento autentico da 'Il Piacere' di Gabriele D'Annunzio.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbHej-kr_4W3gKpz63Jic5fR0MixBpVGiI22jaNuQc6Oigq2DveJU1s4VUx09LBfAVy-Es0rNJq8rVMQZIChbGM1DGhUv5w0YXEHBJWbvrEeEW73x8UZwNyiCFhpX7outwVPA9n5M4xBN7lC4fdl3uU-_ADKsFZUbLr7z5MWGnUpUu1ZuXn6pmjOX0uWJzS0nejFHoAVSg3F5lobhJ8ou6sMdZyCJgvFEBkzOmJDoO1TJ1i5zx1JStnq_UYwMPoXmszX1ZqGTswqMv"
        },
        {
            id: 3,
            title: "La notte",
            text: `Andrea si mise su per la scala. Al primo ripiano si soffermò, attirato dal tintinnio dei sonagli, che s'avvicinava. Veramente, egli si sentiva un po' stanco; a anche un po' triste, in fondo al cuore. Dopo la fierezza suscitatagli nel sangue da quel colloquio di scienza d'arme e dal ricordo della sua bravura, una specie d'inquietudine l'invadeva, non bene distinta, mista di dubbio e di scontento. I nervi, troppo tesi in quella giornata violenta e torbida, gli si rilassavano ora, sotto la clemenza della notte primaverile. - Perché, senza passione, per puro capriccio, per sola vanità, per sola prepotenza, erasi egli compiaciuto di sollevare un odio e di rendere dolorosa l'anima di un uomo? - Il pensiero della orribile pena che certo doveva affliggere il suo nemico, in una notte così dolce, gli mosse quasi un senso di pietà.`,
            isAI: false,
            feedback: "✗ ERRATO! Questo è un frammento autentico da 'Il Piacere' di Gabriele D'Annunzio.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK_ugJlaNj8fCs6WzeRM18z8MI4KZcWQtEIWTDXuKhQ-mXDOVG4A-IifFpTaLfDj0cIHJOABwx-UFHLU6QTDU4mR4aonzCuU3pQFiAyOv_LC2QbXNzGzbJu6TmAUKag94FH-B9x82ivBacCzVO3OPSZm_g0H6VYg0xe1mna4I1fZKP6CVT7wVoPZ60d3aNa8BbXGWIM7ru5SpWh8-csMcbDzCeIi4bYave_lyksoLCfZ5Rh0h6n1Sas8yt2o8ZiRm19IW05hvx17hU"
        }
    ];

    const container = document.getElementById('fragments-container');
    const scoreDisplay = document.getElementById('game-score');
    const scoreValue = document.getElementById('score-value');
    let score = 0;

    if (container) {
        fragments.forEach(frag => {
            const card = document.createElement('div');
            card.className = 'fragment-card fade-in-up';

            card.innerHTML = `
                <div class="card-header" style="background-image: url('${frag.image}')">
                    <h3 class="card-title">${frag.title}</h3>
                </div>
                <div class="card-body">
                    <div class="fragment-text">
                        "${frag.text}"
                    </div>
                    <div class="card-actions">
                        <button class="btn-game" data-id="${frag.id}" data-is-ai="${frag.isAI}">
                            Questo è generato dall'IA
                        </button>
                        <div class="feedback-msg" id="feedback-${frag.id}"></div>
                    </div>
                </div>
            `;

            container.appendChild(card);

            // Add event listener to button
            const btn = card.querySelector('.btn-game');
            btn.addEventListener('click', function() {
                handleGuess(this, frag);
            });
        });
    }

    function handleGuess(btn, fragment) {
        const feedbackEl = document.getElementById(`feedback-${fragment.id}`);
        const card = btn.closest('.fragment-card');

        // Disable button
        btn.disabled = true;
        btn.style.opacity = '0.5';

        // Show feedback
        feedbackEl.textContent = fragment.feedback;
        feedbackEl.style.display = 'block';

        if (fragment.isAI) {
            // Correct guess (it IS AI, and user clicked "This is AI")
            // Wait, the button says "Questo è generato dall'IA".
            // If the user clicks it, they are asserting it IS AI.
            // If fragment.isAI is true, they are correct.
            feedbackEl.classList.add('success');
            card.classList.add('correct');
            score += 100;
            scoreValue.textContent = score;
            scoreDisplay.classList.remove('hidden');
            scoreDisplay.classList.add('animate-pulse');
        } else {
            // Incorrect guess (It is NOT AI, but user clicked it is)
            feedbackEl.classList.add('error');
            card.classList.add('wrong');
            card.classList.add('animate-shake');
        }
    }
});
