<template>
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

            <label>Skills:</label>
            <input type="text"  v-model="tempSkill" placeholder="e.g. JavaScript, React, Vue.js" @keyup="addSkill">
            <div v-for="skill in skills" :key="skill" class="pill">
                {{ skill }}
            </div>

            <div class="terms">
                <input type="checkbox" required v-model="terms">
                <label>
                    I agree to the <a href="#" target="_blank">terms and conditions</a>
                </label>
            </div>

            <!-- <div>
                <input type="checkbox" value="chege" v-model="names">
                <label>Chege</label>
            </div>
            <div>
                <input type="checkbox" value="phil" v-model="names">
                <label>Phil</label>
            </div>
            <div>
                <input type="checkbox" value="joy" v-model="names">
                <label>Joy</label>
            </div> -->
        </form>
        <p>Email:{{ email }}</p>
        <p>Password: {{ password }}</p>
        <p>Role: {{ role }}</p>
        <p>Terms and conditions: {{ terms }}</p>
        <!-- <p>Names: {{ names }}</p> -->

    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            // names: [],
            tempSkill: '',
            skills: [],
        }
    },
    methods:{
        addSkill(e){
            if(e.key === ',' && this.tempSkill){
                this.skills.push(this.tempSkill);
                this.tempSkill = '';
            }
        },
    },

}
</script>
<style>
form {
    width: 420px;
    margin: 30px auto;
    text-align: left;
    background: white;
    padding: 40px;
    border-radius: 10px;

}

label {
    display: inline-block;
    color: #aaa;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;

}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
</style>