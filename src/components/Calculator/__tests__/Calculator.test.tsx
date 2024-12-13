import { shallow, ShallowWrapper } from 'enzyme';
import Calculator from "../Calculator";

describe('Calculator Component', () => {
  let wrapper: ShallowWrapper;

  // Helper function to simulate user input and click
  const simulateInputAndClick = (inputValue: string): void => {
    const inputWrapper = wrapper.find('Input').dive();
    const input = inputWrapper.find('input');
    input.simulate('change', { target: { value: inputValue } });

    const buttonWrapper = wrapper.find('Button').dive();
    const button = buttonWrapper.find('button');
    button.simulate('click');
  };

  // Helper function to get the output text
  const getOutputText = (): string => {
    const calculatorOutputWrapper = wrapper.find('CalculatorOutput').dive();
    return calculatorOutputWrapper.find('.calculator-output div').text();
  };

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it('should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('sum for empty value', () => {
    simulateInputAndClick('');
    expect(getOutputText()).toContain('Result: 0');
  });

  it('sum for single number', () => {
    simulateInputAndClick('2');
    expect(getOutputText()).toContain('Result: 2');
  });

  it('sum of 2 number', () => {
    simulateInputAndClick('1,2');
    expect(getOutputText()).toContain('Result: 3');
  });

  it('sum of multiple numbers', () => {
    simulateInputAndClick('1,2,3,4');
    expect(getOutputText()).toContain('Result: 10');
  });

  it('should handle newlines as a delimiter', () => {
    simulateInputAndClick('1\n2,3');
    expect(getOutputText()).toContain('Result: 6');
  });

  it('should handle newlines as a delimiter', () => {
    simulateInputAndClick('1\n2,3');
    expect(getOutputText()).toContain('Result: 6');
  });

  it('should support custom delimiter', () => {
    simulateInputAndClick("//;\n1;2;3");
    expect(getOutputText()).toContain('Result: 6');
  });

  it('should show all negative numbers in the error message', () => {
    simulateInputAndClick("1,-2,3,-4");
    expect(getOutputText()).toContain('Error: Negative numbers not allowed -2,-4');
  });
});
