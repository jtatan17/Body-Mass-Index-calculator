const metricCircleContainer = document.getElementById('metricCircleContainer');
const imperialCircleContainer = document.getElementById('imperialCircleContainer');
const inputHeight = document.getElementById('HeightInputElement');
const inputWeight = document.getElementById('WeightInputElement');
const parametersMetric = document.querySelector('.parametersMetric');
const parametersImperial = document.querySelector('.parametersImperial');

metricCircleContainer.addEventListener('click', function () {
  metricCircleContainer.classList.add('active');
  imperialCircleContainer.classList.remove('active');
  // inputHeight.placeholder = 'cm';
  // inputWeight.placeholder = 'kg';
  parametersImperial.classList.add('hidden');
  parametersMetric.classList.remove('hidden');
});

imperialCircleContainer.addEventListener('click', function () {
  imperialCircleContainer.classList.add('active');
  metricCircleContainer.classList.remove('active');
  // inputHeight.placeholder = 'in';
  // inputWeight.placeholder = 'lbs';
  parametersImperial.classList.remove('hidden');
  parametersMetric.classList.add('hidden');
  
});
