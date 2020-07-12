export default {
  title: 'Demo',
};

export const DynamicText = () => `<div>This text is dynamic and should be ignored: <span style="color: red" class="ignore-this">${Date.now()}</span></div>`;

DynamicText.story = {
  name: 'Dynamic text with ignore region',
  parameters: {
    eyes: {
      ignoreRegions: [{selector: '.ignore-this'}]
    }
  }
}


export const StaticText = () => `<div>This text is static and should <b>not</b> be ignored: <span style="color: red" class="ignore-this">1594565350172</span></div>`;

StaticText.story = {
  name: 'Static text without ignore region',
}

export const Heading = () => '<h1>Hello World</h1>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};
