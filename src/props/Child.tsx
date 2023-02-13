interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

// This approach doesn't tell TypeScript that this is a React functional component
// Can use this if you don't plan on using additional function properties like 'DisplayName'
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// Few advantages of using this approach
// Tells TypeScript that 'Child' will be a React function component
// 'Child' might have properties assigned to it like 'propTypes' and 'contextTypes'
// 'Child' will receive props of type 'ChildProps'
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
ChildAsFC.displayName = 'Child';
