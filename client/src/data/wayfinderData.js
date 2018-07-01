/*
This is the content for the Wayfinder questions and answer options.
The user's responses are logged via the options.goto value in Wayfinder.state.usersPath.
Every options.goto value must be UNIQUE. When ammending the data, please keep this in mind. The wayfinderData.test will throw an error if there are any resulting errors.
Every unique result ending in a FORM component must have a unique 'complete-form' goto.value (ie 'complete-form2', 'complete-form3' etc.)
Stubs with no further questions are marked as 'leaf' (In the flow chart tree, a leaf is a stub that has no possible further branches.)
*/
const wayfinder = {
  start: {
    question: 'Are you experiencing any chest pain?',
    options: [
      { answer: 'yes', goto: 'emergency-message' },
      { answer: 'no', goto: 'temperature-question' }
    ]
  },
  'temperature-question': {
    question: 'Do you have a temperature above 37.5 degrees Celcius?',
    options: [
      { answer: 'yes', goto: 'emergency-message' },
      { answer: 'no', goto: 'infection-question' }
    ]
  },
  'infection-question': {
    question: 'Do you have any signs of infection? These include a cough, shivering, or pain when passing urine',
    options: [
      { answer: 'yes', goto: 'otherwise-well-question' },
      { answer: 'no', goto: 'severe-grid' }
    ]
  },
  'otherwise-well-question': {
    question: 'Make sure to monitor your temperature regularly. Do you feel otherwise well?',
    options: [
      { answer: 'yes', goto: 'severe-grid' },
      { answer: 'no', goto: 'emergency-message' }
    ]
  },
  'severe-grid': {
    question: 'Have you experienced any of the following symptoms: shortness of breath, rash, bleeding, or problems with mobility?',
    options: [
      { answer: 'yes', goto: 'call-message' },
      { answer: 'no', goto: 'diarrhoea-question' }
    ]
  },
  'diarrhoea-question': {
    question: 'Have you had more than four episodes of diarrhoea in the last 24 hours?',
    options: [
      { answer: 'yes', goto: 'call-message' },
      { answer: 'no', goto: 'diarrhoea-message' }
    ]
  },
  'diarrhoea-message': {
    question: 'Keep hydrated by drinking plenty of fluids. If you\'ve previously been advised to take antidiarrhoeal medication, please do so\
    If you have been on immunotherapy, please call your healthcare team for advice. If your symptoms evolve, please call your healthcare team for advice.',
    options: [
      { answer: 'OK', goto: 'eating-question' },
    ]
  },
  'eating-question': {
    question: 'Are you unable to eat or had more than 1 episode of vomiting in the last 24 hours?',
    options: [
      { answer: 'yes', goto: 'call-message' },
      { answer: 'no', goto: 'eating-message' }
    ]
  },
  'eating-message': {
    question: 'Ensure you are taking your anti-sickness drugs regularly, and that you are drinking plenty of fluids',
    options: [
      { answer: 'OK', goto: 'constipation-question' },
    ]
  },
  'constipation-question': {
    question: 'Have you had stomach pain, and passed NO stool in the last 48 hours?',
    options: [
      { answer: 'yes', goto: 'call-message' },
      { answer: 'no', goto: 'constipation-advice' }
    ]
  },
  'constipation-advice': {
    question: 'Increase fluid intake and take a laxative if you\'ve been prescribed one',
    options: [
      { answer: 'OK', goto: 'pain-question' },
    ]
  },
  'pain-question': {
    question: 'Have you had pain that interferes with your normal activities?',
    options: [
      { answer: 'yes', goto: 'call-message' },
      { answer: 'no', goto: 'pain-advice' }
    ]
  },
  'pain-advice': {
    question: 'Take regular analgaesia as prescribed. If thi is insufficient, please call for advice. \
    If your symptoms evolve, please call your healthcare team for advice',
    options: [
      { answer: 'OK', goto: 'final-message' },
    ]
  },
  'emergency-message': {
    result: `You are at risk. Go to your nearest Accident and Emergency department. If you can\'t get to the hospital for assessment, call 999.`,
    leaf: true
  },
  'call-message': {
    result: `You need to call the chemo line for further assessment. Please call 07846464749`,
    leaf: true
  },
  'final-message': {
    result: `The self-triage is over. If you are experiencing symptoms that were not mentioned, please contact your healthcare team for advice.`,
    leaf: true
  },
};
export default wayfinder;
