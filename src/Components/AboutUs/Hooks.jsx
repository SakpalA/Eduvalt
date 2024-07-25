import React from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state < 325 ? state + 1 : state; // Increment count if it's less than 3
    case 'INCREMENT_TWO':
      return state < 200 ? state + 1 : state;
    case 'INCREMENT_THREE': 
    return state < 11 ? state + 1 : state;
    case 'INCREMENT_FOUR':
      return state < 399 ? state + 1 : state;
    case 'INCREMENT_FIVE':
      return state < 312 ? state + 1 : state;
    case 'INCREMENT_SIX' :
      return state < 590 ? state + 1 : state;
    default:
      return state;
  }
};

export const Hooks = () => {
  const [count1, dispatch1] = React.useReducer(reducer, 175); // Initialize count to 0
  const [count2, dispatch2] = React.useReducer(reducer, 100); // Initialize count to 0
  const [count3, dispatch3] = React.useReducer(reducer, 0);
  const [count4, dispatch4] = React.useReducer(reducer, 245);
  const [count5, dispatch5] = React.useReducer(reducer, 162);
  const [count6, dispatch6] = React.useReducer(reducer, 440);



  // Automatically start counting when the component mounts
  React.useEffect(() => {
    const interval1 = setInterval(() => {
      dispatch1({ type: 'INCREMENT' });
    }, 10); // Adjust the interval as needed
    // Stop counting when count reaches 3
    if (count1 === 325) {
      clearInterval(interval1);
    }
    // Clean up the interval on component unmount
    return () => clearInterval(interval1);
  }, [count1]); 

  
  React.useEffect(() => {
    const interval2 = setInterval(() => {
      dispatch2({ type: 'INCREMENT_TWO' });
    }, 10); 
    if (count2 === 200) {
      clearInterval(interval2);
    }
    
    return () => clearInterval(interval2);
  }, [count2]); 


  React.useEffect(() => {
    const interval3 = setInterval(() => {
      dispatch3({ type: 'INCREMENT_THREE'});
    },100.5);
    if (count3 === 11) {
      clearInterval(interval3);
    }

    return() => clearInterval(interval3); 
  }, [count3]);


  React.useEffect(() => {
    const interval4 = setInterval(() => {
      dispatch4({ type: 'INCREMENT_FOUR'});
    },10);
    if (count4 === 399) {
      clearInterval(interval4);
    }

    return() => clearInterval(interval4); 
  }, [count4]);


  React.useEffect(() => {
    const interval5 = setInterval(() => {
        dispatch5({type: 'INCREMENT_FIVE'});
    },10);
    if (count5 === 312) {
      clearInterval(interval5);
    }
    return() => clearInterval(interval5);
  },[count5]);


  React.useEffect(() => {
    const interval6 = setInterval(() => {
        dispatch6({type: 'INCREMENT_SIX'});
    },10);
    if (count6 === 590) {
      clearInterval(interval6);
    }
    return() => clearInterval(interval6);
  },[count6]);


  return {
    getCount1: () => count1,
    getCount2: () => count2,
    getCount3: () => count3,
    getCount4: () => count4,
    getCount5: () => count5,
    getCount6: () => count6
  }
  
}

