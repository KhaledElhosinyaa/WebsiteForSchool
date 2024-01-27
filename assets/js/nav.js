const sentences = [
    "Equip students with the tools and skills needed to innovate, empowering them to tackle complex problems and create meaningful solutions.",
    "Inspire students to embrace challenges as opportunities for growth and innovation.",
    "Encourage collaboration and interdisciplinary thinking."
  ];
  const typingDelay = 100; // Delay between each character
  const sentenceDelay = 2000; // Delay between sentences
  
  const typewriterElement = document.getElementById('typewriter');
  let sentenceIndex = 0;
  let charIndex = 0;
  
  function typeSentence() {
    if (charIndex < sentences[sentenceIndex].length) {
      typewriterElement.textContent += sentences[sentenceIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeSentence, typingDelay);
    } else {
      setTimeout(eraseSentence, sentenceDelay);
    }
  }
  
  function eraseSentence() {
    if (charIndex > 0) {
      typewriterElement.textContent = sentences[sentenceIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseSentence, typingDelay);
    } else {
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      setTimeout(typeSentence, typingDelay);
    }
  }
  
  // Start the typewriter effect
  setTimeout(typeSentence, 1000);
  