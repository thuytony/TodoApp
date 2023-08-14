interface ColorType {
  primary: string,
  secondary: string,
  border: string,
  backdrop: string,
  text: string,
  textSecondary: string,
  error: string,
  background: string,

};

// light mode
const ColorsLight: ColorType = {
  'primary':          '#2196F3',
  'secondary':        '#2196F3',
  'border':           '#C4C4C4',
  'backdrop':         'rgba(0, 0, 0, 0.6)',
  'text':             'black',
  'textSecondary':    '#696969',
  'error':            'red',
  'background':       'white',
};

// dark mode
const ColorsDark: ColorType = {
  'primary':          '#2196F3',
  'secondary':        '#2196F3',
  'border':           '#C4C4C4',
  'backdrop':         'rgba(0, 0, 0, 0.6)',
  'text':             'black',
  'textSecondary':    '#696969',
  'error':            'red',
  'background':       'white',
};


export { ColorsLight, ColorsDark };
export type { ColorType };

