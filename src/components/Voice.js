import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Voice;

// import React, { useEffect, useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// export default function Voice() {
  
//   const [message, setMessage] = useState('');
//  const commands = [
//    {
//      command: 'reset',
//      callback: () => resetTranscript()
//    },
//    {
//      command: 'shut up',
//      callback: () => setMessage('I wasn\'t talking.')
//    },
//    {
//      command: 'Hello',
//      callback: () => setMessage('Hi there!')
//    },
//  ]
//  const {
//    transcript,
//    interimTranscript,
//    finalTranscript,
//    resetTranscript,
//    listening,
//  } = useSpeechRecognition({ commands });

//  useEffect(() => {
//    if (finalTranscript !== '') {
//      console.log('Got final result:', finalTranscript);
//    }
//  }, [interimTranscript, finalTranscript]);
//  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//    return null;
//  }

//  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
//  }
//  const listenContinuously = () => {
//    SpeechRecognition.startListening({
//      continuous: true,
//      language: 'en-GB',
//    });
//  };
//  return (
//    <div>
//      <div>
//        <span>
//          listening:
//          {' '}
//          {listening ? 'on' : 'off'}
//        </span>
//        <div>
//          <button type="button" onClick={resetTranscript}>Reset</button>
//          <button type="button" onClick={listenContinuously}>Listen</button>
//          <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
//        </div>
//      </div>
//      <div>
//        {message}
//      </div>
//      <div>
//        <span>{transcript}</span>
//      </div>
//    </div>
//  );
// }


// // const Voice = () => {
// //  const [message, setMessage] = useState('');
// //  const commands = [
// //    {
// //      command: 'reset',
// //      callback: () => resetTranscript()
// //    },
// //    {
// //      command: 'shut up',
// //      callback: () => setMessage('I wasn\'t talking.')
// //    },
// //    {
// //      command: 'Hello',
// //      callback: () => setMessage('Hi there!')
// //    },
// //  ]
// //  const {
// //    transcript,
// //    interimTranscript,
// //    finalTranscript,
// //    resetTranscript,
// //    listening,
// //  } = useSpeechRecognition({ commands });

// //  useEffect(() => {
// //    if (finalTranscript !== '') {
// //      console.log('Got final result:', finalTranscript);
// //    }
// //  }, [interimTranscript, finalTranscript]);
// //  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
// //    return null;
// //  }

// //  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
// //    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
// //  }
// //  const listenContinuously = () => {
// //    SpeechRecognition.startListening({
// //      continuous: true,
// //      language: 'en-GB',
// //    });
// //  };
// //  return (
// //    <div>
// //      <div>
// //        <span>
// //          listening:
// //          {' '}
// //          {listening ? 'on' : 'off'}
// //        </span>
// //        <div>
// //          <button type="button" onClick={resetTranscript}>Reset</button>
// //          <button type="button" onClick={listenContinuously}>Listen</button>
// //          <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
// //        </div>
// //      </div>
// //      <div>
// //        {message}
// //      </div>
// //      <div>
// //        <span>{transcript}</span>
// //      </div>
// //    </div>
// //  );
// // };

// // export default Voice;