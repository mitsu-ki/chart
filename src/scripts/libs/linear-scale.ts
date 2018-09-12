interface Scales {
  min: number;
  max: number;
  steps: number;
}

const defaultStep: number = 6;

function linear_scale(dataset, options) {
  let scales: Scales = {
    min: options.min ? options.min : Math.min(...dataset),
    max: options.max ? options.max : Math.max(...dataset),
    steps: options.steps ? options.steps : defaultStep
  };

  return scales;
}

export default linear_scale;
