import { shallow } from 'enzyme';
import Calculator from "../Calculator";

describe('Calculator Component', () => {
  it('should render the component correctly', () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sum for empty value', () => {
    const wrapper = shallow(<Calculator />);

    const inputWrapper = wrapper.find('Input').dive();
    const input = inputWrapper.find('input');
    input.simulate('change', { target: { value: '' } });

    const buttonWrapper = wrapper.find('Button').dive();
    const button = buttonWrapper.find('button');
    button.simulate('click');

    const calculatorOutputWrapper = wrapper.find('CalculatorOutput').dive();
    expect(calculatorOutputWrapper.find('.calculator-output div').text()).toContain('Result: 0');
  });

  it('sum for single number', () => {
    const wrapper = shallow(<Calculator />);

    const inputWrapper = wrapper.find('Input').dive();
    const input = inputWrapper.find('input');
    input.simulate('change', { target: { value: '2' } });

    const buttonWrapper = wrapper.find('Button').dive();
    const button = buttonWrapper.find('button');
    button.simulate('click');

    const calculatorOutputWrapper = wrapper.find('CalculatorOutput').dive();
    expect(calculatorOutputWrapper.find('.calculator-output div').text()).toContain('Result: 2');
  });
});
