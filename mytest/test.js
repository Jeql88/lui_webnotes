const {createClient} = supabase

const supabase_url = "https://wwdaochdkrdaumjuwdxc.supabase.co"
const supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3ZGFvY2hka3JkYXVtanV3ZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMTM2ODgsImV4cCI6MjAyNzY4OTY4OH0.jmeSsVO6kG3F5Uthc4JfjzCxpjHXAzzZyvW-3J9cMLo"

const connection = createClient(supabase_url, supabase_key) 
console.log(connection)
// setTimeout(function(){
//     console.log("2")
// },5000)
// setTimeout(function(){
//     console.log(4)},5000)
async function buttonPress(){
    const f_name = document.querySelector(".fname").value
    console.log(f_name)
    const {error} = await connection.from('Customer').insert({last_name:"Choi",first_name:f_name, password:"12345", email:"janschoi@gmail.com"}).select()
    console.log(error)
}
// console.log(1)
// console.log(3)

