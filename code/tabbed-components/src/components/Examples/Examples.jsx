import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import TabButton from "../TabButton.jsx";
import Section from "../Section.jsx";
import Tabs from "../Tabs.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const ButtonsComponent = () => (
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        onClick={() => handleSelect("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => handleSelect("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onClick={() => handleSelect("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onClick={() => handleSelect("state")}
      >
        State
      </TabButton>
    </>
  );

  /** This is how you handle 'Multiple JSX slots'
   * Pass in tabContent as the children, and tab buttons as a component in props
   *
   */
  return (
    <Section title={"Examples"} id="examples">
      {/* 
      Pass in built-in html containers as string
      Could also pass in React component "function name" ex) buttonsContainer={Section} 
      */}
      <Tabs buttons={<ButtonsComponent />} buttonsContainer={"menu"}>
        {tabContent}
      </Tabs>
    </Section>
  );
}
