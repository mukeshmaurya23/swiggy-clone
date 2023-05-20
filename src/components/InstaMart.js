import { useState } from "react";

const Section = ({
  name,
  description,
  isVisible,

  toggleVisibility,
}) => {
  return (
    <>
      <div className="section">
        <div className="section-title">
          <h2>{name}</h2>
        </div>
        <div className="section-description">
          {isVisible && <p>{description}</p>}
        </div>
        <div className="section-button">
          {isVisible ? (
            <button onClick={() => toggleVisibility()}>Hide</button>
          ) : (
            <button onClick={() => toggleVisibility()}>Show</button>
          )}
        </div>
      </div>
    </>
  );
};

const InstaMart = () => {
  const [isVisible, setIsVisible] = useState("-1");

  const toggleVisibility = (id) => {
    if (isVisible === id) {
      setIsVisible("-1");
    } else {
      setIsVisible(id);
    }
  };

  return (
    <>
      <Section
        id="1"
        name="Grocery"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={isVisible === "1"}
        toggleVisibility={() => toggleVisibility("1")}
      />
      <Section
        id="2"
        name="Fruits & Vegetables"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={isVisible === "2"}
        toggleVisibility={() => toggleVisibility("2")}
      />
      <Section
        id="3"
        name="Big Bazar"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={isVisible === "3"}
        toggleVisibility={() => toggleVisibility("3")}
      />
      <Section
        id="4"
        name="Pharmacy"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={isVisible === "4"}
        toggleVisibility={() => toggleVisibility("4")}
      />
    </>
  );
};
export default InstaMart;
