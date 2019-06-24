import React, { Component } from 'react';
import apiResults from './api-results.json';
import Search from './components/Search/Search.jsx';
import Table from './components/Table/Table.jsx';
import List from './components/List/List.jsx';
import Button from './components/Button/Button.jsx';
import axios from 'axios';
import './App.css';

const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
let count = []
let obj = {
 key: 'value',
 key2: 2
};
let obj2 = {
  0: 'value0',
  1: 'value1'
}
let string = 'h'
let addNew = () => {
  count = count + string
            console.log('count', count)
    return count
}
let add2 = function (self) {
  count = count + string
  console.log('count', count)
  return count
}
add2()
obj.key3 = 2
obj.key4 = []
// obj2 = {}
obj2.key = 'string'
obj2['key'] = 'string'
console.log(obj2['key']);
const objKeys = Object.keys(obj2)
console.log('objKeys', objKeys)
for (let index = 0; index < objKeys.length; index++) {
  const element = obj2[objKeys[index]];
  console.log(element);
  
}
console.log('obj2', obj2)
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newStories: [],
      newList: []
    }
  }

  componentDidMount() {
    instance.get('newstories.json')
      .then(response => {
        console.log('response', response)
        this.setState({ newStories: response.data })
        return null
      })
      .catch(err => console.log('err in catch ==', err))
  }

  method = () => {
    let num
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      num += 4
    }
    return 4;
  }
  render() {
    const { newStories } = this.state;
    console.log('newStories', newStories)
    const list = apiResults.hits || [];

    return (
      <div className="page">
        <List></List>
        <div className="interactions">
          <Search name={'Grant'} title={'Search'} />
        </div>
        <Table
          list={list}
          sortKey={'NONE'}
        />
        <div className="interactions">
          <Button
            className="ButtonWithLoading"
          >
            More
          </Button>
        </div>
{this.method() }
        <div
          onDoubleClick={(event) => { console.log('e', event.currentTarget) }}
          style={
            {
              backgroundColor: 'red',
              width: '300px'
            }
          }  >

          Click Me
        </div>
let fnName= ( ) => {}
        <div className="list-container">
           {newStories.map((storyId) => {
             return (<p>{storyId }</p>)
          })} 

       
        </div>
      </div>
    );
  }
}

export default App;
