/**
 * Implementa o efeito ping-pong em vídeos
 * Faz o vídeo tocar para frente e depois para trás, criando um loop suave
 */

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os vídeos que devem ter o efeito ping-pong
  const pingPongVideos = document.querySelectorAll('.video-pingpong video');
  
  pingPongVideos.forEach(video => {
    // Armazena a duração original do vídeo
    let originalDuration = 0;
    let isReversed = false;
    
    // Quando o vídeo estiver carregado, configura o efeito ping-pong
    video.addEventListener('loadedmetadata', () => {
      originalDuration = video.duration;
      console.log(`Vídeo carregado, duração: ${originalDuration}s`);
    });
    
    // Monitora o progresso do vídeo para implementar o efeito ping-pong
    video.addEventListener('timeupdate', () => {
      const currentTime = video.currentTime;
      
      // Se o vídeo estiver tocando normalmente e chegou perto do final
      if (!isReversed && currentTime >= originalDuration - 0.1) {
        // Pausa o vídeo
        video.pause();
        // Marca como modo reverso
        isReversed = true;
        // Adiciona classe para efeito visual (opcional)
        video.classList.add('video-reverse');
        
        // Configura um intervalo para tocar o vídeo ao contrário
        const reverseInterval = setInterval(() => {
          // Diminui o tempo atual para tocar ao contrário
          video.currentTime -= 0.05;
          
          // Se chegou ao início do vídeo
          if (video.currentTime <= 0.1) {
            // Limpa o intervalo
            clearInterval(reverseInterval);
            // Remove a classe de efeito visual
            video.classList.remove('video-reverse');
            // Marca como modo normal
            isReversed = false;
            // Inicia o vídeo novamente
            video.play();
          }
        }, 30); // Ajuste este valor para controlar a velocidade da reversão
      }
    });
    
    // Inicia o vídeo
    video.play();
  });
}); 