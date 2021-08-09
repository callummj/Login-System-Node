export default function Form(props){

    const handleSubmit = () =>{
        alert("submitted form");
    }

    return (
        <form id = {"login-form"} onSubmit = {handleSubmit} action="/conn" method="POST" >
            <label>
                Name:
                <input type="text" name="name" />
            </label>


            <label>
                Password:
                <input type="password" name="password" />
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
}