import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import '../../css/AppStyle.css';
import FilterForm from './FilterForm';
import { countBy } from 'lodash';

var fn = function () {
  /* do you want */  
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      imgs: [
        "./harpal-singh-RWhqcGJevnI-unsplash.jpg", 
        "./kira-auf-der-heide-1k9KYt4QDCw-unsplash.jpg", 
        "./max-bender-QdmT9XvjgH8-unsplash.jpg",
        "./xavi-cabrera-frbCzHFLwvU-unsplash.jpg",
      ]
    };
    this.updateImages = this.updateImages.bind(this);
  }
  
  componentDidMount() {
    this.setState({ loaded: true });
  }

  updateImages(products) {
    const imgs = products.reduce((img, o) => (img.push(o.image), img), []) 
    this.setState({imgs});
  } 
  
  render() {
    
    const { series } = this.props;
    const { loaded } = this.state;

    const settings = {
      width: 960,
      height: 480,
      displayQuantityOfSide: 2,
      navigation: false,
      enableHeading: false,
      clickable: true,
      active: 0,
      enableScroll: false,
    };

    let extraItems = this.state.imgs.slice(1);
    const listImages = extraItems.map((img, index) => 
      <img src={img} key={index} alt={index + 2} />
    );

    return (
      <div className="App">
        <FilterForm onUpdateImages = {this.updateImages}>        
        </FilterForm>
        <Coverflow {...settings}
          media={{
            '@media (max-width: 900px)': {
              width: '600px',
              height: '300px'
            },
            '@media (min-width: 900px)': {
              width: '960px',
              height: '600px'
            }
          }}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img
              src= {this.state.imgs[0]}
              alt='1'
              style={{ display: 'block', width: '100%' }}
              data-action="#"
            />
          </div>
          {listImages}
        </Coverflow>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
export default App;
