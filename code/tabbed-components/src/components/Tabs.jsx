export default function Tabs({ buttons, buttonsContainer, children }) {
  // Put container prop into capital case React component
  // Will be rendered normally
  const ButtonsComponent = buttonsContainer;

  return (
    <>
      <ButtonsComponent>{buttons}</ButtonsComponent>
      {children}
    </>
  );
}
