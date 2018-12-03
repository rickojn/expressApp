import React from 'react';
import ReactDOM from 'react-dom';
import TopBit from './TopBit';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import {expect} from 'chai'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopBit />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('When the component is rendered with rotate = false ....', () => {
  const wrapper = shallow(<TopBit rotate={false} />)
  it('the image does not rotate ...', () => {
    // console.log(wrapper.find('header')).getElements()
    expect(wrapper.find('img').props().className).to.equal('App-logo-dont-rotate')
  })
})

describe('When the component is rendered with rotate = true', () =>{
  it('then the image does rotate', () =>{
    const wrapper = shallow(<TopBit rotate={true} />)
    expect(wrapper.find('img').props().className).to.equal('App-logo')
  })
})




