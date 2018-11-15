/*
  ---------------------------------------
  -             QUESTION 1              -
  ---------------------------------------

  Complete the following definitions so that 'DerivedModel' INHERITS 
  the 'BaseModel' prototype, and the code below runs without error.

*/

class BaseModel {
  
  testFunction () {
    console.log('Test function was successfuly');
  }

}
  
function DerivedModel () {
  
}

//
//  -------  ANSWER HERE ONLY  -------





  
// -----------------------------------
//
  
let test = new DerivedModel();

test.testFunction(); // This should print 'Test function was successful.
   
   
   




  
// -----------------------------------------------------------------------------------------
  




  
  
/*
  ---------------------------------------
  -             QUESTION 2              -
  ---------------------------------------

  Write some code in the provided section below, so that both
  'b1.getNumber()' and 'b2.getNumber()' return the number '2';

*/
   
   
class BaseModel {
  getNumber () {
    return 1;
  }
};
  
let b1 = new BaseModel();
  
//
//  -------  ANSWER HERE ONLY  -------







// -----------------------------------
//
  
let b2 = new BaseModel();

b1.getNumber(); // This should return 2
b2.getNumber(); // This should return 2
   
   
   





// -----------------------------------------------------------------------------------------




   
   
   
/*
  ---------------------------------------
  -             QUESTION 3              -
  ---------------------------------------

  Fill in the BaseModel class so that the the code below does
  not throw an error, and returns 30.

*/
  
  
class BaseModel {
  
  //
  //  -------  ANSWER HERE ONLY  -------
  





  
  // -----------------------------------
  //

  getNumber () {
    if (isNaN(this.number)) {
      throw new Error('Not a number');
    }

    return this.number;
  }
}

let test = new BaseModel(30);
test.getNumber(); // This should return 30 and not throw an error.




  
  

// -----------------------------------------------------------------------------------------




  
  
  
  
/*
  ---------------------------------------
  -             QUESTION 4              -
  ---------------------------------------

  Write a constructor for the 'DerivedModel' class so that
  the last line prints 'Data is Hello and 100'

*/
  
class BaseModel {

  constructor (text) {
    this.text = text;
  }
  
  printData () {
    console.log(this);
    console.log(`Data is ${this.text} and ${this.number}`);
  }

}

class DerivedModel extends BaseModel {

  //
  //  -------  ANSWER HERE ONLY  -------
  







  
  // -----------------------------------
  //

}

let a = new DerivedModel('Hello', 100);

a.printData(); // This should print 'Data is Hello and 100'
  
  




  

// -----------------------------------------------------------------------------------------
  
  






/* 
  
  ---------------------------------------
  -           QUESTION 5                -
  ---------------------------------------

  How could you modify the following code in the
  constructor to produce the correct output?

*/



class Model {

  constructor (value) {
    this.data = {
      value: value
    }
    
    //
    //  -------  ANSWER HERE ONLY  -------





    
    // -----------------------------------
    //
  }

  getValue () {
    return console.log(this.data.value);
  }

}

// Do not change below this line.

let a = new Model(100);

setTimeout(a.getValue, 1000); // Should print '100' after 1 second.
  
  
  



  
  
// -----------------------------------------------------------------------------------------





  
  
  
/* 
  
  ---------------------------------------
  -           QUESTION 6                -
  ---------------------------------------

  Run the 'test' function of the 'Model' in 
  the context of 'k' so that the return value
  is 'Hello';

*/

function Model () {};

Model.prototype = {
  test: function () {
    return this.data;
  }
}

let k = {
  data: 'Hello'
};


//
// -------  ANSWER HERE ONLY  -------










  
  
  
  
// -----------------------------------------------------------------------------------------
  




  


/* 
  
  ---------------------------------------
  -           QUESTION 7                -
  ---------------------------------------

  How could you complete the printValues function
  so that each call prints a single line with all
  values in it?

  The following is NOT allowed for this question

  - Use of any loops (for, while, do-while etc..)
  - Use of any looping functions (forEach, map, reduce, filter, sort)
  - Any change the the printValues function definition
    i.e `printValues (a)`
  - Any hardcoding of values which exist in the printValues calls.

*/

function printValues () {

  //
  // -------  ANSWER HERE ONLY  -------
  









  // -----------------------------------
  //

}


