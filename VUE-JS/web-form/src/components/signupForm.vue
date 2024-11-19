<template >
    <div>
        <form>
            <label>Email:</label>
            <input type="email" required v-model="email">

            <label>Password:</label>
            <input type="password" required v-model="password">

            <label>Role:</label>
            <select v-model="role">
                <option valu="Frontend-developer">Frontend-developer</option>
                <option value="Backend-developer">Backend-developer</option>
                <option value="Full-stack-developer">Full-stack-developer</option>
                <option value="Designer">Designer</option>
            </select>

            <div class="terms">
                <input type="checkbox" required v-model="terms">
                I agree to the <a href="#" target="_blank">terms and conditions</a>
            </div>
        </form>
        <p>Email:{{email}}</p>
        <p>Password: {{password}}</p>
        <p>Role: {{role}}</p>
        
    </div>
</template>
<script>
export default {
    data (){
        return{
            email: '',
            password: '',
            role: '',
            terms: false,
        }
    },
    
}
</script>
<style>
form{
    width: 420px;
    margin:30px auto;
    text-align: left;
    background: white;
    padding: 40px;
    border-radius: 10px;

}
label{
    display: inline-block;
    color: #aaa;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;

}
input, select{
    display:block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
    
</style>