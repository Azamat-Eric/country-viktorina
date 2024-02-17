// Check if the browser supports the Web Speech API
if ('webkitSpeechRecognition' in window) {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = function(event) {
      var transcript = event.results[event.resultIndex][0].transcript;
      console.log(transcript);
    };
    recognition.start();
  }

  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'hello': function() { alert('Hello world!'); },
      'goodbye': function() { alert('Goodbye world!'); }
    };
      // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

