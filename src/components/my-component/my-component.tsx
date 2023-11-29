import { Component, Prop, Watch, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop({ reflect: true }) myValue = 'My Value';

  @Watch('myValue')
  myValueChangeHandler(newValue: string, oldValue: string) {
    console.log('myValueChangeHandler', newValue, oldValue);
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    const myValue = this.myValue ? this.myValue : 'default';
    return (
      <div>
        Hello, World! I'm {this.getText()} - {myValue}
      </div>
    );
  }
}
