document.addEventListener("DOMContentLoaded", function() {
    // Exemplo de contagem regressiva
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 horas a partir de agora

    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "A manutenção foi concluída!";
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Retornaremos em ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
});
