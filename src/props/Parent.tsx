import { Child } from './Child';

const Parent = () => {
  return <Child color="yellow" onClick={() => console.log('Clicked')}></Child>;
};

export default Parent;
