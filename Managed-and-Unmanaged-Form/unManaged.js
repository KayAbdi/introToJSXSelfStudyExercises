// This is the un-managed version of the form

function SignUp() {
    function handle(){
        console.log(document.getElementById('year').value);
        console.log(document.getElementById('name').value);
        console.log(document.getElementById('email').value);
        console.log(document.getElementById('password').value);
        console.log(document.getElementById('checkbox').checked);      
    }
    return (
        <>
        <select id="year">
            <option>Freshman</option>
            <option>Sophmore</option>
            <option>Junior</option>
            <option>Senior</option>    
        </select>
        <div>Name</div>
        <input id="name" type="text"/>
        <div>Email</div>
        <input id="email" type="text"/>
        <div>Password</div>
        <input id="password" type="text"/>  
        <div><input id="checkbox" type="checkbox"/> Rememeber me</div>
        <button onClick={handle}>Submit</button>    
        </>
    )
};

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
);