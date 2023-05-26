import ListGroups from "./Components/ListGroups";
import Buttons from "./Message";
function App() {
  let items = ["london", "paris", "newyork"];
  let ButtonPriority = "button number";
  const ClickHandler = (Displayer: string) => {
    console.log(Displayer);
  };

  const handleEvent = (item: string) => {
    console.log(item + 22);
  };
  const AlertRemover = (alerthand: bool) => {
    alerthand = false;
  };

  return (
    <div>
      <ListGroups items={items} heading="Cities" onSelectItem={handleEvent} />

      <Buttons
        ButtonText={ButtonPriority}
        Clicked={ClickHandler}
        AlertRemover={}
      />
    </div>
  );
}

export default App;
