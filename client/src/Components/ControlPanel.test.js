import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './ControlPanel';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import {expect} from 'chai'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ControlPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('When the Control Panel component renders with rotate flag = false ...', () => {
  const testUpdateRotate = () => {}
  const wrapper = shallow(<ControlPanel rotate={false} updateRotate={testUpdateRotate} />)
  it('then it has the correct structure', () => {
    expect(wrapper.find('div#d1')).to.have.length(1);
  })
  it('then the button text is "Rotate"', () => {
    expect(wrapper.find('button#rotate').text()).to.equal('Rotate')
  })
})

describe('When the rotate button is clicked ...', () => {
  it('the update rotate function passed down from the App is called', (done) => {
    const testUpdateRotate = () => {
      done()
    }
    const wrapper = shallow(<ControlPanel rotate={false} updateRotate={testUpdateRotate} />)
    // wrapper.instance().updateRotateHandler()
    wrapper.find('button#rotate').simulate('click');
  })
})