printValues(1,2,3) // Should print 1 2 3 in a single line
printValues(1,2,3,4,5); // Should print 1 2 3 4 5 in a single line
printValues(1,2); // Should print 1 2 in a single line



  
  
  

// -----------------------------------------------------------------------------------------

  
  
  
  
  
/* 

  ---------------------------------------
  -           QUESTION 8               -
  ---------------------------------------

  Write the `onClick` function for the root component
  so that the 'ClickerDisplay' component updates each time
  the 'Clicker' component is clicked.

*/



class RootComponent extends React.Component {
  
  //
  // -------  ANSWER HERE ONLY  --------
  








  // -----------------------------------
  //

  
  render () {
    return (
      <div className="root">
        <ClickerDisplay value={this.state.times_clicked} />
        <Clicker onClick={() => this.onClick()} />
      </div>
    )
  }
    
}

ReactDOM.render(
  <RootComponent />,
  document.getElementById('some-id')
);

  
  
  
  

// -----------------------------------------------------------------------------------------



  
  
  
  
/* 
  
  ---------------------------------------
  -           QUESTION 9                -
  ---------------------------------------
  
  Write the render function for the 'RootComponent'
  so that a ChildComponent element is rendered
  correctly for each item in the child_values
  prop. You're free to use any wrapping HTML
  within the render function if you would like to.

*/

class RootComponent extends React.Component {

  constructor (props) {
    super(props);
  }

  //
  // -------  ANSWER HERE ONLY  --------
  









  // -----------------------------------
  //

}

class ChildComponent extends React.Component {

  render () {
    return (
      <div className="child">
        <span className="name">
          {this.props.name}
        </span>
        <span className="value">
          {this.props.value}
        </span>
      </div>
    )
  }

}

let child_values = [
  {
    name: "James",
    value: "1"
  },
  {
    name: "test-2",
    value: "2"
  }
];

ReactDOM.render(
  <RootComponent childValues={child_values} />,
  document.getElementById('some-id')
);
  
  
  
  
  

// -----------------------------------------------------------------------------------------
  
  
  
  
  
  
  /* 
    
    ---------------------------------------
    -           QUESTION 10                -
    ---------------------------------------
    
    Write the `onChildClick` function, so that the
    when the child component is clicked, the root component
    state value `number` is added to the value `10`
    which is passed into the onClick prop of the child
    component, and logged to the console.
  
  */
  
  class RootComponent extends React.Component {
    
    constructor (props) {
      super(props);
  
      this.state = {
        number: 10
      }
    }
    
    //
    // -------  ANSWER HERE ONLY  --------
    







  
    // -----------------------------------
    //
    
    render () {
      return (
        <div className="root">
          <ChildComponent onClick={this.onChildClick()} />
        </div>
      )
    }
    
  }
    
  class ChildComponent extends React.Component {
  
    render () {
      return (
        <div onClick={() => this.props.onClick(10)} className="child">
          {'Child Component'}
        </div>
      )
    }
  
  }
  
  ReactDOM.render(
    <RootComponent />,
    document.getElementById('some-id')
  );
    
  
  
  
  

// -----------------------------------------------------------------------------------------





  
  
/* 

  ---------------------------------------
  -           QUESTION 11               -
  ---------------------------------------

  Create a STATELESS component `ChildComponent` that 
  RETURNS IMPLICITLY so that the output of the React 
  rendering is as follows

  <div id="some-id">
    <div class="root">
      <div class="child">
        <div class="name-display">
          Test Name
        </div>
        <div class="value-display low">
          4
        </div>
      </div>
      <div class="child">
        <div class="value-display high">
          13
        </div>
      </div>
    </div>
  </div>


  Note:

  The child component should only show a `name-display` div
  if the name prop is present.

  The child component should choose an additional class for 
  the `value-display` div, based on whether the `value` prop 
  is 2 or more digits (high) or 1 digit (low). Assume all 
  values will be positive integers.

*/



class RootComponent extends React.Component {
  
  render () {
    return (
      <div className="root">
        <ChildComponent name="Test Name" value={4} />
        <ChildComponent value={13} />
      </div>
    )
  }
  
}

//
// -------  ANSWER HERE ONLY  --------
















// -----------------------------------
//


ReactDOM.render(
  <RootComponent />,
  document.getElementById('some-id')
);


  
  
  
  
  
  
