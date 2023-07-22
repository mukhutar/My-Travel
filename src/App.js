import data from './data';
import './App.css';
import Content from './content';

function App() {
  const ContentItem = data.map((item)=>{
    return(
      <Content
      {...item}
      />
    )
  })
  return (
    <div>
      {ContentItem}
    </div>
  );
}

export default App;
