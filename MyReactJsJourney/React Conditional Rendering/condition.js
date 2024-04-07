// in react conditional rendering we use if else statement to render the component based on the condition.
// In the below example we are rendering the component based on the condition.
// If the condition is true then we are rendering the component otherwise we are rendering null.

import React from 'react';
import { ReactDOM }from 'react';

function MissedGoal() {
  return <h1>You missed the goal</h1>;
}
function MadeGoal() {
  return <h1>Goal!!</h1>;
}
function IsGoal(props){
    const goal = props.goal;
    if(IsGoal){
        return <MadeGoal />;
    }
    else{
        return <MissedGoal />;
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);//THIS WILL RENDER MissedGoal COMPONENT
// root.render(<Goal isGoal={true} />);//THIS WILL RENDER MadeGoal COMPONENT